export type Trip = {
  id: number;
  name: string;
  rate: number;
  currentPrice: number;
  beforePrice: number | undefined;
  numberOfCountries: number;
  numberOfDays: number;
  image: string;
}