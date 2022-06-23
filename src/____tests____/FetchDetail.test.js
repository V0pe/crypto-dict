import { fetchDetail } from "./____mocks____/FetchDetail";

beforeEach(() => {
  fetch.resetMocks();
});

it("the fetchdetail responce call released exactly", async () => {
  fetch.mockResponseOnce(JSON.stringify([{id:"BTC", name:"Bitcoin",price:20000}]));

  const data = await fetchDetail("BTC");

  expect(data.length).toEqual(1);
  expect(fetch).toHaveBeenCalledTimes(1);
});