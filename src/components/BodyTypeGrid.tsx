import React from 'react';
import { Link } from 'react-router-dom';
import { Car } from 'lucide-react';

const bodyTypes = [
  { type: 'SUV', icon: Car },
  { type: 'Coupe', icon: Car },
  { type: 'Sedan', icon: Car },
  { type: 'Wagon', icon: Car },
  { type: 'Convertible', icon: Car },
  { type: 'Compact', icon: Car },
  { type: 'Crossover', icon: Car },
  { type: 'Limousine', icon: Car },
];

export function BodyTypeGrid() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-lg font-medium mb-6">Rent by body type</h2>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
          {bodyTypes.map((type) => (
            <Link
              key={type.type}
              to={`/cars?bodyType=${type.type.toLowerCase()}`}
              className="flex flex-col items-center justify-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 flex items-center justify-center">
                <type.icon className="w-8 h-8 text-gray-600" />
              </div>
              <span className="mt-2 text-sm text-gray-600">{type.type}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}