import {React, useState}  from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  //makes the states that we will be using
  const [pokemonArray, setPokemonArray] = useState([])
  const [searchTerm, setSearchTerm] = useState('')


  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm pokemonArray={pokemonArray} setPokemonArray={setPokemonArray}/>
      <br />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <br />
      <PokemonCollection pokemonArray={pokemonArray} setPokemonArray={setPokemonArray} searchTerm={searchTerm}/>
    </Container>
  );
}

export default PokemonPage;
