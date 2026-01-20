import React, { useState } from "react";
import {
  Leaf,
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
    desc: "Targeted treatments that disrupt breeding cycles.",
    detailedPlan: [
      "Species Identification: We determine if they are Sugar, Carpenter, or Fire ants.",
      "Colony Mapping: Finding the entry points and the main nest location.",
      "Non-Repellent Barrier: Applying a liquid perimeter that ants carry back to the queen.",
      "Internal Gel Baiting: Safe, targeted baits placed in cracks and crevices.",
      "Follow-up: 14-day check to ensure the colony has been completely eradicated."
    ]
  },
  {
    name: "Termite Protection",
    icon: <ShieldCheck />,
    desc: "Comprehensive inspections and structural barriers.",
    detailedPlan: [
      "Thermal Imaging: Using infrared technology to find hidden activity behind walls.",
      "Moisture Detection: Identifying high-risk leak areas that attract termites.",
      "Chemical Barrier: Installing a 'Termidor' soil treatment around your foundation.",
      "Baiting Systems: Placing Trelona stations for 24/7 monitoring.",
      "Certification: Providing a full compliance report for insurance purposes."
    ]
  },
  {
    name: "Rodent Control",
    icon: <Bug />,
    desc: "Exclusion and removal for a rodent-free property.",
    detailedPlan: [
      "Exclusion Audit: We find every hole larger than a pencil and seal it with steel wool.",
      "Sanitation Check: Identifying food sources that are keeping the rodents on-site.",
      "Trapping Program: Using humane and pet-safe snap-traps in roof voids.",
      "Secure Baiting: Tamper-proof stations placed strategically outdoors.",
      "Decontamination: Treating affected areas to remove pheromones and droppings."
    ]
  },
  {
    name: "Cockroach Control",
    icon: <Bug />,
    desc: "Eliminate infestations in high-risk areas.",
    detailedPlan: [
      "Flush-Out: Using botanical aerosols to force roaches out of hiding spots.",
      "IGR Treatment: Applying Insect Growth Regulators to stop the breeding cycle.",
      "Crevice Baiting: High-protein gel baits applied to hinges and electronics.",
      "Dusting: Treating wall voids and behind appliances with boric acid dust.",
      "External Barrier: Spraying a weather-resistant perimeter to prevent new arrivals."
    ]
  },
  {
    name: "Bed Bug Treatment",
    icon: <Bug />,
    desc: "Industry-grade, eco-friendly eradication.",
    detailedPlan: [
      "Deep-Room Inspection: Checking mattresses, headboards, and electrical outlets.",
      "Heat & Steam: Using eco-friendly high-temperature steam to kill eggs instantly.",
      "Residual Treatment: Safe chemical application to prevent re-infestation.",
      "Laundry Protocol: Detailed instructions for sanitizing bedding and clothing.",
      "Guaranteed Clearance: 30-day follow-up to ensure 100% eradication."
    ]
  },
  {
    name: "Mosquito Control",
    icon: <Bug />,
    desc: "Protect your family from bites.",
    detailedPlan: [
      "Source Identification: Locating standing water where larvae breed.",
      "Foliage Treatment: Spraying the underside of leaves where adults hide.",
      "Larvicide Application: Treating drains and ponds with eco-safe tablets.",
      "Barrier Protection: Creating a 4-week perimeter around your living spaces.",
      "Prevention Guide: Advice on keeping your yard mosquito-free year-round."
    ]
  }
];

