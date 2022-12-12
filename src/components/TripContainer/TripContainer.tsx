import { Trip } from '../../types/trip';
import './TripContainer.scss';

interface Props {
  trip: Trip
}

function TripContainer({ trip }: Props) {
  return (
    <div className="trip-container">
      <div className="trip-image">
        image
      </div>
      <div className="trip-additional-informations">
        <div className="countries-number">
          coutnries
        </div>
        <div className="days-number">
          days
        </div>
      </div>
      <div className="trip-name">
        name
      </div>
      <div className="trip-rating">
        rating
      </div>
      <div className="trip-price">
        <div className="current-price">
          current rpcie
        </div>
        <div className="before-price">
          before price
        </div>
      </div>
    </div>
  );
}

export default TripContainer;
