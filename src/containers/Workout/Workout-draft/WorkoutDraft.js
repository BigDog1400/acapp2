import React from 'react';
import Input_Exercise from '../../../components/Workout/Workout-draft/Input_Exercise/Input_Exercise';
import './style.scss';
const WorkoutDraft = () => {
    return (
      <div className='container_form-workout'>
        <div className='form-workout'>
          <Input_Exercise></Input_Exercise>
        </div>
      </div>
    );
}

export default WorkoutDraft;
