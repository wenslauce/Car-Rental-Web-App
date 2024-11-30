import React from 'react';
import { Search, Calendar, Car } from 'lucide-react';

const steps = [
  {
    title: 'Browse and select',
    description: 'Choose from our wide variety of premium cars, select the dates and location that suit your needs.',
    icon: Search
  },
  {
    title: 'Book and confirm',
    description: 'Make your booking in just a few clicks and receive an instant confirmation of your rental.',
    icon: Calendar
  },
  {
    title: 'Enjoy your ride',
    description: 'Pick up your car at the designated location at your selected time and enjoy your premium driving experience.',
    icon: Car
  }
];

export function HowItWorks() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-4">How it works</h2>
        <p className="text-gray-600 mb-12">
          Renting a luxury car has never been easier. Our streamlined process makes it simple for you
          to book and enjoy your dream car.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="flex flex-col items-start">
              <div className="bg-black rounded-full p-4 mb-4">
                <step.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}