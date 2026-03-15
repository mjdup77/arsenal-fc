import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '#executive-summary', label: 'Summary' },
  { href: '#attendance', label: 'Attendance' },
  { href: '#social', label: 'Digital' },
  { href: '#commercial', label: 'Commercial' },
  { href: '#forecasting', label: 'Forecasting' },
  { href: '#recommendations', label: 'Recommendations' },
  { href: '#methodology', label: 'Methodology' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-surface-200'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 font-semibold text-surface-900">
          <div className="w-7 h-7 bg-arsenal-red rounded-md flex items-center justify-center">
            <span className="text-white text-xs font-bold">A</span>
          </div>
          <span className="hidden sm:inline text-sm tracking-wide">Supporter Intelligence</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium text-surface-800/70 hover:text-arsenal-red px-3 py-2 rounded-lg hover:bg-surface-100 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-surface-800"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-surface-200 px-6 pb-4">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm text-surface-800/70 hover:text-arsenal-red py-2"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
