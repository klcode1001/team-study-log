import { formatDate } from '../../hooks/useAttendance/useAttendance.helper';
import type { Day } from '../../factory/Calender';
import type { AttendancePair } from '../../hooks/useAttendance/useAttendance.helper';

interface Props {
  items: AttendancePair;
  dateData: Day;
}


const DataCell = ({ items, dateData }: Props) => {
  const date = formatDate([dateData.year, dateData.month + 1, dateData.date]);
  const item = items[date] || [];
  return <div>{item.length ? 'Attended' : null}</div>;
};

export default DataCell;
