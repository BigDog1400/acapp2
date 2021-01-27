import React,{useState, useEffect} from 'react';
import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown , faCaretUp} from '@fortawesome/free-solid-svg-icons'
import {  faCheckSquare} from '@fortawesome/free-regular-svg-icons'
import {connect} from 'react-redux';
const IndicatorExercise = (props) => {
    const [currentExercise, setCurrentExercise] = useState({});
    const {exerciseSelected, listExercises} = {...props};
    useEffect(() => {
      const dataExercise = listExercises[exerciseSelected] ? listExercises[exerciseSelected]  : {}; 
      setCurrentExercise(dataExercise)
      return () => {
        setCurrentExercise({})
      };
    }, [exerciseSelected]);
    return (
      <div className='container-indicator-sets'>
        <div className='indicator-exercise-name'>
          <span>{currentExercise.name} 4/{currentExercise.sets}</span>
        </div>
        <div className='indicator-exercise-rest-sets'>
          <span>4x</span>
          <div className='control-sets'>
            <div className='set-reps'>
              <FontAwesomeIcon style={{ fontSize: '34px' }} icon={faCaretUp} />{' '}
              <span>15</span>
              <FontAwesomeIcon style={{ fontSize: '34px' }} icon={faCaretDown} />
            </div>
            <div className='checkout-set'>
              <FontAwesomeIcon style={{ fontSize: '34px' }} icon={faCheckSquare} />
            </div>
          </div>
        </div>
      </div>
    );
}

const mapStateToProps = ({workout}) =>{
  return {
    exerciseSelected : workout.exerciseSelected,
    listExercises : workout.listExercises
  }
}


export default connect(mapStateToProps)(IndicatorExercise);
