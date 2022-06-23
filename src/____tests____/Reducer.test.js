// import React from 'react';
// import { Provider } from 'react-redux';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { render, screen } from '@testing-library/react';
// import Homepage from '../Components/Pages/Homepage';
// import store from '../Redux/Configurestore';
// import cryptosReducer from '../Redux/AllCrypto';
// // import detailsReducer from '../Redux/Detail';

import { FetchCryptos } from "../Redux/AllCrypto";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([]),
  })
);

beforeEach(() => {
  fetch.mockClear();
});

it("total coins released", async () => {
  const cryptoArray = await FetchCryptos();
  const length = cryptoArray.length

  expect(length).toEqual(2);
  expect(fetch).toHaveBeenCalledTimes(1);
});


