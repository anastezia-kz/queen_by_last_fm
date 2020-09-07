import React, { useState, useEffect } from 'react';
import Spinner from '../layout/Spinner';

import axios from 'axios';
import { useParams } from 'react-router-dom';


const AlbumDetails = () => {
  const { artistName, albumName } = useParams();

  const [album, setAlbum] = useState({});
  const [loading, setLoading] = useState(true);
  const [favorite, setFavorite] = useState('')

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
        <>
          {' '}
          <h2>{album.name}</h2>
          
          <img src={getAlbumImage(album)}></img>{' '}
         {album.wiki && <p dangerouslySetInnerHTML={{ __html: album.wiki.summary}}></p>}
          <ul>
            {album.tracks.track.map((track) => (
              <li key={track.name}> 
                {track.name} 
                <img src="/images/empty_star.svg" className="icon"></img>
              </li>
            ))}
          </ul>
          
        </>
      )}
    </div>
  );
};

export default AlbumDetails;
