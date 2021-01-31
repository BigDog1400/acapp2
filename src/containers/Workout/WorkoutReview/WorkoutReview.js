import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import ListItemExerciseReview from "../../../components/Workout/Workout-review/ListItemExercise/ListItemExercise";
import "./styles.scss";

const WorkoutReview = (props) => {
  const { draftDone, listExercises, exercisesOrder } = {
    ...props
  };

  const redirectWorkoutView = !draftDone ? (
    <Redirect to='/workout/draft' />
  ) : null;

  return (
    <React.Fragment>
      {redirectWorkoutView}
      <div className='container-workout-review'>
        <h1 style={{ color: "#343a40" }}>Resultados</h1>
        <div className='container-workout-review__list-exercise'>
          {exercisesOrder.map((exerciseId) => (
            <ListItemExerciseReview {...listExercises[exerciseId]} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = ({ workout }) => {
  return {
    draftDone: workout.completed,
    listExercises: workout.listExercises,
    exercisesOrder: workout.exercisesOrder
  };
};
export default connect(mapStateToProps)(WorkoutReview);
