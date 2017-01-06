export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_SINGLE_POKEMON = "RECEIVE_SINGLE_POKEMON";
export const CREATE_POKEMON = "CREATE_POKEMON";
export const START_LOADING_ALL_POKEMON = "START_LOADING_ALL_POKEMON";
export const START_LOADING_SINGLE_POKEMON = "START_LOADING_SINGLE_POKEMON";
import * as APIUtil from '../util/api_util';

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const receiveSinglePokemon = pokemon => ({
  type: RECEIVE_SINGLE_POKEMON,
  pokemon
});

export const receiveCreatePokemon = pokemon => ({
  type: CREATE_POKEMON,
  pokemon
});

export const startLoadingAllPokemon = () => {
  type: START_LOADING_ALL_POKEMON;
};

export const startLoadingSinglePokemon = () => {
  type: START_LOADING_ALL_POKEMON;
};

export const requestAllPokemon = () => (dispatch) => {
  return APIUtil.fetchAllPokemon()
    .then(() => dispatch(startLoadingAllPokemon()))
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)));
};

export const requestSinglePokemon = (pokemon) => (dispatch) => {
  return APIUtil.fetchSinglePokemon(pokemon)
  .then(() => dispatch(startLoadingSinglePokemon()))
  .then(poke => dispatch(receiveSinglePokemon(poke)));
};

export const requestCreatePokemon = (pokemon) => (dispatch) => {
  return APIUtil.createPokemon(pokemon).then(poke => dispatch(receiveCreatePokemon(poke)));
};
