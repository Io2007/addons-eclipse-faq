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
    <div className="mb-2 sm:mb-3 lg:mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full p-3 sm:p-4 lg:p-5 flex items-start sm:items-center justify-between text-left rounded-xl gap-2 sm:gap-3 lg:gap-4 border backdrop-blur-sm ${
          isOpen 
            ? 'bg-gradient-to-br from-indigo-500/[0.08] to-purple-500/[0.04] border-indigo-500/30 shadow-lg shadow-indigo-500/[0.08]' 
            : 'bg-white/[0.02] border-white/10'
        }`}
      >
        <div className="flex items-start sm:items-center gap-2 sm:gap-3 lg:gap-4">
          <div className={`p-2 sm:p-2.5 rounded-xl ${
            isOpen 
              ? 'bg-gradient-to-br from-indigo-500/30 to-purple-500/30 text-indigo-300 shadow-inner' 
              : 'bg-white/[0.04] text-zinc-500'
          }`}>
            {icon || <HelpCircle size={12} className="sm:size-14 lg:size-16" />}
          </div>
          <span className={`font-semibold leading-snug mt-1 sm:mt-0 tracking-tight text-xs sm:text-sm lg:text-base ${
            isOpen ? 'text-white' : 'text-zinc-300'
          }`}>
            {question}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className={`shrink-0 mt-1 sm:mt-0 ${
            isOpen ? 'text-indigo-400' : 'text-zinc-600'
          }`}
        >
          <ChevronDown size={12} className="sm:size-14 lg:size-16" />
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
            <div className="p-3 sm:p-4 lg:p-5 pt-2 text-zinc-400 leading-relaxed text-xs sm:text-sm lg:text-base ml-8 sm:ml-10 lg:ml-12 bg-gradient-to-r from-indigo-500/[0.03] to-transparent rounded-b-xl -mx-3 sm:-mx-4 lg:-mx-5 px-3 sm:px-4 lg:px-5">
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
    <div className="min-h-screen bg-[#050505] text-zinc-300 font-sans selection:bg-indigo-500/30 selection:text-indigo-200 pb-8 sm:pb-12 lg:pb-16 xl:pb-20 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[40vh] sm:h-[500px] lg:h-[600px] bg-indigo-500/10 blur-[10vw] sm:blur-[120px] lg:blur-[150px] rounded-full pointer-events-none opacity-50" />
      
      <div className="mx-auto w-full max-w-5xl px-3 sm:px-4 lg:px-6 xl:px-8 py-4 sm:py-6 lg:py-8 xl:py-10 relative z-10">
        
        {/* Header */}
        <header className="mb-6 sm:mb-8 lg:mb-10 xl:mb-12 flex flex-col items-center w-full">
          <div className="space-y-2 sm:space-y-3 lg:space-y-4 max-w-full text-center">
            <h1 
              className="text-base sm:text-lg lg:text-xl font-medium tracking-tight break-words w-full text-white"
            >
              Rick's Addons
            </h1>
          </div>
        </header>

        {/* Live Modules Grid */}
        <section className="mb-6 sm:mb-8 lg:mb-10 xl:mb-12">
          <div className="grid grid-cols-1 gap-2 xs:gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: 'ClaudeChrome',
                desc: 'TIDAL HiFi streaming via Cloudflare Workers.',
                url: 'https://monochrome1.cyrusna29.workers.dev/',
                icon: <Music size={12} className="sm:size-14 lg:size-16" />,
                badge: { text: 'Recommended', color: 'indigo' },
              },
              {
                name: 'Spotiflac-Eclipse',
                desc: 'Hybrid Deezer search and lossless TIDAL stream.',
                url: 'https://spotiflac-eclipse.cyrusna29.workers.dev/',
                icon: <Radio size={12} className="sm:size-14 lg:size-16" />,
              },
              {
                name: 'Eclipse3',
                desc: 'SoundCloud streaming. Recommended only as a fallback due to the 30s limit.',
                url: 'https://eclipse3.cyrusna29.workers.dev/',
                icon: <Headphones size={12} className="sm:size-14 lg:size-16" />,
                badge: { text: 'Fallback', color: 'amber' },
              },
              {
                name: 'All-In-One',
                desc: 'Universal tool for radio, podcasts, and audiobooks.',
                url: 'https://all-in-one.cyrusna29.workers.dev/',
                icon: <Zap size={12} className="sm:size-14 lg:size-16" />,
              },
            ].map((addon) => (
              <a
                key={addon.name}
                href={addon.url}
                target="_blank"
                rel="noreferrer"
                className="group relative flex flex-col justify-between overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-3 sm:p-4 lg:p-5 backdrop-blur-sm shadow-sm hover:shadow-xl hover:shadow-indigo-500/[0.08] hover:border-indigo-500/20 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.02] to-purple-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="space-y-3 sm:space-y-4 relative z-10">
                  <div className="flex items-center justify-between text-zinc-500">
                    <div className="p-1.5 sm:p-2 rounded-lg bg-white/[0.04] group-hover:bg-indigo-500/10 transition-colors duration-300">
                      {addon.icon}
                    </div>
                    <ExternalLink size={10} className="sm:size-12 lg:size-14 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-1">
                      <h3 className="text-xs sm:text-[15px] lg:text-base font-semibold text-white tracking-tight">{addon.name}</h3>
                      {addon.badge && (
                        <span className={`inline-flex items-center rounded-full border px-1.5 sm:px-2 py-0.5 text-[8px] sm:text-[9px] lg:text-[10px] font-bold uppercase tracking-wider ${
                          addon.badge.color === 'indigo' 
                            ? 'border-indigo-500/30 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300' 
                            : 'border-amber-500/30 bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-300'
                        }`}>
                          {addon.badge.text}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] sm:text-[13px] lg:text-sm text-zinc-400 leading-relaxed font-light">
                      {addon.desc}
                    </p>
                  </div>
                </div>
                <div className="mt-4 sm:mt-6 border-t border-white/5 pt-2 sm:pt-3 relative z-10">
                  <div className="flex items-center gap-2 sm:gap-2.5 text-[10px] sm:text-[11px] lg:text-xs font-mono text-zinc-500 truncate">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400" />
                    <span className="group-hover:text-zinc-400 transition-colors duration-300">{addon.url.replace('https://', '')}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-12 xl:mb-16">
          
          {/* Policies & Help */}
          <section className="space-y-3 sm:space-y-4 lg:space-y-5">
            <div className="mb-3 sm:mb-4 lg:mb-5 flex items-center gap-2 sm:gap-2.5">
              <div className="flex h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 items-center justify-center rounded-lg border border-indigo-500/30 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 text-indigo-300 shadow-md shadow-indigo-500/[0.1]">
                <AlertCircle size={10} className="sm:size-12 lg:size-14" />
              </div>
              <h2 className="text-sm sm:text-base lg:text-lg font-semibold text-zinc-100 tracking-tight">Service Policy & Notices</h2>
            </div>

            <div className="space-y-2 sm:space-y-3 lg:space-y-4">
              
              {/* Notice 1 */}
              <div className="group rounded-xl border border-orange-500/20 bg-gradient-to-br from-orange-500/[0.04] to-red-500/[0.02] p-3 sm:p-4 lg:p-5 shadow-sm hover:border-orange-500/30 hover:shadow-md transition-all duration-300">
                <h4 className="mb-1.5 sm:mb-2 lg:mb-2.5 text-xs sm:text-[13px] lg:text-sm font-semibold text-zinc-100 flex items-center gap-1.5 sm:gap-2">
                  <AlertCircle size={10} className="sm:size-12 lg:size-14 text-orange-400" />
                  SoundCloud Playback
                </h4>
                <p className="text-[11px] sm:text-xs lg:text-sm text-zinc-400 leading-relaxed">
                  Many tracks are restricted to <span className="inline-flex items-center rounded-full border border-orange-500/30 bg-gradient-to-r from-orange-500/20 to-red-500/20 px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[10px] lg:text-xs font-bold uppercase tracking-wider text-orange-300 mx-1">30 seconds</span>
                  This is a known API limitation. Use other addons for full lossless tracks.
                </p>
              </div>

              {/* Notice 2 */}
              <div className="rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-3 sm:p-4 lg:p-5 shadow-sm backdrop-blur-sm">
                <h4 className="mb-2 sm:mb-3 lg:mb-3.5 text-xs sm:text-[13px] lg:text-sm font-semibold text-zinc-100 flex items-center gap-1.5 sm:gap-2">
                  <ShieldAlert size={10} className="sm:size-12 lg:size-14 text-zinc-400" />
                  Community Advisory
                </h4>
                <ul className="space-y-2 sm:space-y-3 lg:space-y-3.5 text-[11px] sm:text-xs lg:text-sm text-zinc-400">
                  <li className="flex items-start gap-2 sm:gap-2.5 lg:gap-3 leading-relaxed">
                    <CheckCircle2 size={10} className="sm:size-12 lg:size-14 text-emerald-400 shrink-0 mt-px" />
                    <span>Temporary outages (under 24h) resolve automatically. Please wait it out.</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-2.5 lg:gap-3 leading-relaxed">
                    <ShieldAlert size={10} className="sm:size-12 lg:size-14 text-zinc-500 shrink-0 mt-px" />
                    <span>TIDAL blocks are systemic and outside of maintainer control.</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-2.5 lg:gap-3 leading-relaxed">
                    <MessageSquare size={10} className="sm:size-12 lg:size-14 text-amber-400 shrink-0 mt-px" />
                    <span>Some issues may be app-related. For these, open a support ticket.</span>
                  </li>
                </ul>
              </div>

              {/* Support Links */}
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-indigo-500/30 bg-gradient-to-br from-indigo-500/[0.06] to-purple-500/[0.04] p-4 sm:p-5 lg:p-6 shadow-lg shadow-indigo-500/[0.08] backdrop-blur-sm">
                <div className="absolute -right-16 sm:-right-24 lg:-right-32 -top-16 sm:-top-24 lg:-top-32 h-32 w-32 sm:h-64 sm:w-64 lg:h-80 lg:w-80 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-[60px] sm:blur-[100px] lg:blur-[120px] pointer-events-none" />
                <h4 className="mb-3 sm:mb-5 lg:mb-6 flex items-center gap-1.5 sm:gap-2 text-xs sm:text-[13px] lg:text-sm font-semibold text-indigo-300 relative z-10 tracking-wide">
                  <MessageSquare size={12} className="sm:size-14 lg:size-16" />
                  Support & Contact
                </h4>
                <div className="grid grid-cols-1 gap-2 sm:gap-3 lg:gap-4 sm:grid-cols-2 relative z-10 mb-2 sm:mb-3 lg:mb-4">
                  <a
                    href="https://discord.gg/wq5wRtMhJK"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-3 sm:p-4 lg:p-5 backdrop-blur-sm hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/[0.1] transition-all duration-300"
                  >
                    <div className="mb-2 sm:mb-4 lg:mb-5">
                      <p className="text-[11px] sm:text-xs lg:text-sm font-semibold text-zinc-100 mb-0.5 sm:mb-1 lg:mb-1.5">Addon Support</p>
                      <p className="text-[10px] sm:text-[11px] lg:text-xs text-zinc-400 leading-relaxed font-light">
                        For issues or bug reports of these addons.
                      </p>
                    </div>
                    <div className="inline-flex w-full items-center justify-between rounded-lg bg-gradient-to-r from-indigo-500/20 to-purple-500/20 px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 lg:py-2.5 text-[10px] sm:text-[11px] lg:text-xs font-semibold text-indigo-300 group-hover:from-indigo-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                      <span>Contact Developer</span>
                      <ArrowRight size={10} className="sm:size-12 lg:size-14 opacity-70 group-hover:translate-x-0.5 transition-transform duration-300" />
                    </div>
                  </a>
                  <a
                    href="https://discord.gg/9uSRqbEsUu"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-3 sm:p-4 lg:p-5 backdrop-blur-sm hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/[0.1] transition-all duration-300"
                  >
                    <div className="mb-2 sm:mb-4 lg:mb-5">
                      <p className="text-[11px] sm:text-xs lg:text-sm font-semibold text-zinc-100 mb-0.5 sm:mb-1 lg:mb-1.5">App Support</p>
                      <p className="text-[10px] sm:text-[11px] lg:text-xs text-zinc-400 leading-relaxed font-light">
                        Some issues may be app related, nothing Ricky can do.
                      </p>
                    </div>
                    <div className="inline-flex w-full items-center justify-between rounded-lg bg-gradient-to-r from-emerald-500/20 to-teal-500/20 px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 lg:py-2.5 text-[10px] sm:text-[11px] lg:text-xs font-semibold text-emerald-300 group-hover:from-emerald-500/30 group-hover:to-teal-500/30 transition-all duration-300">
                      <span>Open a Ticket</span>
                      <ArrowRight size={10} className="sm:size-12 lg:size-14 opacity-70 group-hover:translate-x-0.5 transition-transform duration-300" />
                    </div>
                  </a>
                </div>
                <a
                  href="https://eclipsemusic.app/faq"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative z-10 flex items-start sm:items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-2 sm:p-3 lg:p-4 gap-1.5 sm:gap-2 lg:gap-3 backdrop-blur-sm hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300"
                >
                   <div>
                     <p className="text-[11px] sm:text-xs lg:text-sm font-semibold text-zinc-200">Eclipse App FAQ</p>
                     <p className="text-[10px] sm:text-[11px] lg:text-xs text-zinc-500 mt-0.5 leading-relaxed">General help for the main Eclipse app (not related to addons).</p>
                   </div>
                   <ArrowRight size={10} className="sm:size-12 lg:size-14 text-zinc-500 shrink-0 mt-1 sm:mt-0 group-hover:translate-x-0.5 group-hover:text-zinc-400 transition-all duration-300" />
                </a>
              </div>

            </div>
          </section>

        </div>

        {/* Quick Review / FAQ Ext */}
        <section className="mb-6 sm:mb-8 lg:mb-10 xl:mb-12 rounded-xl sm:rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-4 sm:p-5 lg:p-6 xl:p-8 backdrop-blur-sm shadow-lg">
          <div className="mb-4 sm:mb-6 lg:mb-7 flex items-center gap-2 sm:gap-2.5 lg:gap-3">
             <div className="p-1.5 sm:p-2 lg:p-2.5 rounded-lg bg-indigo-500/10">
               <HelpCircle size={16} className="sm:size-18 lg:size-20 text-indigo-400" />
             </div>
             <h2 className="text-xs sm:text-[15px] lg:text-base font-semibold text-zinc-100 tracking-tight">Additional Details</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 sm:gap-x-8 lg:gap-x-10 gap-y-2">
             <div className="space-y-1">
                <FaqItem 
                  icon={<Zap size={12} className="sm:size-14 lg:size-16" />}
                  question="What exactly are these addons?"
                  answer="They are specialized backend scripts (Addons) that allow the Eclipse Music app to access high-quality audio sources that normally require complex authentication or paid tiers, all handled serverless-ly."
                />
             </div>
             <div className="space-y-1">
                <FaqItem 
                  icon={<Clock size={12} className="sm:size-14 lg:size-16" />}
                  question="How often are tokens updated?"
                  answer="Tokens should be manually regenerated whenever playback fails with an 'Authentication Error'. This usually happens after a few days or if the backend instance has a hard reset."
                />
             </div>
          </div>
        </section>

        <section className="mb-8 sm:mb-10 lg:mb-12 xl:mb-16">
          <div className="rounded-xl sm:rounded-2xl border border-white/10 bg-gradient-to-br from-[#0c0c0e] to-indigo-950/[0.05] p-4 sm:p-5 lg:p-6 xl:p-8 backdrop-blur-sm shadow-lg">
            <h3 className="mb-3 sm:mb-5 lg:mb-6 flex items-center gap-1.5 sm:gap-2 lg:gap-2.5 text-xs sm:text-[13px] lg:text-sm font-semibold uppercase tracking-wider text-zinc-300">
              <div className="p-1 sm:p-1.5 lg:p-2 rounded-md bg-emerald-500/10">
                <CheckCircle2 size={10} className="sm:size-12 lg:size-14 text-emerald-400" />
              </div>
              Quick Troubleshooting
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 lg:gap-3">
               {[
                 'Regenerate tokens',
                 'Clear app cache in Settings',
                 'Add more addons for fallback',
                 'Wait 6-24h for server resets'
               ].map((tip, i) => (
                 <li key={tip} className="group flex items-center gap-2 sm:gap-3 lg:gap-4 rounded-lg border border-white/5 bg-white/[0.02] p-2 sm:p-2.5 lg:p-3 text-[11px] sm:text-[13px] lg:text-sm text-zinc-300 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300">
                    <span className="flex h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 items-center justify-center rounded-md bg-gradient-to-br from-indigo-500/20 to-purple-500/20 text-[9px] sm:text-[10px] lg:text-xs font-semibold text-indigo-300 shrink-0 group-hover:from-indigo-500/30 group-hover:to-purple-500/30 transition-all duration-300">
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
