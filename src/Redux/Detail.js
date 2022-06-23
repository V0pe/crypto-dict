import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const FetchDetails = createAsyncThunk(
  'details/FetchDetails',
  async (url) => {
    const res = await fetch(`https://rest.coinapi.io/v1/assets${url}?apikey=DB92A142-319F-4B04-A34A-68EFC8218AA7`);
    const data = await res.json();
    const coinArray = [];
    data.map((element) => {
      const coin = {
        id: element.asset_id,
        name: element.name,
        price: element.price_usd,
        volume_a: element.volume_1day_usd,
        source: 'CoinApi',
        volume_b: element.volume_1hrs_usd,
        volume_c: element.volume_1mth_usd,
      };
      coinArray.push(coin);
      return coinArray;
    });
    return coinArray;
  },
);

export const detailsSlice = createSlice({
  name: 'details',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchDetails.fulfilled, (state, action) => action.payload);
  },
});

export const selectDetails = (state) => state.details;
export default detailsSlice.reducer;
