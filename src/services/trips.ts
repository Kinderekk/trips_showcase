import { Trip } from '../types/trip';

export function getRecentlyViewedTrips(): Promise<Trip[]> {
  return fetch('http://localhost:8080/recently-viewed-trips')
    .then(res => res.json())
    .then(data => data)
}