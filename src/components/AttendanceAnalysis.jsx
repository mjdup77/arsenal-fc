import {
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Cell, ReferenceLine
} from 'recharts';
import { MapPin } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import {
  utilizationRate, attendanceByOpponentTier,
  attendanceByCompetition, topSixComparison, EMIRATES_CAPACITY,
} from '../data/attendance';

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white rounded-lg shadow-lg border border-surface-200 px-4 py-3 text-sm">
      <p className="font-semibold text-surface-900">{label}</p>
      {payload.map((p, i) => (
        <p key={i} style={{ color: p.color }} className="mt-1">
          {p.name}: {typeof p.value === 'number' ? p.value.toLocaleString() : p.value}
        </p>
      ))}
    </div>
  );
};

export default function AttendanceAnalysis() {
  return (
    <SectionWrapper id="attendance">
      <div className="flex items-center gap-3 mb-2">
        <MapPin size={20} className="text-arsenal-red" />
        <span className="text-xs font-semibold tracking-widest uppercase text-arsenal-red">
          Section 01
        </span>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-surface-900 mb-3">
        Matchday &amp; Attendance Intelligence
      </h2>
      <p className="text-surface-800/60 max-w-3xl mb-12">
        Arsenal consistently operates at near-maximum capacity at the Emirates Stadium.
        While this is a testament to supporter loyalty, it also means physical attendance growth
        is effectively capped — making <strong className="text-surface-900">matchday experience and revenue-per-head</strong> the
        key levers for growth.
      </p>

      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-xl border border-surface-200 p-6">
          <h3 className="text-sm font-semibold text-surface-800/70 mb-1">
            Seasonal Average Attendance
          </h3>
          <p className="text-xs text-surface-800/40 mb-4">
            Emirates Stadium capacity: {EMIRATES_CAPACITY.toLocaleString()}
          </p>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={utilizationRate} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e8e6e1" />
              <XAxis dataKey="season" tick={{ fontSize: 11 }} stroke="#a8a29e" />
              <YAxis domain={[55000, 61000]} tick={{ fontSize: 11 }} stroke="#a8a29e" tickFormatter={v => `${(v/1000).toFixed(0)}k`} />
              <Tooltip content={<CustomTooltip />} />
              <ReferenceLine y={EMIRATES_CAPACITY} stroke="#EF0107" strokeDasharray="4 4" strokeWidth={1} />
              <Bar dataKey="average" name="Avg. Attendance" radius={[4, 4, 0, 0]}>
                {utilizationRate.map((entry, idx) => (
                  <Cell
                    key={idx}
                    fill={entry.manager === 'Arteta' ? '#EF0107' : '#063672'}
                    fillOpacity={0.85}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <div className="flex gap-4 mt-2 text-xs text-surface-800/50">
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-sm bg-arsenal-navy inline-block" /> Pre-Arteta
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-sm bg-arsenal-red inline-block" /> Arteta Era
            </span>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-surface-200 p-6">
          <h3 className="text-sm font-semibold text-surface-800/70 mb-1">
            Capacity Utilisation (%)
          </h3>
          <p className="text-xs text-surface-800/40 mb-4">
            Consistently above 96%, ceiling reached under Arteta
          </p>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={utilizationRate} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e8e6e1" />
              <XAxis dataKey="season" tick={{ fontSize: 11 }} stroke="#a8a29e" />
              <YAxis domain={[95, 100]} tick={{ fontSize: 11 }} stroke="#a8a29e" tickFormatter={v => `${v}%`} />
              <Tooltip content={<CustomTooltip />} />
              <ReferenceLine y={100} stroke="#e8e6e1" />
              <Line
                type="monotone"
                dataKey="utilization"
                name="Utilisation %"
                stroke="#EF0107"
                strokeWidth={2.5}
                dot={{ fill: '#EF0107', r: 4, strokeWidth: 2, stroke: '#fff' }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-xl border border-surface-200 p-6">
          <h3 className="text-sm font-semibold text-surface-800/70 mb-1">
            Attendance by Opponent Tier
          </h3>
          <p className="text-xs text-surface-800/40 mb-4">
            Minimal variance, but lower-tier opponents show slight dips
          </p>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={attendanceByOpponentTier} layout="vertical" margin={{ top: 0, right: 10, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e8e6e1" horizontal={false} />
              <XAxis type="number" domain={[59000, 61000]} tick={{ fontSize: 11 }} stroke="#a8a29e" tickFormatter={v => `${(v/1000).toFixed(0)}k`} />
              <YAxis type="category" dataKey="tier" width={130} tick={{ fontSize: 11 }} stroke="#a8a29e" />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="average" name="Avg. Attendance" fill="#EF0107" fillOpacity={0.8} radius={[0, 4, 4, 0]} barSize={24} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl border border-surface-200 p-6">
          <h3 className="text-sm font-semibold text-surface-800/70 mb-1">
            Attendance by Competition
          </h3>
          <p className="text-xs text-surface-800/40 mb-4">
            Champions League matches exceed league games; League Cup significantly lower
          </p>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={attendanceByCompetition} layout="vertical" margin={{ top: 0, right: 10, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e8e6e1" horizontal={false} />
              <XAxis type="number" domain={[48000, 62000]} tick={{ fontSize: 11 }} stroke="#a8a29e" tickFormatter={v => `${(v/1000).toFixed(0)}k`} />
              <YAxis type="category" dataKey="competition" width={130} tick={{ fontSize: 11 }} stroke="#a8a29e" />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="average" name="Avg. Attendance" fill="#063672" fillOpacity={0.8} radius={[0, 4, 4, 0]} barSize={24} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-surface-200 p-6">
        <h3 className="text-sm font-semibold text-surface-800/70 mb-1">
          Top 6 Capacity Utilisation Benchmark
        </h3>
        <p className="text-xs text-surface-800/40 mb-4">
          Arsenal leads the Premier League in fill rate at 99.2%
        </p>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={topSixComparison} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e8e6e1" />
            <XAxis dataKey="club" tick={{ fontSize: 11 }} stroke="#a8a29e" />
            <YAxis domain={[88, 100]} tick={{ fontSize: 11 }} stroke="#a8a29e" tickFormatter={v => `${v}%`} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="utilization" name="Utilisation %" radius={[4, 4, 0, 0]} barSize={48}>
              {topSixComparison.map((entry, idx) => (
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

      <div className="mt-8 bg-arsenal-red/5 border border-arsenal-red/10 rounded-xl p-6">
        <h3 className="text-sm font-semibold text-arsenal-red mb-2">Insight</h3>
        <p className="text-sm text-surface-800/70 leading-relaxed">
          Arsenal&apos;s attendance is effectively at ceiling. With a 42,000-person season ticket waiting list,
          demand far outstrips supply. The strategic question is no longer <em>&quot;how do we fill the stadium?&quot;</em>
          but rather <em>&quot;how do we maximise the value of every supporter interaction — inside and
          outside the Emirates?&quot;</em> This reframes the opportunity toward matchday experience,
          premium hospitality, and digital engagement for those who can&apos;t attend in person.
        </p>
      </div>
    </SectionWrapper>
  );
}
