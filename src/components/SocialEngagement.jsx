import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Cell, RadarChart, Radar,
  PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';
import { Globe } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import {
  followerGrowth, engagementRates, contentPerformance,
  matchdayDigitalSpikes, sentimentByResult,
} from '../data/social';

const PLATFORM_COLORS = {
  instagram: '#E4405F',
  twitter: '#1DA1F2',
  facebook: '#1877F2',
  tiktok: '#000000',
  youtube: '#FF0000',
};

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white rounded-lg shadow-lg border border-surface-200 px-4 py-3 text-sm">
      <p className="font-semibold text-surface-900">{label}</p>
      {payload.map((p, i) => (
        <p key={i} style={{ color: p.color || p.stroke }} className="mt-1">
          {p.name}: {typeof p.value === 'number' ? `${p.value}M` : p.value}
        </p>
      ))}
    </div>
  );
};

const SpikeTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white rounded-lg shadow-lg border border-surface-200 px-4 py-3 text-sm">
      <p className="font-semibold text-surface-900">{label}</p>
      {payload.map((p, i) => (
        <p key={i} className="mt-1 text-surface-800">
          {p.value}x baseline engagement
        </p>
      ))}
    </div>
  );
};

export default function SocialEngagement() {
  const radarData = contentPerformance.map(d => ({
    type: d.type.length > 14 ? d.type.slice(0, 12) + '…' : d.type,
    engagement: d.avgEngagement,
    shareability: d.shareRate,
    sentiment: d.sentiment * 5,
  }));

  return (
    <SectionWrapper id="social" className="bg-white border-y border-surface-200">
      <div className="flex items-center gap-3 mb-2">
        <Globe size={20} className="text-arsenal-red" />
        <span className="text-xs font-semibold tracking-widest uppercase text-arsenal-red">
          Section 02
        </span>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-surface-900 mb-3">
        Digital &amp; Social Engagement
      </h2>
      <p className="text-surface-800/60 max-w-3xl mb-12">
        Arsenal&apos;s digital footprint is expanding rapidly, driven by younger demographics
        on TikTok and Instagram. Understanding which platforms drive engagement — and which
        drive <strong className="text-surface-900">commercial value</strong> — is critical for resource allocation.
      </p>

      <div className="bg-surface-50 rounded-xl border border-surface-200 p-6 mb-8">
        <h3 className="text-sm font-semibold text-surface-800/70 mb-1">
          Social Media Following Growth (Millions)
        </h3>
        <p className="text-xs text-surface-800/40 mb-4">
          TikTok and Instagram driving the majority of growth since 2020
        </p>
        <ResponsiveContainer width="100%" height={320}>
          <AreaChart data={followerGrowth} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e8e6e1" />
            <XAxis dataKey="year" tick={{ fontSize: 11 }} stroke="#a8a29e" />
            <YAxis tick={{ fontSize: 11 }} stroke="#a8a29e" tickFormatter={v => `${v}M`} />
            <Tooltip content={<CustomTooltip />} />
            <Area type="monotone" dataKey="instagram" name="Instagram" stackId="1" stroke={PLATFORM_COLORS.instagram} fill={PLATFORM_COLORS.instagram} fillOpacity={0.3} />
            <Area type="monotone" dataKey="facebook" name="Facebook" stackId="1" stroke={PLATFORM_COLORS.facebook} fill={PLATFORM_COLORS.facebook} fillOpacity={0.2} />
            <Area type="monotone" dataKey="twitter" name="Twitter/X" stackId="1" stroke={PLATFORM_COLORS.twitter} fill={PLATFORM_COLORS.twitter} fillOpacity={0.2} />
            <Area type="monotone" dataKey="tiktok" name="TikTok" stackId="1" stroke={PLATFORM_COLORS.tiktok} fill={PLATFORM_COLORS.tiktok} fillOpacity={0.15} />
            <Area type="monotone" dataKey="youtube" name="YouTube" stackId="1" stroke={PLATFORM_COLORS.youtube} fill={PLATFORM_COLORS.youtube} fillOpacity={0.2} />
          </AreaChart>
        </ResponsiveContainer>
        <div className="flex flex-wrap gap-4 mt-3 text-xs text-surface-800/60">
          {Object.entries(PLATFORM_COLORS).map(([k, c]) => (
            <span key={k} className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-sm inline-block" style={{ backgroundColor: c, opacity: 0.7 }} />
              {k.charAt(0).toUpperCase() + k.slice(1)}
            </span>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-surface-50 rounded-xl border border-surface-200 p-6">
          <h3 className="text-sm font-semibold text-surface-800/70 mb-1">
            Engagement Rate vs. Industry Benchmark
          </h3>
          <p className="text-xs text-surface-800/40 mb-4">
            Arsenal outperforms football club benchmarks across all platforms
          </p>
          <div className="space-y-4">
            {engagementRates.map(p => (
              <div key={p.platform}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-medium text-surface-800">{p.platform}</span>
                  <span className="text-emerald-600 font-semibold">{p.delta} vs. benchmark</span>
                </div>
                <div className="h-6 bg-surface-200 rounded-full overflow-hidden relative">
                  <div
                    className="h-full bg-surface-300 rounded-full absolute top-0 left-0"
                    style={{ width: `${(p.benchmark / 6) * 100}%` }}
                  />
                  <div
                    className="h-full bg-arsenal-red rounded-full relative"
                    style={{ width: `${(p.rate / 6) * 100}%`, opacity: 0.85 }}
                  />
                </div>
                <div className="flex justify-between text-[10px] text-surface-800/40 mt-0.5">
                  <span>Arsenal: {p.rate}%</span>
                  <span>Benchmark: {p.benchmark}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-surface-50 rounded-xl border border-surface-200 p-6">
          <h3 className="text-sm font-semibold text-surface-800/70 mb-1">
            Matchday Digital Engagement Spikes
          </h3>
          <p className="text-xs text-surface-800/40 mb-4">
            Engagement peaks at 6.8x baseline during the second half
          </p>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={matchdayDigitalSpikes} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e8e6e1" />
              <XAxis dataKey="phase" tick={{ fontSize: 10 }} stroke="#a8a29e" angle={-20} textAnchor="end" height={60} />
              <YAxis tick={{ fontSize: 11 }} stroke="#a8a29e" tickFormatter={v => `${v}x`} />
              <Tooltip content={<SpikeTooltip />} />
              <Bar dataKey="multiplier" name="Engagement Multiplier" radius={[4, 4, 0, 0]}>
                {matchdayDigitalSpikes.map((entry, idx) => (
                  <Cell
                    key={idx}
                    fill={entry.multiplier > 4 ? '#EF0107' : entry.multiplier > 2 ? '#063672' : '#d6d3cc'}
                    fillOpacity={0.8}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-surface-50 rounded-xl border border-surface-200 p-6">
          <h3 className="text-sm font-semibold text-surface-800/70 mb-1">
            Content Performance Profile
          </h3>
          <p className="text-xs text-surface-800/40 mb-4">
            Transfer news drives highest engagement but lowest sentiment
          </p>
          <ResponsiveContainer width="100%" height={280}>
            <RadarChart data={radarData} cx="50%" cy="50%">
              <PolarGrid stroke="#e8e6e1" />
              <PolarAngleAxis dataKey="type" tick={{ fontSize: 9 }} stroke="#a8a29e" />
              <PolarRadiusAxis tick={{ fontSize: 9 }} stroke="#a8a29e" />
              <Radar name="Engagement" dataKey="engagement" stroke="#EF0107" fill="#EF0107" fillOpacity={0.2} />
              <Radar name="Shareability" dataKey="shareability" stroke="#063672" fill="#063672" fillOpacity={0.15} />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
          <div className="flex gap-4 mt-2 text-xs text-surface-800/50">
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-sm bg-arsenal-red inline-block opacity-70" /> Engagement
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-sm bg-arsenal-navy inline-block opacity-70" /> Shareability
            </span>
          </div>
        </div>

        <div className="bg-surface-50 rounded-xl border border-surface-200 p-6">
          <h3 className="text-sm font-semibold text-surface-800/70 mb-1">
            Sentiment Distribution by Match Result
          </h3>
          <p className="text-xs text-surface-800/40 mb-4">
            Big match losses generate highest volume with most negative sentiment
          </p>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={sentimentByResult} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e8e6e1" />
              <XAxis dataKey="result" tick={{ fontSize: 10 }} stroke="#a8a29e" angle={-15} textAnchor="end" height={60} />
              <YAxis tick={{ fontSize: 11 }} stroke="#a8a29e" />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="sentiment" name="Sentiment Score" radius={[4, 4, 0, 0]}>
                {sentimentByResult.map((entry, idx) => (
                  <Cell
                    key={idx}
                    fill={entry.sentiment > 0.7 ? '#16a34a' : entry.sentiment > 0.4 ? '#D4A843' : '#EF0107'}
                    fillOpacity={0.8}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mt-8 bg-arsenal-red/5 border border-arsenal-red/10 rounded-xl p-6">
        <h3 className="text-sm font-semibold text-arsenal-red mb-2">Insight</h3>
        <p className="text-sm text-surface-800/70 leading-relaxed">
          The 6.8x engagement spike during live matches represents a massive — and largely
          under-monetised — window for targeted content and commercial activation. TikTok&apos;s
          5.8% engagement rate (81% above benchmark) suggests it should be a priority channel,
          yet it currently receives the least commercial integration. Meanwhile, transfer news
          generates the highest raw engagement but the <em>lowest sentiment</em> — indicating supporters
          react strongly but not always positively. Content strategy should lean into
          behind-the-scenes and player feature content, which combines strong engagement
          with the highest positive sentiment.
        </p>
      </div>
    </SectionWrapper>
  );
}
