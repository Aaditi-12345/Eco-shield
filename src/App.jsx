import React, { useState } from "react";
import {
  Leaf,
  Star,
  Mail,
  MapPin,
  Clock,
  Bug,
  ShieldCheck,
  Phone,
  CheckCircle2,
  ChevronRight
} from "lucide-react";

/* ================= DATA ================= */
const services = [
  { name: "Ant Control", icon: <Bug />, desc: "Targeted treatments that disrupt breeding cycles for long-term protection." },
  { name: "Termite Protection", icon: <ShieldCheck />, desc: "Comprehensive inspections and barriers to protect your structure." },
  { name: "Rodent Control", icon: <Bug />, desc: "Professional exclusion and removal to keep your property rodent-free." },
  { name: "Cockroach Control", icon: <Bug />, desc: "Eliminate infestations in high-risk areas like kitchens and bathrooms." },
  { name: "Bed Bug Treatment", icon: <Bug />, desc: "Detailed eradication using industry-grade, eco-friendly treatments." },
  { name: "Mosquito Control", icon: <Bug />, desc: "Reduce outdoor breeding areas to protect your family from bites." }
];

const reviews = [
  { name: "Sarah M.", text: "The team explained everything clearly and the results were excellent.", rating: 5 },
  { name: "Michael R.", text: "Friendly technicians and eco-conscious solutions. Highly recommended.", rating: 5 },
  { name: "Jennifer L.", text: "Smooth experience from booking to completion. Will definitely use again.", rating: 5 }
];

/* ================= COMPONENTS ================= */

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* 1. NAVIGATION */}
      <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center group cursor-pointer">
            <div className="bg-green-600 p-2 rounded-lg group-hover:bg-green-700 transition">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <span className="ml-3 font-bold text-xl tracking-tight">
              Eco<span className="text-green-600">Shield</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8 text-sm font-semibold text-slate-600">
            <a href="#services" className="hover:text-green-600 transition">Services</a>
            <a href="#about" className="hover:text-green-600 transition">About</a>
            <a href="#reviews" className="hover:text-green-600 transition">Reviews</a>
            <a href="tel:000000000" className="bg-green-600 text-white px-5 py-2.5 rounded-full flex items-center hover:bg-green-700 transition shadow-lg shadow-green-200">
              <Phone className="h-4 w-4 mr-2" /> Call Now
            </a>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
     <header id="home" className="relative h-[85vh] flex items-center overflow-hidden bg-[#0a192f]">
  {/* The Image Container */}
  <div className="absolute inset-0 z-0">
    <img 
      src="https://images.pexels.com/photos/8963961/pexels-photo-8963961.jpeg?auto=compress&cs=tinysrgb&w=1600" 
      className="w-full h-full object-cover object-center brightness-40" 
      alt="Pest Control Technician"
      onError={(e) => {
        // This is a backup link just in case the first one fails
        e.target.src = "https://images.pexels.com/photos/8963957/pexels-photo-8963957.jpeg?auto=compress&cs=tinysrgb&w=1600";
      }}
    />
    {/* This gradient makes the bottom of the image fade into the next section */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a192f]/50"></div>
  </div>
  
  <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
    <div className="max-w-2xl bg-black/30 p-8 rounded-3xl backdrop-blur-sm border border-white/10">
      <span className="text-green-400 font-bold tracking-widest uppercase text-xs mb-4 block">
        Gold Coast Licensed & Insured
      </span>
      <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
        The Bug <span className="text-green-500 underline decoration-green-500/30">Busters</span>
      </h1>
      <p className="text-xl text-slate-200 mb-10 leading-relaxed font-medium">
        Safe, reliable, and eco-friendly solutions for your home. 
        We protect your family from unwanted pests using the latest technology.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a href="#contact" className="bg-green-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-green-700 hover:scale-105 transition-all text-center shadow-2xl shadow-green-900/40">
          Get a Free Quote
        </a>
      </div>
    </div>
  </div>
</header>
      {/* 3. TRUST BAR */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Licensed & Insured", icon: <ShieldCheck className="text-green-600"/> },
            { label: "Pet Safe Methods", icon: <Leaf className="text-green-600"/> },
            { label: "24/7 Support", icon: <Clock className="text-green-600"/> },
            { label: "Satisfaction Guaranteed", icon: <CheckCircle2 className="text-green-600"/> }
          ].map((item, i) => (
            <div key={i} className="flex items-center space-x-3 justify-center">
              {item.icon}
              <span className="font-bold text-slate-700 text-sm md:text-base">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SERVICES GRID */}
      <section id="services" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Our Specialized Solutions</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Effective pest management tailored to the unique climate of the Gold Coast.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div key={i} className="group bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="bg-green-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
                  <div className="text-green-600 group-hover:text-white transition-colors">
                    {React.cloneElement(s.icon, { className: "h-8 w-8" })}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{s.name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{s.desc}</p>
                <a href="#contact" className="text-green-600 font-bold text-sm flex items-center group-hover:underline">
                  Learn more <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CONTACT SECTION (Interactive Form) */}
      <section id="contact" className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 relative z-10">
          <div>
            <h2 className="text-4xl font-bold mb-6">Ready to live bug-free?</h2>
            <p className="text-slate-400 mb-10 text-lg">Fill out the form and a technician will contact you within 2 hours for a free, no-obligation assessment.</p>
            
            <div className="space-y-6">
              <div className="flex items-center p-4 bg-white/5 rounded-2xl border border-white/10">
                <Phone className="h-6 w-6 text-green-500 mr-4" />
                <div>
                  <p className="text-sm text-slate-400">Call Us Directly</p>
                  <p className="font-bold text-lg">0400 000 000</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-white/5 rounded-2xl border border-white/10">
                <MapPin className="h-6 w-6 text-green-500 mr-4" />
                <div>
                  <p className="text-sm text-slate-400">Service Area</p>
                  <p className="font-bold text-lg">Gold Coast & Surrounds</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="w-full p-4 bg-slate-50 rounded-xl border-none text-slate-900 focus:ring-2 focus:ring-green-500" />
                <input type="text" placeholder="Phone Number" className="w-full p-4 bg-slate-50 rounded-xl border-none text-slate-900 focus:ring-2 focus:ring-green-500" />
              </div>
              <input type="email" placeholder="Email Address" className="w-full p-4 bg-slate-50 rounded-xl border-none text-slate-900 focus:ring-2 focus:ring-green-500" />
              <select className="w-full p-4 bg-slate-50 rounded-xl border-none text-slate-500 focus:ring-2 focus:ring-green-500">
                <option>Select Service</option>
                {services.map(s => <option key={s.name}>{s.name}</option>)}
              </select>
              <textarea placeholder="Tell us about your pest problem..." rows="4" className="w-full p-4 bg-slate-50 rounded-xl border-none text-slate-900 focus:ring-2 focus:ring-green-500"></textarea>
              <button className="w-full bg-green-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition shadow-lg shadow-green-900/20">
                Send Free Quote Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-white border-t border-slate-100 text-center">
        <div className="flex items-center justify-center mb-6">
          <Leaf className="h-6 w-6 text-green-600 mr-2" />
          <span className="font-bold text-lg">EcoShield Pest Control</span>
        </div>
        <p className="text-slate-400 text-sm">© 2026 EcoShield Services. All Rights Reserved. Licensed & Insured.</p>
      </footer>

    </div>
  );
}
