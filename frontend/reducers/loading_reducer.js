import {merge} from 'lodash';
import {
  RECEIVE_ALL_POKEMON,
  RECEIVE_SINGLE_POKEMON,
  RECEIVE_NEW_POKEMON,
  RECEIVE_POKEMON_ERRORS,
  CREATE_POKEMON,
  START_LOADING_ALL_POKEMON,
  START_LOADING_SINGLE_POKEMON } from '../actions/pokemon_actions';

const LoadingReducer = (state = {indexLoading: false}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
    case RECEIVE_NEW_POKEMON:
    case RECEIVE_SINGLE_POKEMON:
    case RECEIVE_POKEMON_ERRORS:
      return state;
    case START_LOADING_ALL_POKEMON:
      return Object.assign({}, state, { indexLoading: true });
    case CREATE_POKEMON:
    case START_LOADING_SINGLE_POKEMON:
      return Object.assign({}, state, { detailLoading: true });
    default:
      return state;
  }
};

export default LoadingReducer;
