import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const assetId = 'BTC,ETH,USD,DOGE,LTC,VEN,XRP,TRC,LUX,BNB,PND,VGC,MEC,DASH,XLM,ZEC,DOT,SAFEMOON,EOS,SHIB,HAL,REV,EDRC,INDEX,SOL';

export const FetchCryptos = createAsyncThunk(
  'cryptos/FetchCryptos',
  async () => {
    const res = await fetch(`https://rest.coinapi.io/v1/assets/?apikey=DB92A142-319F-4B04-A34A-68EFC8218AA7&filter_asset_id=${assetId}`);
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
