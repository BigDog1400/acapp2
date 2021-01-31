import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import IndicatorExercise from "../../../components/Workout/WorkoutTrain/IndicatorExercise/IndicatorExercise";
import IndicatorRest from "../../../components/Workout/WorkoutTrain/IndicatorRest/IndicatorRest";
import ListItemExercise from "../../../components/Workout/WorkoutTrain/ListItemExercise/ListItemExercise";
import { setCurrentExercise } from "../../../store/actions/currentWorkout";
import PropTypes from "prop-types";
import "./style.scss";
import { useHistory } from "react-router-dom";

const getNextExerciseOnThelist = (listExercises) =>
  Object.entries(listExercises).find(
    ([, exerciseData]) => exerciseData.sets > exerciseData.results.length
  );

const WorkoutRoutine = (props) => {
  const { draftDone, listExercises, exercisesOrder, setCurrentExercise } = {
    ...props
  };
  const history = useHistory();

  useEffect(() => {
    handleSelectExercise(exercisesOrder[0]);
  }, []);
  const redirectWorkoutView = !draftDone ? (
    <Redirect to='/workout/draft' />
  ) : null;
  const handleSelectExercise = (exerciseID) => {
    setCurrentExercise(exerciseID);
  };
  const onExerciseFinished = (exerciseID) => {
    const nextExercise = getNextExerciseOnThelist(listExercises);
    if (nextExercise) {
      const [nextExerciseID] = nextExercise;
      handleSelectExercise(nextExerciseID);
    } else {
      history.push("/workout/review");
    }
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
                handleSetsFinished={onExerciseFinished}
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
