import PropTypes from 'prop-types';

const RocketItem = (props) => {
  const {
    name, description, image, reserve, reserved,
  } = props;
  return (
    <div className="row m-2">
      <div className="col-md-3">
        <img src={image} alt="Alt text" className="rounded w-100" />
      </div>
      <div className="col-md-8 text-start">
        <div className="title">
          {name}
        </div>
        <div className="description">
          {reserved && (<span className="badge bg-success small  mx-1">Reserved</span>)}
          {description}
        </div>
        <div className="control">
          {!reserved && (
          <button type="button" onClick={reserve} className="btn btn-primary small">Reserve Rocket</button>
          )}
          {reserved && (
            <button type="button" onClick={reserve} className="btn btn-light border">Cancel Reservation</button>
          )}
        </div>
      </div>
    </div>
  );
};
RocketItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reserve: PropTypes.func.isRequired,
  reserved: PropTypes.bool,
};
RocketItem.defaultProps = { reserved: false };
export default RocketItem;
