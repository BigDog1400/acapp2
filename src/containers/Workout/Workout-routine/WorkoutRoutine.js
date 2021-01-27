import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import IndicatorExercise from "../../../components/Workout/Workout-train/IndicatorExercise/IndicatorExercise";
import IndicatorRest from "../../../components/Workout/Workout-train/IndicatorRest/IndicatorRest";
import ListItemExercise from "../../../components/Workout/Workout-train/List-Item-Exercise/ListItemExercise";
import { setCurrentExercise } from "../../../store/actions/currentWorkout";

import "./style.scss";
const WorkoutRoutine = (props) => {
  const { draftDone, listExercises, exercisesOrder, setCurrentExercise } = {
    ...props
  };
  useEffect(() => {
    handleSelectExercise(exercisesOrder[0]);
  }, []);
  const redirectWorkoutView = !draftDone ? (
    <Redirect to='/workout/draft' />
  ) : null;
  const handleSelectExercise = (exerciseID) => {
    setCurrentExercise(exerciseID);
  };
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
        <div className='workout-routine-exercises'>
          {exercisesOrder.map((exerciseIdenfitier, index) => {
            return (
              <ListItemExercise
                key={index}
                onSelectExercise={handleSelectExercise}
                {...listExercises[exerciseIdenfitier]}
                exerciseID={exerciseIdenfitier}
              />
            );
          })}
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
export default connect(mapStateToProps, { setCurrentExercise })(WorkoutRoutine);
