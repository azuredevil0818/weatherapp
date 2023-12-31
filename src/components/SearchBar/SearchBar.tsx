import React, { FormEvent, useRef } from 'react';
import { BiSearch } from 'react-icons/bi';

import * as S from './styles';

type SearchBarProps = {
  handleSearch: (city: string) => void;
};

export default function SearchBar({ handleSearch }: SearchBarProps) {
  const searchInput = useRef(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const { current } = searchInput;

    handleSearch(current?.value);
  };

  return (
    <S.Container
      initial={{ scaleX: 0 }}
      animate={{
        scaleX: 1,
        transition: { delay: 0.6, duration: 0.4, type: 'spring', bounce: 0.35 },
      }}
      onSubmit={handleSubmit}
    >
      <S.Input type="text" placeholder="type a city name" ref={searchInput} />
      <S.Button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={handleSubmit}
      >
        <BiSearch />
      </S.Button>
    </S.Container>
  );
}
