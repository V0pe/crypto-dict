import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobeInfo from '../Components/Pages/Homepage';
import store from '../Redux/Configurestore';

it('renders correctly', () => {
  const tree = renderer
    .create(<Router><Provider store={store}><GlobeInfo /></Provider></Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
