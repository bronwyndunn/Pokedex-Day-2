import {RECEIVE_SINGLE_POKEMON, receiveSinglePokemon} from '../actions/pokemon_actions';
import {merge} from 'lodash';

const defaultState = {
  items: []
};

const singlePokemonReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_SINGLE_POKEMON:
      return merge(newState, action.pokemon);
    default:
      return state;
  }
};

export default singlePokemonReducer;
