import React from "react";
import {
  Leaf,
  Star,
  Mail,
  MapPin,
  Clock,
  Bug,
  ShieldCheck
} from "lucide-react";

/* ================= SERVICES DATA ================= */
const services = [
  {
    name: "Ant Control",
    icon: <Bug className="h-8 w-8 text-green-600" />,
    desc:
      "Our ant control service targets nests at the source using proven treatments that disrupt ant trails and breeding cycles, ensuring long-lasting protection for your property."
  },
  {
    name: "Termite Protection",
    icon: <ShieldCheck className="h-8 w-8 text-green-600" />,
    desc:
      "We provide comprehensive termite inspections and preventative treatments designed to protect your structure and prevent costly long-term damage."
  },
  {
    name: "Rodent Control",
    icon: <Bug className="h-8 w-8 text-green-600" />,
    desc:
      "Humane rodent control solutions including removal, exclusion, and prevention methods to keep your home or business rodent-free."
  },
  {
    name: "Cockroach Control",
    icon: <Bug className="h-8 w-8 text-green-600" />,
    desc:
      "Targeted cockroach treatments that focus on high-risk areas like kitchens and bathrooms to eliminate infestations and prevent recurrence."
  },
  {
    name: "Bed Bug Treatment",
    icon: <Bug className="h-8 w-8 text-green-600" />,
    desc:
      "Professional bed bug eradication using detailed inspections and industry-grade treatments to ensure complete elimination."
  },
  {
    name: "Mosquito Control",
    icon: <Bug className="h-8 w-8 text-green-600" />,
    desc:
      "Outdoor mosquito treatments designed to reduce breeding areas and protect your family from bites and mosquito-borne illnesses."
  }
];

/* ================= REVIEWS ================= */
const reviews = [
  {
    name: "Sarah M.",
    text:
      "Very professional service. The team explained everything clearly and the results were excellent.",
    rating: 5
  },
  {
    name: "Michael R.",
    text:
      "Friendly technicians and eco-conscious solutions. Highly recommended.",
    rating: 5
  },
  {
    name: "Jennifer L.",
    text:
      "Smooth experience from booking to completion. Will definitely use again.",
    rating: 5
  }
];

const renderStars = (rating) =>
  Array.from({ length: 5 }).map((_, i) => (
    <Star
      key={i}
      className={`h-4 w-4 ${
        i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
      }`}
    />
  ));

/* ================= APP ================= */
export default function App() {
  return (
    <div className="min-h-screen bg-white">

      {/* ================= NAV ================= */}
      <nav className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <Leaf className="h-7 w-7 text-green-600" />
            <span className="ml-2 font-bold text-lg">
              Eco Shield Pest Control Services
            </span>
          </div>

          <div className="flex space-x-8 text-sm font-medium">
            <a href="#home" className="hover:text-green-600">Home</a>
            <a href="#about" className="hover:text-green-600">About</a>
            <a href="#services" className="hover:text-green-600">Services</a>
            <a href="#contact" className="hover:text-green-600">Contact</a>
          </div>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section
        id="home"
        className="py-28 px-4 text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(/mnt/data/E4B4FFED-E906-401D-A936-58C089CA9479.jpeg)"
        }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          We’re The Bug Busters
        </h1>
        <p className="text-gray-200 max-w-2xl mx-auto mb-6">
          Unwanted pests can damage property, spread disease, and create stress.
          Eco Shield Pest Control Services delivers reliable, affordable solutions
          to protect your home or business -- with fast response and long-lasting results.
        </p>
        <a
          href="#contact"
          className="bg-green-600 hover:bg-green-700 transition text-white px-8 py-3 rounded-lg font-semibold inline-block"
        >
          Get a Free Quote
        </a>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <img
            src="/mnt/data/827D3A44-569D-485A-98D7-52AEE052A544.jpeg"
            alt="Pest Control Treatment"
            className="rounded-xl shadow object-cover h-[320px] w-full"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Professional & Eco-Focused Pest Control
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our approach combines modern pest management techniques with
              environmentally responsible solutions. Every service starts with
              a detailed assessment, followed by tailored treatments designed
              for long-term protection.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="py-20 bg-gray-50 px-4">
        <h2 className="text-3xl font-bold text-center mb-14">
          Our Pest Control Services
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <a
              key={i}
              href="#contact"
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-6 text-center"
            >
              <div className="flex justify-center mb-4">
                {s.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {s.name}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {s.desc}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* ================= IMAGE FEATURE ================= */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <img
            src="/mnt/data/32ABEAB1-2ABA-42A9-BFDC-BBB91F9D79B6.jpeg"
            alt="Professional Pest Control Technician"
            className="rounded-xl shadow object-cover w-full h-[400px]"
          />
        </div>
      </section>

      {/* ================= REVIEWS ================= */}
      <section className="py-20 bg-[#EAF7EF] px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Customers Say
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
              <p className="font-semibold text-gray-900">
                {r.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-20 bg-white px-4">
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