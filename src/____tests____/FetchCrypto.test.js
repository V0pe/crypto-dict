import fetchCrypto from './____mocks____/FetchCrypto';

beforeEach(() => {
  fetch.resetMocks();
});

it('the responce call released exact', async () => {
  fetch.mockResponseOnce(JSON.stringify([{ id: 'BTC', name: 'Bitcoin', price: 20000 }]));

  const data = await fetchCrypto('BTC');

  expect(data.length).toEqual(1);
  expect(fetch).toHaveBeenCalledTimes(1);
});
