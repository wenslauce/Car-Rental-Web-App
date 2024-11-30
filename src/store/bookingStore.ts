import { create } from 'zustand';
import type { Car } from '../types/car';

interface BookingState {
  selectedCar: Car | null;
  startDate: Date | null;
  endDate: Date | null;
  pickupTime: string;
  dropoffTime: string;
  totalCost: number;
  setSelectedCar: (car: Car | null) => void;
  setDates: (start: Date | null, end: Date | null) => void;
  setTimes: (pickup: string, dropoff: string) => void;
  calculateTotalCost: () => void;
  resetBooking: () => void;
}

export const useBookingStore = create<BookingState>((set, get) => ({
  selectedCar: null,
  startDate: null,
  endDate: null,
  pickupTime: '10:00',
  dropoffTime: '10:00',
  totalCost: 0,

  setSelectedCar: (car) => set({ selectedCar: car }),
  
  setDates: (start, end) => {
    set({ startDate: start, endDate: end });
    get().calculateTotalCost();
  },
  
  setTimes: (pickup, dropoff) => set({ pickupTime: pickup, dropoffTime: dropoff }),
  
  calculateTotalCost: () => {
    const { selectedCar, startDate, endDate } = get();
    if (!selectedCar || !startDate || !endDate) {
      set({ totalCost: 0 });
      return;
    }
    
    const days = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    set({ totalCost: days * selectedCar.dailyRate });
  },
  
  resetBooking: () => set({
    selectedCar: null,
    startDate: null,
    endDate: null,
    pickupTime: '10:00',
    dropoffTime: '10:00',
    totalCost: 0
  })
}));