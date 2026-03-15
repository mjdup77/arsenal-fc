export default function Footer() {
  return (
    <footer className="bg-surface-950 text-white/40 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-6 h-6 bg-arsenal-red rounded-md flex items-center justify-center">
            <span className="text-white text-[10px] font-bold">A</span>
          </div>
          <span className="text-white/60 text-sm font-medium">Supporter Intelligence Briefing</span>
        </div>
        <p className="text-xs leading-relaxed max-w-lg mx-auto mb-6">
          This analysis was produced independently using publicly available data.
          It is not affiliated with or endorsed by Arsenal Football Club.
          All data sources are cited in the Methodology section.
        </p>
        <p className="text-xs text-white/25">
          &copy; {new Date().getFullYear()} MJ du Plessis &middot; Built with React, Tailwind CSS &amp; Recharts
        </p>
      </div>
    </footer>
  );
}
