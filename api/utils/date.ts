import { differenceInDays, startOfWeek } from 'date-fns';

const CYCLE_DURATION_DAYS = 7;
const START_DATE = new Date('2024-01-01T19:00:00+08:00'); // Example start date: Monday 7pm SGT

export const getCurrentCycleIndex = (): number => {
  const daysSinceStart = differenceInDays(new Date(), START_DATE);
  return Math.floor(daysSinceStart / CYCLE_DURATION_DAYS);
};
