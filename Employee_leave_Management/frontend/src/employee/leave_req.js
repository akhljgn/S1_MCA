import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function LeaveRequest() {
  const [leaveType, setLeaveType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [request, setRequest] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Get employee ID from JWT token
  const getEmployeeIdFromToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = JSON.parse(atob(token.split(".")[1]));
      return decodedToken.id; // Ensure the JWT contains 'id' field
    }
    return null;
  };

  const emp_id = getEmployeeIdFromToken();

  const leaveTypes = [
    "Sick Leave",
    "Vacation",
    "Personal Leave",
    "Maternity Leave",
    "Paternity Leave",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    let validationErrors = {};
    if (!leaveType) validationErrors.leaveType = "Leave type is required";
    if (!startDate) validationErrors.startDate = "Start date is required";
    if (!endDate) validationErrors.endDate = "End date is required";
    if (!request) validationErrors.request = "Request details are required";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Prepare data for submission
    const data = {
      request,
      startdate: startDate,
      enddate: endDate,
      leavetype: leaveType,
      emp_id: emp_id,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/leaveReq",
        data
      );
      toast.success(response.data.message); // Use toast for success message
      setLeaveType("");
      setStartDate("");
      setEndDate("");
      setRequest("");
      setErrors({});
    } catch (err) {
      toast.error("Error submitting leave request: " + err.message); // Use toast for error message
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th className="heading" colSpan={2}>
                Leave Request Form
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <label htmlFor="leaveType" className="form-label">
                  Leave Type
                </label>
              </td>
              <td>
                <select
                  id="leaveType"
                  className="form-control"
                  value={leaveType}
                  onChange={(e) => setLeaveType(e.target.value)}
                >
                  <option value="">Select Leave Type</option>
                  {leaveTypes.map((type, index) => (
                    <option key={index} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {errors.leaveType && (
                  <div className="text-danger">{errors.leaveType}</div>
                )}
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="startDate" className="form-label">
                  Start Date
                </label>
              </td>
              <td>
                <input
                  type="date"
                  id="startDate"
                  className="form-control"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
                {errors.startDate && (
                  <div className="text-danger">{errors.startDate}</div>
                )}
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="endDate" className="form-label">
                  End Date
                </label>
              </td>
              <td>
                <input
                  type="date"
                  id="endDate"
                  className="form-control"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
                {errors.endDate && (
                  <div className="text-danger">{errors.endDate}</div>
                )}
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="request" className="form-label">
                  Request
                </label>
              </td>
              <td>
                <textarea
                  id="request"
                  className="form-control"
                  value={request}
                  onChange={(e) => setRequest(e.target.value)}
                />
                {errors.request && (
                  <div className="text-danger">{errors.request}</div>
                )}
              </td>
            </tr>
          </tbody>
        </table>

        <div className="mb-3 text-center">
          <button type="submit" className="btn btn-primary">
            Submit Leave Request
          </button>
        </div>
      </form>

      <ToastContainer />
    </div>
  );
}

export default LeaveRequest;
