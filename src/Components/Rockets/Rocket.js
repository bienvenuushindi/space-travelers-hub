import React from 'react';
import RocketItem from './rocket-item';

const Rockets = () => {
  const list = [0, 1, 2, 3, 4];
  const rocketList = list.map((item) => <RocketItem key={item} />);
  return (
    <div className="container">
      {rocketList}
    </div>
  );
};

export default Rockets;
