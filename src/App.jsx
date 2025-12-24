import React from 'react';
import {
  Leaf,
  Bug,
  ShieldCheck,
  ThumbsUp,
  PhoneCall,
  Star,
  Mail,
  MapPin,
  Clock
} from 'lucide-react';

/* ================= SERVICES ================= */
const services = [
  {
    name: 'Ant Control',
    icon: Bug,
    desc:
      'Targeted ant control treatments that eliminate nests at the source using family and pet-safe products.'
  },
  {
    name: 'Termite Control',
    icon: ShieldCheck,
    desc:
      'Professional termite inspections and treatments to prevent costly structural damage.'
  },
  {
    name: 'Rodent Control',
    icon: ThumbsUp,
    desc:
      'Humane rodent removal with baiting, trapping, and entry-point sealing.'
  },
  {
    name: 'Cockroach Control',
    icon: Bug,
    desc:
      'Effective cockroach treatments for homes, apartments, and commercial properties.'
  },
  {
    name: 'Mosquito Control',
    icon: Bug,
    desc:
      'Outdoor mosquito reduction programs to protect your family and outdoor spaces.'
  },
  {
    name: 'Bed Bug Treatment',
    icon: ShieldCheck,
    desc:
      'Complete bed bug eradication using professional-grade treatments and follow-ups.'
  }
];

/* ================= REVIEWS ================= */
const reviews = [
  {
    name: 'Sarah M.',
    text: 'Very professional service. Clear explanation and excellent results.',
    rating: 5
  },
  {
    name: 'Michael R.',
    text: 'On time, friendly, and effective. Highly recommended.',
    rating: 5
  },
  {
    name: 'Jennifer L.',
    text: 'Smooth process from booking to completion.',
    rating: 5
  }
];

const renderStars = (rating) =>
  Array.from({ length: 5 }).map((_, i) => (
    <Star
      key={i}
      className={`h-4 w-4 ${
        i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
      }`}
    />
  ));

/* ================= APP ================= */
export default function App() {
  return (
    <div className="min-h-screen bg-[#EEF7F1]">

      {/* NAV */}
      <nav className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <Leaf className="h-7 w-7 text-green-600" />
            <span className="ml-2 font-bold text-xl text-gray-900">
              EcoShield
            </span>
          </div>
          <a
            href="tel:+614XXXXXXXX"
            className="flex items-center text-green-700 font-semibold"
          >
            <PhoneCall className="h-4 w-4 mr-1" />
            Call Now
          </a>
        </div>
      </nav>

      {/* HERO / HOME */}
      <section className="py-36 px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-green-800 mb-6">
          EcoShield Pest Control
        </h1>

        <p className="text-gray-700 max-w-2xl mx-auto mb-10 text-lg md:text-xl">
          Professional, eco-friendly pest control services for homes and
          businesses across the Gold Coast.
        </p>

        <a
          href="tel:+614XXXXXXXX"
          className="inline-block bg-green-600 hover:bg-green-700 transition text-white px-10 py-4 rounded-xl font-semibold text-lg"
        >
          Get a Free Quote
        </a>
      </section>

      {/* WHY US */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div>
            <ShieldCheck className="h-12 w-12 mx-auto text-green-600 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Licensed & Insured</h3>
            <p className="text-gray-600 text-sm">
              Fully qualified technicians you can trust.
            </p>
          </div>
          <div>
            <Leaf className="h-12 w-12 mx-auto text-green-600 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Eco-Friendly</h3>
            <p className="text-gray-600 text-sm">
              Safe for families, pets, and the environment.
            </p>
          </div>
          <div>
            <ThumbsUp className="h-12 w-12 mx-auto text-green-600 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Guaranteed Results</h3>
            <p className="text-gray-600 text-sm">
              Reliable service with long-lasting protection.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-4 bg-[#F6FBF8]">
        <h2 className="text-3xl font-bold text-center mb-14 text-gray-900">
          Our Pest Control Services
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-xl shadow p-6 text-center hover:shadow-lg transition"
              >
                <Icon className="h-12 w-12 mx-auto text-green-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">
                  {s.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {s.desc}
                </p>
                <a
                  href="tel:+614XXXXXXXX"
                  className="text-green-600 font-semibold text-sm"
                >
                  Enquire Now →
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">
          Customer Reviews
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="bg-[#EEF7F1] p-6 rounded-xl">
              <div className="flex mb-2">
                {renderStars(r.rating)}
              </div>
              <p className="text-gray-700 text-sm mb-4">
                "{r.text}"
              </p>
              <p className="font-semibold">{r.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20 px-4 bg-[#F6FBF8]">
        <h2 className="text-3xl font-bold text-center mb-10">
          Contact Us
        </h2>

        <div className="max-w-xl mx-auto bg-white p-8 rounded-xl space-y-4 text-gray-700 shadow">
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
      </section>

    </div>
  );
}