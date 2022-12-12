import { useEffect, useRef, useState } from 'react';
import TripContainer from '../components/TripContainer/TripContainer';
import { getRecentlyViewedTrips } from '../services/trips';
import { Trip } from '../types/trip';
import './RecentlyViewedTrips.scss';

function RecentlyViewedTrips() {
  const dataFetchedRef = useRef(false);
  const [recentlyViewedTrips, setRecentlyViewedTrips] = useState<Trip[]>();

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    getRecentlyViewedTrips().then(data => {
      setRecentlyViewedTrips(data);
    })
  }, [])

  return (
    <>
      <h2>Recently viewed trips</h2>
      <div className="trips-container">
        {recentlyViewedTrips && (
          recentlyViewedTrips.map(trip => (
            <TripContainer key={trip.id} trip={trip} />
          ))
        )}
      </div>
    </>
  );
}

export default RecentlyViewedTrips;
