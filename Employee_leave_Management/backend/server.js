const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const mysql = require("mysql2");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();
const port = 5000;

// Middleware
app.use(cors()); // To allow requests from React frontend (cross-origin)
app.use(bodyParser.json()); // To parse JSON data

// Set up MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

// API Route to register a new employee
app.post("/api/employees", async (req, res) => {
  const {
    name,
    department,
    email,
    phone,
    password,
    date_of_birth,
    address,
    salary,
  } = req.body;

  try {
    // Hash the password before saving to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // SQL query to insert the employee data into the database
    const insertQuery = `
      INSERT INTO Employee (name, department, email, phone, password, date_of_birth, address, salary)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(
      insertQuery,
      [
        name,
        department,
        email,
        phone,
        hashedPassword,
        date_of_birth,
        address,
        salary,
      ],
      (err, results) => {
        if (err) {
          console.error("Error inserting employee:", err);
          return res
            .status(500)
            .json({ message: "Error registering employee" });
        }
        res.status(200).json({ message: "Employee registered successfully!" });
      }
    );
  } catch (error) {
    console.error("Error hashing the password:", error);
    res.status(500).json({ message: "Error registering employee" });
  }
});

//delete operation of employee
app.delete("/delete", async (req, res) => {
  const { userId } = req.params.id;

  if (!userId) {
    return res
      .status(400)
      .json({ success: false, message: "User ID is required." });
  }

  try {
    const result = await db.query("DELETE FROM employee WHERE id = ?", [
      userId,
    ]);
    if (result.affectedRows === 0) {
      return res
        .status(404)
        .json({ success: false, message: "User not found." });
    }

    res
      .status(200)
      .json({ success: true, message: "User deleted successfully." });
  } catch (err) {
    console.error("Error deleting user:", err);
    res.status(500).json({ success: false, message: "Error deleting user." });
  }
});

// Route to fetch employees
app.get("/View", (req, res) => {
  const query = 'SELECT * FROM `Employee` WHERE role != "Admin";'; // Assuming 'employees' is your table name
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching data: ", err);
      res.status(500).send("Error fetching data from database");
      return;
    }
    res.json(results); // Send the employee data as a JSON response
  });
});

// Login handler
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const query = "SELECT * FROM Employee WHERE email = ?";
    db.query(query, [email], async (err, result) => {
      if (err) {
        console.error("Database error:", err);
        return res.status(500).json({ message: "Server error" });
      }

      if (result.length === 0) {
        return res.status(400).json({ message: "Invalid credentials" });
      }

      const user = result[0];

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
      }

      // Generate the token
      const token = jwt.sign(
        { id: user.id, email: user.email, role: user.role },
        process.env.JWT_SECRET_KEY,
        { expiresIn: "1h" }
      );

      // Send the response with user data and token
      res.status(200).json({
        id: user.id,
        name: user.name,
        role: user.role, // Ensure role is part of the response
        token: token, // Ensure token is sent in the response
      });
    });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Server error" });
  }
});

///////////////////////////////
// API Route to submit a leave request
app.post("/api/leaveReq", async (req, res) => {
  const { request, startdate, enddate, leavetype, emp_id } = req.body;

  try {
    const insertQuery = `
      INSERT INTO leave_request (request, startdate, enddate, leave_type, empid, status)
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    db.query(
      insertQuery,
      [request, startdate, enddate, leavetype, emp_id, "Pending"],
      (err, results) => {
        if (err) {
          console.error("Error inserting leave request:", err);
          return res
            .status(500)
            .json({ message: "Error submitting leave request" });
        }
        res.status(200).json({ message: "Leave request added successfully" });
      }
    );
  } catch (error) {
    console.error("Error handling the leave request:", error);
    res.status(500).json({ message: "Error submitting leave request" });
  }
});

///////////////////////////////////////
app.get("/api/viewLeaveRequests", (req, res) => {
  const query =
    "SELECT lr.id AS leave_request_id, lr.request, lr.startdate, lr.enddate, lr.leave_type, e.id AS employee_id, e.name AS employee_name FROM leave_request lr JOIN Employee e ON lr.empid = e.id where status = 'Pending' ORDER BY lr.id DESC";

  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching leave requests: ", err);
      return res
        .status(500)
        .send("Error fetching leave requests from the database");
    }
    res.json(results); // Send the leave request data along with employee details as a JSON response
  });
});

/////////////////////////////////////////
app.get("/api/checkLeaveRequest", (req, res) => {
  const query =
    "SELECT lr.id AS leave_request_id, lr.request, lr.startdate, lr.enddate, lr.leave_type, e.id AS employee_id, e.name AS employee_name, lr.status FROM leave_request lr JOIN Employee e ON lr.empid = e.id WHERE lr.status IN ('approved', 'rejected') ORDER BY lr.id DESC";

  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching leave requests: ", err);
      return res
        .status(500)
        .send("Error fetching leave requests from the database");
    }
    res.json(results); // Send the leave request data along with employee details as a JSON response
  });
});




// update leave status to 'approved' or 'rejected'
app.post("/api/checkLeaveRequest", (req, res) => {
  const { leave_request_id, status } = req.body;

  if (!leave_request_id || !status) {
    console.error("Missing leave_request_id or status");
    return res
      .status(400)
      .json({ message: "Leave request ID and status are required." });
  }

  const updateQuery = `
    UPDATE leave_request
    SET status = ?
    WHERE id = ?
  `;

  db.query(updateQuery, [status, leave_request_id], (err, results) => {
    if (err) {
      console.error("Error updating leave request status:", err);
      return res.status(500).json({ message: "Error processing request." });
    }

    console.log("Leave request updated:", results);
    res
      .status(200)
      .json({
        message: `Leave request ${
          status === "approved" ? "approved" : "rejected"
        } successfully.`,
      });
  });
});

////////////////view single leave request for employee
// Route to fetch leave requests for a specific employee
app.get("/api/viewLeaveStatus/:empId", (req, res) => {
  const empId = req.params.empId;

  const query = `
    SELECT lr.id AS leave_request_id, lr.request, lr.startdate, lr.enddate, lr.leave_type, lr.status
    FROM leave_request lr
    WHERE lr.empid = ? ORDER BY lr.id DESC`;

  db.query(query, [empId], (err, results) => {
    if (err) {
      console.error("Error fetching leave requests for employee:", err);
      return res.status(500).send("Error fetching leave requests");
    }
    res.json(results); // Send the leave request data with status for the specific employee
  });
});

//delete operation of employee
app.delete("/delete/:id", (req, res) => {
  const employeeId = req.params.id;

  const query = "DELETE FROM employee WHERE id = ?";
  db.query(query, [employeeId], (err, results) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Error deleting employee", error: err });
    }
    res.status(200).json({ message: "Employee deleted successfully" });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
