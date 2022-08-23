/* eslint-disable camelcase */
import PropTypes from 'prop-types';

const missionList = (props) => {
  const { mission_name, description } = props;
  return (
    <div className="row m-2">
      <div className="col-md-8 text-start">
        <div className="title">
          {mission_name}
        </div>
        <div className="description">
          {description}
        </div>
      </div>
    </div>
  );
};
missionList.propTypes = {
  mission_name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default missionList;
