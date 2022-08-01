import React, { useState } from 'react';
import styled from 'styled-components';
import useClickAway from '../../../hooks/shared/useClickAway';
import DropdownMenu from './DropdownMenu';

export type Item = {
  key: string | number;
  value: React.ReactNode;
};

interface Props<T> {
  /* trigger is the component change the state of Dropdown */
  trigger: React.ReactNode;

  /* item must always be Item type. */
  items?: T[];

  /* When you click an item, it returns the index of the item. */
  onClickItem?: (index: number) => void;
}

const Dropdown = <T extends Item>({
  trigger,
  items,
  onClickItem,
}: Props<T>) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  const ref = useClickAway<HTMLDivElement>(() => close());

  // In order to create a general-purpose component, it must be able to respond to various events.
  const triggerWithProps = React.isValidElement(trigger)
    ? React.cloneElement(trigger, {
        ...trigger.props,
        onClick: (e: React.MouseEvent<HTMLElement>) => {
          const event = e.nativeEvent;

          if (!event.target) return;

          const target = event.target as HTMLElement;

          // if target is INPUT, do not trigger event
          if (target.tagName === 'INPUT') return;

          toggle();
          trigger.props.onClick?.(e);
        },
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
          const value = e.target.value.trim();

          // if trimmed value is blank, close dropdown
          if (!value) {
            close();
          } else {
            open();
          }

          trigger.props.onChange?.(e);
        },
        onFocus: (e: React.FocusEvent<HTMLInputElement>) => {
          // Only for input element
          if (e.target.tagName !== 'INPUT') return;

          if (items?.length) {
            open();
          }

          trigger.props.onFocus?.(e);
        },
      })
    : trigger;

  const onClickItemWithProps = (index: number) => {
    close();
    onClickItem?.(index);
  };

  return (
    <Container ref={ref}>
      {triggerWithProps}
      {/* Dropdown Menu */}
      {isOpen && items?.length ? (
        <DropdownMenu items={items} onClickItem={onClickItemWithProps} />
      ) : null}
    </Container>
  );
};

export default Dropdown;

const Container = styled.div`
  position: relative;
`;
