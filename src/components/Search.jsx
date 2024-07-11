import React, { useState } from 'react';

const Search = ({ searchMovies }) => {
  const [search, updateSearch] = useState('');
  const [type, setType] = useState('');

  const handleChange = (e) => {
    updateSearch(e.target.value)
  }
  const handleFilter = (e) => {
    setType(e.target.dataset.type)
  };

  return (
    <div className="row">
      <div className="col s12">
        <div className="input-field">
          <input
            onChange={handleChange}
            placeholder="search"
            type="search"
            className="validate"
            value={search}
          />
          <button 
           className="btn btn-search orange darken-4" onClick={() => searchMovies(search, type)}>Search</button>
        </div>
        <label>
          <input 
          className="with-gap" 
          name="group3" 
          type="radio" 
          checked={type === 'all'}
          data-type="all" 
          onChange={handleFilter}
          />
          <span>All</span>
        </label>
        <label>
          <input 
          className="with-gap" 
          name="group3" 
          type="radio" 
          checked={type === 'movie'}
          data-type="movie" 
          onChange={handleFilter}/>
          <span>Movies only
          </span>
        </label>
        <label>
          <input 
          className="with-gap" 
          name="group3" 
          type="radio" 
          checked={type === 'series'}
          data-type="series" 
          onChange={handleFilter}
          />
          <span>Series only</span>
        </label>
      </div>
    </div>
  )
}

export default Search;