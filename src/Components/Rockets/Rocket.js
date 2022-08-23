import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RocketItem from './rocket-item';
import { fetchRockets, reserveRocket } from '../Redux/rocket/actions';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);
  useEffect(() => {
    if (rockets.length === 0) dispatch(fetchRockets());
  }, []);
  const rocketList = rockets.map((item) => (
    <RocketItem
      key={item.id}
      name={item.name}
      description={item.description}
      image={item.image[0]}
      reserve={() => dispatch(reserveRocket(item.id))}
    />
  ));
  return (
    <div className="container">
      {rocketList}
    </div>
  );
};

export default Rockets;
