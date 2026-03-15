import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-surface-950 via-arsenal-navy to-surface-900" />

      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="absolute top-0 left-0 w-96 h-96 bg-arsenal-red/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-arsenal-gold/8 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in-up">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-8">
          <div className="w-2 h-2 bg-arsenal-red rounded-full animate-pulse" />
          <span className="text-white/70 text-xs font-medium tracking-wider uppercase">
            Analytical Briefing — March 2026
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
          Arsenal FC
          <span className="block text-arsenal-gold mt-2">Supporter Intelligence</span>
        </h1>

        <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-4">
          A data-driven analysis of supporter engagement, matchday patterns,
          and commercial opportunities
        </p>

        <p className="text-sm text-white/40 mb-12">
          MJ du Plessis &middot; Public Data Analysis &middot; March 2026
        </p>

        <a
          href="#executive-summary"
          className="inline-flex items-center gap-2 bg-arsenal-red hover:bg-arsenal-red-dark text-white font-medium px-6 py-3 rounded-lg transition-colors"
        >
          Explore the Briefing
          <ChevronDown size={16} />
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white/30" size={24} />
      </div>
    </header>
  );
}
