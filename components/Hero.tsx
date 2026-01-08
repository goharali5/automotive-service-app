
import React from 'react';
import { ChevronRight, Star, Settings, ShieldCheck, MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-950">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury car repair" 
          className="w-full h-full object-cover opacity-30 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 mb-6 animate-in fade-in slide-in-from-left-8 duration-700">
            <div className="flex -space-x-2">
              {[1,2,3,4].map(i => (
                <img key={i} src={`https://picsum.photos/seed/${i + 10}/32/32`} className="w-8 h-8 rounded-full border-2 border-slate-900" alt="Customer" />
              ))}
            </div>
            <div className="flex items-center gap-1 text-amber-400">
              <Star size={16} fill="currentColor" />
              <span className="text-white font-semibold text-sm">4.9/5 from 300+ Local Reviews</span>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-6 leading-tight animate-in fade-in slide-in-from-left-8 duration-1000">
            PRECISION <span className="text-blue-500">CARE</span> FOR YOUR VEHICLE.
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-left-8 duration-1000 delay-200">
            Pleasant Hill's premier automotive destination. Honest pricing, expert mechanics, and the trust your car deserves.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-left-8 duration-1000 delay-300">
            <a href="#contact" className="group bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20">
              Schedule Service
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#ai-diagnostic" className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all border border-slate-700 flex items-center justify-center gap-2">
              <Settings className="animate-spin-slow" />
              AI Diagnostic
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-in fade-in duration-1000 delay-500">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500">
                <ShieldCheck size={24} />
              </div>
              <span className="text-slate-300 font-medium">Warranty Backed</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
                <MapPin size={24} />
              </div>
              <span className="text-slate-300 font-medium">Pleasant Hill, CA</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-slate-700 flex justify-center pt-2">
          <div className="w-1 h-2 bg-blue-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};
