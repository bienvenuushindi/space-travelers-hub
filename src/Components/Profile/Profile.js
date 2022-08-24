/* eslint-disable camelcase */

import { useSelector } from 'react-redux';

const Profile = () => {
  const missions = useSelector((state) => state.missions);
  let mission_copy = JSON.parse(JSON.stringify(missions));
  mission_copy = mission_copy.filter((m) => m.joined === true);
  const rockets = useSelector((state) => state.rockets);
  let rocket_copy = JSON.parse(JSON.stringify(rockets));
  rocket_copy = rocket_copy.filter((r) => r.reserved === true);

  const rocketsList = rocket_copy.map((rocket) => (<li key={rocket.id} className="list-group-item">{rocket.name}</li>));
  const list = mission_copy.map((mission) => (
    <li key={mission.mission_id} className="list-group-item">{mission.mission_name}</li>));

  return (
    <div className="row container mx-auto">
      <div className="col-md-6 card">
        <h2>My Joined Missions </h2>
        <ul className="list-group list-group-flush">
          {list}
        </ul>
      </div>
      <div className="col-md-6 card">
        <h2>My Reserved Rockets </h2>
        <ul className="list-group list-group-flush">
          {rocketsList}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
