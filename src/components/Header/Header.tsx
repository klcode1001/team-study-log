import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useOrganization from '../../hooks/useOrganization';
import { Button } from '../shared/Button';
import Dropdown from '../shared/Dropdown';
import Input from '../shared/Input';
import NavigationBar from '../shared/NavigationBar';

type Item = { key: string | number; value: string };

const Header = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const { organizations, setOrganizations, searchOrganizations } =
    useOrganization();
  const naviagte = useNavigate();

  const items = organizations.map<Item>((organization) => ({
    key: organization.id,
    value: organization.name,
  }));

  const goToOrganizationInfoPage = (id: number | string) => {
    naviagte(`/organizations/${id}`);
  };

  const searchValue = async (value: string) => {
    if (!value) {
      setOrganizations([]);
      return;
    }

    await searchOrganizations(value);
  };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);

    await searchValue(e.target.value.trim());
  };

  const handleClickGroupCreateButton = () => {
    naviagte('/groups/create');
  };

  return (
    <NavigationBar
      left={<div>Team Study Log</div>}
      middle={
        <Button onClick={handleClickGroupCreateButton}>Create New Group</Button>
      }
      right={
        <Dropdown
          items={items}
          trigger={
            <Input
            placeholder="Search group"
              value={inputValue}
              onChange={handleChange}
            />
          }
          onClickItem={async (index) => {
            setInputValue(items[index].value);

            goToOrganizationInfoPage(organizations[index].id);
          }}
        />
      }
    />
  );
};

export default Header;
