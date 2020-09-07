import React, { useState, useEffect } from 'react';
//import styled, {css} from 'styled-components'
import Spinner from './Spinner';

import axios from 'axios';
import AlbumsList from '../albums/AlbumsList';

const Home = () => {
  const artistName = 'Queen';
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
          <div className='grid-2'>
            <div>
              <h1>{artistInfo.name}</h1>
              <div className="content" dangerouslySetInnerHTML={{ __html: artistInfo.bio }}></div>
            </div>
            <div>
              <AlbumsList artistName={artistName} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
