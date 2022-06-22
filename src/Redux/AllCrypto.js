import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// const url = 'https://rest.coinapi.io/v1/assets/';
// const Asset_id = 'BTC';
// const APIkey = '';
const assetId = 'BTC,ETH,USD,DOGE,';

export const FetchCryptos = createAsyncThunk(
  'cryptos/FetchCryptos',
  async () => {
    const res = await fetch(`https://rest.coinapi.io/v1/assets/?apikey=D905757A-EF16-4536-B405-7B137D3E1D58&filter_asset_id=${assetId}`);
    const data = await res.json();
    const coinArray = [];
    data.map((element) => {
      const coin = {
        id: element.asset_id,
        name: element.name,
        price: element.price_usd,
      };
      coinArray.push(coin);
      return coinArray;
    });
    return coinArray;
  },
);

export const cryptosSlice = createSlice({
  name: 'cryptos',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchCryptos.fulfilled, (state, action) => action.payload);
  },
});

export const selectCryptos = (state) => state.cryptos;
export default cryptosSlice.reducer;
