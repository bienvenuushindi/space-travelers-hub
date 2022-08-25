/* eslint-disable camelcase */

import PropTypes from 'prop-types';

const missionList = (props) => {
  const {
    mission_name, description, join, joined,
  } = props;
  return (
    <tr className="data">
      <td style={{ width: '10%' }}>{ mission_name }</td>
      <td style={{ width: '60%' }}>{ description }</td>
      <td>
        {joined && (<span className="getActive">ACTIVE MEMBER</span>)}
        {!joined && (<span className="notActive">NOT A MEMBER</span>)}
      </td>
      <td>
        {joined && (<button className="leave" type="button" onClick={join}>Leave Mission</button>)}
        {!joined && (<button className="join" type="button" onClick={join}>Join Mission</button>)}
      </td>
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
