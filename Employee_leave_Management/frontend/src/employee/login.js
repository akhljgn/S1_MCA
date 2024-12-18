import React, { useState } from "react";
import axios from "axios";
import "./registration.css";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EmployeeLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { email, password };

    // Basic validation for empty fields
    if (!email || !password) {
      toast.error("Please fill in all fields!");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/login",
        formData
      );

      // Check the response data to ensure it has the correct properties
      console.log("Response from server:", response.data);

      // Save user details to local storage
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: response.data.name,
          role: response.data.role, // Ensure role is part of the response
          token: response.data.token, // Ensure token is saved correctly
          id: response.data.id,
        })
      );

      toast.success("Login successful!");

      // Store token separately as well, if needed
      localStorage.setItem("token", response.data.token);

      setTimeout(() => {
        navigate("/"); // Redirect after successful login
      }, 1500);
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(error.response.data.message || "Error logging in.");
      } else {
        toast.error("Network error. Please try again later.");
      }
    }
  };

  // const handleSubmit = async (e) => {
  //     e.preventDefault();

  //     const formData = { email, password };

  //     // Basic validation for empty fields
  //     if (!email || !password) {
  //         toast.error('Please fill in all fields!');
  //         return;
  //     }

  //     try {
  //         const response = await axios.post('http://localhost:5000/api/login', formData);

  //         // Save user details to local storage
  //         localStorage.setItem('user', JSON.stringify({
  //             name: response.data.name,
  //             role: response.data.role, // Assuming the role is part of the response
  //             token: response.data.token, // For authentication purposes (if using JWT)
  //         }));

  //         toast.success('Login successful!');

  //         localStorage.setItem('token', response.data.token);

  //         setTimeout(() => {
  //             navigate('/');//last update
  //           }, 3000);

  //         // Redirect or save token as needed
  //     } catch (error) {
  //         if (error.response && error.response.data) {
  //             toast.error(error.response.data.message || 'Error logging in.');
  //             console.log('Email:', email);
  //         } else {
  //             toast.error('Network error. Please try again later.');
  //         }
  //     }
  // };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Employee Login</h2>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
        {errors.form && <div className="text-danger mt-2">{errors.form}</div>}
      </form>
      {message && <div className="mt-3 alert alert-info">{message}</div>}
      <div className="mt-3">
        <p>
          Don't have an account?<Link to="/signup"> Register here</Link>
        </p>
      </div>
      {}
      <ToastContainer />
    </div>
  );
}

export default EmployeeLogin;
