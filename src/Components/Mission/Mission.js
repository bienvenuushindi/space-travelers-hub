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
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th colSpan={2}>Description</th>
            <th>Status</th>
            <th>    </th>
          </tr>
        </thead>
        <tbody>
          {missionList}
        </tbody>
      </table>

    </div>
  );
};

export default Mission;
