import { Target, ArrowRight } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const recommendations = [
  {
    id: 1,
    priority: 'High',
    title: 'Launch a Digital Supporter Membership Tier',
    problem: 'With 42,000 on the season ticket waiting list and a global following of 131.5M, the vast majority of supporters have no formalised relationship with the club beyond social media.',
    solution: 'Create a tiered digital membership offering exclusive content, early access to digital merchandise, voting rights on non-sporting matters, and personalised engagement.',
    impact: 'Potential to convert 1-3% of social followers (1.3M-3.9M members). At £25-50/year, this represents £33M-£195M in new annual recurring revenue.',
    dataPoint: 'Commercial revenue per follower gap of £0.90 vs. Man City',
    effort: 'Medium',
    timeline: '6-12 months',
  },
  {
    id: 2,
    priority: 'High',
    title: 'Monetise the Matchday Digital Engagement Window',
    problem: 'Digital engagement spikes 6.8x during live matches, but this window is largely unmonetised beyond standard social content.',
    solution: 'Build matchday-specific digital activations: live polls, predictive games, in-app hospitality ordering, second-screen experiences with partner integrations.',
    impact: 'Enhanced matchday sponsorship packages, increased in-app transactions, and richer supporter data for personalisation.',
    dataPoint: '6.8x engagement spike during HT-FT window',
    effort: 'Medium-High',
    timeline: '3-9 months',
  },
  {
    id: 3,
    priority: 'Medium',
    title: 'TikTok-First Commercial Content Strategy',
    problem: 'TikTok delivers 81% higher engagement than benchmark but receives minimal commercial integration — it is currently a brand-awareness channel only.',
    solution: 'Develop TikTok-native commercial content formats: creator partnerships, shoppable content, sponsored challenges aligned with partner brands.',
    impact: 'Unlock a new revenue channel while engaging the fastest-growing demographic segment.',
    dataPoint: '5.8% engagement rate (81% above benchmark)',
    effort: 'Low-Medium',
    timeline: '1-3 months',
  },
  {
    id: 4,
    priority: 'Medium',
    title: 'Dynamic Hospitality Pricing Model',
    problem: 'Hospitality runs at 94.6% occupancy — strong, but leaving value on the table for high-demand fixtures while under-utilising for lower-demand ones.',
    solution: 'Implement demand-based pricing for hospitality packages using fixture desirability, historical demand, and real-time uptake data.',
    impact: 'Estimated 8-12% uplift in hospitality revenue through better yield management, equating to £3-5M annually.',
    dataPoint: 'Hospitality occupancy varies significantly by opponent tier',
    effort: 'Medium',
    timeline: '3-6 months',
  },
  {
    id: 5,
    priority: 'Medium',
    title: 'Build a Supporter Engagement Resilience Programme',
    problem: 'The forecasting model shows a 2x engagement difference between title-challenge and European-absence scenarios. Engagement should not be this volatile.',
    solution: 'Develop always-on engagement programmes — community initiatives, heritage content, behind-the-scenes access — that maintain baseline engagement regardless of results.',
    impact: 'Raise the engagement floor from an index of 89 to 110+, protecting commercial revenue during transition seasons.',
    dataPoint: 'Title Challenge (171) vs. European Absence (89) = 1.9x variance',
    effort: 'Medium',
    timeline: '6-12 months',
  },
];

const priorityColors = {
  High: 'bg-arsenal-red/10 text-arsenal-red border-arsenal-red/20',
  'Medium': 'bg-arsenal-gold/10 text-amber-700 border-arsenal-gold/30',
};

export default function Recommendations() {
  return (
    <SectionWrapper id="recommendations">
      <div className="flex items-center gap-3 mb-2">
        <Target size={20} className="text-arsenal-red" />
        <span className="text-xs font-semibold tracking-widest uppercase text-arsenal-red">
          Section 05
        </span>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-surface-900 mb-3">
        Strategic Recommendations
      </h2>
      <p className="text-surface-800/60 max-w-3xl mb-12">
        Five actionable recommendations derived directly from the data, prioritised by
        potential impact and feasibility. Each is tied to a specific insight from the analysis.
      </p>

      <div className="space-y-6">
        {recommendations.map((rec) => (
          <div
            key={rec.id}
            className="bg-white rounded-xl border border-surface-200 p-6 md:p-8 hover:shadow-md transition-shadow"
          >
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-3xl font-display font-bold text-surface-200">
                {String(rec.id).padStart(2, '0')}
              </span>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-surface-900">{rec.title}</h3>
              </div>
              <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${priorityColors[rec.priority]}`}>
                {rec.priority} Priority
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-surface-800/50 mb-2">
                  Problem
                </h4>
                <p className="text-sm text-surface-800/70 leading-relaxed">{rec.problem}</p>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-surface-800/50 mb-2">
                  Proposed Solution
                </h4>
                <p className="text-sm text-surface-800/70 leading-relaxed">{rec.solution}</p>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-surface-100 grid sm:grid-cols-3 gap-4">
              <div>
                <span className="text-xs text-surface-800/40 block mb-1">Expected Impact</span>
                <p className="text-sm text-surface-900 font-medium leading-snug">{rec.impact}</p>
              </div>
              <div>
                <span className="text-xs text-surface-800/40 block mb-1">Supporting Data</span>
                <p className="text-sm text-arsenal-red font-medium">{rec.dataPoint}</p>
              </div>
              <div className="flex gap-6">
                <div>
                  <span className="text-xs text-surface-800/40 block mb-1">Effort</span>
                  <p className="text-sm font-medium text-surface-900">{rec.effort}</p>
                </div>
                <div>
                  <span className="text-xs text-surface-800/40 block mb-1">Timeline</span>
                  <p className="text-sm font-medium text-surface-900">{rec.timeline}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
