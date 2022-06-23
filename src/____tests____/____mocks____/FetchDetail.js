async function fetchDetail(assetId) {
    try {
      const result = await fetch(
        `https://rest.coinapi.io/v1/assets${assetId}?apikey=DB92A142-319F-4B04-A34A-68EFC8218AA7`
      );
      const data = await result.json();
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
    } catch (e) {
      return null;
    }
  }
  
  export { fetchDetail };