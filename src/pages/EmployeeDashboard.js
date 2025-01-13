import React from 'react';
import { useLocation } from 'react-router-dom';

const EmployeeDashboard = () => {
  const location = useLocation();
  const { employee } = location.state || {};

  if (!employee) {
    return <div>No employee data available</div>;
  }

  return (
    <div className="employee-dashboard">
      <h2>Employee Dashboard</h2>
      <p><strong>Name:</strong> {employee.name}</p>
      <p><strong>Email:</strong> {employee.email}</p>
      <p><strong>Password:</strong> {employee.password}</p>
    </div>
  );
};

export default EmployeeDashboard;