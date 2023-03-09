import React from 'react'

function TrivNightSearch ({handleSearch, search}) {

    function handleChange(event) {
        handleSearch(event.target.value)
    }

    return (
        <div className="color-turquoise ms-3 p-2">
            <label htmlFor="search">SEARCH-- </label>
            <input onChange={handleChange} type="text" value={search}></input>
        </div>
    )
}

export default TrivNightSearch;