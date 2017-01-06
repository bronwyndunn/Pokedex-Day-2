import pokemonReducer from './pokemon_reducer';
import singlePokemonReducer from './pokemon_detail_reducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  pokemonDetail: singlePokemonReducer
});
export default rootReducer;
