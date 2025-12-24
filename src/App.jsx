import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";
import { Leaf, Star, Mail, MapPin, Clock } from "lucide-react";

/* ================= SERVICES DATA ================= */
const services = [
  {
    slug: "ant-control",
    name: "Ant Control",
    image:
      "https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?auto=format&fit=crop&w=800&q=80",
    desc:
      "Our ant control solutions target colonies at the source using proven treatment methods. We focus on long-term prevention while ensuring family and pet-safe applications."
  },
  {
    slug: "termite-control",
    name: "Termite Control",
    image:
      "https://images.unsplash.com/photo-1598514982846-5d5b4b2d64f8?auto=format&fit=crop&w=800&q=80",
    desc:
      "Comprehensive termite inspections and treatment plans designed to protect your property from costly structural damage."
  },
  {
    slug: "rodent-control",
    name: "Rodent Control",
    image:
      "https://images.unsplash.com/photo-1604908554164-9f7b1c1b1c18?auto=format&fit=crop&w=800&q=80",
    desc:
      "Humane rodent control services including trapping, exclusion, and prevention strategies to keep your home secure."
  },
  {
    slug: "cockroach-control",
    name: "Cockroach Control",
    image:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80",
    desc:
      "Targeted cockroach treatments suitable for residential and commercial spaces, designed to reduce activity and prevent reinfestation."
  },
  {
    slug: "mosquito-control",
    name: "Mosquito Control",
    image:
      "https://images.unsplash.com/photo-1595433707802-46c7d1e4b9c0?auto=format&fit=crop&w=800&q=80",
    desc:
      "Outdoor mosquito control programs that help reduce bites and protect your family from mosquito-borne illnesses."
  },
  {
    slug: "bed-bug-treatment",
    name: "Bed Bug Treatment",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80",
    desc:
      "Professional bed bug treatments with follow-up inspections to ensure complete eradication and peace of mind."
  }
];

/* ================= REVIEWS ================= */
const reviews = [
  {
    name: "Sarah M.",
    location: "Southport, QLD",
    text:
      "Very professional service. Explained everything clearly and the results were excellent.",
    rating: 5
  },
  {
    name: "Michael R.",
    location: "Robina, QLD",
    text:
      "On time, friendly and eco-conscious solutions. Highly recommended.",
    rating: 5
  },
  {
    name: "Jennifer L.",
    location: "Tweed Heads, NSW",
    text:
      "Great experience from booking to completion. Will definitely use again.",
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

/* ================= NAV ================= */
function Navbar() {
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <Leaf className="h-7 w-7 text-green-600" />
          <span className="ml-2 font-bold text-lg">
            Eco Shield Pest Control Services
          </span>
        </div>

        <div className="flex gap-8 font-medium text-gray-700">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

/* ================= HOME ================= */
function Home() {
  return (
    <>
      <section
        className="py-28 px-4 text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1601758123927-196d0c22c09e?auto=format&fit=crop&w=1600&q=80')"
        }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          We’re The Bug Busters!
        </h1>
        <p className="text-gray-200 max-w-3xl mx-auto mb-6">
          Unwanted pests don’t just cause inconvenience -- they can damage
          property, spread disease, and create stress. Eco Shield Pest Control
          Services delivers reliable and affordable pest control solutions
          designed to give you peace of mind.
        </p>
        <Link
          to="/contact"
          className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold inline-block"
        >
          Get a Free Quote
        </Link>
      </section>
    </>
  );
}

/* ================= ABOUT ================= */
function About() {
  return (
    <section className="py-20 px-4 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">About Us</h2>
      <p className="text-gray-600">
        Eco Shield Pest Control Services provides professional pest management
        solutions for homes and businesses across the Gold Coast and surrounding
        areas. Our licensed technicians focus on safe, effective, and
        environmentally responsible treatments.
      </p>
    </section>
  );
}

/* ================= SERVICES ================= */
function Services() {
  return (
    <section className="py-20 bg-gray-50 px-4">
      <h2 className="text-3xl font-bold text-center mb-14">
        Our Pest Control Services
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((s) => (
          <Link
            to={`/services/${s.slug}`}
            key={s.slug}
            className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
          >
            <div className="h-40 w-full overflow-hidden">
              <img src={s.image} alt={s.name} className="h-full w-full object-cover" />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold mb-2">{s.name}</h3>
              <p className="text-gray-600 text-sm">{s.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

/* ================= SERVICE DETAIL ================= */
function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) return <div className="p-10">Service not found.</div>;

  return (
    <section className="py-20 px-4 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">{service.name}</h2>
      <p className="text-gray-600 mb-6">{service.desc}</p>
      <Link
        to="/contact"
        className="bg-green-600 text-white px-6 py-3 rounded-lg"
      >
        Book This Service
      </Link>
    </section>
  );
}

/* ================= CONTACT ================= */
function Contact() {
  return (
    <section className="py-20 px-4 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center">Contact Us</h2>

      <div className="bg-gray-50 p-8 rounded-xl space-y-4 text-gray-700">
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
  );
}

/* ================= APP ================= */
export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}