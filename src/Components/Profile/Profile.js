/* eslint-disable camelcase */

import { useSelector } from 'react-redux';

const Profile = () => {
  const missions = useSelector((state) => state.missions);
  const rockets = useSelector((state) => state.rockets);

  const rocketsList = rockets.filter((r) => r.reserved === true).map((rocket) => (
    <li key={rocket.id} className="list-group-item">{rocket.name}</li>));
  const list = missions.filter((r) => r.joined === true).map((mission) => (
    <li key={mission.mission_id} className="list-group-item">{mission.mission_name}</li>));

  return (
    <div className="row container mx-auto">
      <div className="col-md-6 ">
        <h2>My Joined Missions</h2>
        <ul className="list-group list-group-flush card m-2 text-start">
          {list.length !== 0 ? list : (<li className="list-group-item">Sorry, No Item Found, Please Select Fist!!!</li>)}
        </ul>
      </div>
      <div className="col-md-6">
        <h2>My Reserved Rockets</h2>
        <ul className="list-group list-group-flush card m-2 text-start">
          {rocketsList.length !== 0 ? rocketsList : (<li className="list-group-item">Sorry, No Item Found, Please Select Fist!!!</li>)}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
