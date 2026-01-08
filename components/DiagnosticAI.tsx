
import React, { useState } from 'react';
import { getDiagnosticReport } from '../services/geminiService';
import { DiagnosticResult } from '../types';
import { Bot, AlertTriangle, Clock, ShieldCheck, Loader2, Sparkles } from 'lucide-react';

export const DiagnosticAI: React.FC = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<DiagnosticResult | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    try {
      const data = await getDiagnosticReport(query);
      setResult(data);
    } catch (error) {
      console.error("AI Diagnostic failed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-diagnostic" className="py-20 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500"></div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
            <Sparkles size={14} />
            Powered by Next-Gen AI
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Smart Diagnostic Assistant</h2>
          <p className="text-slate-400 text-lg">Describe the noise or behavior your car is making, and our AI mechanic will provide an initial assessment.</p>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-2xl p-6 md:p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="mb-8">
            <div className="relative">
              <textarea
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ex: 'My car makes a loud squealing sound when I brake at low speeds...'"
                className="w-full h-32 bg-slate-900 border border-slate-700 rounded-xl p-4 pr-12 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
              />
              <button
                type="submit"
                disabled={loading || !query}
                className="absolute bottom-4 right-4 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2 transition-all"
              >
                {loading ? <Loader2 className="animate-spin" size={20} /> : <Bot size={20} />}
                {loading ? 'Analyzing...' : 'Diagnose'}
              </button>
            </div>
          </form>

          {result && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700">
                  <div className="flex items-center gap-2 text-blue-400 mb-2">
                    <Clock size={18} />
                    <span className="font-semibold uppercase text-xs tracking-wider">Estimated Wait</span>
                  </div>
                  <p className="text-lg font-medium">{result.estimatedTime}</p>
                </div>
                <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700">
                  <div className="flex items-center gap-2 text-amber-400 mb-2">
                    <AlertTriangle size={18} />
                    <span className="font-semibold uppercase text-xs tracking-wider">Severity</span>
                  </div>
                  <p className="text-lg font-medium capitalize">{result.severity}</p>
                </div>
                <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700">
                  <div className="flex items-center gap-2 text-emerald-400 mb-2">
                    <ShieldCheck size={18} />
                    <span className="font-semibold uppercase text-xs tracking-wider">Poet's Promise</span>
                  </div>
                  <p className="text-lg font-medium">Expert Inspection</p>
                </div>
              </div>

              <div className="bg-blue-600/10 border border-blue-500/20 p-6 rounded-xl">
                <h4 className="text-blue-400 font-semibold mb-3 flex items-center gap-2">
                  <Bot size={18} /> Potential Causes
                </h4>
                <ul className="list-disc list-inside space-y-2 text-slate-300">
                  {result.likelyCauses.map((cause, idx) => (
                    <li key={idx}>{cause}</li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-blue-500/20">
                  <h4 className="text-white font-semibold mb-2">Mechanic Recommendation</h4>
                  <p className="text-slate-300 leading-relaxed">{result.recommendation}</p>
                </div>
              </div>

              <div className="text-center">
                <a href="#contact" className="inline-block bg-white text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-blue-400 hover:text-white transition-all transform hover:scale-105">
                  Book Priority Inspection Now
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
