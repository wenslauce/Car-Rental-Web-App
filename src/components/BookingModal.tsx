import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X, Calendar, Clock } from 'lucide-react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useBookingStore } from '../store/bookingStore';
import { formatCurrency } from '../utils/format';

const timeSlots = Array.from({ length: 24 }, (_, i) => {
  const hour = i.toString().padStart(2, '0');
  return `${hour}:00`;
});

export function BookingModal() {
  const {
    selectedCar,
    startDate,
    endDate,
    pickupTime,
    dropoffTime,
    totalCost,
    setDates,
    setTimes,
    resetBooking
  } = useBookingStore();

  if (!selectedCar) return null;

  const handlePayment = async () => {
    // TODO: Implement Paystack integration
    console.log('Processing payment...');
  };

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/50" />
      <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-start mb-6">
          <div>
            <Dialog.Title className="text-2xl font-bold">
              Book {selectedCar.brand} {selectedCar.model}
            </Dialog.Title>
            <Dialog.Description className="text-gray-600 mt-1">
              Select your rental dates and times
            </Dialog.Description>
          </div>
          <Dialog.Close className="text-gray-400 hover:text-gray-600">
            <X className="h-6 w-6" />
          </Dialog.Close>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <img
              src={selectedCar.imageUrl}
              alt={`${selectedCar.brand} ${selectedCar.model}`}
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="mt-4">
              <p className="text-lg font-semibold">${selectedCar.dailyRate} per day</p>
              <p className="text-sm text-gray-600">
                {selectedCar.year} • {selectedCar.transmission} • {selectedCar.fuelType}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <Calendar className="h-4 w-4 inline mr-2" />
                Rental Period
              </label>
              <div className="grid grid-cols-2 gap-4">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setDates(date, endDate)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  minDate={new Date()}
                  placeholderText="Start Date"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setDates(startDate, date)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                  placeholderText="End Date"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <Clock className="h-4 w-4 inline mr-2" />
                Pick-up & Drop-off Time
              </label>
              <div className="grid grid-cols-2 gap-4">
                <select
                  value={pickupTime}
                  onChange={(e) => setTimes(e.target.value, dropoffTime)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                >
                  {timeSlots.map((time) => (
                    <option key={`pickup-${time}`} value={time}>{time}</option>
                  ))}
                </select>
                <select
                  value={dropoffTime}
                  onChange={(e) => setTimes(pickupTime, e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                >
                  {timeSlots.map((time) => (
                    <option key={`dropoff-${time}`} value={time}>{time}</option>
                  ))}
                </select>
              </div>
            </div>

            {totalCost > 0 && (
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-lg font-semibold">Total Cost</p>
                <p className="text-3xl font-bold text-blue-600">{formatCurrency(totalCost)}</p>
              </div>
            )}

            <button
              onClick={handlePayment}
              disabled={!startDate || !endDate || totalCost === 0}
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  );
}