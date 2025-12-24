import React from 'react';
import {
  Leaf,
  Bug,
  ShieldCheck,
  ThumbsUp,
  PhoneCall,
  Mail,
  MapPin,
  Clock
} from 'lucide-react';

/* ================= SERVICES ================= */
const services = [
  {
    name: 'Ant Control',
    icon: Bug,
    desc: 'Safe and effective ant control treatments that eliminate nests at the source.'
  },
  {
    name: 'Termite Control',
    icon: ShieldCheck,
    desc: 'Professional termite inspections and treatments to protect your property.'
  },
  {
    name: 'Rodent Control',
    icon: ThumbsUp,
    desc: 'Humane rodent removal with long-term prevention solutions.'
  },
  {
    name: 'Cockroach Control',
    icon: Bug,
    desc: 'Targeted cockroach treatments for homes and businesses.'
  },
  {
    name: 'Mosquito Control',
    icon: Bug,
    desc: 'Outdoor mosquito reduction programs for safer living.'
  },
  {
    name: 'Bed Bug Treatment',
    icon: ShieldCheck,
    desc: 'Complete bed bug eradication with professional follow-ups.'
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#EEF7F1] scroll-smooth">

      {/* NAV */}
      <nav className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
          <div className="flex items-center">
            <Leaf className="h-7 w-7 text-green-600" />
            <span className="ml-2 font-bold text-xl">EcoShield Pest Control</span>
          </div>

          <div className="hidden md:flex gap-6 text-sm font-semibold text-gray-700">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About Us</a>
            <a href="#appointment">Book Appointment</a>
            <a href="#enquiry">Enquiry</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* HOME */}
      <section id="home" className="py-36 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold text-green-800 mb-6">
          EcoShield Pest Control
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-700 mb-10">
          Trusted, eco-friendly pest control services for homes and businesses across the Gold Coast.
        </p>
        <a
          href="#appointment"
          className="bg-green-600 text-white px-10 py-4 rounded-xl font-semibold text-lg"
        >
          Book an Appointment
        </a>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 bg-white px-4">
        <h2 className="text-3xl font-bold text-center mb-14">Our Services</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="bg-[#F6FBF8] p-6 rounded-xl text-center shadow">
                <Icon className="h-12 w-12 mx-auto text-green-600 mb-4" />
                <h3 className="font-semibold text-lg mb-2">{s.name}</h3>
                <p className="text-gray-600 text-sm">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ABOUT US */}
      <section id="about" className="py-20 px-4 bg-[#EEF7F1]">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
        <p className="max-w-3xl mx-auto text-center text-gray-700 text-lg">
          EcoShield Pest Control is a licensed and insured pest management company
          providing safe, reliable, and environmentally responsible solutions.
          Our experienced technicians are committed to protecting your home and business.
        </p>
      </section>

      {/* APPOINTMENT */}
      <section id="appointment" className="py-20 bg-white px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Book an Appointment
        </h2>
        <form className="max-w-xl mx-auto bg-[#F6FBF8] p-8 rounded-xl space-y-4">
          <input type="text" placeholder="Full Name" className="w-full p-3 rounded border" />
          <input type="tel" placeholder="Phone Number" className="w-full p-3 rounded border" />
          <input type="date" className="w-full p-3 rounded border" />
          <input type="time" className="w-full p-3 rounded border" />
          <button className="w-full bg-green-600 text-white py-3 rounded font-semibold">
            Confirm Appointment
          </button>
        </form>
      </section>

      {/* ENQUIRY */}
      <section id="enquiry" className="py-20 px-4 bg-[#EEF7F1]">
        <h2 className="text-3xl font-bold text-center mb-10">Enquiry</h2>
        <form className="max-w-xl mx-auto bg-white p-8 rounded-xl space-y-4 shadow">
          <input type="text" placeholder="Name" className="w-full p-3 rounded border" />
          <input type="email" placeholder="Email" className="w-full p-3 rounded border" />
          <textarea placeholder="Your enquiry..." className="w-full p-3 rounded border h-32" />
          <button className="w-full bg-green-600 text-white py-3 rounded font-semibold">
            Send Enquiry
          </button>
        </form>
      </section>

      {/* CONTACT & SUPPORT */}
      <section id="contact" className="py-20 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">Contact & Support</h2>
        <div className="max-w-xl mx-auto bg-[#F6FBF8] p-8 rounded-xl space-y-4">
          <div className="flex items-center">
            <PhoneCall className="h-5 w-5 mr-2 text-green-600" />
            +61 4XX XXX XXX
          </div>
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