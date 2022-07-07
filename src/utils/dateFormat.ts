import parseNumberToString from './parse';

function getYear(dateObject: Date) {
  return dateObject.getFullYear();
}

// NOTE - Pay attention why 1 is added
function getMonth(dateObject: Date) {
  return dateObject.getMonth() + 1;
}

function getDate(dateObject: Date) {
  return dateObject.getDate();
}

function parseDate(dateStringArr: string[], delimiter: string) {
  return dateStringArr.join(delimiter);
}

function getYYYYmmDD(
  year: number,
  month: number,
  date: number,
  delimiter: string
) {
  return parseDate(
    [
      parseNumberToString(year, 4),
      parseNumberToString(month, 2),
      parseNumberToString(date, 2),
    ],
    delimiter
  );
}

function getYYYYmm(year: number, month: number, delimiter: string) {
  return parseDate(
    [parseNumberToString(year, 4), parseNumberToString(month, 2)],
    delimiter
  );
}

function getMMdd(month: number, date: number, delimiter: string) {
  return parseDate(
    [parseNumberToString(month, 2), parseNumberToString(date, 2)],
    delimiter
  );
}

interface ParseOptions {
  format: 'YYYY-MM-DD' | 'MM-DD' | 'YYYY-MM';
  delimiter: string;
}

export function formatDate(
  dateObject: Date,
  { format = 'YYYY-MM-DD', delimiter = '-' }: Partial<ParseOptions>
) {
  const year = getYear(dateObject);
  const month = getMonth(dateObject);
  const date = getDate(dateObject);

  if (format === 'YYYY-MM') {
    return getYYYYmm(year, month, delimiter);
  }

  if (format === 'MM-DD') {
    return getMMdd(month, date, delimiter);
  }

  return getYYYYmmDD(year, month, date, delimiter);
}

interface ParseTimeOptions {
  format: 'HH:MM:SS';
  delimiter: string;
}

/**
 * @description
 * The function to format time
 * NOTE - Temp function. will be refactored later.
 */
export function formatTime(
  dateObject: Date,
  { format = 'HH:MM:SS', delimiter = ':' }: Partial<ParseTimeOptions>
) {
  const hours = dateObject.getHours();
  const minutes = dateObject.getMinutes();
  const seconds = dateObject.getSeconds();

  if (format === 'HH:MM:SS') {
    // do nothing
  }

  return parseDate(
    [
      parseNumberToString(hours, 2),
      parseNumberToString(minutes, 2),
      parseNumberToString(seconds, 2),
    ],
    delimiter
  );
}
