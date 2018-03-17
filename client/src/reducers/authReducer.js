import { FATCH_USER } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case FATCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}
