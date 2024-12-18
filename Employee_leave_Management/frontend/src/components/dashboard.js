

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminDashboard from '../admin/admin-dashboard.js';
import EmployeeDashboard from '../employee/employee-dashboard.js';
import PublicDashboard from './public-dashboard.js';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    console.log('User data in localStorage:', userData);

    if (!userData) {
      setUser(null); // No user is logged in
    } else {
      setUser(JSON.parse(userData));
    }
  }, []);

  if (!user) {
    // Render PublicDashboard for logged-out users
    return <PublicDashboard />;
  }

  // Render dashboards based on user role
  if (user.role === 'Admin') {
    return <AdminDashboard user={user} />;
  } else if (user.role === 'Employee') {
    return <EmployeeDashboard user={user} />;
  }

//   // Default fallback if no role is assigned
//   return <div>No role assigned</div>;
};

export default Dashboard;