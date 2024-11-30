import React from 'react';
import { Link } from 'react-router-dom';
import { Car } from 'lucide-react';

const brands = [
  { name: 'Toyota', logo: '/brands/toyota.svg' },
  { name: 'Ford', logo: '/brands/ford.svg' },
  { name: 'Tesla', logo: '/brands/tesla.svg' },
  { name: 'Volkswagen', logo: '/brands/vw.svg' },
  { name: 'Honda', logo: '/brands/honda.svg' },
  { name: 'Volvo', logo: '/brands/volvo.svg' },
  { name: 'Mercedes-Benz', logo: '/brands/mercedes.svg' },
  { name: 'BMW', logo: '/brands/bmw.svg' },
  { name: 'Chevrolet', logo: '/brands/chevrolet.svg' },
  { name: 'Hyundai', logo: '/brands/hyundai.svg' },
  { name: 'Audi', logo: '/brands/audi.svg' },
  { name: 'KIA', logo: '/brands/kia.svg' },
];

export function BrandGrid() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-lg font-medium mb-6">Rent by Brands</h2>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {brands.map((brand) => (
            <Link
              key={brand.name}
              to={`/cars?brand=${brand.name.toLowerCase()}`}
              className="flex flex-col items-center justify-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 flex items-center justify-center">
                <Car className="w-8 h-8 text-gray-600" />
              </div>
              <span className="mt-2 text-sm text-gray-600">{brand.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}