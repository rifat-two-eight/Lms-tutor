import React from 'react';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0B31BD] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand & Description */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Schäfer Tutoring</h2>
            <p className="text-gray-300 leading-relaxed max-w-xs">
              Deine persönliche Online-Nachhilfe in Berlin – Mathematik, Physik, Chemie und mehr. 
              Flexibel, effektiv und mit geprüften Lehrkräften.
            </p>
            
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white hover:text-[#0B31BD] transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white hover:text-[#0B31BD] transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white hover:text-[#0B31BD] transition">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-xl mb-6">Quick Links</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="/" className="hover:text-white transition">Home</a></li>
              <li><a href="/faq" className="hover:text-white transition">FAQ</a></li>
              <li><a href="/pricing" className="hover:text-white transition">Preise</a></li>
              <li><a href="/contact" className="hover:text-white transition">Kontakt</a></li>
            </ul>
          </div>

          {/* Fächer */}
          <div>
            <h3 className="font-bold text-xl mb-6">Beliebte Fächer</h3>
            <ul className="space-y-3 text-gray-300">
              <li>Mathematik</li>
              <li>Physik</li>
              <li>Chemie</li>
              <li>Englisch</li>
              <li>Deutsch</li>
              <li>Latein</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-xl mb-6">Kontakt</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>info@schaefer-tutoring.de</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>+49 30 12345678</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <span>Berlin, Deutschland</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/20 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Schäfer Tutoring. Alle Rechte vorbehalten.
          </p>
          <div className="mt-4 flex justify-center gap-8 text-sm">
            <a href="/impressum" className="text-gray-400 hover:text-white transition">Impressum</a>
            <a href="/datenschutz" className="text-gray-400 hover:text-white transition">Datenschutz</a>
            <a href="/agb" className="text-gray-400 hover:text-white transition">AGB</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;