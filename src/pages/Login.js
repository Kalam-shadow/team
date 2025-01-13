import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getEmployeeByEmailAndPassword } from '../services/EmployeeService';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = async () => {
    try {
      // Check if the user is an admin
      if (email === 'rankholder007@gmail.com' && password === 'qwerty') {
        history.push('/admin-dashboard');
        return;
      }

      // Check if the user is an employee
      const employee = await getEmployeeByEmailAndPassword(email, password);
      if (employee) {
        history.push({
          pathname: '/employee-dashboard',
          state: { employee }
        });
      } else {
        alert('Invalid email or password');
      }
    } catch (error) {
      console.error('Error logging in: ', error);
      alert('Error logging in');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;