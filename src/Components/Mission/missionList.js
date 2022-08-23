/* eslint-disable camelcase */

import PropTypes from 'prop-types';

const missionList = (props) => {
  const { mission_name, description } = props;
  return (
    <tr className="data">
      <td>{ mission_name }</td>
      <td>{ description }</td>
      <td> Not a Member  </td>
      <td> Join Mission  </td>
    </tr>
  );
};
missionList.propTypes = {
  mission_name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default missionList;
