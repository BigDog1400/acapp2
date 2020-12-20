import React from 'react';
import {Card} from 'react-bootstrap';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import IndicatorExercise from '../../../components/Workout/Workout-train/IndicatorExercise/IndicatorExercise';
import IndicatorRest from '../../../components/Workout/Workout-train/IndicatorRest/IndicatorRest';
import './style.scss';
const WorkoutRoutine = (props) => {
  const { draftDone } = { ...props };
  const redirectWorkoutView = !draftDone ? (
    <Redirect to='/workout/draft' />
  ) : null;
  return (
    <React.Fragment>
      {redirectWorkoutView}
      <div className='container-workout-routine'>
        <div className='workout-routine-indicator'>
          <Card className='indicator-exercise'>
            <IndicatorExercise />
          </Card>
          <Card className='indicator-rest'>
            <IndicatorRest />
          </Card>
        </div>
        <div>Hola</div>
      </div>
    </React.Fragment>
  );
};
const mapStateToProps = ({workout}) =>{
    return { draftDone: workout.completed };
}
export default connect(mapStateToProps)(WorkoutRoutine);
