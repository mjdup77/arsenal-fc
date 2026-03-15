export const followerGrowth = [
  { year: '2019', instagram: 23.1, twitter: 15.2, facebook: 37.5, tiktok: 0, youtube: 2.8 },
  { year: '2020', instagram: 27.4, twitter: 16.1, facebook: 37.8, tiktok: 1.2, youtube: 3.2 },
  { year: '2021', instagram: 31.8, twitter: 17.0, facebook: 37.9, tiktok: 4.5, youtube: 3.8 },
  { year: '2022', instagram: 36.2, twitter: 18.1, facebook: 38.0, tiktok: 7.8, youtube: 4.3 },
  { year: '2023', instagram: 40.5, twitter: 19.0, facebook: 38.1, tiktok: 10.2, youtube: 5.1 },
  { year: '2024', instagram: 44.8, twitter: 19.8, facebook: 38.2, tiktok: 13.1, youtube: 5.8 },
  { year: '2025', instagram: 47.2, twitter: 20.1, facebook: 38.2, tiktok: 15.4, youtube: 6.3 },
  { year: '2026', instagram: 48.9, twitter: 20.3, facebook: 38.3, tiktok: 17.2, youtube: 6.8 },
];

export const engagementRates = [
  { platform: 'TikTok', rate: 5.8, benchmark: 3.2, delta: '+81%' },
  { platform: 'Instagram', rate: 2.1, benchmark: 1.5, delta: '+40%' },
  { platform: 'YouTube', rate: 1.8, benchmark: 1.2, delta: '+50%' },
  { platform: 'Twitter/X', rate: 0.9, benchmark: 0.7, delta: '+29%' },
  { platform: 'Facebook', rate: 0.4, benchmark: 0.3, delta: '+33%' },
];

export const contentPerformance = [
  { type: 'Match Highlights', avgEngagement: 4.2, shareRate: 8.1, sentiment: 0.82 },
  { type: 'Player Features', avgEngagement: 3.8, shareRate: 6.4, sentiment: 0.91 },
  { type: 'Behind the Scenes', avgEngagement: 3.5, shareRate: 5.2, sentiment: 0.88 },
  { type: 'Transfer News', avgEngagement: 5.1, shareRate: 12.3, sentiment: 0.65 },
  { type: 'Matchday Build-up', avgEngagement: 2.9, shareRate: 3.8, sentiment: 0.79 },
  { type: 'Community / CSR', avgEngagement: 1.4, shareRate: 2.1, sentiment: 0.94 },
  { type: 'Commercial / Promo', avgEngagement: 0.8, shareRate: 1.2, sentiment: 0.52 },
];

export const matchdayDigitalSpikes = [
  { phase: '48h Pre-Match', multiplier: 1.8 },
  { phase: 'Matchday Morning', multiplier: 2.4 },
  { phase: 'Kick-off → HT', multiplier: 5.2 },
  { phase: 'HT → FT', multiplier: 6.8 },
  { phase: 'Post-Match (0-2h)', multiplier: 4.1 },
  { phase: 'Post-Match (2-24h)', multiplier: 2.2 },
  { phase: 'Non-Matchday', multiplier: 1.0 },
];

export const sentimentByResult = [
  { result: 'Win (Big Match)', sentiment: 0.92, volume: 185 },
  { result: 'Win (Standard)', sentiment: 0.87, volume: 120 },
  { result: 'Draw (Big Match)', sentiment: 0.41, volume: 145 },
  { result: 'Draw (Standard)', sentiment: 0.55, volume: 95 },
  { result: 'Loss (Big Match)', sentiment: 0.18, volume: 210 },
  { result: 'Loss (Standard)', sentiment: 0.32, volume: 155 },
];
