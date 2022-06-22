import { configureStore } from '@reduxjs/toolkit';
import cryptosReducer from './AllCrypto';
import detailsReducer from './Detail';

const store = configureStore({
  reducer: {
    cryptos: cryptosReducer,
    details: detailsReducer,
  },
});

export default store;
