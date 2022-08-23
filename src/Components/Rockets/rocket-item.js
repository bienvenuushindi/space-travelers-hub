import PropTypes from 'prop-types';

const RocketItem = (props) => {
  const {
    name, description, image, reserve,
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
          {description}
        </div>
        <div className="control">
          <button type="button" onClick={reserve} className="btn btn-primary">Reserve Rocket</button>
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
};
export default RocketItem;
