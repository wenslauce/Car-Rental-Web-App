import React from 'react';
import { Search } from 'lucide-react';

export function CarSearch() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 max-w-7xl mx-auto -mt-24 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Pick-up Location</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter city or airport"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Pick-up Date</label>
          <input
            type="date"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Return Date</label>
          <input
            type="date"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex items-end">
          <button className="w-full bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2">
            <Search className="h-5 w-5" />
            <span>Search Cars</span>
          </button>
        </div>
      </div>
    </div>
  );
}