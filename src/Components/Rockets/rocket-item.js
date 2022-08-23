import defaultImage from '../../images/planet.png';

const RocketItem = () => (
  <div className="row">
    <div className="col-md-3">
      <img src={defaultImage} alt="Alt text" className="rounded w-50" />
    </div>
    <div className="col-md-8 text-start">
      <div className="title">
        Falcon 1
      </div>
      <div className="description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Alias architecto asperiores assumenda at beatae dolorum,
        ducimus et fuga ipsum iure laboriosam maiores modi, perspiciatis,
        praesentium quo reprehenderit vel voluptates voluptatum.
      </div>
      <div className="control">
        <button type="button" className="btn btn-primary">Reserve Rocket</button>
      </div>
    </div>
  </div>
);

export default RocketItem;
