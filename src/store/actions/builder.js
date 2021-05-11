import { ADD_SATELLITE, REMOVE_SATELLITE } from "./types";

export const add = (ingredient) => ({
  type: ADD_SATELLITE,
  satellite: satellite
});

export const remove = (ingredient) => ({
  type: REMOVE_SATELLITE,
  satellite: satellite
}); 