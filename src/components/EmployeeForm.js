import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore';

const EmployeeForm = ({ employee, onEmployeeUpdated }) => {
  const [name, setName] = useState(employee ? employee.name : '');
  const [email, setEmail] = useState(employee ? employee.email : '');
  const [position, setPosition] = useState(employee ? employee.position : '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (employee) {
      // Update existing employee
      const employeeRef = doc(db, 'employees', employee.id);
      await updateDoc(employeeRef, { name, email, position });
    } else {
      // Create new employee
      await addDoc(collection(db, 'employees'), { name, email, position });
    }
    onEmployeeUpdated();
    setName('');
    setEmail('');
    setPosition('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Position"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        required
      />
      <button type="submit">{employee ? 'Update' : 'Add'} Employee</button>
    </form>
  );
};

export default EmployeeForm;