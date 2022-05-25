function formatYear(year: number) {
  return `${year}`;
}

function formatMonth(month: number) {
  return `${month + 1}-`;
}

function formatDate(date: number) {
  return `${date}-`;
}

export function formatYearMonth(year: number, month: number) {
  return `${formatYear(year)} ${formatMonth(month)}`;
}

export function formatMonthDate(month: number, date: number) {
  return `${formatMonth(month)} ${formatDate(date)}`;
}
