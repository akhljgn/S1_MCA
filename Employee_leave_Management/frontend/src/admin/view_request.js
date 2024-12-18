import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../employee/emp_list.css";

function ViewLeaveRequests() {
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch leave requests from the backend
  useEffect(() => {
    const fetchLeaveRequests = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/viewLeaveRequests"
        );
        setLeaveRequests(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        toast.error("Failed to fetch leave requests!");
        console.error("Error fetching leave requests:", error);
      }
    };

    fetchLeaveRequests();
  }, []);

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

  //   // Function to handle the approve/reject logic
  //   const handleAction = async (leaveRequestId, status) => {
  //     try {
  //       const response = await axios.post('http://localhost:5000/api/checkLeaveRequest', {
  //         leave_request_id: leaveRequestId,
  //         status: status,
  //       });

  //       toast.success(`Leave request ${status === 'approved' ? 'approved' : 'rejected'} successfully!`);

  //       // Remove the request from the current table (in-memory)
  //       setLeaveRequests(leaveRequests.filter((request) => request.leave_request_id !== leaveRequestId));
  //     } catch (error) {
  //       toast.error('Error processing the leave request!');
  //       console.error('Error in handleAction:', error);
  //     }
  //   };
  //without deleting the data from table
  const handleAction = async (leaveRequestId, status) => {
    try {
      console.log("Sending data:", {
        leave_request_id: leaveRequestId,
        status,
      }); // Log the data

      const response = await axios.post(
        "http://localhost:5000/api/checkLeaveRequest",
        {
          leave_request_id: leaveRequestId,
          status: status, // 'approved' or 'rejected'
        }
      );

      console.log("Response:", response.data); // Log the response to the console

      toast.success(
        `Leave request ${
          status === "approved" ? "approved" : "rejected"
        } successfully!`
      );

      // Remove the request from the current table (in-memory) after approval/rejection
      setLeaveRequests(
        leaveRequests.filter(
          (request) => request.leave_request_id !== leaveRequestId
        )
      );
    } catch (error) {
      console.error("Error in handleAction:", error);
      toast.error("Error processing the leave request!");
    }
  };

  return (
    <div className="container3">
      <h2 className="text-center my-4">Leave Requests</h2>
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
              <th>Action</th>
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
                <td>
                  <div className="d-flex justify-content-start">
                    {/* Approve Button */}
                    <button
                      className="btn btn-success me-2"
                      onClick={() =>
                        handleAction(leaveRequest.leave_request_id, "approved")
                      }
                    >
                      Approve
                    </button>
                    {/* Reject Button */}
                    <button
                      className="btn btn-danger"
                      onClick={() =>
                        handleAction(leaveRequest.leave_request_id, "rejected")
                      }
                    >
                      Reject
                    </button>
                  </div>
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

export default ViewLeaveRequests;
