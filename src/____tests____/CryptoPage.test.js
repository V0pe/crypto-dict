import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Details from '../Components/Pages/Crypto';
import store from '../Redux/Configurestore';

it('renders correctly', () => {
  const tree = renderer
    .create(<Router><Provider store={store}><Details /></Provider></Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});