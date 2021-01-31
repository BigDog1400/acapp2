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
const setSetCompleted = (state, action) => {
  const { exerciseSelected, reps } = action.payload;
  const exerciseUpdate = state.listExercises[exerciseSelected].results.concat(
    reps
  );
  const updateExerciseList = updateObject(state.listExercises, {
    [exerciseSelected]: {
      ...state.listExercises[exerciseSelected],
      results: exerciseUpdate
    }
  });
  console.log(updateExerciseList);
  return updateObject(state, { listExercises: updateExerciseList });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_WORKOUT:
      return setWorkout(state, action);
    case actionTypes.SET_CURRENT_EXERCISE:
      return setCurrentExercise(state, action);
    case actionTypes.SET_COMPLETED_EXERCISE:
      return setSetCompleted(state, action);
    default:
      return state;
  }
};

export default reducer;
