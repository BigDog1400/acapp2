import React from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
const WorkoutRoutine = (props) => {
  const { draftDone } = { ...props };
  const redirectWorkoutView = !draftDone ? (
    <Redirect to='/workout/draft' />
  ) : null;
  return (
    <React.Fragment>
    {redirectWorkoutView}
      <div>
        <h1>I will train now!</h1>
      </div>
    </React.Fragment>
  );
};
const mapStateToProps = ({workout}) =>{
    return { draftDone: workout.completed };
}
export default connect(mapStateToProps)(WorkoutRoutine);
