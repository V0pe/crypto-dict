import { configureStore } from '@reduxjs/toolkit';
import cryptosReducer from './AllCrypto';

const store = configureStore({
  reducer: {
    cryptos: cryptosReducer,
  },
});

export default store;
