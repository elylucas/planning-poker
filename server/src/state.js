import {List, Map} from 'immutable';

export function setInitialState(){
  let state = Map({
    rooms: List()
  });
  return state;
}
