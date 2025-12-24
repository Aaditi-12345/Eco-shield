import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  Phone,
  Mail,
  ChevronDown,
  ShieldCheck,
  MessageCircle
} from "lucide-react";

/* ================= SERVICES ================= */
const services = [
  {
    name: "Ant Control",
    desc: "Targeted ant treatments that remove colonies and prevent return activity.",
    details:
      "Our ant control service focuses on identifying nest locations and applying professional-grade treatments that stop ants at the source."
  },
  {
    name: "Cockroach Control",
    desc: "Effective cockroach control for kitchens, units, and commercial spaces.",
    details:
      "We use low-toxicity treatments that target cockroach breeding zones and provide long-lasting protection."
  },
  {
    name: "Spider Control",
    desc: "Reduce spider activity and keep your home web-free.",
    details:
      "Spider control treatments designed to minimise webs and reduce future nesting."
  },
  {
    name: "Rodent Control",
    desc: "Humane rodent removal with entry-point prevention.",
    details:
      "Our rodent services focus on removal, exclusion, and prevention to stop reinfestation."
  },
  {
    name: "Termite Protection",
    desc: "Professional inspections and termite protection systems.",
    details:
      "We provide inspections and protective barriers to safeguard your property’s structure."
  },
  {
    name: "Bed Bug Treatment",
    desc: "Complete bed bug elimination with follow-up monitoring.",
    details:
      "Our treatment plans include targeted applications and follow-up checks to ensure full eradication."
  }
];

/* ================= SCROLL ANIMATION HOOK ================= */
function useReveal() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setShow(true),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, show];
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const [bookingOpen, setBookingOpen] = useState(false);

  const [servicesRef, servicesVisible] = useReveal();

  return (
    <div className="min-h-screen bg-[#f4f6f9] text-gray-800">

      {/* ================= SEO SCHEMA ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Eco Shield Pest Control Services",
            telephone: "+61400000000",
            areaServed: "Australia",
            serviceType: "Pest Control"
          })
        }}
      />

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

      {/* ================= SERVICES ================= */}
      <section
        ref={servicesRef}
        className={`py-20 px-4 transition-all duration-700 ${
          servicesVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-[#1f3e5f]">
          Our Services
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow hover:shadow-lg hover:-translate-y-1 transition"
            >
              <h3 className="text-xl font-semibold text-[#2f5d8a] mb-3">
                {s.name}
              </h3>
              <p className="text-gray-600 mb-6">{s.desc}</p>
              <button
                onClick={() => setActiveService(s)}
                className="text-sm font-semibold border border-[#2f5d8a] px-5 py-2 rounded-md text-[#2f5d8a] hover:bg-[#2f5d8a] hover:text-white transition"
              >
                Know More
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SERVICE DETAIL MODAL ================= */}
      {activeService && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
          <div className="bg-white max-w-md w-full rounded-xl p-6 relative">
            <button
              onClick={() => setActiveService(null)}
              className="absolute top-4 right-4"
            >
              <X />
            </button>
            <h3 className="text-xl font-bold mb-3 text-[#2f5d8a]">
              {activeService.name}
            </h3>
            <p className="text-gray-600 mb-4">
              {activeService.details}
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
              <textarea
                className="w-full border p-3 rounded"
                placeholder="Message"
              />
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
        © {new Date().getFullYear()} Eco Shield Pest Control Services
      </footer>

    </div>
  );
}