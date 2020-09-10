import React from 'react';

function Result (props) {
  const {songInfo} = props;
  return (
    <div className='d-flex flex-row justify-content-around song-box'>
      <div>{songInfo.songName}</div>
      <div>{songInfo.artistName}</div>
      <div>{songInfo.album}</div>
      <button className="btn btn-outline-success">Add</button>
    </div>
  )
}

export default Result;