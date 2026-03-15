export const engagementForecast = [
  { month: 'Jan 25', actual: 142, forecast: null },
  { month: 'Feb 25', actual: 138, forecast: null },
  { month: 'Mar 25', actual: 155, forecast: null },
  { month: 'Apr 25', actual: 162, forecast: null },
  { month: 'May 25', actual: 148, forecast: null },
  { month: 'Jun 25', actual: 89, forecast: null },
  { month: 'Jul 25', actual: 95, forecast: null },
  { month: 'Aug 25', actual: 134, forecast: null },
  { month: 'Sep 25', actual: 141, forecast: null },
  { month: 'Oct 25', actual: 147, forecast: null },
  { month: 'Nov 25', actual: 151, forecast: null },
  { month: 'Dec 25', actual: 159, forecast: null },
  { month: 'Jan 26', actual: 153, forecast: 150 },
  { month: 'Feb 26', actual: 149, forecast: 148 },
  { month: 'Mar 26', actual: null, forecast: 158 },
  { month: 'Apr 26', actual: null, forecast: 167 },
  { month: 'May 26', actual: null, forecast: 155 },
  { month: 'Jun 26', actual: null, forecast: 96 },
  { month: 'Jul 26', actual: null, forecast: 102 },
  { month: 'Aug 26', actual: null, forecast: 143 },
  { month: 'Sep 26', actual: null, forecast: 152 },
  { month: 'Oct 26', actual: null, forecast: 158 },
  { month: 'Nov 26', actual: null, forecast: 163 },
  { month: 'Dec 26', actual: null, forecast: 171 },
];

export const forecastBands = engagementForecast.map(d => ({
  ...d,
  upper: d.forecast ? Math.round(d.forecast * 1.12) : null,
  lower: d.forecast ? Math.round(d.forecast * 0.88) : null,
}));

export const featureImportance = [
  { feature: 'League Position', importance: 0.28 },
  { feature: 'Match Result (L5)', importance: 0.22 },
  { feature: 'Opponent Tier', importance: 0.16 },
  { feature: 'Season Phase', importance: 0.12 },
  { feature: 'Content Frequency', importance: 0.09 },
  { feature: 'Transfer Window', importance: 0.07 },
  { feature: 'Day of Week', importance: 0.04 },
  { feature: 'Weather', importance: 0.02 },
];

export const scenarioAnalysis = [
  { scenario: 'Title Challenge', engagementIndex: 171, revenueUplift: '+14%', socialGrowth: '+18%' },
  { scenario: 'Top 4 Finish', engagementIndex: 148, revenueUplift: '+6%', socialGrowth: '+9%' },
  { scenario: 'Mid-Table', engagementIndex: 112, revenueUplift: '-3%', socialGrowth: '+2%' },
  { scenario: 'European Absence', engagementIndex: 89, revenueUplift: '-12%', socialGrowth: '-4%' },
];
