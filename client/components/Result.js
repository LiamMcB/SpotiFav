import React from 'react';

function Result (props) {
  const {songInfo, addFav, userId} = props;
  // Get name, artist, and album
  const songName = songInfo.name;
  const artistName = songInfo.artists[0].name;
  const albumName = songInfo.album.name; 
  // Pass relevant request info into addFav
  function clickFav() {
    addFav(userId, songName, artistName, albumName);
  }
  return (
    <div className='container d-flex flex-row justify-content-around song-box'>
      <div className='col'>{songName}</div>
      <div className='col'>{artistName}</div>
      <div className='col'>{albumName}</div>
      <button className="btn btn-outline-success" onClick={clickFav}>Add</button>
    </div>
  )
}

export default Result;