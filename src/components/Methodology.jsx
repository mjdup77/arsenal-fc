import { BookOpen, Github, Linkedin, Mail } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const dataSources = [
  { name: 'Attendance Data', source: 'Transfermarkt, Wikipedia, Arsenal.com', notes: 'Premier League home matches 2016/17–2025/26' },
  { name: 'Financial Data', source: 'Arsenal Holdings PLC annual reports', notes: 'Revenue segmentation by stream' },
  { name: 'Social Media', source: 'Platform public profiles, Social Blade', notes: 'Follower counts and growth rates' },
  { name: 'Engagement Metrics', source: 'Derived estimates', notes: 'Based on industry benchmarks and public data' },
  { name: 'Benchmarks', source: 'Deloitte Football Money League, UEFA reports', notes: 'Cross-club comparison data' },
];

const tools = [
  'Python (pandas, scikit-learn, matplotlib)',
  'React + Tailwind CSS (this presentation)',
  'Recharts (data visualisation)',
  'Public APIs & web data',
];

export default function Methodology() {
  return (
    <SectionWrapper id="methodology" className="bg-white border-y border-surface-200">
      <div className="flex items-center gap-3 mb-2">
        <BookOpen size={20} className="text-arsenal-red" />
        <span className="text-xs font-semibold tracking-widest uppercase text-arsenal-red">
          Appendix
        </span>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-surface-900 mb-3">
        Methodology &amp; About
      </h2>
      <p className="text-surface-800/60 max-w-3xl mb-12">
        Transparency in approach is as important as the insights themselves. Below is a
        summary of the data sources, tools, and methodology used in this analysis.
      </p>

      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <div>
          <h3 className="text-sm font-semibold tracking-widest uppercase text-surface-800/50 mb-4">
            Data Sources
          </h3>
          <div className="space-y-3">
            {dataSources.map(d => (
              <div key={d.name} className="bg-surface-50 rounded-lg p-4 border border-surface-200">
                <div className="flex justify-between items-start">
                  <span className="text-sm font-semibold text-surface-900">{d.name}</span>
                </div>
                <p className="text-xs text-surface-800/50 mt-1">{d.source}</p>
                <p className="text-xs text-surface-800/40 mt-0.5">{d.notes}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-widest uppercase text-surface-800/50 mb-4">
            Tools &amp; Approach
          </h3>
          <div className="bg-surface-50 rounded-lg p-6 border border-surface-200 mb-6">
            <ul className="space-y-2">
              {tools.map(t => (
                <li key={t} className="flex items-start gap-2 text-sm text-surface-800/70">
                  <span className="w-1.5 h-1.5 bg-arsenal-red rounded-full mt-1.5 shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <h3 className="text-sm font-semibold tracking-widest uppercase text-surface-800/50 mb-4">
            Limitations
          </h3>
          <div className="bg-surface-50 rounded-lg p-6 border border-surface-200">
            <ul className="space-y-2 text-sm text-surface-800/60">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-surface-300 rounded-full mt-1.5 shrink-0" />
                Analysis based entirely on publicly available data — internal data would significantly refine insights
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-surface-300 rounded-full mt-1.5 shrink-0" />
                Social engagement metrics are estimated from benchmarks, not direct API access
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-surface-300 rounded-full mt-1.5 shrink-0" />
                Forecasting model uses simplified features — a production model would incorporate many more variables
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-surface-300 rounded-full mt-1.5 shrink-0" />
                Commercial benchmarking relies on Deloitte Money League figures, which may lag by a reporting cycle
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-surface-200 pt-12">
        <h3 className="text-sm font-semibold tracking-widest uppercase text-surface-800/50 mb-6">
          About the Author
        </h3>
        <div className="bg-gradient-to-br from-surface-900 to-arsenal-navy rounded-xl p-8 text-white">
          <div className="max-w-2xl">
            <h4 className="text-xl font-semibold mb-2">MJ du Plessis</h4>
            <p className="text-white/60 text-sm mb-4">
              Data &amp; Analytics Professional
            </p>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              A data professional with experience spanning sports technology, analytics, and
              insight generation. Previously at Veo Technologies working with professional
              football clubs on video and data analytics. Passionate about using data to solve
              real football problems and drive supporter-centric decision making.
            </p>
            <p className="text-white/50 text-xs leading-relaxed mb-6">
              This briefing was created as a demonstration of analytical approach and
              presentation skills, using entirely public data. It represents the kind of
              work I would bring to a supporter insights role — combining data literacy,
              football context, and a focus on actionable recommendations.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/mjduplessis/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm px-4 py-2 rounded-lg transition-colors"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a
                href="https://github.com/mjduplessis"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm px-4 py-2 rounded-lg transition-colors"
              >
                <Github size={16} />
                GitHub
              </a>
              <a
                href="mailto:mj@example.com"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm px-4 py-2 rounded-lg transition-colors"
              >
                <Mail size={16} />
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
