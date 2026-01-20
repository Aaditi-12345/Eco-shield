import React, { useState } from "react";
import {
  Leaf,
  MapPin,
  Clock,
  Bug,
  ShieldCheck,
  Phone,
  CheckCircle2,
  ChevronRight,
  Zap,
  Rat, // New icon for Rodents
  Wind // New icon for Flies/Mosquitoes
  Scissors, // For Carpet Cleaning
  Flame, // For Fleas/Heat
  Wind // For Wasps/Flying
} from "lucide-react";
/* ================= DATA ================= */
const services = [
  {
    name: "Spider Treatment",
    icon: <Bug />,
    desc: "Targeted external and internal web-free protection.",
    detailedPlan: [
      "Web Sweeping: Removing all existing webs from eaves, windows, and fences.",
      "Crack & Crevice Injection: Treating deep into brickwork where spiders hide.",
      "Residual Perimeter: Applying a long-lasting barrier to prevent new spiders.",
      "Roof Void Dusting: Specialized dust treatment for ceiling cavities.",
      "Safety Check: Identifying Redback or Funnel-web high-risk habitats."
    ]
  },
  {
    name: "Fleas Treatment",
    icon: <Flame />,
    desc: "Full life-cycle eradication for pet-friendly homes.",
    detailedPlan: [
      "Life-Cycle Audit: Identifying the infestation level in carpets and bedding.",
      "IGR Application: Using Growth Regulators to stop eggs from hatching.",
      "Sub-Floor Treatment: Treating dark, sandy areas under the home.",
      "Internal Blanket Spray: Safe, fine-mist application to all flooring surfaces.",
      "Client Protocol: Detailed advice on pet treatment and vacuuming cycles."
    ]
  },
  {
    name: "Wasps Removal",
    icon: <Wind />,
    desc: "Safe elimination of nests and stinging threats.",
    detailedPlan: [
      "Protective Approach: Technicians use full-body stinger-proof suits.",
      "Direct Injection: Rapid-acting agent applied directly into the nest core.",
      "Nest Removal: Physical removal and disposal of the hive structure.",
      "Pheromone Scrub: Cleaning the area to prevent new queens from returning.",
      "Attic Inspection: Checking vents and eaves for secondary hidden nests."
    ]
  },
  {
    name: "Steam Carpet Cleaning",
    icon: <Scissors />,
    desc: "Professional deep-clean and sanitization.",
    detailedPlan: [
      "Industrial Vacuum: High-power suction to remove deep-seated dry soil.",
      "Pre-Stain Treatment: Targeted enzymes for high-traffic areas and spills.",
      "Hot Water Extraction: 210°F steam to kill bacteria and dust mites.",
      "Eco-Disinfectant: Applied for a fresh, allergen-free finish.",
      "Rapid-Dry System: Using air-movers to ensure carpets are walk-on ready."
    ]
  },
  {
    name: "Rodent Control",
    icon: <Rat />,
    desc: "Exclusion and removal for a rodent-free property.",
    detailedPlan: [
      "Exclusion Audit: We find every hole larger than a pencil and seal it.",
      "Sanitation Check: Identifying food sources attracting rodents.",
      "Trapping Program: Using humane and pet-safe snap-traps in roof voids.",
      "Secure Baiting: Tamper-proof stations placed strategically outdoors.",
      "Decontamination: Treating affected areas to remove pheromones."
    ]
  },
  {
    name: "Ant Control",
    icon: <Bug />,
    desc: "Eliminate colonies and prevent indoor trails.",
    detailedPlan: [
      "Species ID: Identifying if they are Sugar, Carpenter, or Fire ants.",
      "Colony Mapping: Finding the entry points and the main nest.",
      "Non-Repellent Barrier: A liquid perimeter that ants carry to the queen.",
      "Internal Gel Baiting: Safe, targeted baits placed in cracks.",
      "Follow-up: 14-day check to ensure total colony eradication."
    ]
  }
];

