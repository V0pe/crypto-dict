import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'https://rest.coinapi.io/v1/assets?apikey=';
const limit = '100';
const APIkey = 'D6D53E7E-A4A1-4ACC-B5BE-69600210DD7A';

export const FetchCryptos = createAsyncThunk(
  'cryptos/FetchCryptos',
  async () => {
    const res = await fetch(`${url + APIkey}&limit=${limit}`);
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
