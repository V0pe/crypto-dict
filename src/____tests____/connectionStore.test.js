import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import Crypto from '../Components/Pages/Crypto';

const mockStore = configureStore();

describe('My Connected React-Redux Component', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      myState: [{ id: 'BTC', name: 'BITCOIN', price: 777722 }],
    });

    component = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route element={<Crypto />} />
          </Routes>
        </BrowserRouter>
      </Provider>,
    );
  });
  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
