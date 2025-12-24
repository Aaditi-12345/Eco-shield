import React from 'react';
import {
  Leaf,
  Star,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  ThumbsUp,
  PhoneCall
} from 'lucide-react';

/* ================= SERVICES DATA ================= */
const services = [
  {
    name: 'Ant Control',
    image:
      'https://images.unsplash.com/photo-1615484477778-ca3b77940c25?auto=format&fit=crop&w=1200&q=80',
    desc:
      'Targeted ant control treatments that eliminate nests at the source using family and pet-safe products.'
  },
  {
    name: 'Termite Control',
    image:
      'https://images.unsplash.com/photo-1626178793926-22b5c8eab7c3?auto=format&fit=crop&w=1200&q=80',
    desc:
      'Professional termite inspections and treatments to protect your property from structural damage.'
  },
  {
    name: 'Rodent Control',
    image:
      'https://images.unsplash.com/photo-1600691214933-7b1c82f69571?auto=format&fit=crop&w=1200&q=80',
    desc:
      'Humane rodent control including trapping, baiting, and entry-point sealing.'
  },
  {
    name: 'Cockroach Control',
    image:
      'https://images.unsplash.com/photo-1624958723474-92d7f60b2fbd?auto=format&fit=crop&w=1200&q=80',
    desc:
      'Targeted cockroach treatments ideal for kitchens, apartments, and commercial properties.'
  },
  {
    name: 'Mosquito Control',
    image:
      'https://images.unsplash.com/photo-1598511723693-1b3bfc6d3b9c?auto=format&fit=crop&w=1200&q=80',
    desc:
      'Outdoor mosquito reduction programs to protect your family and outdoor areas.'
  },
  {
    name: 'Bed Bug Treatment',
    image:
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267f2?auto=format&fit=crop&w=1200&q=80',
    desc:
      'Complete bed bug eradication using professional-grade treatments and follow-up inspections.'
  }
];

/* ================= REVIEWS ================= */
const reviews = [
  {
    name: 'Sarah M.',
    location: 'Southport, QLD',
    text:
      'Extremely professional and knowledgeable. Our pest issue was resolved quickly.',
    rating: 5
  },
  {
    name: 'Michael R.',
    location: 'Robina, QLD',
    text:
      'Friendly team, on time, and eco-friendly solutions. Highly recommended.',
    rating: 5
  },
  {
    name: 'Jennifer L.',
    location: 'Tweed Heads, NSW',
    text:
      'Smooth booking process and fantastic results. Will use again.',
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
    <div className="min-h-screen bg-white">

      {/* NAV */}
      <nav className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <Leaf className="h-7 w-7 text-green-600" />
            <span className="ml-2 font-bold text-lg">
              EcoShield Pest Control
            </span>
          </div>
          <a
            href="tel:+614XXXXXXXX"
            className="hidden sm:flex items-center text-green-600 font-semibold"
          >
            <PhoneCall className="h-4 w-4 mr-1" />
            Call Now
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section
        className="py-32 px-4 text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('https://images.unsplash.com/photo-1601758123927-196d0c22c09e?auto=format&fit=crop&w=1600&q=80')"
        }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Trusted Pest Control Experts on the Gold Coast
        </h1>
        <p className="text-gray-200 max-w-2xl mx-auto mb-8">
          Safe, effective and professional pest control solutions for homes and businesses.
        </p>
        <a
          href="tel:+614XXXXXXXX"
          className="bg-green-600 hover:bg-green-700 transition text-white px-8 py-3 rounded-lg font-semibold"
        >
          Get a Free Quote
        </a>
      </section>

      {/* WHY US */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <ShieldCheck className="h-10 w-10 mx-auto text-green-600 mb-3" />
            <h3 className="font-semibold mb-2">Licensed & Insured</h3>
            <p className="text-gray-600 text-sm">
              Fully qualified professionals you can trust.
            </p>
          </div>
          <div>
            <Leaf className="h-10 w-10 mx-auto text-green-600 mb-3" />
            <h3 className="font-semibold mb-2">Eco-Friendly Treatments</h3>
            <p className="text-gray-600 text-sm">
              Safe for children, pets, and the environment.
            </p>
          </div>
          <div>
            <ThumbsUp className="h-10 w-10 mx-auto text-green-600 mb-3" />
            <h3 className="font-semibold mb-2">Guaranteed Results</h3>
            <p className="text-gray-600 text-sm">
              Long-lasting protection and reliable service.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-gray-50 px-4">
        <h2 className="text-3xl font-bold text-center mb-14">
          Our Pest Control Services
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden"
            >
              <img
                src={s.image}
                alt={s.name}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
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
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 bg-[#EAF7EF] px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Customer Reviews
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow">
              <div className="flex mb-2">
                {renderStars(r.rating)}
              </div>
              <p className="text-gray-600 text-sm mb-4">
                "{r.text}"
              </p>
              <p className="font-semibold">{r.name}</p>
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

        <div className="max-w-xl mx-auto bg-gray-50 p-8 rounded-xl space-y-4 text-gray-700">
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