import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAlbums, sortAlbums } from '../../store/albums/albumsActions';
import Search from '../../components/albums/Search';
import {
  AlbumsWrapper,
  Controls,
  Button,
  ContentWrapper,
} from '../styled/MainWrapper';

const AlbumsList = ({ artistName }) => {
  const dispatch = useDispatch();


  const albums = useSelector((state) => state.albums.searchedAlbums);

  useEffect(() => {
    dispatch(getAlbums(artistName));
  }, [artistName]);

  //Sort albums

  const sortAllAlbums = () => {
    dispatch(sortAlbums());
  };

  return (
    <ContentWrapper>
      <Controls>
        <Button onClick={sortAllAlbums}>Sort Albums</Button>
        <Search />
      </Controls>

      <ul>
        {albums.map((album) => (
          <AlbumsWrapper key={album.name}>
            <Link to={`/album/${artistName}/${album.name}`}>
              <img src={album.image[1]['#text']}></img>
              <span>{album.name}</span>
            </Link>
          </AlbumsWrapper>
        ))}
      </ul>
    </ContentWrapper>
  );
};

export default AlbumsList;
