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
  {
    name: "Ant Control",
    icon: <Bug />,
    image: "https://images.unsplash.com/photo-1589923158776-cb4485d99fd6?auto=format&fit=crop&q=80&w=800",
    desc: "Targeted treatments that disrupt breeding cycles.",
    detailedDesc: "Our 3-step ant process involves identifying the species, locating the colony, and applying non-repellent barriers that ants carry back to the nest for total elimination."
  },
  {
    name: "Termite Protection",
    icon: <ShieldCheck />,
    image: "https://images.unsplash.com/photo-1632733711679-5292d6863670?auto=format&fit=crop&q=80&w=800",
    desc: "Comprehensive inspections and barriers.",
    detailedDesc: "We use thermal imaging for detection and install chemical barriers or baiting systems that provide 24/7 protection for your home's structure."
  },
  {
    name: "Rodent Control",
    icon: <Bug />,
    image: "https://images.unsplash.com/photo-1454564478170-985698f121df?auto=format&fit=crop&q=80&w=800",
    desc: "Exclusion and removal for a rodent-free property.",
    detailedDesc: "We focus on 'Exclusion'—finding every entry point and sealing it. We then use safe, tamper-proof stations to remove any remaining rodents."
  },
  {
    name: "Cockroach Control",
    icon: <Bug />,
    image: "https://images.unsplash.com/photo-1626460284906-8927902ba3f7?auto=format&fit=crop&q=80&w=800",
    desc: "Eliminate infestations in high-risk areas.",
    detailedDesc: "We use specialized gel baits and growth regulators that stop cockroaches from breeding, specifically targeting kitchens and wet areas."
  },
  {
    name: "Bed Bug Treatment",
    icon: <Bug />,
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
    desc: "Industry-grade, eco-friendly eradication.",
    detailedDesc: "Our bed bug treatment involves a deep-room inspection followed by eco-friendly steam and liquid treatments to ensure all life cycles are removed."
  },
  {
    name: "Mosquito Control",
    icon: <Bug />,
    image: "https://images.unsplash.com/photo-1573590502999-66005bd44b77?auto=format&fit=crop&q=80&w=800",
    desc: "Protect your family from bites.",
    detailedDesc: "We treat foliage where mosquitoes rest and identify standing water sources. Our barrier spray keeps your yard comfortable for up to 4 weeks."
  }
];

const reviews = [
  { name: "Sarah M.", text: "The team explained everything clearly and the results were excellent.", rating: 5 },
  { name: "Michael R.", text: "Friendly technicians and eco-conscious solutions. Highly recommended.", rating: 5 },
  { name: "Jennifer L.", text: "Smooth experience from booking to completion. Will definitely use again.", rating: 5 }
];

/* ================= COMPONENTS ================= */

