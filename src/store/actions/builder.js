import { ADD_SATELLITE, REMOVE_SATELLITE,SET_SATELLITE } from "./types";
import axios from "axios";

export const add = (ingredient) => ({
  type: ADD_SATELLITE,
  satellite: satellite
});

export const remove = (ingredient) => ({
  type: REMOVE_SATELLITE,
  satellite: satellite
});

export const set = (data) => ({
  type: SET_SATELLITE,
  data: data
});

export const load = () => {
  return (dispatch) => axios
    .get('https://builder-test-9feed-default-rtdb.firebaseio.com/default.json')
    .then(response => dispatch(set(response.data)));
} 