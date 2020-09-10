import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../layout/Spinner';
import { addFavorite } from '../../store/favorites/favoritesActions';
import { getAlbumDetails } from '../../store/oneAlbum/oneAlbumActions';
import { useParams } from 'react-router-dom';
import { GridWrapper, ContentWrapper, Button } from '../styled/MainWrapper';
import styled from 'styled-components';

//styles
const LikeButton = styled(Button)`
  border: #ff5733 solid 1px;
  border-radius: 50%;
  box-shadow: none;
  padding: 6px;
  background-color: ${(props) => (props.favorite ? '#EB7F9B' : '#fff')};
`;

const AlbumDetails = () => {
  const dispatch = useDispatch();
  const { artistName, albumName } = useParams();
  const favorites = useSelector((state) => state.favorites);
  const details = useSelector((state) => state.singleAlbumDetails);

  const onFavoriteClick = (key) => {
    dispatch(addFavorite(key));
  };

  useEffect(() => {
    dispatch(getAlbumDetails(artistName, albumName));
  }, [artistName, albumName]);

  const getAlbumImage = (album) => {
    return album.image ? album.image[2]['#text'] : '';
  };

  return (
    <div>
      {!details ? (
        <Spinner />
      ) : (
        <GridWrapper>
          <ContentWrapper>
            <h2>{details.name}</h2>
            <img src={getAlbumImage(details)}></img>{' '}
            {details.wiki && (
              <p dangerouslySetInnerHTML={{ __html: details.wiki.summary }}></p>
            )}
          </ContentWrapper>

          <ContentWrapper>
            <ul style={{ listStyleType: 'none' }}>
              {details.tracks.track.map((track) => (
                <li key={track.name}>
                  <LikeButton
                    favorite={favorites[track.name]}
                    onClick={() => onFavoriteClick(track.name)}
                  >
                    <i className='far fa-heart'></i>
                  </LikeButton>
                  {track.name}
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
