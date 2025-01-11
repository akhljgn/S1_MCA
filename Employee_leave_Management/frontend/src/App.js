import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header.js";
import Emp_list from "./employee/emp_list.js";
import LeaveRequest from "./employee/leave_req.js";
import EmployeeRegistration from "./employee/registration.js";
import EmployeeLogin from "./employee/login.js";
import Footer from "./components/footer.js";
import Dashboard from "./components/dashboard.js";
import ViewLeaveRequests from "./admin/view_request.js";
import ViewLeaveStatus from "./employee/req_status.js";
import CheckedRequests from "./admin/checked_request.js";

// import AdminDashboard from "./admin";
// import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="content">
        <Router>
          <Header />
          <Routes>
            {/* <Route path="/" element={<EmployeeDashboard />} /> */}
            {<Route path="/list" element={<Emp_list />} />}
            <Route path="/" element={<Dashboard />} />
            {/* <Route path="/admin" element={<AdminDashboard />} /> */}
            <Route path="/signup" element={<EmployeeRegistration />} />
            <Route path="/leave-req" element={<LeaveRequest />} />
            <Route path="/view-employees" element={<Emp_list />} />
            <Route path="/signin" element={<EmployeeLogin />} />
            <Route path="/view-requests" element={<ViewLeaveRequests />} />
            <Route path="/view-req-status" element={<ViewLeaveStatus />} />
            <Route path="/checked-requests" element={<CheckedRequests />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </div>
  );
}

export default App;
