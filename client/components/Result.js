import React from 'react';

function Result (props) {
  const {songInfo} = props;
  // Get name, artist, and album
  const songName = songInfo.name;
  const artistName = songInfo.artists[0].name;
  const albumName = songInfo.album.name; 
  return (
    <div className='d-flex flex-row justify-content-around song-box'>
      <div>{songName}</div>
      <div>{artistName}</div>
      <div>{albumName}</div>
      <button className="btn btn-outline-success">Add</button>
    </div>
  )
}

export default Result;