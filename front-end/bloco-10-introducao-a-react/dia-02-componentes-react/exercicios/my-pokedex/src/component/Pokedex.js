import React, { Component } from "react";
import Pokemon from "./Pokemon";
import pokemons from "../data";

class Pokedex extends Component {
  render() {
    return (
      <>
        <header>
          <h1>Pokedex</h1>
        </header>
        {pokemons
          .map(pokemon => <Pokemon pokeInfo={pokemon} key={pokemon.id}/>)}
      </>
    );
  }
}

export default Pokedex;
