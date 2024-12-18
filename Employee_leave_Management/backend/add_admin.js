require('dotenv').config(); // Load environment variables
const mysql = require('mysql2');
const bcrypt = require('bcryptjs'); // Import bcryptjs for password hashing
const readline = require('readline');

// Create a connection to the MySQL database using environment variables
const connection = mysql.createConnection({
  host: process.env.DB_HOST,      // 'localhost'
  user: process.env.DB_USER,      // 'root'
  password: process.env.DB_PASSWORD, // 'yourpassword'
  database: process.env.DB_NAME   // 'Employee'
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.message);
    process.exit(1); // Exit if connection fails
  }
  console.log('');
});

// Setup readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Prompt the user for admin details
const askQuestion = (query) => {
  return new Promise((resolve) => rl.question(query, resolve));
};

(async () => {
  try {
    // Prompt for name, email, password, and role
    const name = await askQuestion('Enter Admin Name: ');
    const email = await askQuestion('Enter Admin Email: ');
    const password = await askQuestion('Enter Admin Password: ');
    const role = await askQuestion('Enter Role (Admin): ');

    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

    // Insert the admin record into the Employee table
    const sql = 'INSERT INTO Employee (name, email, password, role) VALUES (?, ?, ?, ?)';
    connection.query(sql, [name, email, hashedPassword, role], (err, results) => {
      if (err) {
        console.error('Error inserting data:', err.message);
      } else {
        console.log('Admin record added successfully with ID:', results.insertId);
      }

      // Close the connection and readline interface
      rl.close();
      connection.end();
    });
  } catch (err) {
    console.error('An error occurred:', err.message);
    rl.close();
    connection.end();
  }
})();