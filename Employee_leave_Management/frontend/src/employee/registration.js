import React, { useState } from "react";
import axios from "axios";
import { validateForm } from "./validataForm"; // Import validation function
import "./registration.css";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify"; // Import Toastify components
import "react-toastify/dist/ReactToastify.css";

// Import the custom CSS file
// import { useNavigate } from 'react-router-dom';

function EmployeeRegistration() {
  // State variables for form data and validation messages
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [address, setAddress] = useState("");
  const [salary, setSalary] = useState("");
  const navigate = useNavigate(); //for login
  const [message, setMessage] = useState(""); // Success/Error message
  const [errors, setErrors] = useState({}); // Validation errors

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare form data for validation
    const formData = {
      name,
      department,
      email,
      phone,
      password,
      confirmPassword,
      dateOfBirth,
      address,
      salary,
    };

    // Validate form using the validateForm function
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    // Check if passwords match manually here (additional check for confirmPassword)
    if (password !== confirmPassword) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: "Passwords do not match!",
      }));
      toast.error("Passwords do not match!");
      return;
    }

    // If there are validation errors, stop the form submission
    if (Object.keys(validationErrors).length > 0) {
      toast.error("Please fill in all required fields correctly!");
      return;
    }

    // Create employee data object
    const employeeData = {
      name,
      department,
      email,
      phone,
      password,
      date_of_birth: dateOfBirth,
      address,
      salary,
    };

    try {
      // Send POST request to the backend API
      const response = await axios.post(
        "http://localhost:5000/api/employees",
        employeeData
      );

      // If registration is successful
      toast.success("Employee registered successfully!");
      setTimeout(() => {
        navigate("/signin");
      }, 2000);
      setErrors({}); // Clear errors after successful registration
    } catch (error) {
      // Handle any errors from the backend
      if (error.response && error.response.data) {
        toast.error(
          error.response.data.message ||
            "Error registering employee. Please try again."
        );
      } else {
        toast.error("Network error. Please try again later.");
      }
      console.error("There was an error!", error);
    }
  };

  return (
    <div className="container">
      {/* <Link to="/list">User list</Link> */}
      <form onSubmit={handleSubmit}>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th className="heading" colSpan={2}>
                Employee Registration
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <label htmlFor="name" className="form-label">
                  Name
                </label>
              </td>
              <td>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && (
                  <div className="text-danger">{errors.name}</div>
                )}
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="department" className="form-label">
                  Department
                </label>
              </td>
              <td>
                <input
                  type="text"
                  id="department"
                  className="form-control"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                />
                {errors.department && (
                  <div className="text-danger">{errors.department}</div>
                )}
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="email" className="form-label">
                  Email
                </label>
              </td>
              <td>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <div className="text-danger">{errors.email}</div>
                )}
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="phone" className="form-label">
                  Phone
                </label>
              </td>
              <td>
                <input
                  type="text"
                  id="phone"
                  className="form-control"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                {errors.phone && (
                  <div className="text-danger">{errors.phone}</div>
                )}
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="password" className="form-label">
                  Password
                </label>
              </td>
              <td>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && (
                  <div className="text-danger">{errors.password}</div>
                )}
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm password
                </label>
              </td>
              <td>
                <input
                  type="password"
                  id="confirmPassword"
                  className="form-control"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {errors.confirmPassword && (
                  <div className="text-danger">{errors.confirmPassword}</div>
                )}
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="dateOfBirth" className="form-label">
                  Date of Birth
                </label>
              </td>
              <td>
                <input
                  type="date"
                  id="dateOfBirth"
                  className="form-control"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                />
                {errors.dateOfBirth && (
                  <div className="text-danger">{errors.dateOfBirth}</div>
                )}
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="address" className="form-label">
                  Address
                </label>
              </td>
              <td>
                <textarea
                  id="address"
                  className="form-control"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                {errors.address && (
                  <div className="text-danger">{errors.address}</div>
                )}
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="salary" className="form-label">
                  Salary
                </label>
              </td>
              <td>
                <input
                  type="number"
                  id="salary"
                  className="form-control"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                />
                {errors.salary && (
                  <div className="text-danger">{errors.salary}</div>
                )}
              </td>
            </tr>
          </tbody>
        </table>

        <div className="mb-3 text-center">
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </div>
      </form>
      <div className="text-center">
        <p>
          Already have an account? <Link to="/signin">Login here</Link>
        </p>
      </div>

      {/* ToastContainer for displaying toasts */}
      <ToastContainer />
    </div>
  );
}

export default EmployeeRegistration;
