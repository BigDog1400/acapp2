import * as actionTypes from "./actionTypes";

export const setWorkout = (listExercises, exercisesOrder) => {
  return {
    type: actionTypes.SET_WORKOUT,
    payload: { listExercises, exercisesOrder, completed: true }
  };
};
export const setCurrentExercise = (exerciseSelected) => {
  return {
    type: actionTypes.SET_CURRENT_EXERCISE,
    payload: { exerciseSelected }
  };
};
export const setSetCompleted = (exerciseSelected, reps) => {
  return {
    type: actionTypes.SET_COMPLETED_EXERCISE,
    payload: { exerciseSelected, reps }
  };
};
