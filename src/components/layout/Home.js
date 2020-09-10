import React, { useState, useEffect } from 'react';
import Spinner from './Spinner';
import axios from 'axios';
import AlbumsList from '../albums/AlbumsList';
import { GridWrapper, ContentWrapper } from '../styled/MainWrapper';
import {artistName} from '../../appConstants'

const Home = () => {
  
  const [artistInfo, setArtistInfo] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistName}&api_key=${process.env.REACT_APP_LAST_FM_API_KEY}&format=json`
      )
      .then((res) => {
        setArtistInfo({
          name: res.data.artist.name,
          bio: res.data.artist.bio.content,
        });
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <GridWrapper>
            <div>
              <ContentWrapper>
                <h1>{artistInfo.name}</h1>
                <div dangerouslySetInnerHTML={{ __html: artistInfo.bio }}></div>
              </ContentWrapper>
            </div>
            <div>
              <AlbumsList artistName={artistName} />
            </div>
          </GridWrapper>
        </>
      )}
    </>
  );
};

export default Home;
