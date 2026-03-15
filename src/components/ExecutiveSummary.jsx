import { TrendingUp, Users, Monitor, PoundSterling } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const metrics = [
  {
    icon: Users,
    label: 'Avg. Attendance',
    value: '60,452',
    subtext: '99.6% capacity',
    trend: '+0.4% YoY',
    trendUp: true,
  },
  {
    icon: Monitor,
    label: 'Total Social Following',
    value: '131.5M',
    subtext: 'Across 5 platforms',
    trend: '+11.2% YoY',
    trendUp: true,
  },
  {
    icon: PoundSterling,
    label: 'Total Revenue',
    value: '£551M',
    subtext: '2024/25 season',
    trend: '+5.6% YoY',
    trendUp: true,
  },
  {
    icon: TrendingUp,
    label: 'Engagement Index',
    value: '153',
    subtext: 'Composite score',
    trend: '+7.4% YoY',
    trendUp: true,
  },
];

const keyFindings = [
  {
    number: '01',
    title: 'Near-capacity attendance masks untapped matchday revenue',
    description:
      'With 99.6% utilization, physical attendance growth is capped. The opportunity lies in matchday revenue per attendee — currently £121 vs. a projected optimum of £145+.',
  },
  {
    number: '02',
    title: 'TikTok is the fastest-growing channel but under-monetised',
    description:
      'TikTok following grew 31% YoY with engagement rates 81% above benchmark, yet contributes minimally to commercial conversion funnels.',
  },
  {
    number: '03',
    title: 'Commercial revenue per follower lags top peers',
    description:
      'At £1.28 per follower, Arsenal significantly trails Man City (£2.18) and Man United (£1.89), suggesting substantial commercial upside from the existing supporter base.',
  },
];

export default function ExecutiveSummary() {
  return (
    <SectionWrapper id="executive-summary" className="bg-white border-y border-surface-200">
      <div className="text-center mb-12">
        <span className="text-xs font-semibold tracking-widest uppercase text-arsenal-red">
          Executive Summary
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-surface-900 mt-3">
          The State of Arsenal&apos;s Supporter Ecosystem
        </h2>
        <p className="text-surface-800/60 mt-3 max-w-2xl mx-auto">
          Key metrics and findings from an analysis of publicly available data covering
          attendance, digital engagement, and commercial performance.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
        {metrics.map((m) => (
          <div key={m.label} className="stat-card bg-surface-50 rounded-xl p-6 border border-surface-200">
            <div className="flex items-center gap-2 mb-3">
              <m.icon size={18} className="text-arsenal-red" />
              <span className="text-xs font-medium text-surface-800/60 uppercase tracking-wide">
                {m.label}
              </span>
            </div>
            <div className="text-3xl font-bold text-surface-900">{m.value}</div>
            <div className="text-sm text-surface-800/50 mt-1">{m.subtext}</div>
            <div
              className={`text-xs font-semibold mt-2 ${
                m.trendUp ? 'text-emerald-600' : 'text-red-500'
              }`}
            >
              {m.trend}
            </div>
          </div>
        ))}
      </div>

      <div>
        <h3 className="text-sm font-semibold tracking-widest uppercase text-surface-800/50 mb-6">
          Key Findings
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {keyFindings.map((f) => (
            <div key={f.number} className="group">
              <span className="font-display text-4xl font-bold text-arsenal-red/15 group-hover:text-arsenal-red/30 transition-colors">
                {f.number}
              </span>
              <h4 className="text-base font-semibold text-surface-900 mt-1 leading-snug">
                {f.title}
              </h4>
              <p className="text-sm text-surface-800/60 mt-2 leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
