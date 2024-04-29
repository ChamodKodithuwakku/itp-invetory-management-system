import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import CreateDriver from './components/createDriver';// Make sure you have this component created
import UpdateForm from './components/subcomponents/updateForm';
import Update from './components/update';
import Report from './components/report';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/createDriver" element={<CreateDriver />} />
          <Route path="/updateDriver/:driverId" element={<Update/>} />
          <Route path="/report" element={<Report/>} />
      
        </Routes>
      </div>
    </Router>
  );
}

export default App;
