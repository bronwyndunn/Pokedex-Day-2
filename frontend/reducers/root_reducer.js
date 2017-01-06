import pokemonReducer from './pokemon_reducer';
import singlePokemonReducer from './pokemon_detail_reducer';
import LoadingReducer from './loading_reducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  pokemonDetail: singlePokemonReducer,
  loading: LoadingReducer
});
export default rootReducer;
