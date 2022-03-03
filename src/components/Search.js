import React from 'react';
import '../styles/Search.css';
import SearchIcon from '@mui/icons-material/Search';

function Search() {
  return (
    <div className="search">
      <SearchIcon />
      <input 
        type="text"
        placeholder="Search Twitter"
      />
    </div>
  )
}

export default Search;