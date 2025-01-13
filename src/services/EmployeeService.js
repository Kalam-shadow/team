import { getDocs, collection, addDoc, updateDoc, deleteDoc, doc, query, where } from 'firebase/firestore';
import { db } from '../firebase';

const employeeCollectionRef = collection(db, 'employees');

export const getEmployees = async () => {
  try {
    const data = await getDocs(employeeCollectionRef);
    return data.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching employees: ", error);
    throw error;
  }
};

export const addEmployee = async (employeeData) => {
  try {
    await addDoc(employeeCollectionRef, employeeData);
  } catch (error) {
    console.error("Error adding employee: ", error);
    throw error;
  }
};

export const updateEmployee = async (id, updatedData) => {
  try {
    const employeeDoc = doc(db, 'employees', id);
    await updateDoc(employeeDoc, updatedData);
  } catch (error) {
    console.error("Error updating employee: ", error);
    throw error;
  }
};

export const deleteEmployee = async (id) => {
  try {
    const employeeDoc = doc(db, 'employees', id);
    await deleteDoc(employeeDoc);
  } catch (error) {
    console.error("Error deleting employee: ", error);
    throw error;
  }
};

export const getEmployeeByEmailAndPassword = async (email, password) => {
  try {
    const employeeQuery = query(employeeCollectionRef, where('email', '==', email), where('password', '==', password));
    const employeeSnapshot = await getDocs(employeeQuery);
    if (!employeeSnapshot.empty) {
      return employeeSnapshot.docs[0].data();
    } else {
      throw new Error('Employee not found');
    }
  } catch (error) {
    console.error("Error fetching employee: ", error);
    throw error;
  }
};