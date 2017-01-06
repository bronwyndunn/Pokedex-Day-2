import React from 'react';

class PokemonDetail extends React.Component {

  componentDidMount(){
    this.props.requestSinglePokemon(this.props.params.pokemonId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props !== newProps) {
      this.props.requestSinglePokemon(newProps.params.pokemonId);
    }
  }

  render() {
    // const pokeInfo = this.props.pokemon.map(poke => {
    //   return {
    //     <li>poke</li>
    //   }
    // })
    const itemList = this.props.pokemon.items.map( item => {
      return (
        <ul>
          <li>{item.name}</li>
          <li>{item.happiness}</li>
          <li>{item.price}</li>
        </ul>
      );
    });

    return (
      <section>
        <figure>
          <img src={this.props.pokemon.image_url}/>
        </figure>
        <div className="description">
          <h3>{this.props.pokemon.name}</h3>
          <li>{this.props.pokemon.poke_type}</li>
          <li>{this.props.pokemon.attack}</li>
          <li>{this.props.pokemon.defense}</li>
          <li>{this.props.pokemon.moves}</li>
          <li>{itemList}</li>
        </div>
        {this.props.children}
      </section>
    );
  }
}


export default PokemonDetail;
