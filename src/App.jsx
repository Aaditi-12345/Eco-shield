import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  Phone,
  MessageCircle,
  ShieldCheck
} from "lucide-react";

/* ================= SERVICES ================= */
const services = [
  {
    name: "Ant Control",
    desc:
      "Our ant control services eliminate active infestations while preventing new colonies from forming. We identify nesting sites and apply targeted treatments that disrupt ant trails and breeding cycles."
  },
  {
    name: "Cockroach Control",
    desc:
      "Cockroaches pose serious health risks and spread bacteria quickly. Our treatments focus on kitchens, bathrooms, and high-risk areas using professional-grade solutions for long-term protection."
  },
  {
    name: "Spider Control",
    desc:
      "Our spider control services reduce spider activity by treating entry points, webbing areas, and harbourage zones, keeping your indoor spaces comfortable and web-free."
  },
  {
    name: "Rodent Control",
    desc:
      "Rodents can cause structural damage and contaminate food. We provide humane removal combined with exclusion methods to block access points and prevent reinfestation."
  },
  {
    name: "Termite Protection",
    desc:
      "Termites can cause extensive damage if left untreated. Our termite services include inspections, preventative treatments, and protective barrier systems for long-term peace of mind."
  },
  {
    name: "Bed Bug Treatment",
    desc:
      "Bed bugs are persistent pests that require professional treatment. Our service includes targeted applications, detailed inspections, and follow-up visits to ensure complete eradication."
  }
];

/* ================= SCROLL REVEAL HOOK ================= */
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const [bookingOpen, setBookingOpen] = useState(false);

  const [trustRef, trustVisible] = useReveal();
  const [servicesRef, servicesVisible] = useReveal();

  return (
    <div className="min-h-screen bg-[#f4f6f9] text-gray-800">

      {/* ================= NAV ================= */}
      <nav className="bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <ShieldCheck className="text-[#2f5d8a]" />
            <span className="font-bold text-[#2f5d8a]">
              Eco Shield Pest Control Services
            </span>
          </div>
          <button onClick={() => setMenuOpen(true)} className="md:hidden">
            <Menu />
          </button>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/50 z-50">
          <div className="absolute right-0 top-0 w-72 h-full bg-white p-6">
            <button
              className="absolute top-4 right-4"
              onClick={() => setMenuOpen(false)}
            >
              <X />
            </button>
            <nav className="mt-10 space-y-4 font-medium">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Services</a>
              <a href="#">Contact</a>
            </nav>
          </div>
        </div>
      )}

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-[#2f5d8a] to-[#1f3e5f] text-white py-28 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Professional Pest Control You Can Trust
        </h1>
        <p className="max-w-2xl mx-auto text-blue-100 mb-8">
          Safe, reliable, and effective pest control services for homes and
          businesses.
        </p>
        <button
          onClick={() => setBookingOpen(true)}
          className="bg-white text-[#1f3e5f] px-8 py-3 rounded-lg font-semibold hover:scale-105 transition"
        >
          Book an Inspection
        </button>
      </section>

      {/* ================= TRUST SECTION ================= */}
      <section
        ref={trustRef}
        className={`bg-white py-16 px-4 transition-all duration-700 ${
          trustVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1f3e5f] mb-4">
            Trusted Pest Control from Eco Shield
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Pest infestations can cause property damage, health concerns, and
            ongoing stress if left untreated. Eco Shield Pest Control Services
            provides professional and affordable solutions designed to eliminate
            pests and prevent future issues. Our technicians are available 24/7
            with same-day service options.
          </p>
        </div>
      </section>

      {/* ================= WHY PEST CONTROL ================= */}
      <section className="bg-[#f4f6f9] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1f3e5f] mb-4">
            Why Professional Pest Control Matters
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Ignoring pest problems can lead to costly repairs and ongoing hygiene
            risks. Professional pest control not only removes existing pests but
            also helps prevent future infestations through expert monitoring and
            preventative treatments.
          </p>
        </div>
      </section>

      {/* ================= OUR APPROACH ================= */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1f3e5f] mb-4">
            Our Approach
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Every service begins with a detailed assessment followed by a
            tailored treatment plan. We focus on safe, low-toxicity methods while
            delivering effective, long-lasting results.
          </p>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section
        ref={servicesRef}
        className={`py-20 px-4 transition-all duration-700 ${
          servicesVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl font-bold text-center text-[#1f3e5f] mb-12">
          Our Pest Control Services
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow hover:shadow-lg hover:-translate-y-1 transition"
            >
              <h3 className="text-xl font-semibold text-[#2f5d8a] mb-3">
                {service.name}
              </h3>
              <p className="text-gray-600 mb-6">
                {service.desc}
              </p>
              <button
                onClick={() => setActiveService(service)}
                className="border border-[#2f5d8a] text-[#2f5d8a] px-5 py-2 rounded-md font-semibold hover:bg-[#2f5d8a] hover:text-white transition"
              >
                Know More
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SERVICE MODAL ================= */}
      {activeService && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
          <div className="bg-white max-w-md w-full rounded-xl p-6 relative">
            <button
              onClick={() => setActiveService(null)}
              className="absolute top-4 right-4"
            >
              <X />
            </button>
            <h3 className="text-xl font-bold text-[#2f5d8a] mb-3">
              {activeService.name}
            </h3>
            <p className="text-gray-600 mb-4">
              {activeService.desc}
            </p>
            <button
              onClick={() => {
                setActiveService(null);
                setBookingOpen(true);
              }}
              className="bg-[#2f5d8a] text-white px-5 py-2 rounded-md"
            >
              Book This Service
            </button>
          </div>
        </div>
      )}

      {/* ================= BOOKING MODAL ================= */}
      {bookingOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
          <div className="bg-white max-w-md w-full rounded-xl p-6 relative">
            <button
              onClick={() => setBookingOpen(false)}
              className="absolute top-4 right-4"
            >
              <X />
            </button>
            <h3 className="text-xl font-bold mb-4 text-[#2f5d8a]">
              Book an Inspection
            </h3>
            <form className="space-y-4">
              <input className="w-full border p-3 rounded" placeholder="Name" />
              <input className="w-full border p-3 rounded" placeholder="Phone" />
              <textarea className="w-full border p-3 rounded" placeholder="Message" />
              <button className="bg-[#2f5d8a] text-white w-full py-3 rounded-md">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ================= FLOATING BUTTONS ================= */}
      <div className="fixed right-4 bottom-6 flex flex-col gap-3 z-40">
        <a
          href="https://wa.me/61400000000"
          className="bg-green-500 p-3 rounded-full text-white shadow hover:scale-110 transition"
        >
          <MessageCircle />
        </a>
        <a
          href="tel:+61400000000"
          className="bg-[#1f3e5f] p-3 rounded-full text-white shadow hover:scale-110 transition"
        >
          <Phone />
        </a>
      </div>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#1f3e5f] text-blue-100 text-center py-6">
        © {new Date().getFullYear()} Eco Shield Pest Control Services. All rights reserved.
      </footer>

    </div>
  );
}