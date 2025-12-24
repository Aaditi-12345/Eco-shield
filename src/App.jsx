import React from 'react';
import {
  Leaf,
  Star,
  Bug,
  Mouse,
  ShieldCheck,
  Wind,
  Bed,
  Mail,
  MapPin,
  Clock
} from 'lucide-react';

const services = [
  {
    name: 'Ant Control',
    icon: Bug,
    image:
      'https://images.unsplash.com/photo-1586788224331-947f68671cf1',
    desc:
      'Our ant control treatments target nests at the source using eco-friendly products that are safe for families, pets, and food areas.'
  },
  {
    name: 'Termite Control',
    icon: ShieldCheck,
    image:
      'https://images.unsplash.com/photo-1621905251918-48416bd85791',
    desc:
      'We provide thorough termite inspections, barriers, and long-term protection plans to safeguard your home and investment.'
  },
  {
    name: 'Rodent Control',
    icon: Mouse,
    image:
      'https://images.unsplash.com/photo-1595433707802-46c7d1e4b9c0',
    desc:
      'Humane rodent control solutions including baiting, trapping, and exclusion methods to prevent future infestations.'
  },
  {
    name: 'Cockroach Control',
    icon: Bug,
    image:
      'https://images.unsplash.com/photo-1586796671956-07f8e62c1b74',
    desc:
      'Targeted cockroach treatments designed to eliminate infestations fast while remaining safe for indoor environments.'
  },
  {
    name: 'Mosquito Control',
    icon: Wind,
    image:
      'https://images.unsplash.com/photo-1595433562696-19ed5b7b2a1b',
    desc:
      'Reduce mosquitoes around your property with outdoor treatments that protect your family from bites and disease.'
  },
  {
    name: 'Bed Bug Treatment',
    icon: Bed,
    image:
      'https://images.unsplash.com/photo-1582719478171-2f9d3f4d9f09',
    desc:
      'Complete bed bug eradication using professional-grade treatments with follow-up inspections for peace of mind.'
  }
];

const technicians = [
  { name: 'Alex Thompson', role: 'Senior Technician' },
  { name: 'Daniel Brooks', role: 'Pest Control Specialist' },
  { name: 'Michael Lee', role: 'Rodent & Termite Expert' }
];

const reviews = [
  {
    name: 'Sarah M.',
    location: 'Southport, QLD',
    text: 'Very professional service. Explained everything clearly and the results were excellent.',
    rating: 5
  },
  {
    name: 'Michael R.',
    location: 'Robina, QLD',
    text: 'On time, friendly and eco-friendly solutions. Highly recommended.',
    rating: 5
  },
  {
    name: 'Jennifer L.',
    location: 'Tweed Heads, NSW',
    text: 'Great experience from booking to completion. Will definitely use again.',
    rating: 5
  }
];

const stars = (r) =>
  Array.from({ length: 5 }).map((_, i) => (
    <Star
      key={i}
      className={`h-4 w-4 ${
        i < r ? 'text-yellow-400 fill-current' : 'text-gray-300'
      }`}
    />
  ));

export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">

      {/* NAV */}
      <nav className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center">
          <Leaf className="h-7 w-7 text-green-600" />
          <span className="ml-2 font-bold text-lg">EcoShield Pest Control</span>
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-[#EAF7EF] py-24 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Eco-Friendly Pest Control on the Gold Coast
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Licensed and insured technicians providing safe, effective pest control
          solutions for homes and businesses across South East Queensland.
        </p>
        <a
          href="tel:+614XXXXXXXX"
          className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold"
        >
          Call Now for a Free Quote
        </a>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-gray-50 px-4">
        <h2 className="text-3xl font-bold text-center mb-14">
          Our Pest Control Services
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {services.map((s, i) => (
            <div key={i} className="bg-white rounded-xl shadow overflow-hidden">
              <img
                src={s.image}
                alt={s.name}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {s.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TECHNICIANS */}
      <section className="py-20 bg-white px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Experienced Technicians
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {technicians.map((t, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-xl p-6 text-center"
            >
              <img
                src={`https://placehold.co/200x200/E5E7EB/333333?text=${t.name.split(' ')[0]}`}
                alt={t.name}
                className="w-28 h-28 mx-auto rounded-full mb-4"
              />
              <h3 className="font-semibold text-gray-900">{t.name}</h3>
              <p className="text-gray-500 text-sm">{t.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 bg-[#EAF7EF] px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Customers Say
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow">
              <div className="flex mb-2">{stars(r.rating)}</div>
              <p className="text-gray-600 text-sm mb-4">"{r.text}"</p>
              <p className="font-semibold text-gray-900">{r.name}</p>
              <p className="text-gray-500 text-xs">{r.location}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20 bg-white px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Contact Us
        </h2>
        <div className="max-w-xl mx-auto bg-gray-50 p-8 rounded-xl">
          <div className="space-y-4 text-gray-700">
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-2 text-green-600" />
              info@ecoshieldpest.com
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-green-600" />
              Gold Coast & Surrounding Areas
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2 text-green-600" />
              7 AM – 8 PM, 7 Days
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}