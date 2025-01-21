// Import necessary libraries
import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Employees from './pages/Employees';
import Chatbox from './pages/Chatbox';
import Home from './pages/Home';
import logo from './assets/company_logo.png'; // Import the logo

// Define the navigation bar
const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src={logo} alt="Company Logo" className="h-10 w-10 mr-4" />
        <h1 className="text-white font-bold text-xl">Company Name</h1>
      </div>
      <div className="flex space-x-4">
        <NavLink to="/" exact className="text-white" activeClassName="font-bold">Home</NavLink>
        <NavLink to="/employees" className="text-white" activeClassName="font-bold">Employees</NavLink>
        <NavLink to="/chatbox" className="text-white" activeClassName="font-bold">Chatbox</NavLink>
      </div>
    </nav>
  );
};

// Define the Home page with recent news section
const HomePage = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Recent News</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white shadow-md rounded p-4">
          <h3 className="text-xl font-bold mb-2">News Title 1</h3>
          <p className="text-gray-600">Brief description of the news article goes here.</p>
        </div>
        <div className="bg-white shadow-md rounded p-4">
          <h3 className="text-xl font-bold mb-2">News Title 2</h3>
          <p className="text-gray-600">Brief description of the news article goes here.</p>
        </div>
        <div className="bg-white shadow-md rounded p-4">
          <h3 className="text-xl font-bold mb-2">News Title 3</h3>
          <p className="text-gray-600">Brief description of the news article goes here.</p>
        </div>
      </div>
    </div>
  );
};

// App Component
const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto mt-8">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/employees" component={Employees} />
          <Route path="/chatbox" component={Chatbox} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;



