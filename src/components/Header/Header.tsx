import Dropdown from '../shared/Dropdown';
import Input from '../shared/Input';
import NavigationBar from '../shared/NavigationBar';

// TODO - Add Dropdown to Header
const Header = () => {
  const items = [
    { key: '1', value: 'value1' },
    { key: '2', value: 'value2' },
  ];
  return (
    <NavigationBar
      left={<div>Team Study Log</div>}
      right={
        <Dropdown items={items} trigger={<Input placeholder="Search By Group" />} />
      }
    />
  );
};

export default Header;
