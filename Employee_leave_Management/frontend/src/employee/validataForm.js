// src/utils/validateForm.js

export const validateForm = (formData) => {
  const {
    name,
    department,
    email,
    phone,
    password,
    confirmPassword,
    dateOfBirth,
    address,
    salary,
  } = formData;
  const validationErrors = {};

  // Name validation
  if (!name) {
    validationErrors.name = "Name is required";
  }

  // Department validation
  if (!department) {
    validationErrors.department = "Department is required";
  }

  // Email validation (basic format check)
  if (!email) {
    validationErrors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    validationErrors.email = "Email is invalid";
  }

  // Phone validation (simple number validation)
  if (!phone) {
    validationErrors.phone = "Phone is required";
  } else if (!/^\d{10}$/.test(phone)) {
    validationErrors.phone = "Phone number must be 10 digits";
  }

  // Password validation (simple check for length)
  if (!password) {
    validationErrors.password = "Password is required";
  } else if (password.length < 6) {
    validationErrors.password = "Password must be at least 6 characters long";
  }

  // Password validation (simple check for length)
  if (!confirmPassword) {
    validationErrors.confirmPassword = "confirmPassword is required";
  } else if (confirmPassword.length < 6) {
    validationErrors.confirmPassword =
      "confirmPassword must be at least 6 characters long";
  }

  // Salary validation
  if (!salary) {
    validationErrors.salary = "Salary is required";
  } else if (isNaN(salary) || salary <= 0) {
    validationErrors.salary = "Salary must be a positive number";
  }

  // Date of birth validation (simple check for presence)
  if (!dateOfBirth) {
    validationErrors.dateOfBirth = "Date of birth is required";
  }

  // Address validation
  if (!address) {
    validationErrors.address = "Address is required";
  }

  return validationErrors;
};
