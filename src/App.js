import './App.css';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Homepage from './Components/Pages/Homepage';
import { FetchCryptos } from './Redux/AllCrypto';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchCryptos());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
      </Routes>

    </div>
  );
}

export default App;
