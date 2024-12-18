import React from "react";
import "./admin-dashboard.css";

const AdminDashboard = ({ user }) => {
  return (
    <div className="admin-dashboard">
      <h2>Welcome {user.name}</h2>
      <h3>Admin Dashboard</h3>
      <p>
        You have admin privileges. Manage leave requests and employees here.
      </p>

      <div className="d-flex justify-content-around mt-4">
        {/* Card 1: View Leave Requests */}
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">View Leave Requests</h5>
            <p className="card-text">
              View and manage leave requests submitted by all employees.
            </p>
            <a href="/view-requests" className="btn btn-success">
              Manage Leave Requests
            </a>
          </div>
        </div>

        {/* Card 2: View All Employees */}
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">View All Employees</h5>
            <p className="card-text">
              View the details of all employees in the system.
            </p>
            <a href="/view-employees" className="btn btn-success">
              View Employees
            </a>
          </div>
        </div>

        {/* Card 3: View Checked Requests */}
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">View Checked Requests</h5>
            <p className="card-text">
              View all leave requests that have been processed.
            </p>
            <a href="/checked-requests" className="btn btn-success">
              View Checked Requests
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
