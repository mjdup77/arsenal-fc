export const EMIRATES_CAPACITY = 60704;

export const seasonAverages = [
  { season: '16/17', average: 59957, capacity: EMIRATES_CAPACITY, manager: 'Wenger' },
  { season: '17/18', average: 59323, capacity: EMIRATES_CAPACITY, manager: 'Wenger' },
  { season: '18/19', average: 59899, capacity: EMIRATES_CAPACITY, manager: 'Emery' },
  { season: '19/20', average: 58327, capacity: EMIRATES_CAPACITY, manager: 'Arteta' },
  { season: '21/22', average: 58823, capacity: EMIRATES_CAPACITY, manager: 'Arteta' },
  { season: '22/23', average: 60067, capacity: EMIRATES_CAPACITY, manager: 'Arteta' },
  { season: '23/24', average: 60236, capacity: EMIRATES_CAPACITY, manager: 'Arteta' },
  { season: '24/25', average: 60383, capacity: EMIRATES_CAPACITY, manager: 'Arteta' },
  { season: '25/26', average: 60452, capacity: EMIRATES_CAPACITY, manager: 'Arteta' },
];

export const utilizationRate = seasonAverages.map(s => ({
  ...s,
  utilization: ((s.average / s.capacity) * 100).toFixed(1),
}));

export const attendanceByOpponentTier = [
  { tier: 'Top 6', average: 60612, fillRate: 99.8 },
  { tier: 'European Contenders', average: 60498, fillRate: 99.7 },
  { tier: 'Mid-Table', average: 60201, fillRate: 99.2 },
  { tier: 'Lower Half', average: 59847, fillRate: 98.6 },
  { tier: 'Promoted Clubs', average: 59612, fillRate: 98.2 },
];

export const attendanceByDayOfWeek = [
  { day: 'Saturday 15:00', average: 60421, fillRate: 99.5 },
  { day: 'Saturday 12:30', average: 60312, fillRate: 99.4 },
  { day: 'Sunday 14:00', average: 60198, fillRate: 99.2 },
  { day: 'Sunday 16:30', average: 60089, fillRate: 99.0 },
  { day: 'Midweek', average: 59456, fillRate: 98.0 },
];

export const attendanceByCompetition = [
  { competition: 'Premier League', average: 60236, fillRate: 99.2 },
  { competition: 'Champions League', average: 60589, fillRate: 99.8 },
  { competition: 'FA Cup (R4+)', average: 59123, fillRate: 97.4 },
  { competition: 'League Cup', average: 52341, fillRate: 86.2 },
];

export const topSixComparison = [
  { club: 'Man United', capacity: 74310, average: 73421, utilization: 98.8 },
  { club: 'Arsenal', capacity: 60704, average: 60236, utilization: 99.2 },
  { club: 'Tottenham', capacity: 62850, average: 61978, utilization: 98.6 },
  { club: 'Liverpool', capacity: 61276, average: 55879, utilization: 91.2 },
  { club: 'Man City', capacity: 53400, average: 52348, utilization: 98.0 },
  { club: 'Chelsea', capacity: 40341, average: 39782, utilization: 98.6 },
];
