import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../Components/Redux/spaceStore';
import Missions from '../Components/Mission/Mission';

it('Test Mission component', () => {
  const tree = render(
    <Provider store={store}>
      <Router>
        <Missions />
      </Router>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