export default function App() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* 1. FLOATING PROMO POP-UP (Bottom Left) */}
      <div className="fixed bottom-6 left-6 z-[60] animate-bounce">
        <div className="bg-yellow-400 text-slate-900 p-4 rounded-2xl shadow-2xl border-2 border-white max-w-[250px]">
          <div className="flex items-center mb-1">
            <Zap className="h-5 w-5 mr-2 fill-current" />
            <span className="font-black uppercase text-xs tracking-tighter">Limited Offer</span>
          </div>
          <p className="font-bold text-sm leading-tight">
            General Pest Spray <span className="text-red-600 font-black text-lg">$120</span>
          </p>
          <p className="text-[10px] font-bold opacity-80 uppercase mt-1">
            + FREE Disinfectant Spray!
          </p>
          <p className="text-[9px] mt-2 italic font-semibold">Valid until 28th Feb</p>
        </div>
      </div>

      {/* 2. NAVIGATION */}
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
            <a href="#home" className="hover:text-green-600 transition">Home</a>
            <a href="#services" className="hover:text-green-600 transition">Services</a>
            <a href="#location" className="hover:text-green-600 transition">Service Area</a>
            <a href="#contact" className="hover:text-green-600 transition">Contact Us</a>
            <a href="tel:0400000000" className="bg-green-600 text-white px-5 py-2.5 rounded-full flex items-center hover:bg-green-700 transition shadow-lg">
              <Phone className="h-4 w-4 mr-2" /> Call Now
            </a>
          </div>
        </div>
      </nav>

      {/* 3. HERO SECTION with Insect Pattern Background */}
      <header id="home" className="relative h-[85vh] flex items-center overflow-hidden bg-emerald-950">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6199f7d009?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover brightness-[0.4]" 
            alt="Modern Home"
          />
          {/* Subtle Insect Pattern Overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" 
               style={{backgroundImage: `url("https://www.transparenttextures.com/patterns/microbial-culture.png")`}}>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-white">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 bg-green-600/20 backdrop-blur-md border border-green-400/30 px-4 py-2 rounded-full mb-6 text-xs font-bold uppercase tracking-widest text-green-400">
              <Bug className="h-4 w-4" /> Professional Insect Eradication
            </div>
            <h1 className="text-6xl md:text-8xl font-extrabold leading-none mb-6">
              Eco-Safe <br/><span className="text-green-500 italic">Pest Control</span>
            </h1>
            <p className="text-xl text-slate-200 mb-10 leading-relaxed max-w-lg">
              Advanced protection for Gold Coast homes. We specialize in ants, termites, and rodents using family-safe methods.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-green-600 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-green-500 transition-all text-center shadow-2xl shadow-green-900/50">Claim $120 Offer</a>
              <a href="#services" className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all text-center">View Treatments</a>
            </div>
          </div>
        </div>
      </header>

      {/* 4. TRUST BAR */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Licensed & Insured", icon: <ShieldCheck className="text-green-600"/> },
            { label: "Pet Safe Methods", icon: <Leaf className="text-green-600"/> },
            { label: "24/7 Support", icon: <Clock className="text-green-600"/> },
            { label: "Satisfaction Guaranteed", icon: <CheckCircle2 className="text-green-600"/> }
          ].map((item, i) => (
            <div key={i} className="flex items-center space-x-3 justify-center font-bold text-slate-700 text-sm md:text-base">
              {item.icon} <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. SERVICES GRID */}
      <section id="services" className="py-24 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-slate-900 mb-4 tracking-tight">Our Specialized Solutions</h2>
            <div className="h-1.5 w-24 bg-green-500 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-500 max-w-xl mx-auto font-medium">Click any pest below to see our professional 5-step treatment process.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div key={i} onClick={() => setSelectedService(s)} className="group bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-200 hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer">
                <div className="bg-slate-50 w-20 h-20 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-green-600 transition-colors">
                  <div className="text-green-600 group-hover:text-white transition-colors">{React.cloneElement(s.icon, { className: "h-10 w-10" })}</div>
                </div>
                <h3 className="text-2xl font-bold mb-3">{s.name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">{s.desc}</p>
                <span className="text-green-600 font-bold text-sm flex items-center group-hover:underline uppercase tracking-wider">Plan Details <ChevronRight className="h-4 w-4 ml-2" /></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CONTACT SECTION */}
      <section id="contact" className="py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16">
          <div className="flex flex-col justify-center">
            <h2 className="text-5xl font-black mb-6">Ready to live bug-free?</h2>
            <p className="text-slate-400 mb-10 text-xl leading-relaxed">Book your Gold Coast assessment today and lock in our current $120 general spray promotion.</p>
            <div className="space-y-6">
              <div className="flex items-center p-6 bg-white/5 rounded-3xl border border-white/10">
                <Phone className="h-8 w-8 text-green-500 mr-6" />
                <div><p className="text-sm text-slate-500 font-bold uppercase tracking-widest">Call Now</p><p className="font-bold text-2xl">0400 000 000</p></div>
              </div>
              <div className="flex items-center p-6 bg-white/5 rounded-3xl border border-white/10">
                <MapPin className="h-8 w-8 text-green-500 mr-6" />
                <div><p className="text-sm text-slate-500 font-bold uppercase tracking-widest">Service Area</p><p className="font-bold text-2xl">Gold Coast, QLD</p></div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-[3rem] p-10 shadow-2xl text-slate-900 border-8 border-slate-900">
            <h4 className="text-2xl font-black mb-8">Request a Quote</h4>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full p-5 bg-slate-100 rounded-2xl border-none font-medium" />
              <input type="text" placeholder="Mobile Number" className="w-full p-5 bg-slate-100 rounded-2xl border-none font-medium" />
              <textarea placeholder="Tell us about the pests..." rows="4" className="w-full p-5 bg-slate-100 rounded-2xl border-none font-medium"></textarea>
              <button className="w-full bg-green-600 text-white py-5 rounded-2xl font-black text-xl hover:bg-green-700 transition">Get Started</button>
            </form>
          </div>
        </div>
      </section>

      {/* 7. LOCATION SECTION */}
      <section id="location" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl font-black text-slate-900 mb-8 leading-tight">Serving the <br/><span className="text-green-600">Gold Coast</span></h2>
              <p className="text-xl text-slate-500 mb-10 font-medium">Rapid-response pest control from Coolangatta to Coomera.</p>
              <div className="grid grid-cols-2 gap-6">
                {["Surfers Paradise", "Burleigh Heads", "Robina", "Southport", "Helensvale", "Coolangatta"].map((suburb) => (
                  <div key={suburb} className="flex items-center text-slate-900 font-bold">
                    <CheckCircle2 className="h-6 w-6 text-green-600 mr-3" /> {suburb}
                  </div>
                ))}
              </div>
            </div>
            <div className="h-[500px] rounded-[3rem] overflow-hidden shadow-3xl border-[12px] border-slate-50">
              <iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d225644.2755294379!2d153.28424563820984!3d-28.00632594611252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b911a472b5d60b1%3A0x302a35a4f2717a0!2sGold%20Coast%20QLD!5e0!3m2!1sen!2sau!4v1700000000000!5m2!1sen!2sau" 
  width="100%" 
  height="100%" 
  style={{ border: 0 }} 
  allowFullScreen="" 
  loading="lazy"
></iframe>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 bg-white border-t border-slate-200 text-center">
        <div className="flex items-center justify-center mb-4 font-black text-2xl tracking-tighter">
          <Leaf className="h-8 w-8 text-green-600 mr-2" /> EcoShield <span className="text-green-600">Pest Control</span>
        </div>
        <p className="text-slate-400 font-bold text-sm tracking-widest uppercase">© 2026 Gold Coast, QLD. Professional Service.</p>
      </footer>

      {/* 8. CENTER-SCREEN MODAL */}
      {selectedService && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-md" onClick={() => setSelectedService(null)}></div>
          <div className="relative bg-white w-full max-w-2xl rounded-[3rem] shadow-2xl p-10 md:p-14 overflow-y-auto max-h-[90vh] animate-in zoom-in duration-200">
            <button onClick={() => setSelectedService(null)} className="absolute top-8 right-10 text-4xl font-light text-slate-300 hover:text-slate-900 transition">✕</button>
            <div className="mb-10">
              <span className="text-green-600 font-black tracking-[0.2em] uppercase text-xs">Technical Guide</span>
              <h3 className="text-5xl font-black text-slate-900 mt-2 leading-none">{selectedService.name}</h3>
            </div>
            <div className="space-y-8">
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-slate-700 leading-relaxed font-medium">
                Our technicians follow a strict 5-step protocol, prioritizing family safety and long-term prevention.
              </div>
              <div className="space-y-6">
                {selectedService.detailedPlan.map((step, idx) => (
                  <div key={idx} className="flex items-start text-slate-900 font-bold">
                    <div className="h-8 w-8 bg-green-600 text-white rounded-2xl flex items-center justify-center text-sm shrink-0 mr-6 font-black">{idx + 1}</div>
                    <p className="text-lg leading-tight mt-1">{step}</p>
                  </div>
                ))}
              </div>
            </div>
            <button onClick={() => { setSelectedService(null); window.location.href="#contact"; }} className="mt-12 w-full bg-green-600 text-white py-6 rounded-2xl font-black text-xl shadow-xl shadow-green-200">Book Treatment</button>
          </div>
        </div>
      )}
    </div>
  );
}
