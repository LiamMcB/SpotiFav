import React from 'react';

function SongBox (props) {
  const { favSong, deleteFav, userId } = props;
  const song = favSong.song;
  const artist = favSong.artist;
  const album = favSong.album;

  function deleteClick() {
    deleteFav(userId, song, artist);
  }

  return (
    <div className='container d-flex flex-row justify-content-around song-box'>
      <div className='col'>{song}</div>
      <div className='col'>{artist}</div>
      <div className='col'>{album}</div>
      <button className="btn btn-outline-danger" onClick={deleteClick} >Delete</button>
    </div>
  )
}

export default SongBox;