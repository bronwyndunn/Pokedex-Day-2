import {values} from 'lodash';

export const selectAllPokemon = state => {
  return values(state.pokemon);
};

export const selectPokemonItem = ({pokemonDetail}, itemId) => {
  if (pokemonDetail.items === undefined) {
    return {};
  }
  return pokemonDetail.items[itemId];
};
