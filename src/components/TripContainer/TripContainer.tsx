import { Trip } from '../../types/trip';
import convertToMoney from '../../utility/convertToMoney';
import getProperString from '../../utility/getProperString';
import ReactStars from 'react-stars'
import './TripContainer.scss';

interface Props {
  trip: Trip
}

function TripContainer({ trip }: Props) {
  return (
    <div className="trip-container">
      <div className="trip-image">
        <img className="image" src={trip.image} alt={trip.name} title={trip.name} />
      </div>
      <div className="trip-informations">
        <div className="trip-additional-informations">
          <div className="countries-number">
            {getProperString(trip.numberOfCountries, 'Country', 'Countries')}{','}
          </div>
          <div className="days-number">
            {getProperString(trip.numberOfDays, 'Day', 'Days')}
          </div>
        </div>
        <div className="trip-name">
          {trip.name}
        </div>
        <div className="trip-rating">
          <ReactStars
            value={trip.rate}
            size={20}
            count={5}
            edit={false}
          />
          <div className="rate-value">
            {trip.rate}
          </div>
        </div>
        <div className="trip-price">
          <div className="current-price">
            From {convertToMoney(trip.currentPrice, '€')}
          </div>
          {trip.beforePrice && (
            <div className="before-price">
             Price {convertToMoney(trip.beforePrice, '€')}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TripContainer;
