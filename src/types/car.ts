export type CarClass = 'luxury' | 'popular' | 'vintage' | 'family' | 'off-road';
export type BodyType = 'suv' | 'coupe' | 'crossover' | 'wagon' | 'sedan' | 'limousine' | 'convertible' | 'compact';

export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  class: CarClass;
  bodyType: BodyType;
  dailyRate: number;
  passengerCapacity: number;
  transmission: 'automatic' | 'manual';
  fuelType: 'gasoline' | 'diesel' | 'electric' | 'hybrid';
  imageUrl: string;
  available: boolean;
}