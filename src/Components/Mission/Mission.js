import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MissionList from './missionList';
import { getMissions } from '../Redux/Mission/Actions/missionAction';

const Mission = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);
  useEffect(() => {
    if (missions.length === 0) dispatch(getMissions());
  }, []);
  const missionList = missions.map((item) => (
    <MissionList
      key={item.mission_id}
      mission_name={item.mission_name}
      description={item.description}
    />
  ));
  return (
    <div className="container">
      {missionList}
    </div>
  );
};

export default Mission;
