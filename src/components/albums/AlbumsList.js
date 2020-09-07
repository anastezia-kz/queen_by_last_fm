import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import {getAlbums, sortAlbums} from '../../store/albums/albumsActions'
import Search from '../../components/albums/Search'



const AlbumsList = ({ artistName }) => {

  const dispatch = useDispatch()

  //Dispatch  
  const albums = useSelector(state => state.albums.searchedAlbums)

  useEffect(() => {
    dispatch(getAlbums(artistName))
  }, [artistName]);

  //Sort albums

  const sortAllAlbums = () => {
    dispatch(sortAlbums())
    
  };

  return (
    
    <div>
      <h2>Top Albums</h2>
      <div className='controls'>
      <button onClick={sortAllAlbums} className='btn'>
        Sort
      </button>
      <Search/>
      </div>
      <div className='content'>
        <ul>
          {albums.map((album) => (
            <li className='albums' key={album.name}>
              <Link to={`/album/${artistName}/${album.name}`}>
                <img src={album.image[1]['#text']}></img>
                <span>{album.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      </div>
    
  );
};

export default AlbumsList;
