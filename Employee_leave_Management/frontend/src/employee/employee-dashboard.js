import React from "react";
import "../components/dashboard.css";

const EmployeeDashboard = ({ user }) => {
  return (
    <div className="employee-dashboard">
      <h2>Welcome {user.name}</h2>
      <h3>Employee Dashboard</h3>
      <p>You are an employee. Your tasks and details will be here.</p>

      <div className="d-flex justify-content-around mt-4">
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Leave Request</h5>
            <p className="card-text">Submit a request for leave to Admin.</p>
            <a href="/leave-req" className="btn btn-primary">
              Request Leave
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">View Leave Requests</h5>
            <p className="card-text">
              View all your submitted leave requests and their status.
            </p>
            <a href="/view-req-status" className="btn btn-primary">
              View Leave Requests
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">View Profile</h5>
            <p className="card-text">
              View and edit your personal profile details.
            </p>
            <a href="/profile" className="btn btn-primary">
              View Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
