/* eslint-disable camelcase */

import PropTypes from 'prop-types';

const missionList = (props) => {
  const {
    mission_name, description, join, joined,
  } = props;
  return (
    <tr className="data">
      <td>{ mission_name }</td>
      <td>{ description }</td>
      {/* {joined && (<td>Active Member</td>)} */}
      {!joined && (<td>Not a Member</td>)}
      {/* {joined && (<td><button type="button" onClick={join}>Leave Mission</button></td>)} */}
      {!joined && (<td><button type="button" onClick={join}>Join Mission</button></td>)}
    </tr>
  );
};

missionList.propTypes = {
  mission_name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  join: PropTypes.func.isRequired,
  joined: PropTypes.bool,
};

missionList.defaultProps = { joined: false };

export default missionList;
