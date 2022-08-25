import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../Components/Redux/spaceStore';
import Rockets from '../Components/Rockets/Rocket';

it('Test Mission component', () => {
  const tree = render(
    <Provider store={store}>
      <Router>
        <Rockets />
      </Router>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
