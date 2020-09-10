import React, { useRef, useEffect } from 'react';
import { searchAlbums, clearSearch } from '../../store/albums/albumsActions';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'


const SearchInput = styled.input`
  background: #fff;
  color: #333;
  padding: 0.4rem 1.3rem;
  border: #ff5733 solid 2px;
  border-radius: 15px;
`;


const Search = () => {
  const dispatch = useDispatch();
  const text = useRef('');
  const searchString = useSelector((state) => state.albums.searchString);

  useEffect(() => {
    if (searchString === '') {
      text.current.value = '';
    }
  }, [searchString]);

  const onChange = (e) => {
    text.current.value !== ''
      ? dispatch(searchAlbums(e.target.value))
      : dispatch(clearSearch());
  };

  return (
    
      <SearchInput
        ref={text}
        placeholder='Search albums'
        type='text'
        onChange={onChange}
      />
    
  );
};

export default Search;
