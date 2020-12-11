import React,{useEffect, useState} from 'react';
import Input_Exercise from '../../../components/Workout/Workout-draft/Input_Exercise/Input_Exercise';
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
    return (
      <div className='container_form-workout'>
        <div className='form-workout'>
          <Input_Exercise newExercise={addExercise}></Input_Exercise>
        </div>
      </div>
    );
}

export default WorkoutDraft;