export default function App() {
  const [selectedService, setSelectedService] = useState(null);
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* 1. NAVIGATION */}
      <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
    
    {/* Logo Area */}
    <div className="flex items-center group cursor-pointer">
      <div className="bg-green-600 p-2 rounded-lg group-hover:bg-green-700 transition">
        <Leaf className="h-6 w-6 text-white" />
      </div>
      <span className="ml-3 font-bold text-xl tracking-tight">
        Eco<span className="text-green-600">Shield</span>
      </span>
    </div>

    {/* Navigation Links - Now with Location & Contact */}
    <div className="hidden md:flex items-center space-x-8 text-sm font-semibold text-slate-600">
      <a href="#home" className="hover:text-green-600 transition">Home</a>
      <a href="#services" className="hover:text-green-600 transition">Services</a>
      <a href="#location" className="hover:text-green-600 transition">Service Area</a>
      <a href="#contact" className="hover:text-green-600 transition">Contact Us</a>
      
      {/* Clickable Phone Button */}
      <a href="tel:0400000000" className="bg-green-600 text-white px-5 py-2.5 rounded-full flex items-center hover:bg-green-700 transition shadow-lg shadow-green-200">
        <Phone className="h-4 w-4 mr-2" /> Call Now
      </a>
    </div>
    {/* --- UPDATED SERVICES SECTION --- */}
{/* ================= OUR SERVICES ================= */}
<section id="services" className="py-24 px-4 bg-slate-50">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Our Specialized Solutions</h2>
      <p className="text-slate-500 max-w-xl mx-auto italic">
        Select a service below to see our professional eco-friendly treatment process.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((s, i) => (
        <div 
          key={i} 
          onClick={() => setSelectedService(s)}
          className="group bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
        >
          {/* Icon Box */}
          <div className="bg-green-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
            <div className="text-green-600 group-hover:text-white transition-colors">
              {React.cloneElement(s.icon, { className: "h-8 w-8" })}
            </div>
          </div>

          <h3 className="text-xl font-bold mb-3 text-slate-900">{s.name}</h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-6">
            {s.desc}
          </p>

          {/* This is the only "View" button that should exist */}
          <div className="flex items-center text-green-600 font-bold text-xs uppercase tracking-widest group-hover:underline">
            View Treatment Process <ChevronRight className="h-4 w-4 ml-1" />
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
{/* --- THE POP-UP MODAL (Add this at the very bottom of your return) --- */}
{selectedService && (
  <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-md" onClick={() => setSelectedService(null)}></div>
    
    {/* Modal Content */}
    <div className="relative bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
      <button 
        onClick={() => setSelectedService(null)}
        className="absolute top-4 right-4 bg-white/80 rounded-full p-2 hover:bg-white z-10"
      >
        ✕
      </button>
      
      <div className="grid md:grid-cols-2">
        <img src={selectedService.image} alt={selectedService.name} className="h-64 md:h-full w-full object-cover" />
        <div className="p-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">{selectedService.name} Treatment</h3>
          <p className="text-slate-600 leading-relaxed mb-6">
            {selectedService.detailedDesc}
          </p>
          <div className="space-y-3">
            <div className="flex items-center text-sm font-bold text-green-700">
              <ShieldCheck className="h-4 w-4 mr-2" /> Safe for Pets & Kids
            </div>
            <div className="flex items-center text-sm font-bold text-green-700">
              <Clock className="h-4 w-4 mr-2" /> 12-Month Protection Guarantee
            </div>
          </div>
          <button 
            onClick={() => { setSelectedService(null); window.location.href="#contact"; }}
            className="mt-8 w-full bg-green-600 text-white py-3 rounded-xl font-bold hover:bg-green-700 transition"
          >
            Book This Treatment
          </button>
        </div>
      </div>
    </div>
  </div>
)}
  </div>
</nav>
      {/* 2. HERO SECTION */}
    <header id="home" className="relative h-[80vh] flex items-center overflow-hidden bg-emerald-950">
  {/* The Background Image */}
  <div className="absolute inset-0 z-0">
    <img 
      src="https://images.unsplash.com/photo-1513584684374-8bdb7489feef?auto=format&fit=crop&q=80&w=2000" 
      className="w-full h-full object-cover brightness-50" 
      alt="Beautiful eco-friendly home"
      onError={(e) => {
        // Backup link: Clean modern house with trees
        e.target.src = "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000";
      }}
    />
    {/* Soft overlay to make text extra readable */}
    <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 to-transparent"></div>
  </div>
  
  <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
    <div className="max-w-2xl">
      <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full mb-6">
        <Leaf className="h-4 w-4 text-green-400" />
        <span className="text-white text-xs font-bold uppercase tracking-widest">Safe • Effective • Eco-Friendly</span>
      </div>
      
      <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
        Protecting Your <br/>
        <span className="text-green-400">Home & Nature</span>
      </h1>
      
      <p className="text-xl text-slate-100 mb-10 leading-relaxed">
        Premium pest protection for Gold Coast families. We keep the bugs out 
        using methods that are safe for your garden, your pets, and your kids.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <a href="#contact" className="bg-green-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-all text-center shadow-xl shadow-green-900/40">
          Get a Free Quote
        </a>
        <a href="#services" className="bg-white text-emerald-900 px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-all text-center">
          Our Services
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
      {/* ================= OUR SERVICES (This is the section to replace) ================= */}
<section id="services" className="py-24 px-4 bg-slate-50">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Our Specialized Solutions</h2>
      <p className="text-slate-500 max-w-xl mx-auto">Click any pest below to see our professional treatment process.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((s, i) => (
        <div 
          key={i} 
          onClick={() => setSelectedService(s)}
          className="group bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
        >
          <div className="bg-green-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
            <div className="text-green-600 group-hover:text-white transition-colors">
              {/* This makes the icon grow slightly when hovered */}
              {React.cloneElement(s.icon, { className: "h-8 w-8" })}
            </div>
          </div>
          <h3 className="text-xl font-bold mb-3">{s.name}</h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-6">{s.desc}</p>
          <span className="text-green-600 font-bold text-sm flex items-center group-hover:underline">
            View Treatment Process <ChevronRight className="h-4 w-4 ml-1" />
          </span>
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
      <section id="location" className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      
      {/* Left Side: Text & Suburbs */}
      <div>
        <h2 className="text-4xl font-extrabold text-slate-900 mb-6">
          Serving the <span className="text-green-600">Gold Coast</span>
        </h2>
        <p className="text-lg text-slate-600 mb-8">
          We provide rapid-response pest control across the entire region. 
          From the beaches to the hinterland, we've got you covered.
        </p>
        
        <div className="grid grid-cols-2 gap-4">
          {[
            "Surfers Paradise", "Burleigh Heads", 
            "Robina & Varsity", "Southport", 
            "Helensvale", "Coolangatta"
          ].map((suburb) => (
            <div key={suburb} className="flex items-center text-slate-700 font-medium">
              <MapPin className="h-5 w-5 text-green-500 mr-2" />
              {suburb}
            </div>
          ))}
        </div>
        
        <div className="mt-10 p-6 bg-green-50 rounded-2xl border border-green-100">
          <p className="text-green-800 font-bold mb-2">Don't see your suburb?</p>
          <p className="text-green-700 text-sm">We cover all areas within 50km of the Gold Coast CBD. Call us to confirm!</p>
        </div>
      </div>

      {/* Right Side: Interactive Map */}
    <div className="h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112832.228965682!2d153.336497!3d-28.016667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b911a472b5d635f%3A0x3302d136f395eff1!2sGold%20Coast%20QLD!5e0!3m2!1sen!2sau!4v1700000000000!5m2!1sen!2sau" 
    width="100%" 
    height="100%" 
    style={{ border: 0 }} 
    allowFullScreen="" 
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade">
  </iframe>
</div>

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
{selectedService && (
  <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
    {/* 1. Backdrop (Makes everything else blurry and dark) */}
    <div 
      className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" 
      onClick={() => setSelectedService(null)}
    ></div>
    
    {/* 2. The Pop-up Card */}
    <div className="relative bg-white w-full max-w-3xl rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row animate-in fade-in zoom-in duration-200 max-h-[90vh]">
      
      {/* Close Button (X) */}
      <button 
        onClick={() => setSelectedService(null)}
        className="absolute top-4 right-4 z-50 bg-white/80 hover:bg-white text-slate-900 rounded-full p-2 shadow-md transition"
      >
        <span className="font-bold text-lg leading-none">✕</span>
      </button>

      {/* Image Side */}
      <div className="md:w-1/2 h-48 md:h-auto">
        <img 
          src={selectedService.image} 
          alt={selectedService.name} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Side */}
      <div className="p-8 md:w-1/2 overflow-y-auto">
        <h3 className="text-3xl font-bold text-slate-900 mb-4">{selectedService.name}</h3>
        <p className="text-slate-600 leading-relaxed mb-6">
          {selectedService.detailedDesc}
        </p>
        
        <div className="space-y-3 mb-8">
          <div className="flex items-center text-sm font-bold text-green-700">
            <CheckCircle2 className="h-4 w-4 mr-2" /> Safe for Families & Pets
          </div>
          <div className="flex items-center text-sm font-bold text-green-700">
            <CheckCircle2 className="h-4 w-4 mr-2" /> 12-Month Quality Guarantee
          </div>
        </div>

        <button 
          onClick={() => { setSelectedService(null); window.location.href="#contact"; }}
          className="w-full bg-green-600 text-white py-4 rounded-xl font-bold hover:bg-green-700 transition shadow-lg"
        >
          Book This Treatment
        </button>
      </div>
    </div>
  </div>
)}
    </div>
  );
}
