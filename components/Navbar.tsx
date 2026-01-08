
import React, { useState, useEffect } from 'react';
import { Menu, X, Gauge, Phone } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when resizing to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenu(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenu]);

  const menuItems = [
    { name: 'Services', href: '#services' },
    { name: 'AI Diagnostic', href: '#ai-diagnostic' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || mobileMenu ? 'bg-slate-900 py-4 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between relative z-50">
        <a href="#" className="flex items-center gap-3">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
            <Gauge size={24} className="md:w-7 md:h-7" />
          </div>
          <div>
            <span className="text-xl md:text-2xl font-display font-bold text-white tracking-tight">POET'S CORNER</span>
            <span className="block text-[8px] md:text-[10px] font-bold tracking-[0.2em] text-blue-500 uppercase -mt-1">Automotive Excellence</span>
          </div>
        </a>

        {/* Desktop Links - Visible only on LG (1024px+) */}
        <div className="hidden lg:flex items-center gap-10">
          {menuItems.map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-bold uppercase tracking-widest text-white hover:text-blue-500 transition-colors">
              {item.name}
            </a>
          ))}
          <a href="tel:9255550123" className="flex items-center gap-2 bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 px-5 py-2 rounded-full border border-blue-500/20 transition-all font-bold">
            <Phone size={18} />
            (925) 555-0123
          </a>
        </div>

        {/* Tablet & Mobile Toggle - Visible below LG (1024px) */}
        <button 
          className="lg:hidden text-white p-2 hover:bg-blue-600/20 rounded-lg transition-colors" 
          onClick={() => setMobileMenu(!mobileMenu)}
          aria-label="Toggle menu"
        >
          {mobileMenu ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile/Tablet Menu Overlay */}
      {/* Updated background to bg-slate-900 with a subtle gradient and full opacity for contrast */}
      <div className={`lg:hidden fixed inset-0 bg-gradient-to-b from-slate-900 to-slate-950 p-6 flex flex-col pt-32 gap-6 transition-all duration-500 ease-in-out z-40 ${mobileMenu ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] pointer-events-none"></div>
        
        {menuItems.map((item, index) => (
          <a 
            key={item.name} 
            href={item.href} 
            onClick={() => setMobileMenu(false)}
            className={`text-4xl font-display font-bold text-white border-b border-white/5 pb-4 hover:text-blue-500 transition-all flex items-center justify-between group ${mobileMenu ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            {item.name}
            <div className="w-2 h-2 rounded-full bg-blue-600 scale-0 group-hover:scale-100 transition-transform"></div>
          </a>
        ))}
        
        <div className={`mt-auto pb-10 flex flex-col gap-6 ${mobileMenu ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: '400ms' }}>
          <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
            <p className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-4">Immediate Assistance</p>
            <a href="tel:9255550123" className="flex items-center justify-center gap-3 bg-blue-600 text-white py-5 rounded-xl font-bold text-xl shadow-lg shadow-blue-600/30 active:scale-95 transition-all">
              <Phone size={24} />
              (925) 555-0123
            </a>
          </div>
          <div className="flex justify-center gap-8 text-slate-500 font-bold text-sm tracking-widest uppercase">
            <a href="#services" onClick={() => setMobileMenu(false)}>Pricing</a>
            <a href="#reviews" onClick={() => setMobileMenu(false)}>Gallery</a>
            <a href="#contact" onClick={() => setMobileMenu(false)}>Map</a>
          </div>
        </div>
      </div>
    </nav>
  );
};
