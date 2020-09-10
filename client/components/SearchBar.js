import React from 'react';

function SearchBar (props) {
  const {searchFavs} = props;
  return (
    <div className='searchbar'>
      <h1>Search</h1>
      <input autoComplete="off" autoFocus className="form-control" name="song" placeholder="Track" type="text" id="song-search" />
      <input autoComplete="off" autoFocus className="form-control" name="artist" placeholder="Artist" type="text" id="artist-search" />
      <button className="btn btn-success login-button d-flex justify-content-center" type="submit" onClick={searchFavs}>Search</button>
    </div>
  )
}

export default SearchBar;