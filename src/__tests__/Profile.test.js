import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../Components/Redux/spaceStore';
import Profile from '../Components/Profile/Profile';

it('Test Profile has My Joined Missions', () => {
  render(
    <Provider store={store}>
      <Router>
        <Profile />
      </Router>
    </Provider>,
  );
  const ele = screen.getByText(/My Joined Missions/i);
  expect(ele).toBeInTheDocument();
});
