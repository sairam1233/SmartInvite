import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'react-hot-toast';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  MessageSquare,
  Video,
  QrCode,
  Users,
  Palette,
  Menu,
  X,
  Calendar,
  Twitter,
  Sparkles,
  ArrowRight,
  Linkedin,
  Globe
} from 'lucide-react';
import "./index.css"

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleVisitClick = () => {
    const mapsUrl = "https://maps.app.goo.gl/5ZpQMMBvuVVYokUm6";
    window.open(mapsUrl, "_blank");
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:vinaysairam1233@gmail.com";
  };

  const handleCallClick = () => {
    window.location.href = "tel:+916304274299"; // India country code (+91) added
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/919676621199", "_blank");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    try {
      const result = await emailjs.sendForm(
        'service_pqqqg9g',
        'template_btj6b8j',
        formRef.current,
        'nDAN56rv6Tpm7K-5f'
      );
      
      if (result.text === 'OK') {
        toast.success('Message sent successfully!');
        formRef.current.reset();
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-center" />
      
      {/* Navigation */}
      <nav data-aos="fade-down" className="nv animate__animated animate__fadeInDown fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-indigo-600" />
              <span className="ml-2 text-lg sm:text-xl font-bold text-gray-900"><a href='#'>SmartInvite</a></span>
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-indigo-600">Home</a>
              <a href="#about" className="text-gray-700 hover:text-indigo-600">About</a>
              <a href="#services" className="text-gray-700 hover:text-indigo-600">Services</a>
              <a href="#demo" className="text-gray-700 hover:text-indigo-600">Demo</a>
              <a href="#contact" className="text-gray-700 hover:text-indigo-600">Contact</a>
            </div>
          </div>
        </div>
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white border-t`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="block px-3 py-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-50">Home</a>
            <a href="#about" className="block px-3 py-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-50">About</a>
            <a href="#services" className="block px-3 py-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-50">Services</a>
            <a href="#demo" className="block px-3 py-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-50">Demo</a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-50">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section  className="home relative min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-600/10 to-purple-600/10"></div>
        <div className="relative min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-3xl py-20 md:py-0">
            <span data-aos="fade-right" className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 mb-6">
              <Sparkles className="h-4 w-4 mr-2" />
              Revolutionizing Digital Invitations
            </span>
            <h1 data-aos="fade-right" className=" text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
              Get <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Your Stunning</span> Digital Invitations
            </h1>
            <p data-aos="fade-right" className="animate__animated animate__fadeInLeft text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 sm:mb-10 leading-relaxed max-w-2xl">
              Transform your special moments with interactive, beautiful, and eco-friendly digital invitations that leave lasting impressions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
            <a href='#contact'>
              <button data-aos="fade-up" data-aos-duration="3000" className="btn-1 animate__animated animate__fadeInUp bg-indigo-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center">
                Get Your First Invitation
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              </a>
              <a href='#demo'>
              <button data-aos="fade-up" data-aos-duration="3000" className="btn-2 animate__animated animate__fadeInUp bg-white text-indigo-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-indigo-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center">
                View Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="relative order-2 md:order-1 img-1">
              <div className="absolute -top-4 -left-4 w-48 sm:w-72 h-48 sm:h-72 bg-indigo-100 rounded-lg -z-10"></div>
              <img
               data-aos="fade-right"
              src="./images/screely-1739947297001.png"
              alt="Digital Invitation Platform"
              className="rounded-lg shadow-2xl w-full animate__animated animate__fadeInLeft"
            />
            </div>
            <div data-aos="fade-left" className="order-1 md:order-2 img-2 animate__animated animate__fadeInRight">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
                <span data-aos="fade-up" className="block text-indigo-600 text-base sm:text-lg font-medium mb-2">About Us</span>
                The Future of Event Invitations
              </h2>
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-600">
                <p>
                  We're transforming how people connect and celebrate together. Our digital invitations 
                  combine elegance with modern technology, making event planning effortless and eco-friendly.
                </p>
                <p>
                  Whether it's a wedding, birthday, or corporate event, create stunning invitations that 
                  leave a lasting impression on your guests.
                </p>
                <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
                <a href='#contact'>
                <button className="btn-3 animate__animated animate__fadeInUp bg-indigo-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center">
                  <a href='#contact'>Contact Us</a>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 sm:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate__animated animate__fadeInUp text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              <span data-aos="fade-up" className="block text-indigo-600 text-base sm:text-lg font-medium mb-2">Our Services</span>
              Everything You Need for Perfect Invitations
            </h2>
            <p data-aos="fade-up" className="text-lg sm:text-xl text-gray-600">Choose from our range of premium services to create the perfect invitation experience.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon: Mail, title: 'Smart Wedding Invitations', description: 'Custom-designed, interactive, and easy to share' },
              { icon: Users, title: 'Birthday & Event Invites', description: 'Stylish e-invitations with RSVP tracking' },
              { icon: Video, title: 'Video Invitations', description: 'Add personal video messages for a special touch' },
              { icon: QrCode, title: 'QR Code Invites', description: 'Hassle-free access with scannable QR codes' },
              { icon: Palette, title: 'Custom Themes & Music', description: 'Match invitations to your event\'s vibe' },
              { icon: Calendar, title: 'Live RSVP Management', description: 'Track attendance effortlessly' }
            ].map((service, index) => (
              <div data-aos="fade-up" key={index} className="animate__animated animate__fadeInUp service-card bg-white p-6 sm:p-8 rounded-xl shadow-lg ">
                <service.icon className="h-10 w-10 sm:h-12 sm:w-12 text-indigo-600 mb-4 sm:mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">{service.title}</h3>
                <p className="pp text-gray-600 mb-4 sm:mb-6">{service.description}</p>
                <a href='#contact'>
                  <button className="btn-service bg-indigo-50 text-indigo-600 px-4 sm:px-6 py-2 rounded-lg font-semibold group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 flex items-center text-sm sm:text-base">
                    <span><a href='#contact'>Book Now</a></span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Projects */}
      <section id="demo" className="py-20 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate__animated animate__fadeInUp text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 data-aos="fade-up" className="text-3xl  sm:text-4xl font-bold text-gray-900 mb-4">
              <span data-aos="fade-up" className="block text-indigo-600 text-base sm:text-lg font-medium mb-2">Demo Projects</span>
              See Our Smart Invitations in Action
            </h2>
            <p data-aos="fade-up" className="text-lg sm:text-xl text-gray-600">Explore our collection of beautifully crafted digital invitations.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
                  {
                    id: 1,
                    title: "Royal Wedding Invitation",
                    category: "Wedding",
                    image: "./images/1.bmp",
                    link:"https://wedding.rampatra.com/",
                  },
                  {
                    id: 2,
                    title: "Chic Birthday Bash",
                    category: "Wedding",
                    image: "./images/2.bmp",
                    link:"https://msnproduction-atep-arty.netlify.app/",
                  },
                  {
                    id: 3,
                    title: "Luxury Corporate Event",
                    category: "Wedding",
                    image: "./images/3.bmp",
                    link:"https://themewagon.github.io/wedding/",
                  },
                  {
                    id: 4,
                    title: "Rustic Anniversary Party",
                    category: "Wedding",
                    image: "./images/4.bmp",
                    link:"https://wedding-invitation-website.vercel.app/",
                  },
                  {
                    id: 5,
                    title: "Festive Holiday Gathering",
                    category: "Wedding",
                    image: "./images/5.png",
                    link:"https://smart-smaple-demo.vercel.app/",
                  },
                  {
                    id: 6,
                    title: "Baby Shower Bliss",
                    category: "Wedding",
                    image: "./images/6.png",
                    link:"https://smart-wedding-demo-a5n1.vercel.app/",
                  },
                ].map((demo) => (
              <div data-aos="fade-up" key={demo.id} className=" animate__animated animate__fadeInUp group relative overflow-hidden rounded-xl    hover:shadow-xl transition-all duration-300">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={demo.image}
                    alt={demo.title}
                    className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-white text-sm mb-2 sm:mb-3">
                      {demo.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">{demo.title}</h3>
                    <a href={demo.link} target='_blank'>
                    <button className="inline-flex items-center space-x-2 text-white font-medium group">
                      <span><a href={demo.link} target='_blank'>View Demo</a></span>
                      <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 sm:py-32 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="animate__animated animate__fadeInUp text-center mb-12 sm:mb-16">
              <h2 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                <span data-aos="fade-up" className="block tx text-indigo-600 text-base sm:text-lg font-medium mb-2">Contact Us</span>
                Let's Create Something Special Together
              </h2>
              <p data-aos="fade-up" className="text-lg sm:text-xl text-gray-600">Have questions? We're here to help you create the perfect invitation.</p>
            </div>
            <div data-aos="fade-up" className=" animate__animated animate__fadeInUp bg-white rounded-2xl shadow-2xl bor overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 ">
                <div className="p-6 sm:p-8 md:p-12">
                  <form ref={formRef} onSubmit={handleSubmit} className=" space-y-4 sm:space-y-6">
                    <div >
                      <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="user_name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="user_email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-colors"
                        placeholder="Tell us about your event..."
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
                    </button>
                  </form>
                </div>
                <div className="bor bg-gradient-to-br from-indigo-600 to-purple-600 p-6 sm:p-8 md:p-12 text-white">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8">Get in Touch</h3>
                  <div className="space-y-6 sm:space-y-8">
                  <div className="flex items-start space-x-4 cursor-pointer" onClick={handleVisitClick}>
                    <MapPin className="h-6 w-6 mt-1 text-indigo-300" />
                    <div>
                      <h4 className="font-semibold mb-1">Location</h4>
                      <p className="text-indigo-100">Tadiparru</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 cursor-pointer" onClick={handleEmailClick}>
                      <Mail className="h-6 w-6 mt-1 text-indigo-300" />
                      <div>
                        <h4 className="font-semibold mb-1">Email Us</h4>
                        <p className="text-indigo-100">vinaysairam1233@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 cursor-pointer" onClick={handleCallClick}>
                    <Phone className="h-6 w-6 mt-1 text-indigo-300" />
                    <div>
                      <h4 className="font-semibold mb-1">Call Us</h4>
                      <p className="text-indigo-100">+91 63042 74299</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 cursor-pointer" onClick={handleWhatsAppClick}>
                  <MessageSquare className="h-6 w-6 mt-1 text-indigo-300" />
                  <div>
                    <h4 className="font-semibold mb-1">WhatsApp</h4>
                    <p className="text-indigo-100">+91 63042 74299</p>
                  </div>
                </div>
                  </div>
                  <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/20">
                    <h4 className="font-semibold mb-4">Follow Us</h4>
                    <div className="flex space-x-4">
                      <a href="https://www.facebook.com/share/1GuWeQtgHa/" target='_blank' className="text-white hover:text-indigo-200 transition-colors">
                        <Facebook className="h-6 w-6" />
                      </a>
                      <a href="https://www.instagram.com/vinay_sairam/" target='_blank' className="text-white hover:text-indigo-200 transition-colors">
                        <Instagram className="h-6 w-6" />
                      </a>
                      <a href="https://twitter.com/SaiRam_0012?t=1yClwoXl31yVALxNmgP80A&s=09" target='_blank' className="text-white hover:text-indigo-200 transition-colors">
                        <Twitter className="h-6 w-6" />
                      </a>
                      <a href="https://www.linkedin.com/in/sairamkottu/" target='_blank' className="text-white hover:text-indigo-200 transition-colors">
                        <Linkedin className="h-6 w-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer data-aos="fade-up" className="animate__animated animate__fadeInUp bg-gray-900 text-white pt-16 sm:pt-20 pb-8 sm:pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-indigo-400" />
                <span className="ml-2 text-lg sm:text-xl font-bold">SmartInvite</span>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Creating memorable digital invitations for your special moments. Join us in making event planning sustainable and beautiful.
              </p>
              <div className="flex space-x-4 pt-4">
                <a href="https://www.facebook.com/share/1GuWeQtgHa/" target='_blank' className="bg-gray-800 p-2 rounded-lg text-gray-400 hover:text-white hover:bg-indigo-600 transition-all duration-300">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="https://www.instagram.com/vinay_sairam/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" target='_blank' className="bg-gray-800 p-2 rounded-lg text-gray-400 hover:text-white hover:bg-indigo-600 transition-all duration-300">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://x.com/SaiRam_0012?t=1yClwoXl31yVALxNmgP80A&s=09" target='_blank' className="bg-gray-800 p-2 rounded-lg text-gray-400 hover:text-white hover:bg-indigo-600 transition-all duration-300">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/in/sairamkottu/" target='_blank' className="bg-gray-800 p-2 rounded-lg text-gray-400 hover:text-white hover:bg-indigo-600 transition-all duration-300">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 sm:mb-6">Quick Links</h3>
              <ul className="space-y-3 sm:space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center text-sm sm:text-base"><ArrowRight className="h-4 w-4 mr-2" />Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors flex items-center text-sm sm:text-base"><ArrowRight className="h-4 w-4 mr-2" />About</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors flex items-center text-sm sm:text-base"><ArrowRight className="h-4 w-4 mr-2" />Services</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors flex items-center text-sm sm:text-base"><ArrowRight className="h-4 w-4 mr-2" />Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 sm:mb-6">Services</h3>
              <ul className="space-y-3 sm:space-y-4">
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors flex items-center text-sm sm:text-base"><ArrowRight className="h-4 w-4 mr-2" />Wedding Invitations</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors flex items-center text-sm sm:text-base"><ArrowRight className="h-4 w-4 mr-2" />Birthday Events</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors flex items-center text-sm sm:text-base"><ArrowRight className="h-4 w-4 mr-2" />Corporate Events</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors flex items-center text-sm sm:text-base"><ArrowRight className="h-4 w-4 mr-2" />Custom Design</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 sm:mb-6">Resources</h3>
              <ul className="space-y-3 sm:space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center text-sm sm:text-base"><Globe className="h-4 w-4 mr-2" />Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center text-sm sm:text-base"><ArrowRight className="h-4 w-4 mr-2" />Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center text-sm sm:text-base"><ArrowRight className="h-4 w-4 mr-2" />Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center text-sm sm:text-base"><ArrowRight className="h-4 w-4 mr-2" />Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400 text-sm sm:text-base">© 2025 SmartInvite. All rights reserved. Designed and developed by <a href='https://sairamkottu.ccbp.tech/' target='_blank' className=' text-indigo-400'>Sairam</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;