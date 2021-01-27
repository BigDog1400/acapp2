import React, { useState, useEffect } from "react";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { faCheckSquare } from "@fortawesome/free-regular-svg-icons";
import { connect } from "react-redux";
const IndicatorExercise = (props) => {
  const [repsMade, setRepsMade] = useState(0);
  const [currentExercise, setCurrentExercise] = useState({});
  const { exerciseSelected, listExercises } = { ...props };
  const handleChangeRepsMade = (event) => {
    if (event === "decrease") {
      setRepsMade((prevState) => prevState - 1);
    } else {
      setRepsMade((prevState) => prevState + 1);
    }
  };
  useEffect(() => {
    const dataExercise = listExercises[exerciseSelected]
      ? listExercises[exerciseSelected]
      : {};
    setRepsMade(dataExercise.reps);
    setCurrentExercise(dataExercise);
    return () => {
      setCurrentExercise({});
    };
  }, [exerciseSelected]);
  return (
    <div className='container-indicator-sets'>
      <div className='indicator-exercise-name'>
        <span>
          {currentExercise.name}{" "}
          {currentExercise.results && currentExercise.results.length + 1}/
          {currentExercise.sets}
        </span>
      </div>
      <div className='indicator-exercise-rest-sets'>
        <span>4x</span>
        <div className='control-sets'>
          <div className='set-reps'>
            <button
              style={{
                boxShadow: "none"
              }}
              className='btn btn-outline-none btn-increase-reps'
              onClick={() => handleChangeRepsMade()}
            >
              <FontAwesomeIcon style={{ fontSize: "34px" }} icon={faCaretUp} />{" "}
            </button>
            <span>{repsMade}</span>
            <button
              className='btn btn-outline-none btn-decrease-reps'
              style={{
                boxShadow: "none"
              }}
              onClick={() => handleChangeRepsMade("decrease")}
            >
              <FontAwesomeIcon
                style={{ fontSize: "34px" }}
                icon={faCaretDown}
              />
            </button>
          </div>
          <div className='checkout-set'>
            <FontAwesomeIcon
              style={{ fontSize: "34px" }}
              icon={faCheckSquare}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ workout }) => {
  return {
    exerciseSelected: workout.exerciseSelected,
    listExercises: workout.listExercises
  };
};

export default connect(mapStateToProps)(IndicatorExercise);
