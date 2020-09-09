import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../layout/Spinner';
import { addFavorite } from '../../store/favorites/favoritesActions';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { GridWrapper, ContentWrapper, Button } from '../styled/MainWrapper';
import styled from 'styled-components';

const LikeButton = styled(Button)`
  border: #ff5733 solid 1px;
  border-radius: 50%;
  box-shadow: none;
  padding: 6px;
  background-color: ${(props) => (props.favorite ? '#EB7F9B' : '#fff')};
`;

const AlbumDetails = () => {
  const { artistName, albumName } = useParams();

  const [album, setAlbum] = useState({});
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.favorites);

  const onFavoriteClick = (key) => {
    dispatch(addFavorite(key));
  };

  useEffect(() => {
    axios
      .get(
        `http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${process.env.REACT_APP_LAST_FM_API_KEY}&artist=${artistName}&album=${albumName}&format=json`
      )
      .then((res) => {
        setAlbum(res.data.album);
        setLoading(false);
        console.log(res.data);
      });
  }, [artistName, albumName]);

  const getAlbumImage = (album) => {
    return album.image ? album.image[2]['#text'] : '';
  };

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <GridWrapper>
          <ContentWrapper>
            <h2>{album.name}</h2>
            <img src={getAlbumImage(album)}></img>{' '}
            {album.wiki && (
              <p dangerouslySetInnerHTML={{ __html: album.wiki.summary }}></p>
            )}
          </ContentWrapper>

          <ContentWrapper>
            <ul>
              {album.tracks.track.map((track) => (
                <li key={track.name}>
                  {track.name}
                  <LikeButton
                    favorite={favorites[track.name]}
                    onClick={() => onFavoriteClick(track.name)}
                  >
                    <i className='far fa-heart'></i>
                  </LikeButton>
                </li>
              ))}
            </ul>
          </ContentWrapper>
        </GridWrapper>
      )}
    </div>
  );
};

export default AlbumDetails;
