import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronDown,
  ExternalLink,
  ShieldAlert,
  CheckCircle2,
  HelpCircle,
  Zap,
  Clock,
  MessageSquare,
  AlertCircle,
  Music,
  WifiOff,
  Ticket,
  Activity,
  Server,
  Radio,
  Headphones,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface FaqItemProps {
  question: string;
  answer: React.ReactNode;
  icon?: React.ReactNode;
}

function FaqItem({ question, answer, icon }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-3">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full p-4 sm:p-5 flex items-start sm:items-center justify-between text-left rounded-xl gap-4 border backdrop-blur-sm ${
          isOpen 
            ? 'bg-gradient-to-br from-indigo-500/[0.08] to-purple-500/[0.04] border-indigo-500/30 shadow-lg shadow-indigo-500/[0.08]' 
            : 'bg-white/[0.02] border-white/10'
        }`}
      >
        <div className="flex items-start sm:items-center gap-3 sm:gap-4">
          <div className={`p-2.5 rounded-xl ${
            isOpen 
              ? 'bg-gradient-to-br from-indigo-500/30 to-purple-500/30 text-indigo-300 shadow-inner' 
              : 'bg-white/[0.04] text-zinc-500'
          }`}>
            {icon || <HelpCircle size={18} />}
          </div>
          <span className={`font-semibold leading-snug mt-1.5 sm:mt-0 tracking-tight ${
            isOpen ? 'text-white' : 'text-zinc-300'
          }`}>
            {question}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className={`shrink-0 mt-2 sm:mt-0 ${
            isOpen ? 'text-indigo-400' : 'text-zinc-600'
          }`}
        >
          <ChevronDown size={18} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <div className="p-5 pt-2 text-zinc-400 leading-relaxed text-sm ml-12 sm:ml-14 bg-gradient-to-r from-indigo-500/[0.03] to-transparent rounded-b-xl -mx-5 px-5">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-zinc-300 font-sans selection:bg-indigo-500/30 selection:text-indigo-200 pb-24 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none opacity-50" />
      
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-8 md:py-16 relative z-10">
        
        {/* Header */}
        <header className="mb-10 md:mb-16 flex flex-col items-start gap-6 md:items-end md:justify-between">
          <div className="space-y-4 max-w-full">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-balance break-words">
              Rick's Addons
            </h1>
          </div>
        </header>

        {/* Live Modules Grid */}
        <section className="mb-12 md:mb-16">
          <div className="grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: 'ClaudeChrome',
                desc: 'TIDAL HiFi streaming via Cloudflare Workers.',
                url: 'https://monochrome1.cyrusna29.workers.dev/',
                icon: <Music size={18} />,
                badge: { text: 'Recommended', color: 'indigo' },
              },
              {
                name: 'Spotiflac-Eclipse',
                desc: 'Hybrid Deezer search and lossless TIDAL stream.',
                url: 'https://spotiflac-eclipse.cyrusna29.workers.dev/',
                icon: <Radio size={18} />,
              },
              {
                name: 'Eclipse3',
                desc: 'SoundCloud streaming. Recommended only as a fallback due to the 30s limit.',
                url: 'https://eclipse3.cyrusna29.workers.dev/',
                icon: <Headphones size={18} />,
                badge: { text: 'Fallback', color: 'amber' },
              },
              {
                name: 'All-In-One',
                desc: 'Universal tool for radio, podcasts, and audiobooks.',
                url: 'https://all-in-one.cyrusna29.workers.dev/',
                icon: <Zap size={18} />,
              },
            ].map((addon) => (
              <a
                key={addon.name}
                href={addon.url}
                target="_blank"
                rel="noreferrer"
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-4 sm:p-5 backdrop-blur-sm shadow-sm hover:shadow-xl hover:shadow-indigo-500/[0.08] hover:border-indigo-500/20 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.02] to-purple-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between text-zinc-500">
                    <div className="p-2 rounded-lg bg-white/[0.04] group-hover:bg-indigo-500/10 transition-colors duration-300">
                      {addon.icon}
                    </div>
                    <ExternalLink size={14} className="opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-[15px] font-semibold text-white tracking-tight">{addon.name}</h3>
                      {addon.badge && (
                        <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider ${
                          addon.badge.color === 'indigo' 
                            ? 'border-indigo-500/30 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300' 
                            : 'border-amber-500/30 bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-300'
                        }`}>
                          {addon.badge.text}
                        </span>
                      )}
                    </div>
                    <p className="text-[13px] text-zinc-400 leading-relaxed font-light">
                      {addon.desc}
                    </p>
                  </div>
                </div>
                <div className="mt-6 border-t border-white/5 pt-3 relative z-10">
                  <div className="flex items-center gap-2.5 text-[11px] font-mono text-zinc-500 truncate">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400" />
                    <span className="group-hover:text-zinc-400 transition-colors duration-300">{addon.url.replace('https://', '')}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-3xl mx-auto mb-16 md:mb-20">
          
          {/* Policies & Help */}
          <section className="space-y-4">
            <div className="mb-5 flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-indigo-500/30 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 text-indigo-300 shadow-md shadow-indigo-500/[0.1]">
                <AlertCircle size={14} />
              </div>
              <h2 className="text-base font-semibold text-zinc-100 tracking-tight">Service Policy & Notices</h2>
            </div>

            <div className="space-y-3">
              
              {/* Notice 1 */}
              <div className="group rounded-xl border border-orange-500/20 bg-gradient-to-br from-orange-500/[0.04] to-red-500/[0.02] p-4 sm:p-5 shadow-sm hover:border-orange-500/30 hover:shadow-md transition-all duration-300">
                <h4 className="mb-2 text-[13px] font-semibold text-zinc-100 flex items-center gap-2">
                  <AlertCircle size={14} className="text-orange-400" />
                  SoundCloud Playback
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Many tracks are restricted to <span className="inline-flex items-center rounded-full border border-orange-500/30 bg-gradient-to-r from-orange-500/20 to-red-500/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-orange-300 mx-1">30 seconds</span>
                  This is a known API limitation. Use other addons for full lossless tracks.
                </p>
              </div>

              {/* Notice 2 */}
              <div className="rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-4 sm:p-5 shadow-sm backdrop-blur-sm">
                <h4 className="mb-3 text-[13px] font-semibold text-zinc-100 flex items-center gap-2">
                  <ShieldAlert size={14} className="text-zinc-400" />
                  Community Advisory
                </h4>
                <ul className="space-y-3 text-xs text-zinc-400">
                  <li className="flex items-start gap-2.5 leading-relaxed">
                    <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-px" />
                    <span>Temporary outages (under 24h) resolve automatically. Please wait it out.</span>
                  </li>
                  <li className="flex items-start gap-2.5 leading-relaxed">
                    <ShieldAlert size={14} className="text-zinc-500 shrink-0 mt-px" />
                    <span>TIDAL blocks are systemic and outside of maintainer control.</span>
                  </li>
                  <li className="flex items-start gap-2.5 leading-relaxed">
                    <MessageSquare size={14} className="text-amber-400 shrink-0 mt-px" />
                    <span>Some issues may be app-related. For these, open a support ticket.</span>
                  </li>
                </ul>
              </div>

              {/* Support Links */}
              <div className="relative overflow-hidden rounded-2xl border border-indigo-500/30 bg-gradient-to-br from-indigo-500/[0.06] to-purple-500/[0.04] p-5 sm:p-6 shadow-lg shadow-indigo-500/[0.08] backdrop-blur-sm">
                <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-[100px] pointer-events-none" />
                <h4 className="mb-5 flex items-center gap-2 text-[13px] font-semibold text-indigo-300 relative z-10 tracking-wide">
                  <MessageSquare size={16} />
                  Support & Contact
                </h4>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 relative z-10 mb-3">
                  <a
                    href="https://discord.gg/wq5wRtMhJK"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-4 backdrop-blur-sm hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/[0.1] transition-all duration-300"
                  >
                    <div className="mb-4">
                      <p className="text-xs font-semibold text-zinc-100 mb-1">Addon Support</p>
                      <p className="text-[11px] text-zinc-400 leading-relaxed font-light">
                        For issues or bug reports of these addons.
                      </p>
                    </div>
                    <div className="inline-flex w-full items-center justify-between rounded-lg bg-gradient-to-r from-indigo-500/20 to-purple-500/20 px-3 py-2 text-[11px] font-semibold text-indigo-300 group-hover:from-indigo-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                      <span>Contact Developer</span>
                      <ArrowRight size={12} className="opacity-70 group-hover:translate-x-0.5 transition-transform duration-300" />
                    </div>
                  </a>
                  <a
                    href="https://discord.gg/9uSRqbEsUu"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-4 backdrop-blur-sm hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/[0.1] transition-all duration-300"
                  >
                    <div className="mb-4">
                      <p className="text-xs font-semibold text-zinc-100 mb-1">App Support</p>
                      <p className="text-[11px] text-zinc-400 leading-relaxed font-light">
                        Some issues may be app related, nothing Ricky can do.
                      </p>
                    </div>
                    <div className="inline-flex w-full items-center justify-between rounded-lg bg-gradient-to-r from-emerald-500/20 to-teal-500/20 px-3 py-2 text-[11px] font-semibold text-emerald-300 group-hover:from-emerald-500/30 group-hover:to-teal-500/30 transition-all duration-300">
                      <span>Open a Ticket</span>
                      <ArrowRight size={12} className="opacity-70 group-hover:translate-x-0.5 transition-transform duration-300" />
                    </div>
                  </a>
                </div>
                <a
                  href="https://eclipsemusic.app/faq"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative z-10 flex items-start sm:items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-3 gap-2 backdrop-blur-sm hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300"
                >
                   <div>
                     <p className="text-xs font-semibold text-zinc-200">Eclipse App FAQ</p>
                     <p className="text-[11px] text-zinc-500 mt-0.5 leading-relaxed">General help for the main Eclipse app (not related to addons).</p>
                   </div>
                   <ArrowRight size={14} className="text-zinc-500 shrink-0 mt-1 sm:mt-0 group-hover:translate-x-0.5 group-hover:text-zinc-400 transition-all duration-300" />
                </a>
              </div>

            </div>
          </section>

        </div>

        {/* Quick Review / FAQ Ext */}
        <section className="mb-10 md:mb-16 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-5 sm:p-6 md:p-8 backdrop-blur-sm shadow-lg">
          <div className="mb-6 flex items-center gap-2.5">
             <div className="p-2 rounded-lg bg-indigo-500/10">
               <HelpCircle size={18} className="text-indigo-400" />
             </div>
             <h2 className="text-[15px] font-semibold text-zinc-100 tracking-tight">Additional Details</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
             <div className="space-y-1">
                <FaqItem 
                  icon={<Zap size={16} />}
                  question="What exactly are these addons?"
                  answer="They are specialized backend scripts (Addons) that allow the Eclipse Music app to access high-quality audio sources that normally require complex authentication or paid tiers, all handled serverless-ly."
                />
             </div>
             <div className="space-y-1">
                <FaqItem 
                  icon={<Clock size={16} />}
                  question="How often are tokens updated?"
                  answer="Tokens should be manually regenerated whenever playback fails with an 'Authentication Error'. This usually happens after a few days or if the backend instance has a hard reset."
                />
             </div>
          </div>
        </section>

        <section className="mb-12 md:mb-16">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0c0c0e] to-indigo-950/[0.05] p-5 sm:p-6 backdrop-blur-sm shadow-lg">
            <h3 className="mb-5 flex items-center gap-2 text-[13px] font-semibold uppercase tracking-wider text-zinc-300">
              <div className="p-1.5 rounded-md bg-emerald-500/10">
                <CheckCircle2 size={14} className="text-emerald-400" />
              </div>
              Quick Troubleshooting
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
               {[
                 'Regenerate tokens',
                 'Clear app cache in Settings',
                 'Add more addons for fallback',
                 'Wait 6-24h for server resets'
               ].map((tip, i) => (
                 <li key={tip} className="group flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.02] p-2.5 text-[13px] text-zinc-300 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300">
                    <span className="flex h-5 w-5 items-center justify-center rounded-md bg-gradient-to-br from-indigo-500/20 to-purple-500/20 text-[10px] font-semibold text-indigo-300 shrink-0 group-hover:from-indigo-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                      {i + 1}
                    </span>
                    {tip}
                 </li>
               ))}
            </ul>
          </div>
        </section>

  

      </div>
    </div>
  );
}
