import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold mb-4">InnovateCorp</div>
            <p className="text-slate-300 mb-6 leading-relaxed max-w-md">
              We build digital excellence through innovative solutions that transform businesses 
              and create lasting value for our clients.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-slate-800 hover:bg-blue-600 p-3 rounded-lg transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-slate-800 hover:bg-blue-400 p-3 rounded-lg transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-slate-800 hover:bg-blue-700 p-3 rounded-lg transition-colors duration-200">
                <Linkedin size={20} />
              </a>
              <a href="#" className="bg-slate-800 hover:bg-pink-600 p-3 rounded-lg transition-colors duration-200">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Services', 'Portfolio', 'Team', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-slate-300 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-slate-300">
              <li>Web Development</li>
              <li>Mobile Apps</li>
              <li>Digital Strategy</li>
              <li>Analytics & SEO</li>
              <li>Security Solutions</li>
              <li>Support & Maintenance</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 mb-4 md:mb-0">
            © 2024 InnovateCorp. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
              Terms of Service
            </a>
            <button
              onClick={scrollToTop}
              className="bg-blue-600 hover:bg-blue-700 p-2 rounded-lg transition-colors duration-200"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;