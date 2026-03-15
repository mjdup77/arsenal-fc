import {
  ComposedChart, Area, Line, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell,
} from 'recharts';
import { TrendingUp } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { forecastBands, featureImportance, scenarioAnalysis } from '../data/forecasting';

const ForecastTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  const data = payload[0]?.payload;
  return (
    <div className="bg-white rounded-lg shadow-lg border border-surface-200 px-4 py-3 text-sm">
      <p className="font-semibold text-surface-900">{label}</p>
      {data?.actual && <p className="text-arsenal-red mt-1">Actual: {data.actual}</p>}
      {data?.forecast && <p className="text-arsenal-navy mt-1">Forecast: {data.forecast}</p>}
      {data?.upper && (
        <p className="text-surface-800/40 mt-1">
          Range: {data.lower} – {data.upper}
        </p>
      )}
    </div>
  );
};

export default function ForecastingModel() {
  return (
    <SectionWrapper id="forecasting" className="bg-white border-y border-surface-200">
      <div className="flex items-center gap-3 mb-2">
        <TrendingUp size={20} className="text-arsenal-red" />
        <span className="text-xs font-semibold tracking-widest uppercase text-arsenal-red">
          Section 04
        </span>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-surface-900 mb-3">
        Engagement Forecasting Model
      </h2>
      <p className="text-surface-800/60 max-w-3xl mb-12">
        A simple time-series model incorporating league position, match results, season phase,
        and content output to forecast the composite engagement index. The model captures
        the clear <strong className="text-surface-900">seasonality in supporter engagement</strong> — with
        summer troughs and title-race peaks.
      </p>

      <div className="bg-surface-50 rounded-xl border border-surface-200 p-6 mb-8">
        <h3 className="text-sm font-semibold text-surface-800/70 mb-1">
          Engagement Index — Actual vs. Forecast
        </h3>
        <p className="text-xs text-surface-800/40 mb-4">
          Composite index (100 = baseline). Forecast from March 2026 with 88-112% confidence band.
        </p>
        <ResponsiveContainer width="100%" height={340}>
          <ComposedChart data={forecastBands} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e8e6e1" />
            <XAxis dataKey="month" tick={{ fontSize: 10 }} stroke="#a8a29e" angle={-25} textAnchor="end" height={55} />
            <YAxis tick={{ fontSize: 11 }} stroke="#a8a29e" domain={[60, 200]} />
            <Tooltip content={<ForecastTooltip />} />
            <Area
              type="monotone"
              dataKey="upper"
              stroke="none"
              fill="#063672"
              fillOpacity={0.08}
            />
            <Area
              type="monotone"
              dataKey="lower"
              stroke="none"
              fill="#ffffff"
              fillOpacity={1}
            />
            <Line
              type="monotone"
              dataKey="actual"
              name="Actual"
              stroke="#EF0107"
              strokeWidth={2.5}
              dot={{ fill: '#EF0107', r: 3, strokeWidth: 2, stroke: '#fff' }}
              connectNulls={false}
            />
            <Line
              type="monotone"
              dataKey="forecast"
              name="Forecast"
              stroke="#063672"
              strokeWidth={2}
              strokeDasharray="6 3"
              dot={{ fill: '#063672', r: 3, strokeWidth: 2, stroke: '#fff' }}
              connectNulls={false}
            />
          </ComposedChart>
        </ResponsiveContainer>
        <div className="flex gap-4 mt-3 text-xs text-surface-800/50">
          <span className="flex items-center gap-1.5">
            <span className="w-6 h-0.5 bg-arsenal-red inline-block" /> Actual
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-6 h-0.5 bg-arsenal-navy inline-block border-dashed" style={{ borderBottom: '2px dashed #063672', height: 0 }} /> Forecast
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-4 h-3 bg-arsenal-navy/10 inline-block rounded" /> Confidence Band
          </span>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-surface-50 rounded-xl border border-surface-200 p-6">
          <h3 className="text-sm font-semibold text-surface-800/70 mb-1">
            Feature Importance
          </h3>
          <p className="text-xs text-surface-800/40 mb-4">
            League position and recent form explain 50% of engagement variance
          </p>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={featureImportance} layout="vertical" margin={{ top: 0, right: 10, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e8e6e1" horizontal={false} />
              <XAxis type="number" domain={[0, 0.3]} tick={{ fontSize: 11 }} stroke="#a8a29e" tickFormatter={v => `${(v*100).toFixed(0)}%`} />
              <YAxis type="category" dataKey="feature" width={120} tick={{ fontSize: 11 }} stroke="#a8a29e" />
              <Tooltip formatter={(v) => [`${(v*100).toFixed(1)}%`, 'Importance']} contentStyle={{ fontSize: 12, borderRadius: 8 }} />
              <Bar dataKey="importance" name="Importance" radius={[0, 4, 4, 0]} barSize={20}>
                {featureImportance.map((entry, idx) => (
                  <Cell
                    key={idx}
                    fill={idx < 2 ? '#EF0107' : idx < 4 ? '#063672' : '#d6d3cc'}
                    fillOpacity={0.8}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-surface-50 rounded-xl border border-surface-200 p-6">
          <h3 className="text-sm font-semibold text-surface-800/70 mb-4">
            Scenario Analysis
          </h3>
          <p className="text-xs text-surface-800/40 mb-6">
            How different competitive outcomes affect supporter engagement
          </p>
          <div className="space-y-4">
            {scenarioAnalysis.map((s, i) => (
              <div
                key={s.scenario}
                className={`rounded-lg p-4 border ${
                  i === 0 ? 'border-emerald-200 bg-emerald-50/50' :
                  i === 1 ? 'border-surface-200 bg-surface-50' :
                  i === 2 ? 'border-amber-200 bg-amber-50/50' :
                  'border-red-200 bg-red-50/50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-surface-900">{s.scenario}</span>
                  <span className="text-lg font-bold text-surface-900">{s.engagementIndex}</span>
                </div>
                <div className="flex gap-4 text-xs">
                  <span className="text-surface-800/60">
                    Revenue: <span className={s.revenueUplift.startsWith('+') ? 'text-emerald-600 font-semibold' : 'text-red-500 font-semibold'}>{s.revenueUplift}</span>
                  </span>
                  <span className="text-surface-800/60">
                    Social Growth: <span className={s.socialGrowth.startsWith('+') ? 'text-emerald-600 font-semibold' : 'text-red-500 font-semibold'}>{s.socialGrowth}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 bg-arsenal-red/5 border border-arsenal-red/10 rounded-xl p-6">
        <h3 className="text-sm font-semibold text-arsenal-red mb-2">Insight</h3>
        <p className="text-sm text-surface-800/70 leading-relaxed">
          The model confirms what intuition suggests: on-pitch success is the single
          biggest driver of engagement. However, <strong>content frequency and season phase
          together account for 21%</strong> of variance — these are directly controllable levers.
          The summer engagement trough (index drops to ~90) represents a strategic opportunity
          for pre-season content, tour engagement, and transfer window narratives to maintain
          supporter connection during the off-season. The difference between a title-challenge
          season (171) and European absence (89) is nearly 2x — underscoring the importance
          of resilient engagement strategies that perform regardless of league position.
        </p>
      </div>
    </SectionWrapper>
  );
}
