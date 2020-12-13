import React,{ useState} from 'react';
import Input_Exercise from '../../../components/Workout/Workout-draft/Input_Exercise/Input_Exercise';
import List_item_exercise from '../../../components/Workout/Workout-draft/List_Item_Exercise/List_item_exercise';
import './style.scss';
import { nanoid } from 'nanoid'
import { Button } from 'react-bootstrap';
import {connect} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt } from '@fortawesome/free-solid-svg-icons'
import {setWorkout} from '../../../store/actions/index';
const WorkoutDraft = (props) => {
    const {setWorkout} = {...props}
    const [listExercises,setListExercises] = useState({})
    const [exercisesOrder,setExercisesOrder] = useState([])
    const addExercise = values =>{
      const idGenerated=nanoid();
      setExercisesOrder(prevState => [...prevState, idGenerated]);
      setListExercises(prevState=> ({
        ...prevState,
        [idGenerated]: values
      }));
    }
    const setWorkoutHandler = ()=>{
      setWorkout(listExercises,exercisesOrder)
      // console.log(setWorkout)
      // console.log(props)
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
          {exercisesOrder.map((exerciseID) => (
            <List_item_exercise
              key={exerciseID}
              {...listExercises[exerciseID]}
              exerciseID={exerciseID}
              handlerRemove={removeExercise}
            />
          ))}
        </div>
        {exercisesOrder.length > 0 ? <Button className='button-start' onClick={setWorkoutHandler} variant="dark"  size="lg">EMPEZAR <FontAwesomeIcon style={{color:'yellow'}} icon={faBolt}/></Button> : null}
      </div>
    );
}

export default connect(null, {setWorkout})(WorkoutDraft);
