import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import DashboardApp from './Dashboard/DashboardApp';
import './App.css';

function App() {
  return (
    <Router>
       <div className="App">
         <DashboardApp />
       </div>
    </Router>
  );
}

export default App;

