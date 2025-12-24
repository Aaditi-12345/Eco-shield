import React, { useState } from 'react';
import {
  Mail,
  MapPin,
  Clock,
  Leaf,
  Calendar,
  Star,
  Bug,
  Mouse,
  ShieldCheck,
  Wind,
  Bed
} from 'lucide-react';
import { motion } from 'framer-motion';

const App = () => {
  const [activePage, setActivePage] = useState('home');

  /* ---------------- DATA ---------------- */
  const services = [
    { name: 'Ant Control', icon: Bug, desc: 'Eco-safe ant treatments' },
    { name: 'Termite Control', icon: ShieldCheck, desc: 'Advanced termite protection' },
    { name: 'Rodent Control', icon: Mouse, desc: 'Humane rodent control solutions' },
    { name: 'Cockroach Control', icon: Bug, desc: 'Targeted cockroach elimination' },
    { name: 'Mosquito Control', icon: Wind, desc: 'Outdoor mosquito management' },
    { name: 'Bed Bug Treatment', icon: Bed, desc: 'Complete bed bug removal' }
  ];

  const technicians = [
    { name: 'Alex Thompson', role: 'Senior Technician' },
    { name: 'Daniel Brooks', role: 'Pest Control Specialist' },
    { name: 'Michael Lee', role: 'Rodent & Termite Expert' }
  ];

  const testimonials = [
    { name: 'Sarah M.', text: 'Professional, fast and pet-safe service.', rating: 5 },
    { name: 'Michael R.', text: 'Very organised and eco-friendly.', rating: 5 },
    { name: 'Jennifer L.', text: 'Highly recommend EcoShield.', rating: 5 }
  ];

  const stars = (r) =>
    Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < r ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));

  /* ---------------- NAV ---------------- */
  const Nav = () => (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
        <div className="flex items-center">
          <Leaf className="h-7 w-7 text-green-600" />
          <span className="ml-2 font-bold text-lg">EcoShield</span>
        </div>
        <div className="hidden md:flex gap-6 text-sm font-medium">
          {['home', 'services', 'about', 'contact'].map((p) => (
            <button
              key={p}
              onClick={() => setActivePage(p)}
              className={`capitalize ${
                activePage === p ? 'text-green-600' : 'text-gray-700'
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );

  /* ---------------- HERO ---------------- */
  const Hero = () => (
    <section className="bg-[#EAF7EF] py-20 text-center px-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Eco-Friendly Pest Control
      </h1>
      <p className="text-gray-600 max-w-xl mx-auto mb-6">
        Safe, effective pest control for homes and businesses. Same-day service available.
      </p>
      <button
        onClick={() => setActivePage('contact')}
        className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold"
      >
        Get a Free Quote
      </button>
    </section>
  );

  /* ---------------- SERVICES ---------------- */
  const Services = () => (
    <section className="py-16 bg-white px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={i} className="bg-[#EAF7EF] p-6 rounded-xl">
              <div className="flex items-center mb-3">
                <div className="bg-white p-2 rounded-lg shadow-sm">
                  <Icon className="h-5 w-5 text-green-600" />
                </div>
                <h3 className="ml-3 font-semibold text-gray-900">{s.name}</h3>
              </div>
              <p className="text-gray-600 text-sm">{s.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );

  /* ---------------- TEAM ---------------- */
  const Team = () => (
    <section className="py-16 bg-[#EAF7EF] px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Our Technicians</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {technicians.map((t, i) => (
          <div key={i} className="bg-white rounded-xl p-6 text-center shadow">
            <img
              src={`https://placehold.co/200x200/9FD8B5/ffffff?text=${t.name.split(' ')[0]}`}
              alt={t.name}
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3 className="font-semibold text-gray-900">{t.name}</h3>
            <p className="text-green-600 text-sm">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );

  /* ---------------- TESTIMONIALS ---------------- */
  const Testimonials = () => (
    <section className="py-16 bg-white px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Customer Reviews</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-gray-50 p-6 rounded-xl">
            <div className="flex mb-3">{stars(t.rating)}</div>
            <p className="text-gray-600 text-sm mb-3">"{t.text}"</p>
            <p className="font-semibold text-gray-900">{t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );

  /* ---------------- CONTACT ---------------- */
  const Contact = () => (
    <section className="py-16 bg-[#EAF7EF] px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Contact Us</h2>
      <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow">
        <div className="space-y-4 text-gray-700">
          <div className="flex items-center">
            <Mail className="h-5 w-5 mr-2 text-green-600" />
            info@ecoshieldpest.com
          </div>
          <div className="flex items-center">
            <MapPin className="h-5 w-5 mr-2 text-green-600" />
            Gold Coast, QLD
          </div>
          <div className="flex items-center">
            <Clock className="h-5 w-5 mr-2 text-green-600" />
            7 AM – 8 PM (Daily)
          </div>
        </div>
      </div>
    </section>
  );

  const renderPage = () => {
    if (activePage === 'services') return <Services />;
    if (activePage === 'about') return <Team />;
    if (activePage === 'contact') return <Contact />;
    return (
      <>
        <Hero />
        <Services />
        <Team />
        <Testimonials />
      </>
    );
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Nav />
      {renderPage()}
    </div>
  );
};

export default App;