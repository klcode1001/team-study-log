import type { Attendance } from '../../api/attendance';
import type { Day } from '../../factory/Calender';

interface Props {
  items: Attendance[];
  dateData: Day;
}

/**
 * ANCHOR
 * Let's consider the better solution
 * Caching?
 * */
const DataCell = ({ items, dateData }: Props) => (
  <div>
    {items.find((item) => {
      const date = new Date(item.timestamp);
      return (
        date.getFullYear() === dateData.year &&
        date.getMonth() === dateData.month &&
        date.getDate() === dateData.date
      );
    })
      ? '출석'
      : null}
  </div>
);

export default DataCell;
