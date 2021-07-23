import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import TDashApp from './TDashboard/TDashApp';
import './App.css';


function App() {
  return (
    <Router>
       <div className="App">
         <TDashApp />
       </div>
    </Router>
  );
}

export default App;

