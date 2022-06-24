export function bisectLeft<T>(arr: T[], target: T, lo = 0, hi?: number) {
  let start = lo;
  let end = hi || arr.length;

  if (start < 0) {
    throw new Error(`'lo' can't be lower than 0.`);
  }

  while (start < end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }

  return start;
}

export function bisectRight<T>(arr: T[], target: T, lo = 0, hi?: number) {
  let start = lo;
  let end = hi || arr.length;

  if (start < 0) {
    throw new Error(`'lo' can't be lower than 0.`);
  }

  while (start < end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] > target) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }

  return start;
}
