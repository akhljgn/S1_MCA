import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./req_status.css";

function ViewLeaveStatus() {
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user || !user.id) {
      toast.error("No employee ID found! Please log in.");
      return;
    }

    const id = user.id;

    // Fetch leave requests with id
    const fetchLeaveRequests = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/viewLeaveStatus/${id}`
        );
        setLeaveRequests(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        toast.error("Failed to fetch your leave requests!");
        console.error("Error fetching leave requests:", error);
      }
    };

    fetchLeaveRequests();
  }, []); // Empty dependency means it runs only once on component mount

  // Function to format the date to dd/mm/yyyy hh:mm:ss
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    };
    return date.toLocaleString("en-GB", options); // 'en-GB' gives dd/mm/yyyy format
  };

  return (
    <div className="container3">
      <h2 className="text-center my-4">Your Leave Requests</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <table className="table table-bordered table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Leave Type</th>
              <th>Request</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Status</th> {/* Show status column */}
            </tr>
          </thead>
          <tbody>
            {leaveRequests.length > 0 ? (
              leaveRequests.map((leaveRequest, index) => (
                <tr key={leaveRequest.leave_request_id}>
                  <td>{index + 1}</td> {/* Display index number (1-based) */}
                  <td>{leaveRequest.leave_type}</td>
                  <td>{leaveRequest.request}</td>
                  <td>{formatDate(leaveRequest.startdate)}</td>
                  <td>{formatDate(leaveRequest.enddate)}</td>
                  {/* Conditionally apply class based on the status */}
                  <td
                    className={
                      leaveRequest.status === "Pending"
                        ? "Pending"
                        : leaveRequest.status === "approved"
                        ? "approved"
                        : leaveRequest.status === "rejected"
                        ? "rejected"
                        : ""
                    }
                  >
                    {leaveRequest.status}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  No leave requests found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
      {/* ToastContainer for notifications */}
      <ToastContainer />
    </div>
  );
}

export default ViewLeaveStatus;
