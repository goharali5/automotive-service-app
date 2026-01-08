
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { DiagnosticAI } from './components/DiagnosticAI';
import { Reviews } from './components/Reviews';
import { Contact } from './components/Contact';
// Fix: Added missing Phone icon to the imports from lucide-react
import { Instagram, Facebook, Twitter, ShieldCheck, Phone } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <DiagnosticAI />
        <Reviews />
        <Contact />
      </main>

      <footer className="bg-slate-950 py-16 border-t border-slate-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                  <ShieldCheck size={24} />
                </div>
                <span className="text-xl font-display font-bold text-white">POET'S CORNER</span>
              </div>
              <p className="text-slate-500 mb-8 leading-relaxed">
                Pleasant Hill's most trusted automotive center since 1998. Committed to quality, integrity, and your safety on the road.
              </p>
              <div className="flex gap-4">
                {[Instagram, Facebook, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Explore</h4>
              <ul className="space-y-4 text-slate-500">
                <li><a href="#services" className="hover:text-blue-500 transition-colors">Our Services</a></li>
                <li><a href="#ai-diagnostic" className="hover:text-blue-500 transition-colors">AI Diagnostics</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Fleet Accounts</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Special Offers</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Support</h4>
              <ul className="space-y-4 text-slate-500">
                <li><a href="#" className="hover:text-blue-500 transition-colors">Warranty Info</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Towing Services</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Terms of Service</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Quick Call</h4>
              <p className="text-slate-500 mb-4 font-medium">Ready to hit the road again?</p>
              <a href="tel:9255550123" className="text-3xl font-display font-bold text-blue-500 hover:text-blue-400 transition-colors">
                (925) 555-0123
              </a>
              <p className="text-slate-600 mt-4 text-sm">Emergency Roadside available 24/7 for regular customers.</p>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-900 flex flex-col md:row justify-between items-center gap-4">
            <p className="text-slate-600 text-sm">© 2024 Poet's Corner Automotive. All rights reserved.</p>
            <div className="flex gap-6">
              <img src="https://img.icons8.com/color/48/000000/visa.png" className="h-6 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all" alt="Visa" />
              <img src="https://img.icons8.com/color/48/000000/mastercard.png" className="h-6 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all" alt="Mastercard" />
              <img src="https://img.icons8.com/color/48/000000/amex.png" className="h-6 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all" alt="Amex" />
            </div>
          </div>
        </div>
      </footer>

      {/* Floating CTA for Mobile */}
      <div className="md:hidden fixed bottom-6 right-6 z-40">
        <a href="tel:9255550123" className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-2xl animate-pulse">
          <Phone size={28} />
        </a>
      </div>
    </div>
  );
};

export default App;
