import React from 'react';
import styled from 'styled-components';
import { AiOutlineCheck } from 'react-icons/ai';

const Button = styled.button`
  display: inline-flex;
  gap: 6px;
  background: #ffffff;
  border: 1px solid #dbdbdb;
  border-radius: 50px;
  padding: 8px 16px;
  font-size: 14px;
  padding: 10px 16px;
  color: #848484;
  cursor: pointer;
  min-width: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: 300ms ease-in-out;
`;

function FilterButton({ text, action, active }) {
  return (
    <Button
      style={active ? { backgroundColor: '#f7f7f8', border: '1px solid #44475a', color: '#44475a' } : {}}
      onClick={action}>
      {active && <AiOutlineCheck color='44475a' />}
      {text}
    </Button>
  );
}

export default FilterButton;
