import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { FirebaseContextProvider } from './contexts/FirebaseContext';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import EmployeeDashboard from './pages/EmployeeDashboard';

function App() {
  return (
    <FirebaseContextProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/admin-dashboard" component={AdminDashboard} />
          <Route path="/employee-dashboard" component={EmployeeDashboard} />
        </Switch>
      </Router>
    </FirebaseContextProvider>
  );
}

export default App;