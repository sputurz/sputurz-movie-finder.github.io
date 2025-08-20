import { IMovie } from '../models';

export function convertMinsToHoursMins(
  totalMins: IMovie['runtime'] | undefined | null
) {
  if (typeof totalMins !== 'number' || isNaN(totalMins)) {
    return '';
  }

  const hours = Math.floor(totalMins / 60);
  const mins = totalMins % 60;
  const hoursStr = hours !== 0 ? `${hours} h` : '';
  const minsStr = mins !== 0 ? `${mins} min` : '';

  return `${hoursStr} ${minsStr}`.trim();
}
