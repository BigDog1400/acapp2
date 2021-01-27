import React, { useState } from "react";
import Input_Exercise from "../../../components/Workout/Workout-draft/Input_Exercise/Input_Exercise";
import ListItemExercise from "../../../components/Workout/Workout-draft/List_Item_Exercise/List_item_exercise";
import "./style.scss";
import { nanoid } from "nanoid";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { setWorkout } from "../../../store/actions/index";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
const WorkoutDraft = (props) => {
  const { setWorkout, draftDone } = { ...props };
  const [listExercises, setListExercises] = useState({});
  const [exercisesOrder, setExercisesOrder] = useState([]);
  const addExercise = (values) => {
    const idGenerated = nanoid();
    setExercisesOrder((prevState) => [...prevState, idGenerated]);
    setListExercises((prevState) => ({
      ...prevState,
      [idGenerated]: values
    }));
  };
  const setWorkoutHandler = () => {
    const listExercisesParsed = { ...listExercises };
    exercisesOrder.forEach(
      (eachExercise) => (listExercisesParsed[eachExercise].results = [])
    );
    setWorkout(listExercisesParsed, exercisesOrder);
  };
  const removeExercise = (idExercise) => {
    setExercisesOrder((prevState) =>
      prevState.filter((el) => el !== idExercise)
    );
    setListExercises((prevState) => {
      delete prevState[idExercise];
      return prevState;
    });
  };
  const redirectWorkoutView = draftDone ? (
    <Redirect to='/workout/routine' />
  ) : null;
  return (
    <React.Fragment>
      {redirectWorkoutView}
      <div className='container_form-workout'>
        <div className='form-workout'>
          <Input_Exercise newExercise={addExercise}></Input_Exercise>
        </div>
        <div className='workout-list'>
          {exercisesOrder.map((exerciseID) => (
            <ListItemExercise
              key={exerciseID}
              {...listExercises[exerciseID]}
              exerciseID={exerciseID}
              handlerRemove={removeExercise}
            />
          ))}
        </div>
        {exercisesOrder.length > 0 ? (
          <Button
            className='button-start'
            onClick={setWorkoutHandler}
            variant='dark'
            size='lg'
          >
            EMPEZAR{" "}
            <FontAwesomeIcon style={{ color: "yellow" }} icon={faBolt} />
          </Button>
        ) : null}
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = ({ workout }) => {
  return {
    draftDone: workout.completed
  };
};
export default connect(mapStateToProps, { setWorkout })(WorkoutDraft);
