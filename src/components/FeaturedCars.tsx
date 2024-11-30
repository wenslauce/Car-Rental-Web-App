import React from 'react';
import { CarCard } from './CarCard';
import type { Car } from '../types/car';

const featuredCars: Car[] = [
  {
    id: '1',
    brand: 'Audi',
    model: 'A3',
    year: 2023,
    class: 'luxury',
    bodyType: 'sedan',
    dailyRate: 78.90,
    passengerCapacity: 5,
    transmission: 'automatic',
    fuelType: 'gasoline',
    imageUrl: 'https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?auto=format&fit=crop&q=80',
    available: true
  },
  {
    id: '2',
    brand: 'BMW',
    model: 'X5',
    year: 2023,
    class: 'luxury',
    bodyType: 'suv',
    dailyRate: 78.90,
    passengerCapacity: 7,
    transmission: 'automatic',
    fuelType: 'hybrid',
    imageUrl: 'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?auto=format&fit=crop&q=80',
    available: true
  },
  {
    id: '3',
    brand: 'Porsche',
    model: 'Cayenne GTS',
    year: 2023,
    class: 'luxury',
    bodyType: 'suv',
    dailyRate: 78.90,
    passengerCapacity: 5,
    transmission: 'automatic',
    fuelType: 'gasoline',
    imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80',
    available: true
  }
];

export function FeaturedCars() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-8">Our Impressive Collection of Cars</h2>
        <p className="text-gray-600 mb-8">
          Designed for elegant explorers to powerful performers, our carefully curated selection provides
          experiences that rise above ordinary driving.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
}