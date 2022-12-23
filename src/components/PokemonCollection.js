import {React, useEffect} from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemonArray, setPokemonArray, searchTerm}) {

  //used to set the start array with all the pokemon
  const fetchPokemon = async () =>{
    const req  = await fetch("http://localhost:3001/pokemon")
    const res = await req.json()    
    setPokemonArray(res)
  }
  //what calls the fetch and then stops itself from looping
  useEffect(()=>{
    fetchPokemon();
  },[])
  //filters through the pokemon array using the search bar and retuens a new pokemon array with the searched pokemon
  const searchedPokemonArray = pokemonArray.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return (
    <Card.Group itemsPerRow={6}>
      {/* displays the array of searched pokemon */}
      {searchedPokemonArray.map((pokemon) => {
        return(
          <PokemonCard key={pokemon.id} pokemon={pokemon}/>
        )
      })}
    </Card.Group>
  );
}

export default PokemonCollection;
