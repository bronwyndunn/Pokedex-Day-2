import React from 'react';
import ReactDOM from 'react-dom';
import {fetchSinglePokemon, createPokemon} from './util/api_util';
import {RECEIVE_SINGLE_POKEMON, requestSinglePokemon, receiveSinglePokemon, CREATE_POKEMON, receiveCreatePokemon, requestCreatePokemon} from './actions/pokemon_actions';
import configureStore from './store/store';
import {selectAllPokemon} from './reducers/selectors';
import Root from './components/root';



document.addEventListener('DOMContentLoaded', () => {
  window.fetchSinglePokemon = fetchSinglePokemon;
  window.receiveSinglePokemon = receiveSinglePokemon;
  window.requestSinglePokemon = requestSinglePokemon;
  window.requestCreatePokemon = requestCreatePokemon;
  window.receiveCreatePokemon = receiveCreatePokemon;
  window.createPokemon = createPokemon;

  const store = configureStore();
  window.store = store;
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, rootEl);
});
