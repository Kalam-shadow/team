import React, { createContext, useContext } from 'react';

const FirebaseContext = createContext(null);

export const FirebaseContextProvider = ({ children }) => {
  const firebase = {}; // Initialize your Firebase instance here
  return (
    <FirebaseContext.Provider value={firebase}>
      {children}
    </FirebaseContext.Provider>
  );
};

export const useFirebase = () => useContext(FirebaseContext);