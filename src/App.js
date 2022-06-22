import './App.css';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Homepage from './Components/Pages/Homepage';
import { FetchCryptos, selectCryptos } from './Redux/AllCrypto';
import Crypto from './Components/Pages/Crypto';

function App() {
  const dispatch = useDispatch();
  const url = '/';

  const cryptos = useSelector(selectCryptos);

  useEffect(() => {
    dispatch(FetchCryptos());
  }, [dispatch]);

  const routes = cryptos.map((coin) => (
    <Route key={coin.id} path={`${url}${coin.id}`} element={<Crypto />} />
  ));

  return (
    <div className="body-container">
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        { routes }
      </Routes>

    </div>
  );
}

export default App;
