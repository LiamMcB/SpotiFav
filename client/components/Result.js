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
    <div className='d-flex flex-row justify-content-around song-box'>
      <div>{songName}</div>
      <div>{artistName}</div>
      <div>{albumName}</div>
      <button className="btn btn-outline-success" onClick={clickFav}>Add</button>
    </div>
  )
}

export default Result;