export default function App() {
  const [selectedService, setSelectedService] = useState(null);

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

      {/* 2. HERO SECTION */}
      <header id="home" className="relative h-[80vh] flex items-center overflow-hidden bg-emerald-950">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1513584684374-8bdb7489feef?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover brightness-50" 
            alt="Beautiful eco-friendly home"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-white">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full mb-6 text-xs font-bold uppercase tracking-widest text-green-400">
              <Leaf className="h-4 w-4" /> Safe • Effective • Eco-Friendly
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              Protecting Your <br/><span className="text-green-400">Home & Nature</span>
            </h1>
            <p className="text-xl text-slate-100 mb-10 leading-relaxed font-medium">
              Premium pest protection for Gold Coast families. We keep the bugs out using methods that are safe for your kids and pets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-green-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-all text-center">Get a Free Quote</a>
              <a href="#services" className="bg-white text-emerald-900 px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-all text-center">Our Services</a>
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
            <div key={i} className="flex items-center space-x-3 justify-center font-bold text-slate-700 text-sm md:text-base">
              {item.icon} <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SERVICES GRID */}
      <section id="services" className="py-24 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Our Specialized Solutions</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Click any pest below to see our professional 5-step treatment process.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div key={i} onClick={() => setSelectedService(s)} className="group bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all cursor-pointer">
                <div className="bg-green-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
                  <div className="text-green-600 group-hover:text-white transition-colors">{React.cloneElement(s.icon, { className: "h-8 w-8" })}</div>
                </div>
                <h3 className="text-xl font-bold mb-3">{s.name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{s.desc}</p>
                <span className="text-green-600 font-bold text-sm flex items-center group-hover:underline">View Treatment Process <ChevronRight className="h-4 w-4 ml-1" /></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CONTACT SECTION */}
      <section id="contact" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-6">Ready to live bug-free?</h2>
            <p className="text-slate-400 mb-10 text-lg">Contact us for a free, no-obligation assessment.</p>
            <div className="space-y-6">
              <div className="flex items-center p-4 bg-white/5 rounded-2xl border border-white/10">
                <Phone className="h-6 w-6 text-green-500 mr-4" />
                <div><p className="text-sm text-slate-400">Call Us Directly</p><p className="font-bold text-lg">0400 000 000</p></div>
              </div>
              <div className="flex items-center p-4 bg-white/5 rounded-2xl border border-white/10">
                <MapPin className="h-6 w-6 text-green-500 mr-4" />
                <div><p className="text-sm text-slate-400">Service Area</p><p className="font-bold text-lg">Gold Coast & Surrounds</p></div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-2xl text-slate-900">
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Name" className="w-full p-4 bg-slate-50 rounded-xl" />
                <input type="text" placeholder="Phone" className="w-full p-4 bg-slate-50 rounded-xl" />
              </div>
              <input type="email" placeholder="Email" className="w-full p-4 bg-slate-50 rounded-xl" />
              <textarea placeholder="Pest Problem Details..." rows="4" className="w-full p-4 bg-slate-50 rounded-xl"></textarea>
              <button className="w-full bg-green-600 text-white py-4 rounded-xl font-bold">Send Quote Request</button>
            </form>
          </div>
        </div>
      </section>

      {/* 6. LOCATION SECTION */}
      <section id="location" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Serving the <span className="text-green-600">Gold Coast</span></h2>
              <p className="text-lg text-slate-600 mb-8">Rapid-response pest control across the entire region.</p>
              <div className="grid grid-cols-2 gap-4">
                {["Surfers Paradise", "Burleigh Heads", "Robina", "Southport", "Helensvale", "Coolangatta"].map((suburb) => (
                  <div key={suburb} className="flex items-center text-slate-700 font-medium">
                    <MapPin className="h-5 w-5 text-green-500 mr-2" /> {suburb}
                  </div>
                ))}
              </div>
            </div>
            <div className="h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112832.228965682!2d153.336497!3d-28.016667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b911a472b5d635f%3A0x3302d136f395eff1!2sGold%20Coast%20QLD!5e0!3m2!1sen!2sau!4v1700000000000!5m2!1sen!2sau" width="100%" height="100%" style={{ border: 0 }} loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-white border-t border-slate-100 text-center">
        <div className="flex items-center justify-center mb-4 font-bold text-lg">
          <Leaf className="h-6 w-6 text-green-600 mr-2" /> EcoShield Pest Control
        </div>
        <p className="text-slate-400 text-sm">© 2026 EcoShield Services. All Rights Reserved.</p>
      </footer>

      {/* 7. CENTER-SCREEN MODAL (Text Focus) */}
      {selectedService && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-md" onClick={() => setSelectedService(null)}></div>
          <div className="relative bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl p-8 md:p-12 overflow-y-auto max-h-[90vh] animate-in zoom-in duration-200">
            <button onClick={() => setSelectedService(null)} className="absolute top-6 right-8 text-3xl font-light text-slate-400 hover:text-slate-900">✕</button>
            <div className="mb-8">
              <span className="text-green-600 font-bold tracking-widest uppercase text-xs">Professional Treatment Plan</span>
              <h3 className="text-4xl font-black text-slate-900 mt-2">{selectedService.name}</h3>
            </div>
            <div className="space-y-6">
              <div className="bg-green-50 p-6 rounded-2xl border-l-4 border-green-500 text-green-800 leading-relaxed">
                <h4 className="font-bold mb-1">The Eco-Shield Approach:</h4>
                Our technicians follow a strict 5-step protocol, prioritizing family safety and long-term prevention.
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-slate-900 text-lg">Detailed Process:</h4>
                {selectedService.detailedPlan.map((step, idx) => (
                  <div key={idx} className="flex items-start text-slate-700 font-medium">
                    <div className="h-6 w-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs shrink-0 mr-4 font-bold mt-1">{idx + 1}</div>
                    <p className="leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button onClick={() => { setSelectedService(null); window.location.href="#contact"; }} className="flex-1 bg-green-600 text-white py-4 rounded-xl font-bold shadow-lg shadow-green-200">Book This Treatment</button>
              <button onClick={() => setSelectedService(null)} className="flex-1 bg-slate-100 text-slate-600 py-4 rounded-xl font-bold">Close Details</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
