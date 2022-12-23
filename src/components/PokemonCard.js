import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {

  //used to decide which sprite we should be showing 
  const[frontImage, setFrontImage] = useState(true)  
  function flipSpriteOnClick(){
    setFrontImage(!frontImage)
  }

  return (
    <Card>
      {/* adds a click to the div to swap the spirte  */}
      <div onClick={flipSpriteOnClick}>
        <div className="image">
          {/* decides what sprite we should be showing */}
          <img alt="oh no!" src={frontImage ? pokemon.sprites.front : pokemon.sprites.back}/>
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
