import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
import Homepage from './Components/Pages/Homepage';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
      </Routes>

    </div>
  );
}

export default App;
