import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import LoadingIcon from './loading_icon';

class PokemonIndex extends React.Component {

  componentDidMount(){
    this.props.requestAllPokemon();
  }

  render() {
    const { pokemon, loading, children } = this.props;
    const pokemonItems = this.props.pokemon.map(poke => <PokemonIndexItem key={poke.id} pokemon={poke} />);


    return loading ?
      <LoadingIcon /> :
          <section className="pokedex">
            <ul>
              {pokemonItems}
            </ul>
            {this.props.children}
          </section>;

    }
}


export default PokemonIndex;
