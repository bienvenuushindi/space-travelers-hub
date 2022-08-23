import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReservedRockets } from '../Redux/rocket/actions';

const Profile = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);
  useEffect(() => {
    dispatch(getReservedRockets());
  }, []);

  const list = rockets.map((rocket) => (<li key={rocket.id} className="list-group-item">{rocket.name}</li>));
  return (
    <div>
      <div className="col-md-6 card ml-auto">
        <h2>My Reserved Rockets </h2>
        <ul className="list-group list-group-flush">
          {list}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
