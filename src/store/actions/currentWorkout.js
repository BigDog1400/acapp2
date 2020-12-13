import * as actionTypes from './actionTypes';

export const setWorkout= (listExercises, exercisesOrder) =>{
    return {
      type: actionTypes.SET_WORKOUT,
      payload: { listExercises, exercisesOrder, completed : true },
    };
}