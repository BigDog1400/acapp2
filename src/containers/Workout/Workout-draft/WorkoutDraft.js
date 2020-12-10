import React,{useEffect, useState} from 'react';
import Input_Exercise from '../../../components/Workout/Workout-draft/Input_Exercise/Input_Exercise';
import './style.scss';
const WorkoutDraft = () => {
    const [listExercises,setListExercises] = useState([])
    const addExercise = values =>{
      console.log(values)
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
