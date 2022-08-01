import { formatDate, formatUTCTime } from '../utils/dateFormat';

// TODO - to pass test, formart after change to UTC format
describe('date format', () => {
  it('format date, options: { format: "YYYY-MM-DD", delimiter: "-" }', () => {
    expect(
      formatDate(new Date(2022, 9, 9), { format: 'YYYY-MM-DD', delimiter: '-' })
    ).toBe('2022-10-09');
  });

  it('format date, options: { format: "YYYY-MM", delimiter: "%" }', () => {
    expect(
      formatDate(new Date(2022, 9, 9), { format: 'YYYY-MM', delimiter: '%' })
    ).toBe('2022%10');
  });

  it('format date, options: { format: "MM-DD", delimiter: " " }', () => {
    expect(
      formatDate(new Date(2022, 9, 9), { format: 'MM-DD', delimiter: ' ' })
    ).toBe('10 09');
  });

  // Due to the difference of timezone between CI env and local, the error is occured while testing for using getHours, getMinutes
  it('format time, options: { format: "HH:MM:SS", delimiter: ":" }', () => {
    expect(
      formatUTCTime(new Date(1667975238660), {
        format: 'HH:MM:SS',
        delimiter: ':',
      })
    ).toBe('06:27:18');
  });
});
