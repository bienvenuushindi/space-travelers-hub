import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RocketItem from './rocket-item';
import { fetchRockets } from '../Redux/rocket/actions';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);
  useEffect(() => {
    if (rockets.length === 0) dispatch(fetchRockets());
  }, []);
  const rocketList = rockets.map((item) => (
    <RocketItem
      key={item.id}
      name={item.rocket_name}
      description={item.description}
      image={item.flickr_images[0]}
    />
  ));
  return (
    <div className="container">
      {rocketList}
    </div>
  );
};

export default Rockets;
