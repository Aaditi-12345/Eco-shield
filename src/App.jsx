import React from "react";
import {
  Menu,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck
} from "lucide-react";

/* ================= SERVICES ================= */
const services = [
  {
    name: "Ant Treatment",
    desc:
      "Advanced ant control solutions designed to eliminate colonies at their source and prevent future invasions."
  },
  {
    name: "Cockroach Control",
    desc:
      "Precision cockroach treatments that target breeding areas and deliver long-lasting protection for your home."
  },
  {
    name: "Spider Management",
    desc:
      "Professional spider control services to reduce spider activity and keep indoor spaces web-free."
  },
  {
    name: "Rodent Solutions",
    desc:
      "Humane rodent removal using proven methods to block entry points and reduce re-infestation risks."
  },
  {
    name: "Termite Protection",
    desc:
      "Comprehensive termite inspections and barrier treatments to protect your property’s structure."
  },
  {
    name: "Bed Bug Elimination",
    desc:
      "Targeted bed bug treatments supported by follow-up inspections to ensure complete eradication."
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#f6f8fb] text-gray-800">

      {/* ================= NAV ================= */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="text-[#2c4f7c]" />
            <span className="font-bold text-lg text-[#2c4f7c]">
              BlueShield Pest
            </span>
          </div>
          <Menu className="h-6 w-6 text-gray-700 md:hidden" />
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-[#2c4f7c] to-[#1b3554] text-white py-28 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-5">
          Reliable Pest Control Services
        </h1>
        <p className="max-w-2xl mx-auto text-blue-100 mb-8">
          Professional pest management solutions tailored for residential and
          commercial properties across your local area.
        </p>
        <a
          href="tel:+61400000000"
          className="inline-flex items-center gap-2 bg-white text-[#1b3554] px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
        >
          <Phone className="h-5 w-5" />
          Request a Free Quote
        </a>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-20 px-4">
        <h2 className="text-3xl font-bold text-center text-[#1b3554] mb-4">
          Our Pest Control Solutions
        </h2>

        <p className="text-center text-gray-600 max-w-xl mx-auto mb-14">
          We offer reliable, safe, and effective pest control services designed
          to protect your property year-round.
        </p>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-8"
            >
              <h3 className="text-xl font-semibold text-[#2c4f7c] mb-3">
                {service.name}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.desc}
              </p>
              <button className="text-sm font-semibold text-[#2c4f7c] border border-[#2c4f7c] px-5 py-2 rounded-md hover:bg-[#2c4f7c] hover:text-white transition">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="py-20 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center text-[#1b3554] mb-12">
          Get in Touch
        </h2>

        <div className="max-w-xl mx-auto bg-[#f6f8fb] rounded-xl p-8 space-y-4">
          <div className="flex items-center gap-3">
            <Mail className="text-[#2c4f7c]" />
            info@blueshieldpest.com
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="text-[#2c4f7c]" />
            Serving Local & Surrounding Areas
          </div>
          <div className="flex items-center gap-3">
            <Clock className="text-[#2c4f7c]" />
            Mon – Sun: 7:00 AM – 8:00 PM
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#1b3554] text-blue-100 text-center py-6">
        © {new Date().getFullYear()} BlueShield Pest Control. All rights reserved.
      </footer>

    </div>
  );
}