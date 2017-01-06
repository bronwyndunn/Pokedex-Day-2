import React from 'react';
import { Link } from 'react-router';

class PokemonIndexItem extends React.Component {
  // render () {
  //   const pokemonList = this.props.pokemon.map((poke) => {
  //     return (
  //       <li key={poke.id}>{poke.name}<img src={poke.image_url}/></li>
  //     );
  //   });
  render() {
    return (
      <li>
        <Link to={`/pokemon/${this.props.pokemon.id}`}>
          {this.props.pokemon.name}<img src={this.props.pokemon.image_url}/>
        </Link>
      </li>
    );
  }
}

export default PokemonIndexItem;
