import React from 'react';
import logo from './logo.svg';
import './App.css';
import JobPortal from './JobPortal';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
     


      {/* <header className="App-header"> */}
        <JobPortal />

    </div>
  );
}

export default App;
