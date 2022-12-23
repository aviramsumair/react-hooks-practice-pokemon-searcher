import React from "react";

function Search({setSearchTerm, searchTerm}) {

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" 
          type="text" 
          // updates the seach term when the user types in the search bar
          value={searchTerm}
          onChange={(e)=>{
            setSearchTerm(e.target.value)
          }}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
