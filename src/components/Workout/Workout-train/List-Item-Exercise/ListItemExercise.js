import React,{useState} from 'react';
import './styles.scss';
import {Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faFireAlt } from '@fortawesome/free-solid-svg-icons'
import {connect} from 'react-redux';
import {setCurrentExercise} from '../../../../store/actions/currentWorkout';
import PropTypes from 'prop-types';
const ListItemExercise = (props) => {
  const { name, sets, reps, exerciseID, setCurrentExercise, exerciseSelected} = { ...props };
  const handleSelectExercise = (exerciseID)=>{
    setCurrentExercise(exerciseID);
  }
  
  return (
    <div className='list__item-exercise'>
      <div className='list_item-details'>
        <div className='item-exercise_name'>
          <span>{name}</span>
        </div>
        <div>
          <span>{sets}/5</span>
        </div>
        <div>
          <span>
            <span>{reps}</span>
          </span>
        </div>
        <div>
          <Button
            size='lg'
            variant='light'
            className='Button__set-exercise'
            onClick={() => handleSelectExercise(exerciseID)}
          >
            <FontAwesomeIcon icon={faFireAlt} color={`${exerciseID === exerciseSelected ? '#dc3545' : '#212529'}`} />
          </Button>
        </div>
      </div>
      <div className='exercise_progress'></div>
    </div>
  );
};


ListItemExercise.prototype = {
  name: PropTypes.string,
  sets: PropTypes.number,
  reps: PropTypes.number,
  exerciseID: PropTypes.string,
  setCurrentExercise: PropTypes.func,
  exerciseSelected: PropTypes.number,
};
const mapStateToProps = ({workout}) =>{
  return {
    exerciseSelected : workout.exerciseSelected
  }
}


export default connect(mapStateToProps, {setCurrentExercise})(ListItemExercise);
