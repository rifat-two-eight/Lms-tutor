import React from 'react';
import { Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0B31BD] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand & Social */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Schäfer Tutoring</h2>
            
            <div className="flex gap-4">
              <a href="#" className="hover:opacity-80 transition">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:opacity-80 transition">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:opacity-80 transition">
                <Youtube size={24} />
              </a>
              <a href="#" className="hover:opacity-80 transition">
                <MessageCircle size={24} />
              </a>
            </div>
          </div>

          {/* Rechtliches */}
          <div>
            <h3 className="font-semibold text-xl mb-4">Rechtliches</h3>
            <ul className="space-y-4 mt-8 text-sm">
              <li><a href="#" className="hover:underline">Datenschutz</a></li>
              <li><a href="#" className="hover:underline">AGB Schüler</a></li>
              <li><a href="#" className="hover:underline">AGB Lehrer</a></li>
              <li><a href="#" className="hover:underline">Widerrufsbelehrung</a></li>
              <li><a href="#" className="hover:underline">Impressum</a></li>
              <li><a href="#" className="hover:underline">Cookie-Richtlinie</a></li>
            </ul>
          </div>

          {/* Unternehmen */}
          <div>
            <h3 className="font-semibold text-xl mb-4">Unternehmen</h3>
            <ul className="space-y-4 mt-8 text-sm">
              <li><a href="#" className="hover:underline">Über uns</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Karriere</a></li>
              <li><a href="#" className="hover:underline">Kontakt</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
            <div className="space-y-3 mt-8">
              <input
                type="email"
                placeholder="E-Mail eingeben"
                className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="w-2/3 bg-white text-black font-semibold py-2 px-6 rounded-lg hover:bg-gray-100 transition">
                Anmelden
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <p className="text-sm text-white/80">
            © 2025 Schäfer Tutoring. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;