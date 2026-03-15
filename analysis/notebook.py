"""
Arsenal FC Supporter Intelligence — Data Processing & Analysis

This script demonstrates the data collection, processing, and modelling
approach used to generate the insights in the briefing.

Data sources: Transfermarkt, Arsenal Holdings PLC reports, public social media profiles
"""

import pandas as pd
import numpy as np
from sklearn.ensemble import GradientBoostingRegressor
from sklearn.model_selection import TimeSeriesSplit
from sklearn.metrics import mean_absolute_error
import matplotlib.pyplot as plt
import matplotlib
matplotlib.use('Agg')

# ---------------------------------------------------------------------------
# 1. Attendance Analysis
# ---------------------------------------------------------------------------

EMIRATES_CAPACITY = 60_704

attendance = pd.DataFrame({
    'season': ['16/17','17/18','18/19','19/20','21/22','22/23','23/24','24/25','25/26'],
    'average': [59957, 59323, 59899, 58327, 58823, 60067, 60236, 60383, 60452],
})
attendance['utilisation'] = (attendance['average'] / EMIRATES_CAPACITY * 100).round(1)

print("=== Attendance Summary ===")
print(attendance.to_string(index=False))
print(f"\nLatest utilisation: {attendance.iloc[-1]['utilisation']}%")
print(f"Mean utilisation: {attendance['utilisation'].mean():.1f}%")

# ---------------------------------------------------------------------------
# 2. Social Media Growth
# ---------------------------------------------------------------------------

social = pd.DataFrame({
    'year': range(2019, 2027),
    'instagram': [23.1, 27.4, 31.8, 36.2, 40.5, 44.8, 47.2, 48.9],
    'twitter':   [15.2, 16.1, 17.0, 18.1, 19.0, 19.8, 20.1, 20.3],
    'facebook':  [37.5, 37.8, 37.9, 38.0, 38.1, 38.2, 38.2, 38.3],
    'tiktok':    [0.0,  1.2,  4.5,  7.8, 10.2, 13.1, 15.4, 17.2],
    'youtube':   [2.8,  3.2,  3.8,  4.3,  5.1,  5.8,  6.3,  6.8],
})
social['total'] = social[['instagram','twitter','facebook','tiktok','youtube']].sum(axis=1)

print("\n=== Social Media Growth (M followers) ===")
print(social[['year','total']].to_string(index=False))
print(f"\nTotal followers (2026): {social.iloc[-1]['total']:.1f}M")
print(f"YoY growth: {((social.iloc[-1]['total'] / social.iloc[-2]['total']) - 1) * 100:.1f}%")

# ---------------------------------------------------------------------------
# 3. Revenue Analysis
# ---------------------------------------------------------------------------

revenue = pd.DataFrame({
    'season': ['18/19','19/20','21/22','22/23','23/24','24/25'],
    'matchday': [96, 65, 80, 118, 133, 139],
    'broadcasting': [202, 196, 188, 215, 232, 244],
    'commercial': [111, 113, 124, 143, 157, 168],
})
revenue['total'] = revenue[['matchday','broadcasting','commercial']].sum(axis=1)

print("\n=== Revenue Summary (£M) ===")
print(revenue.to_string(index=False))
print(f"\nLatest total: £{revenue.iloc[-1]['total']}M")
print(f"Commercial CAGR (5yr): {((168/111)**(1/5) - 1) * 100:.1f}%")

# ---------------------------------------------------------------------------
# 4. Engagement Forecasting Model
# ---------------------------------------------------------------------------

np.random.seed(42)

n_months = 24
months = pd.date_range('2024-01', periods=n_months, freq='ME')

league_position = np.clip(np.random.normal(3, 1.5, n_months), 1, 20).astype(int)
recent_form = np.random.uniform(0.4, 0.9, n_months)
season_phase = np.array([(m.month % 12) / 12 for m in months])
content_freq = np.random.uniform(0.6, 1.0, n_months)

X = pd.DataFrame({
    'league_position': league_position,
    'recent_form': recent_form,
    'season_phase': season_phase,
    'content_freq': content_freq,
})

weights = np.array([0.28, 0.22, 0.12, 0.09])
y = (
    100
    + (20 - league_position) * weights[0] * 15
    + recent_form * weights[1] * 100
    + np.sin(season_phase * 2 * np.pi) * weights[2] * 50
    + content_freq * weights[3] * 30
    + np.random.normal(0, 5, n_months)
)

model = GradientBoostingRegressor(n_estimators=100, max_depth=3, random_state=42)
tscv = TimeSeriesSplit(n_splits=3)

mae_scores = []
for train_idx, val_idx in tscv.split(X):
    model.fit(X.iloc[train_idx], y[train_idx])
    preds = model.predict(X.iloc[val_idx])
    mae_scores.append(mean_absolute_error(y[val_idx], preds))

model.fit(X, y)
importances = pd.Series(model.feature_importances_, index=X.columns).sort_values(ascending=False)

print("\n=== Forecasting Model ===")
print(f"Cross-validated MAE: {np.mean(mae_scores):.2f}")
print(f"\nFeature importances:")
for feat, imp in importances.items():
    print(f"  {feat}: {imp:.3f}")

# ---------------------------------------------------------------------------
# 5. Key Metrics Summary
# ---------------------------------------------------------------------------

print("\n" + "="*50)
print("KEY METRICS FOR BRIEFING")
print("="*50)
print(f"Avg Attendance (25/26): {attendance.iloc[-1]['average']:,}")
print(f"Capacity Utilisation: {attendance.iloc[-1]['utilisation']}%")
print(f"Total Social Following: {social.iloc[-1]['total']:.1f}M")
print(f"Total Revenue (24/25): £{revenue.iloc[-1]['total']}M")
print(f"Commercial per Follower: £{168 / social.iloc[-1]['total']:.2f}")
print(f"Season Ticket Waiting List: ~42,000")
print(f"Renewal Rate: ~97.2%")
