import React from 'react';

function SongBox (props) {
  const { favSong } = props;
  const song = favSong.song;
  const artist = favSong.artist;
  const album = favSong.album;

  return (
    <div className='d-flex flex-row justify-content-around song-box'>
      <div>{song}</div>
      <div>{artist}</div>
      <div>{album}</div>
    </div>
  )
}

export default SongBox;