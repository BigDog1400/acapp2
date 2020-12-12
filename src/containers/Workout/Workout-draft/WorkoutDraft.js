import React,{useEffect, useState} from 'react';
import Input_Exercise from '../../../components/Workout/Workout-draft/Input_Exercise/Input_Exercise';
import List_item_exercise from '../../../components/Workout/Workout-draft/List_Item_Exercise/List_item_exercise';
import './style.scss';
import { nanoid } from 'nanoid'
const WorkoutDraft = () => {
    const [listExercises,setListExercises] = useState({})
    const [exercisesOrder,setExercisesOrder] = useState([])
    const addExercise = values =>{
      console.log(listExercises)
      const idGenerated=nanoid();
      setExercisesOrder(prevState => [...prevState, idGenerated]);
      setListExercises(prevState=> ({
        ...prevState,
        [idGenerated]: values
      }));
    }
    const removeExercise = (idExercise) =>{
      setExercisesOrder(prevState => prevState.filter(el => el !== idExercise));
      setListExercises(prevState=> {
        delete prevState[idExercise]
        return prevState;
      });
    }
    return (
      <div className='container_form-workout'>
        <div className='form-workout'>
          <Input_Exercise newExercise={addExercise}></Input_Exercise>
        </div>
        <div className='workout-list'>
          {exercisesOrder.map(exerciseID => <List_item_exercise key={exerciseID} {...listExercises[exerciseID]} exerciseID={exerciseID} handlerRemove={removeExercise}/>)}
        </div>
      </div>
    );
}

export default WorkoutDraft;
