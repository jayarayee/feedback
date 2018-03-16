import axios from 'axios';
import { FATCH_USER } from './types';

export const fatchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FATCH_USER, payload: res });
};
