import React from 'react';

const Search = ( { searchInput } ) => {

  const captureData = (e) => {
    searchInput(e.target.value)
  }

  return (
    <header className="header">
      <div className="container">
        <h1 className="header__title">Employee Search</h1>
        <input className="header__search" type="text" onChange={ captureData } placeholder="Look for a name..."></input>
      </div>
    </header>
  )
}

export default Search;