import React, { useRef, useEffect } from 'react';
import { searchAlbums, clearSearch } from '../../store/albums/albumsActions';
import { useDispatch, useSelector } from 'react-redux';

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
    <form >
      <input
      className='search-form'
        ref={text}
        placeholder='Search albums'
        type='text'
        onChange={onChange}
      />
    </form>
  );
};

export default Search;
