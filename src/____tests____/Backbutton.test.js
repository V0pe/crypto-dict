import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import BackButton from '../Components/Backbutton';
import store from '../Redux/Configurestore';

it('renders the snpashot correctly', () => {
  const tree = renderer
    .create(<Router><Provider store={store}><BackButton /></Provider></Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
