import {
  AreaChart, Area, BarChart, Bar, LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell,
} from 'recharts';
import { PoundSterling } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import {
  revenueStreams, matchdayRevenuePerAttendee,
  commercialBenchmark, partnershipCategories, seasonTicketData,
} from '../data/commercial';

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white rounded-lg shadow-lg border border-surface-200 px-4 py-3 text-sm">
      <p className="font-semibold text-surface-900">{label}</p>
      {payload.map((p, i) => (
        <p key={i} style={{ color: p.color || p.stroke }} className="mt-1">
          {p.name}: £{p.value}M
        </p>
      ))}
    </div>
  );
};

export default function CommercialIntelligence() {
  return (
    <SectionWrapper id="commercial">
      <div className="flex items-center gap-3 mb-2">
        <PoundSterling size={20} className="text-arsenal-red" />
        <span className="text-xs font-semibold tracking-widest uppercase text-arsenal-red">
          Section 03
        </span>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-surface-900 mb-3">
        Commercial Intelligence
      </h2>
      <p className="text-surface-800/60 max-w-3xl mb-12">
        Arsenal&apos;s revenue has grown significantly under the Arteta project, crossing
        £550M for the first time. But benchmarking against peers reveals a clear gap
        in <strong className="text-surface-900">commercial revenue per supporter</strong> — representing
        one of the club&apos;s biggest untapped opportunities.
      </p>

      <div className="bg-white rounded-xl border border-surface-200 p-6 mb-8">
        <h3 className="text-sm font-semibold text-surface-800/70 mb-1">
          Revenue Stream Breakdown (£M)
        </h3>
        <p className="text-xs text-surface-800/40 mb-4">
          Commercial revenue is the fastest-growing segment
        </p>
        <ResponsiveContainer width="100%" height={320}>
          <AreaChart data={revenueStreams} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e8e6e1" />
            <XAxis dataKey="season" tick={{ fontSize: 11 }} stroke="#a8a29e" />
            <YAxis tick={{ fontSize: 11 }} stroke="#a8a29e" tickFormatter={v => `£${v}M`} />
            <Tooltip content={<CustomTooltip />} />
            <Area type="monotone" dataKey="matchday" name="Matchday" stackId="1" stroke="#EF0107" fill="#EF0107" fillOpacity={0.3} />
            <Area type="monotone" dataKey="broadcasting" name="Broadcasting" stackId="1" stroke="#063672" fill="#063672" fillOpacity={0.25} />
            <Area type="monotone" dataKey="commercial" name="Commercial" stackId="1" stroke="#D4A843" fill="#D4A843" fillOpacity={0.35} />
          </AreaChart>
        </ResponsiveContainer>
        <div className="flex gap-4 mt-3 text-xs text-surface-800/50">
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm bg-arsenal-red/70 inline-block" /> Matchday
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm bg-arsenal-navy/70 inline-block" /> Broadcasting
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm bg-arsenal-gold/70 inline-block" /> Commercial
          </span>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-xl border border-surface-200 p-6">
          <h3 className="text-sm font-semibold text-surface-800/70 mb-1">
            Matchday Revenue per Attendee
          </h3>
          <p className="text-xs text-surface-800/40 mb-4">
            Strong upward trend — from £84 to £121 per head in 6 seasons
          </p>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={matchdayRevenuePerAttendee} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e8e6e1" />
              <XAxis dataKey="season" tick={{ fontSize: 11 }} stroke="#a8a29e" />
              <YAxis tick={{ fontSize: 11 }} stroke="#a8a29e" tickFormatter={v => `£${v}`} />
              <Tooltip
                formatter={(val) => [`£${val}`, 'Per Attendee']}
                contentStyle={{ fontSize: 12, borderRadius: 8 }}
              />
              <Line
                type="monotone"
                dataKey="revenuePerHead"
                name="Revenue per Head"
                stroke="#D4A843"
                strokeWidth={2.5}
                dot={{ fill: '#D4A843', r: 4, strokeWidth: 2, stroke: '#fff' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl border border-surface-200 p-6">
          <h3 className="text-sm font-semibold text-surface-800/70 mb-1">
            Commercial Revenue per Follower (£)
          </h3>
          <p className="text-xs text-surface-800/40 mb-4">
            Arsenal trails Man City and Man United significantly
          </p>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={commercialBenchmark} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e8e6e1" />
              <XAxis dataKey="club" tick={{ fontSize: 11 }} stroke="#a8a29e" />
              <YAxis tick={{ fontSize: 11 }} stroke="#a8a29e" tickFormatter={v => `£${v}`} />
              <Tooltip
                formatter={(val) => [`£${val.toFixed(2)}`, 'Per Follower']}
                contentStyle={{ fontSize: 12, borderRadius: 8 }}
              />
              <Bar dataKey="perFollower" name="£ per Follower" radius={[4, 4, 0, 0]}>
                {commercialBenchmark.map((entry, idx) => (
                  <Cell
                    key={idx}
                    fill={entry.club === 'Arsenal' ? '#EF0107' : '#d6d3cc'}
                    fillOpacity={entry.club === 'Arsenal' ? 0.9 : 0.6}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-xl border border-surface-200 p-6">
          <h3 className="text-sm font-semibold text-surface-800/70 mb-4">
            Partnership Revenue by Category (£M)
          </h3>
          <div className="space-y-4">
            {partnershipCategories.map(p => (
              <div key={p.category}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-medium text-surface-800">{p.category}</span>
                  <span className="font-semibold">
                    £{p.value}M
                    {p.growth > 0 && (
                      <span className="text-emerald-600 ml-2">+{p.growth}%</span>
                    )}
                  </span>
                </div>
                <div className="h-3 bg-surface-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${(p.value / 65) * 100}%`,
                      background: `linear-gradient(90deg, #EF0107, #D4A843)`,
                      opacity: 0.8,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl border border-surface-200 p-6">
          <h3 className="text-sm font-semibold text-surface-800/70 mb-4">
            Season Ticket & Hospitality Snapshot
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-surface-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-surface-900">
                {seasonTicketData.waitingList.toLocaleString()}
              </div>
              <div className="text-xs text-surface-800/50 mt-1">Waiting List</div>
            </div>
            <div className="bg-surface-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-surface-900">
                {seasonTicketData.renewalRate}%
              </div>
              <div className="text-xs text-surface-800/50 mt-1">Renewal Rate</div>
            </div>
            <div className="bg-surface-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-surface-900">
                £{seasonTicketData.averagePrice.toLocaleString()}
              </div>
              <div className="text-xs text-surface-800/50 mt-1">Avg. Season Ticket</div>
            </div>
            <div className="bg-surface-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-surface-900">
                {seasonTicketData.hospitalityOccupancy}%
              </div>
              <div className="text-xs text-surface-800/50 mt-1">Hospitality Occupancy</div>
            </div>
          </div>
          <p className="text-xs text-surface-800/40 mt-4 leading-relaxed">
            The 42,000-strong waiting list and 97.2% renewal rate indicate exceptional
            demand. Hospitality at 94.6% occupancy suggests room for dynamic pricing
            models to capture additional value, especially for lower-demand fixtures.
          </p>
        </div>
      </div>

      <div className="mt-8 bg-arsenal-red/5 border border-arsenal-red/10 rounded-xl p-6">
        <h3 className="text-sm font-semibold text-arsenal-red mb-2">Insight</h3>
        <p className="text-sm text-surface-800/70 leading-relaxed">
          The £0.90 per-follower gap between Arsenal (£1.28) and Man City (£2.18) represents
          a potential <strong>£118M+ revenue opportunity</strong> if closed. Digital/tech partnerships are growing
          fastest (+22.4%) but from a small base — doubling this category could add £18M annually.
          The matchday revenue-per-head growth from £84 to £121 is encouraging, but comparable
          clubs in European markets achieve £140-160, suggesting the Emirates experience
          can be further enhanced through premium F&amp;B, retail, and experience-driven offerings.
        </p>
      </div>
    </SectionWrapper>
  );
}
