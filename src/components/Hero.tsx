import React from 'react';
import { CarSearch } from './CarSearch';

export function Hero() {
  return (
    <div className="relative bg-black h-[500px]">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80"
          alt="Luxury car backdrop"
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <h1 className="text-5xl font-bold text-white mb-6">
          Discover the world on wheels<br />
          with our car rental service
        </h1>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 px-4">
        <CarSearch />
      </div>
    </div>
  );
}