import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../employee/emp_list.css";

function CheckedRequests() {
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch approved or rejected leave requests from the backend
  useEffect(() => {
    const fetchCheckedRequests = async () => {
      try {
        const response = await axios.get(
            "http://localhost:5000/api/checkLeaveRequest"
        );
        setLeaveRequests(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        toast.error("Failed to fetch checked leave requests!");
        console.error("Error fetching leave requests:", error);
      }
    };

    fetchCheckedRequests();
  }, []);

  // Function to format the date to dd/mm/yyyy hh:mm:ss
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    };
    return date.toLocaleString("en-GB", options); // 'en-GB' gives dd/mm/yyyy format
  };

  return (
    <div className="container3">
      <h2 className="text-center my-4">Checked Leave Requests</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <table className="table table-bordered table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>Employee ID</th>
              <th>Employee Name</th>
              <th>Leave Type</th>
              <th>Request</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {leaveRequests.map((leaveRequest) => (
              <tr key={leaveRequest.leave_request_id}>
                <td>{leaveRequest.employee_id}</td>
                <td>{leaveRequest.employee_name}</td>
                <td>{leaveRequest.leave_type}</td>
                <td>{leaveRequest.request}</td>
                <td>{formatDate(leaveRequest.startdate)}</td>
                <td>{formatDate(leaveRequest.enddate)}</td>
                <td
                    className={
                    leaveRequest.status === "approved"
                        ? "approved"
                        : leaveRequest.status === "rejected"
                        ? "rejected"
                        : ""
                    }
                  >
                    {leaveRequest.status}
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* ToastContainer for notifications */}
      <ToastContainer />
    </div>
  );
}

export default CheckedRequests;
