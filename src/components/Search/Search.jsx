import styled from 'styled-components';

import { useState } from 'react';

import SearchBar from './SearchBar';
import FilterButton from './FilterButton';

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-radius: 4px;
  width: 100%;
  @media (max-width: 800px) {
    flex-direction: column-reverse;
    align-items: flex-end;
    gap: 10px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  gap: 8px;
  align-items: center;
`;

function Search({ search, setSearch, pendingMarked, completedMarked, completed, pending }) {
  return (
    <SearchContainer>
      <ButtonGroup>
        <FilterButton text='Done' action={completedMarked} active={completed} />
        <FilterButton text='Pending' action={pendingMarked} active={pending} />
      </ButtonGroup>

      <SearchBar search={search} setSearch={setSearch} />
    </SearchContainer>
  );
}

export default Search;
