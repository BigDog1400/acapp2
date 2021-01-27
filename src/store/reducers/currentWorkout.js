import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  listExercises: {},
  exercisesOrder: [],
  exerciseSelected: null,
  error: null,
  loading: false,
  completed: false
};

const setWorkout = (state, action) => {
  return updateObject(state, action.payload);
};
const setCurrentExercise = (state, action) => {
  return updateObject(state, action.payload);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_WORKOUT:
      return setWorkout(state, action);
    case actionTypes.SET_CURRENT_EXERCISE:
      return setCurrentExercise(state, action);
    default:
      return state;
  }
};

export default reducer;
