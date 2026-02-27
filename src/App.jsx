import React from 'react';
import { Sofa, Shield, Star, Phone } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 bg-white shadow-sm">
        <div className="flex items-center gap-2 text-blue-600 font-bold text-2xl">
          <Sofa size={32} />
          <span>EcoShield Cleaning</span>
        </div>
        <a href="tel:555-0123" className="bg-blue-600 text-white px-5 py-2 rounded-full flex items-center gap-2 font-semibold">
          <Phone size={18} /> Call Now
        </a>
      </nav>

      {/* Hero Section */}
      <header className="bg-blue-50 py-20 px-6 text-center">
        <h1 className="text-5xl font-extrabold mb-4">Professional Couch & Carpet Cleaning</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Deep cleaning that removes stains, odors, and allergens. Make your furniture look like new today.
        </p>
        <button className="bg-blue-600 text-white text-lg px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition">
          Get a Free Quote
        </button>
      </header>

      {/* Services */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div className="p-8 border rounded-2xl bg-white shadow-sm hover:shadow-md transition">
          <Sofa className="text-blue-600 mb-4" size={40} />
          <h3 className="text-2xl font-bold mb-2">Upholstery</h3>
          <p className="text-gray-600">Deep steam cleaning for all types of couches, armchairs, and dining chairs.</p>
        </div>
        <div className="p-8 border rounded-2xl bg-white shadow-sm hover:shadow-md transition">
          <Star className="text-blue-600 mb-4" size={40} />
          <h3 className="text-2xl font-bold mb-2">Carpet Cleaning</h3>
          <p className="text-gray-600">Advanced stain removal and fiber protection for your home or office carpets.</p>
        </div>
        <div className="p-8 border rounded-2xl bg-white shadow-sm hover:shadow-md transition">
          <Shield className="text-blue-600 mb-4" size={40} />
          <h3 className="text-2xl font-bold mb-2">Eco-Friendly</h3>
          <p className="text-gray-600">We use non-toxic, pet-safe, and child-safe cleaning solutions only.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6 text-center">
        <p className="text-lg font-bold">EcoShield Cleaning Services</p>
        <p className="text-gray-400 mt-2">Professional Care for Your Home</p>
      </footer>
    </div>
  );
}

export default App;
