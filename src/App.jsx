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
      'https://upload.wikimedia.org/wikipedia/commons/3/32/Ant_closeup.jpg',
    desc:
      'Targeted ant control treatments that eliminate nests at the source using family and pet-safe products.'
  },
  {
    name: 'Termite Control',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/6/6b/Termite_damage.jpg',
    desc:
      'Professional termite inspections and treatments to protect your property from costly structural damage.'
  },
  {
    name: 'Rodent Control',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/8/8c/House_mouse.jpg',
    desc:
      'Humane rodent control including trapping, baiting, and sealing entry points.'
  },
  {
    name: 'Cockroach Control',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/5/5f/Cockroach_closeup.jpg',
    desc:
      'Effective cockroach treatments ideal for kitchens, apartments, and commercial properties.'
  },
  {
    name: 'Mosquito Control',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/1/1c/Aedes_aegypti.jpg',
    desc:
      'Outdoor mosquito reduction programs to protect your family from bites and disease.'
  },
  {
    name: 'Bed Bug Treatment',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/8/86/Bed_bug.jpg',
    desc:
      'Complete bed bug eradication using professional-grade treatments and follow-up inspections.'
  }
];

/* ================= REVIEWS ================= */
const reviews = [
  {
    name: 'Sarah M.',
    location: 'Southport, QLD',
    text: 'Very professional service. The technician was thorough and helpful.',
    rating: 5
  },
  {
    name: 'Michael R.',
    location: 'Robina, QLD',
    text: 'On time, friendly, and the pest problem was solved quickly.',
    rating: 5
  },
  {
    name: 'Jennifer L.',
    location: 'Tweed Heads, NSW',
    text: 'Great service from start to finish. Highly recommended.',
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

      {/* HERO (NO IMAGE, CLEAN & PROFESSIONAL) */}
      <section className="py-28 px-4 text-center bg-green-700">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Professional Pest Control – Gold Coast
        </h1>
        <p className="text-green-100 max-w-2xl mx-auto mb-8">
          Safe, effective, and reliable pest control solutions for homes and businesses.
        </p>
        <a
          href="tel:+614XXXXXXXX"
          className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold"
        >
          Get a Free Quote
        </a>
      </section>

      {/* WHY US */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <ShieldCheck className="h-10 w-10 mx-auto text-green-600 mb-3" />
            <h3 className="font-semibold mb-2">Licensed & Insured</h3>
            <p className="text-gray-600 text-sm">
              Fully certified professionals you can trust.
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
              Long-lasting protection you can rely on.
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
              className="bg-white rounded-xl shadow overflow-hidden"
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