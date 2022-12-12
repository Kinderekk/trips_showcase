import { useEffect, useRef, useState } from 'react';
import TripContainer from '../components/TripContainer/TripContainer';
import { getRecentlyViewedTrips } from '../services/trips';
import { Trip } from '../types/trip';
import './RecentlyViewedTrips.scss';

function RecentlyViewedTrips() {
  const dataFetchedRef = useRef(false);
  const [recentlyViewedTrips, setRecentlyViewedTrips] = useState<Trip[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    if (dataFetchedRef.current) return;
    setIsLoading(true);
    dataFetchedRef.current = true;
    setTimeout(() => {
      getRecentlyViewedTrips()
        .then(data => {
          setRecentlyViewedTrips(data);
          setIsLoading(false);
        })
        .catch(() => {
          setIsError(true);
          setIsLoading(false);
        })
    }, 5000);
  }, [])

  return (
    <>
      {recentlyViewedTrips && (
        <>
          <h2 className="title">Recently viewed trips</h2>
          <div className="trips-container">
            {recentlyViewedTrips.map(trip => (
              <TripContainer key={trip.id} trip={trip} />
            ))}
          </div>
        </>
      )}
      {isError && (
        <div className="error">There was an error when getting informations from server</div>
      )}
      {isLoading && (
        <div className="loading-container">
          <div className="loader" />
        </div>
      )}
    </>
  );
}

export default RecentlyViewedTrips;
