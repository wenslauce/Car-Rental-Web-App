import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Apple, SmartphoneNfc } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Car className="h-8 w-8" />
              <span className="text-xl font-bold">LUXEDRIVE</span>
            </Link>
            <p className="text-gray-400">
              Premium car rental service for those who appreciate luxury and comfort.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/cars" className="text-gray-400 hover:text-white">Browse Cars</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Download our mobile app</h3>
            <div className="flex space-x-4">
              <Link to="#" className="flex items-center space-x-2 bg-white/10 rounded-lg px-4 py-2 hover:bg-white/20">
                <Apple className="h-6 w-6" />
                <span>App Store</span>
              </Link>
              <Link to="#" className="flex items-center space-x-2 bg-white/10 rounded-lg px-4 py-2 hover:bg-white/20">
                <SmartphoneNfc className="h-6 w-6" />
                <span>Play Store</span>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2024 LuxeDrive. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="#" className="text-gray-400 hover:text-white">Facebook</Link>
              <Link to="#" className="text-gray-400 hover:text-white">Twitter</Link>
              <Link to="#" className="text-gray-400 hover:text-white">Instagram</Link>
              <Link to="#" className="text-gray-400 hover:text-white">LinkedIn</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}