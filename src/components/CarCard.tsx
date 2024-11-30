import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Users, Fuel, Car as CarIcon } from 'lucide-react';
import type { Car } from '../types/car';
import { useBookingStore } from '../store/bookingStore';
import { BookingModal } from './BookingModal';

interface CarCardProps {
  car: Car;
}

export function CarCard({ car }: CarCardProps) {
  const setSelectedCar = useBookingStore((state) => state.setSelectedCar);

  return (
    <Dialog.Root onOpenChange={(open) => {
      if (open) {
        setSelectedCar(car);
      } else {
        setSelectedCar(null);
      }
    }}>
      <Dialog.Trigger asChild>
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
          <img
            src={car.imageUrl}
            alt={`${car.brand} ${car.model}`}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-lg font-semibold">{car.brand} {car.model}</h3>
                <p className="text-sm text-gray-600">{car.year} • {car.transmission}</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-blue-600">${car.dailyRate}</p>
                <p className="text-sm text-gray-600">per day</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-1" />
                {car.passengerCapacity} seats
              </div>
              <div className="flex items-center">
                <Fuel className="h-4 w-4 mr-1" />
                {car.fuelType}
              </div>
              <div className="flex items-center">
                <CarIcon className="h-4 w-4 mr-1" />
                {car.bodyType}
              </div>
            </div>
            
            <button
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              disabled={!car.available}
            >
              {car.available ? 'Book Now' : 'Not Available'}
            </button>
          </div>
        </div>
      </Dialog.Trigger>
      <BookingModal />
    </Dialog.Root>
  );
}