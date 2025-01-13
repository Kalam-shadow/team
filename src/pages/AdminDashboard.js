import React, { useEffect, useState } from 'react';
import { getEmployees, addEmployee, updateEmployee, deleteEmployee } from '../services/EmployeeService';

const AdminDashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({ name: '', email: '', password: '' });
  const [editingEmployee, setEditingEmployee] = useState(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const employeesData = await getEmployees();
        setEmployees(employeesData);
      } catch (error) {
        console.error("Error fetching employees: ", error);
      }
    };

    fetchEmployees();
  }, []);

  const handleAddEmployee = async () => {
    try {
      await addEmployee(newEmployee);
      setNewEmployee({ name: '', email: '', password: '' });
      const employeesData = await getEmployees();
      setEmployees(employeesData);
    } catch (error) {
      console.error("Error adding employee: ", error);
    }
  };

  const handleUpdateEmployee = async (id) => {
    try {
      await updateEmployee(id, editingEmployee);
      setEditingEmployee(null);
      const employeesData = await getEmployees();
      setEmployees(employeesData);
    } catch (error) {
      console.error("Error updating employee: ", error);
    }
  };

  const handleDeleteEmployee = async (id) => {
    try {
      await deleteEmployee(id);
      const employeesData = await getEmployees();
      setEmployees(employeesData);
    } catch (error) {
      console.error("Error deleting employee: ", error);
    }
  };

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <div>
        <h3>Add Employee</h3>
        <input
          type="text"
          value={newEmployee.name}
          onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
          placeholder="Name"
        />
        <input
          type="email"
          value={newEmployee.email}
          onChange={(e) => setNewEmployee({ ...newEmployee, email: e.target.value })}
          placeholder="Email"
        />
        <input
          type="password"
          value={newEmployee.password}
          onChange={(e) => setNewEmployee({ ...newEmployee, password: e.target.value })}
          placeholder="Password"
        />
        <button onClick={handleAddEmployee}>Add Employee</button>
      </div>
      <div>
        <h3>Employees</h3>
        <ul>
          {employees.map(employee => (
            <li key={employee.id}>
              {employee.name} ({employee.email})
              <button onClick={() => setEditingEmployee(employee)}>Edit</button>
              <button onClick={() => handleDeleteEmployee(employee.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      {editingEmployee && (
        <div>
          <h3>Edit Employee</h3>
          <input
            type="text"
            value={editingEmployee.name}
            onChange={(e) => setEditingEmployee({ ...editingEmployee, name: e.target.value })}
            placeholder="Name"
          />
          <input
            type="email"
            value={editingEmployee.email}
            onChange={(e) => setEditingEmployee({ ...editingEmployee, email: e.target.value })}
            placeholder="Email"
          />
          <input
            type="password"
            value={editingEmployee.password}
            onChange={(e) => setEditingEmployee({ ...editingEmployee, password: e.target.value })}
            placeholder="Password"
          />
          <button onClick={() => handleUpdateEmployee(editingEmployee.id)}>Update Employee</button>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;