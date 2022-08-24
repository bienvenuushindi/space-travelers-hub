import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getJoinedMissions } from '../Redux/Mission/Actions/missionAction';

const Profile = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);
  useEffect(() => {
    dispatch(getJoinedMissions());
  }, []);

  const list = missions.map((mission) => (<li key={mission.mission_id} className="list-group-item">{mission.mission_name}</li>));
  return (
    <div>
      <div className="col-md-6 card ml-auto">
        <h2>My Joined Missions </h2>
        <ul className="list-group list-group-flush">
          {list}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
