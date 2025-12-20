import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Leaf, Shield, Home, Building, Calendar, User, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const App = () => {
  const [activePage, setActivePage] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [bookingData, setBookingData] = useState({
    name: '',
    phone: '',
    service: '',
    address: '',
    preferredTime: ''
  });
  const [activeService, setActiveService] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    alert('Booking request submitted! We\'ll contact you shortly to confirm your same-day service.');
    setBookingData({
      name: '',
      phone: '',
      service: '',
      address: '',
      preferredTime: ''
    });
  };

  const services = [
    { 
      name: 'Ant Control', 
      icon: '🐜',
      description: 'Professional ant elimination using eco-friendly baits and barriers',
      image: 'https://placehold.co/600x400/4CAF50/white?text=Ant+Control'
    },
    { 
      name: 'Termite Control', 
      icon: '🪳',
      description: 'Advanced termite detection and treatment with minimal environmental impact',
      image: 'https://placehold.co/600x400/2E7D32/white?text=Termite+Control'
    },
    { 
      name: 'Rodent Control', 
      icon: '🐭',
      description: 'Humane rodent exclusion and prevention strategies for homes and businesses',
      image: 'https://placehold.co/600x400/388E3C/white?text=Rodent+Control'
    },
    { 
      name: 'Cockroach Control', 
      icon: '🦟',
      description: 'Comprehensive cockroach elimination using targeted, eco-safe treatments',
      image: 'https://placehold.co/600x400/1B5E20/white?text=Cockroach+Control'
    },
    { 
      name: 'Mosquito Control', 
      icon: '🦟',
      description: 'Outdoor mosquito management with natural repellents and habitat modification',
      image: 'https://placehold.co/600x400/43A047/white?text=Mosquito+Control'
    },
    { 
      name: 'Bed Bug Treatment', 
      icon: '🛏️',
      description: 'Heat treatment and eco-friendly solutions for complete bed bug elimination',
      image: 'https://placehold.co/600x400/004D40/white?text=Bed+Bug+Treatment'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah M.',
      location: 'Portland, OR',
      text: 'EcoShield saved us from a terrible ant infestation! Same-day service and completely pet-safe.',
      rating: 5,
      image: 'https://placehold.co/100x100/4CAF50/white?text=Sarah'
    },
    {
      name: 'Michael R.',
      location: 'Seattle, WA',
      text: 'Professional, eco-friendly, and effective. Will definitely use them again for our restaurant.',
      rating: 5,
      image: 'https://placehold.co/100x100/2E7D32/white?text=Michael'
    },
    {
      name: 'Jennifer L.',
      location: 'Vancouver, BC',
      text: 'Fast response and genuinely cares about using safe methods. Highly recommend!',
      rating: 5,
      image: 'https://placehold.co/100x100/388E3C/white?text=Jennifer'
    }
  ];

  const serviceAreas = [
    'Portland, OR',
    'Seattle, WA', 
    'Vancouver, BC',
    'Beaverton, OR',
    'Bellevue, WA',
    'Surrey, BC'
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
    ));
  };

  const Navigation = () => (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">EcoShield</span>
            </div>
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              {['home', 'services', 'booking', 'about', 'contact'].map((page) => (
                <button
                  key={page}
                  onClick={() => setActivePage(page)}
                  className={`capitalize px-3 py-2 text-sm font-medium ${
                    activePage === page
                      ? 'text-green-600 border-b-2 border-green-600'
                      : 'text-gray-700 hover:text-green-600'
                  }`}
                >
                  {page === 'booking' ? 'Same-Day Booking' : page}
                </button>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setActivePage('booking')}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Book Now
            </button>
          </div>
          <button className="md:hidden text-gray-700">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );

  const HeroSection = () => (
    <div className="relative bg-gradient-to-r from-green-50 to-emerald-50 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://placehold.co/1920x1080/E8F5E8/1b5e20?text=Eco-Friendly+Pest+Control"
          alt="Eco-friendly pest control technician"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Eco-Friendly Pest Control.
            <br />
            <span className="text-green-600">Same-Day Service Available.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            Safe, effective, and environmentally responsible pest control solutions for your home or business.
            Licensed, insured, and family-pet safe.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => setActivePage('booking')}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Book Same-Day Service
            </button>
            <button 
              onClick={() => setActivePage('contact')}
              className="bg-white hover:bg-gray-50 text-green-600 border-2 border-green-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors transform hover:scale-105"
            >
              <Mail className="inline h-5 w-5 mr-2" />
              Contact Us
            </button>
          </motion.div>
        </div>
      </div>
      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Leaf, text: 'Eco-Safe', color: 'text-green-600' },
              { icon: Shield, text: 'Licensed & Insured', color: 'text-blue-600' },
              { icon: Home, text: 'Residential', color: 'text-emerald-600' },
              { icon: Building, text: 'Commercial', color: 'text-teal-600' }
            ].map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="flex flex-col items-center"
              >
                <badge.icon className={`h-8 w-8 ${badge.color} mb-2`} />
                <span className="text-sm font-medium text-gray-700">{badge.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const ServicesSection = () => (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Our Eco-Friendly Services
          </motion.h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive pest control solutions that are safe for your family, pets, and the environment.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setActiveService(service.name)}
              onMouseLeave={() => setActiveService(null)}
              className={`bg-green-50 rounded-xl p-6 hover:shadow-xl transition-all cursor-pointer ${
                activeService === service.name ? 'ring-2 ring-green-500 scale-105' : ''
              }`}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <img 
                src={service.image}
                alt={service.name}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <button className="text-green-600 font-semibold hover:text-green-700 flex items-center">
                Learn more <span className="ml-1">→</span>
              </button>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 bg-emerald-50 rounded-2xl p-8 text-center overflow-hidden"
        >
          <div className="relative">
            <motion.div 
              animate={{ 
                rotate: [0, 5, -5, 5, 0],
                scale: [1, 1.1, 1, 1.1, 1]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="absolute -top-4 -left-4"
            >
              <Leaf className="h-16 w-16 text-green-300" />
            </motion.div>
            <Leaf className="h-12 w-12 text-green-600 mx-auto mb-4 relative" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Eco-Friendly & Pet-Safe Treatments</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              All our treatments use environmentally responsible products that are safe for children and pets.
              We prioritize prevention and integrated pest management to minimize chemical use.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );

  const BeforeAfterSection = () => (
    <div className="py-16 bg-gradient-to-r from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Work in Action</h2>
          <p className="text-lg text-gray-600">Real results from our eco-friendly pest control services</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl overflow-hidden shadow-md">
            <img 
              src="https://placehold.co/600x400/2E7D32/white?text=Before+Treatment"
              alt="Before pest control treatment"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Before Treatment</h3>
              <p className="text-gray-600">Ant infestation in kitchen cabinets requiring professional intervention.</p>
            </div>
          </div>
          <div className="bg-white rounded-xl overflow-hidden shadow-md">
            <img 
              src="https://placehold.co/600x400/4CAF50/white?text=After+Treatment"
              alt="After pest control treatment"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">After Treatment</h3>
              <p className="text-gray-600">Complete elimination with eco-friendly methods, safe for family and pets.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const TestimonialsSection = () => (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            What Our Customers Say
          </motion.h2>
          <p className="text-lg text-gray-600">Trusted by hundreds of satisfied customers</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex mb-4">{renderStars(testimonial.rating)}</div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-green-100"
                />
                <div className="ml-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );

  const TeamSection = () => (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Expert Team</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet our licensed, experienced technicians who are passionate about eco-friendly pest control
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((teamMember, index) => (
            <div key={index} className="bg-green-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <img 
                src={`https://placehold.co/300x300/4CAF50/white?text=Technician+${index + 1}`}
                alt={`Team Member ${index + 1}`}
                className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
              />
              <h3 className="text-xl font-bold text-gray-900 mt-4">John Doe</h3>
              <p className="text-green-600 font-semibold">Senior Technician</p>
              <p className="text-gray-600 mt-2">10+ years experience in eco-friendly pest management</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const HomePage = () => (
    <div>
      <HeroSection />
      <ServicesSection />
      <BeforeAfterSection />
      <TestimonialsSection />
      <TeamSection />
    </div>
  );

  const ServicesPage = () => (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Pest Control Services</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Eco-friendly, safe, and effective pest control solutions for residential and commercial properties.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow overflow-hidden"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.name}</h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <img 
                src={service.image}
                alt={service.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <button className="text-green-600 font-semibold hover:text-green-700">
                Learn more →
              </button>
            </motion.div>
          ))}
        </div>
        <div className="bg-green-50 rounded-2xl p-8">
          <div className="flex items-start">
            <Leaf className="h-8 w-8 text-green-600 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Why Choose Eco-Friendly Pest Control?</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Safe for children and pets</li>
                <li>• Environmentally responsible</li>
                <li>• Reduced chemical exposure</li>
                <li>• Sustainable long-term solutions</li>
                <li>• Integrated pest management approach</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const BookingPage = () => (
    <div className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Same-Day Booking</h1>
          <p className="text-lg text-gray-600">
            Need immediate pest control? Book your same-day service now or contact us directly.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-green-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Online Booking Form</h2>
            <form onSubmit={handleBookingSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={bookingData.name}
                  onChange={(e) => setBookingData({...bookingData, name: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={bookingData.phone}
                  onChange={(e) => setBookingData({...bookingData, phone: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
                <select
                  required
                  value={bookingData.service}
                  onChange={(e) => setBookingData({...bookingData, service: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service.name}>{service.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                <input
                  type="text"
                  required
                  value={bookingData.address}
                  onChange={(e) => setBookingData({...bookingData, address: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  placeholder="Your service address"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Time</label>
                <select
                  required
                  value={bookingData.preferredTime}
                  onChange={(e) => setBookingData({...bookingData, preferredTime: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                >
                  <option value="">Select preferred time</option>
                  <option value="morning">Morning (8 AM - 12 PM)</option>
                  <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                  <option value="evening">Evening (4 PM - 8 PM)</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors transform hover:scale-105"
              >
                Request Same-Day Service
              </button>
            </form>
          </div>
          
          <div className="space-y-6">
            <div className="bg-emerald-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Service Areas</h3>
              <p className="text-gray-600 mb-2">We proudly serve the following areas:</p>
              <ul className="text-gray-700 space-y-1">
                {serviceAreas.map((area, index) => (
                  <li key={index}>• {area}</li>
                ))}
              </ul>
            </div>
            
            <div className="bg-amber-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Same-Day Availability</h3>
              <div className="flex items-center text-gray-600">
                <Clock className="h-5 w-5 mr-2" />
                <span>Available 7 days a week</span>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Book before 2 PM for same-day service in most areas.
              </p>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How Our Process Works</h3>
              <ol className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm mr-2 mt-1">1</span>
                  <span>Book your same-day service online or contact us</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm mr-2 mt-1">2</span>
                  <span>Our technician arrives with eco-friendly equipment</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm mr-2 mt-1">3</span>
                  <span>Complete inspection and treatment with minimal disruption</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm mr-2 mt-1">4</span>
                  <span>Follow-up to ensure complete satisfaction</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const AboutPage = () => (
    <div className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About EcoShield Pest Control</h1>
          <p className="text-lg text-gray-600">
            Your trusted partner for eco-friendly, effective pest control solutions.
          </p>
        </div>
        
        <div className="space-y-8">
          <div className="bg-green-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              At EcoShield Pest Control Services, we're committed to providing effective pest control solutions 
              that are safe for your family, pets, and the environment. We believe that protecting your home 
              shouldn't come at the expense of your health or the planet.
            </p>
            <p className="text-gray-700">
              Our integrated pest management approach focuses on prevention, exclusion, and targeted treatment 
              using eco-friendly products whenever possible. We're not just eliminating pests—we're creating 
              healthier, safer living and working environments for everyone we serve.
            </p>
            <img 
              src="https://placehold.co/800x400/2E7D32/white?text=Our+Team+in+Action"
              alt="EcoShield team working"
              className="w-full h-64 object-cover rounded-lg mt-6"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Experienced Technicians</h3>
              <p className="text-gray-700 mb-4">
                Our team consists of licensed, insured, and highly trained pest control professionals with 
                years of experience in eco-friendly pest management.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Licensed and certified</li>
                <li>• Background checked</li>
                <li>• Ongoing training</li>
                <li>• Customer-focused approach</li>
              </ul>
              <img 
                src="https://placehold.co/400x200/1565C0/white?text=Licensed+Technicians"
                alt="Certified technicians"
                className="w-full h-32 object-cover rounded-lg mt-4"
              />
            </div>
            
            <div className="bg-emerald-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Family & Pet Safety Promise</h3>
              <p className="text-gray-700 mb-4">
                Your family's safety is our top priority. All our treatments use products and methods 
                that are safe for children and pets when applied according to label instructions.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Non-toxic options available</li>
                <li>• Clear safety instructions</li>
                <li>• Pet-friendly protocols</li>
                <li>• Child-safe treatments</li>
              </ul>
              <img 
                src="https://placehold.co/400x200/004D40/white?text=Pet+Safe+Treatments"
                alt="Family and pet safe"
                className="w-full h-32 object-cover rounded-lg mt-4"
              />
            </div>
          </div>
          
          <div className="text-center py-8">
            <button
              onClick={() => setActivePage('booking')}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors transform hover:scale-105"
            >
              Book Your Eco-Friendly Service Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const ContactPage = () => (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">
            Have questions or ready to schedule your service? Get in touch with us today.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-green-600 mr-3" />
                  <a href="mailto:info@ecoshieldpest.com" className="text-lg text-gray-900 hover:text-green-600">
                    info@ecoshieldpest.com
                  </a>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-green-600 mr-3 mt-1" />
                  <div>
                    <p className="text-lg text-gray-900">Portland, OR</p>
                    <p className="text-gray-600">Serving Portland, Seattle, Vancouver & surrounding areas</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-green-600 mr-3" />
                  <div>
                    <p className="text-lg text-gray-900">Business Hours</p>
                    <p className="text-gray-600">Monday - Sunday: 7 AM - 8 PM</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <img 
                  src="https://placehold.co/600x300/4CAF50/white?text=Our+Office"
                  alt="EcoShield office location"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>
            
            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Service Areas</h3>
              <div className="grid grid-cols-2 gap-2">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="text-gray-700 flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            {formSubmitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                Thank you for your message! We'll get back to you soon.
              </div>
            ) : null}
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Service Interested In</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service.name}>{service.name}</option>
                  ))}
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  placeholder="Tell us about your pest problem..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  const StickyBookButton = () => (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <button
        onClick={() => setActivePage('booking')}
        className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Calendar className="h-6 w-6" />
      </button>
    </motion.div>
  );

  const Footer = () => (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Leaf className="h-8 w-8 text-green-400" />
              <span className="ml-2 text-xl font-bold">EcoShield</span>
            </div>
            <p className="text-gray-400">
              Eco-friendly pest control services that are safe, effective, and environmentally responsible.
            </p>
            <div className="mt-4 flex space-x-4">
              {[1, 2, 3, 4].map((social, index) => (
                <div key={index} className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                  <span className="text-sm">f</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              {services.slice(0, 4).map((service, index) => (
                <li 
                  key={index} 
                  className="hover:text-white cursor-pointer hover:translate-x-1 transition-transform"
                  onClick={() => setActivePage('services')}
                >
                  {service.name}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer hover:translate-x-1 transition-transform" onClick={() => setActivePage('about')}>About Us</li>
              <li className="hover:text-white cursor-pointer hover:translate-x-1 transition-transform" onClick={() => setActivePage('booking')}>Same-Day Booking</li>
              <li className="hover:text-white cursor-pointer hover:translate-x-1 transition-transform" onClick={() => setActivePage('contact')}>Contact</li>
              <li className="hover:text-white cursor-pointer hover:translate-x-1 transition-transform">Service Areas</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@ecoshieldpest.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Portland, OR</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>7 AM - 8 PM Daily</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 EcoShield Pest Control Services. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Licensed & Insured | Eco-Friendly Pest Control | Same-Day Service Available
          </p>
        </div>
      </div>
    </footer>
  );

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage />;
      case 'services':
        return <ServicesPage />;
      case 'booking':
        return <BookingPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        {renderPage()}
      </main>
      <StickyBookButton />
      <Footer />
    </div>
  );
};

export default App;
