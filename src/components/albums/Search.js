import React, { useRef, useEffect } from 'react';
import { searchAlbums, clearSearch } from '../../store/albums/albumsActions';
import { useDispatch, useSelector } from 'react-redux';
import {SearchInput} from '../styled/MainWrapper'



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
