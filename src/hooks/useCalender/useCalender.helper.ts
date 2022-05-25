import { v4 } from 'uuid';

export interface CalenderBlock {
  year: number;
  month: number;
  date: number;
}

export interface Calender {
  [key: string]: CalenderBlock[];
}

const ROW_LENGTH = 6;
const COL_LENGTH = 7;

export function getDate(today: number | string): CalenderBlock {
  const date = new Date(today);
  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    date: date.getDate(),
  };
}

function formatCalender(calender: CalenderBlock[][]): Calender {
  const calenderWithKeys: Calender = {};

  calender.forEach((row) => {
    calenderWithKeys[v4()] = [...row];
  });

  return calenderWithKeys;
}

function fillCalender(year: number, month: number, offset: number) {
  const calender: CalenderBlock[][] = Array.from(
    { length: ROW_LENGTH },
    () => []
  );
  let count = 0;

  while (count < ROW_LENGTH * COL_LENGTH) {
    const today = new Date(year, month, 1 - offset + count);

    const y = Math.floor(count / COL_LENGTH);

    calender[y].push({
      year: today.getFullYear(),
      month: today.getMonth(),
      date: today.getDate(),
    });

    count += 1;
  }

  return calender;
}

/**
 * Return Calendar
 * @param year Year to get
 * @param month Month to get(range 0-11)
 * @returns Calendar with size 6*7
 */
function getCalender(year: number, month: number) {
  if (year < 1980) {
    throw new Error('year must be greater than 1980.');
  }

  if (month < 0) {
    throw new Error('month must be greater than or equal to 0.');
  }

  if (month >= 12) {
    throw new Error('month must be lower than 12.');
  }

  const day = new Date(year, month, 1).getDay();

  const calender = fillCalender(year, month, day);
  return formatCalender(calender);
}

export default getCalender;