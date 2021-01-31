import React, { useEffect } from "react";
import "./styles.scss";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFireAlt, faCheck } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import PropTypes from "prop-types";
const ListItemExercise = (props) => {
  const {
    name,
    sets,
    reps,
    exerciseID,
    onSelectExercise,
    exerciseSelected,
    results,
    handleSetsFinished
  } = {
    ...props
  };

  useEffect(() => {
    if (results.length >= sets) {
      handleSetsFinished(exerciseID);
    }
  }, [results]);
  return (
    <div className='list__item-exercise'>
      <div className='list_item-details'>
        <div className='item-exercise_name'>
          <span>{name}</span>
        </div>
        <div>
          <span>
            {results.length}/{sets}
          </span>
        </div>
        <div>
          <span>
            <span>{reps}</span>
          </span>
        </div>
        <div>
          {results.length >= sets ? (
            <Button size='lg' variant='light' className='Button__set-exercise'>
              <FontAwesomeIcon icon={faCheck} color={"black"} />
            </Button>
          ) : (
            <Button
              size='lg'
              variant='light'
              className='Button__set-exercise'
              onClick={() => onSelectExercise(exerciseID)}
            >
              <FontAwesomeIcon
                icon={faFireAlt}
                color={`${
                  exerciseID === exerciseSelected ? "#dc3545" : "#212529"
                }`}
              />
            </Button>
          )}
        </div>
      </div>
      <div className='exercise_progress'>
        <div
          className='exercise_progress__indicator'
          style={{
            width: `${(results.length / sets) * 100}%`
          }}
        ></div>
      </div>
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
  results: PropTypes.array
};

const mapStateToProps = ({ workout }) => {
  return {
    exerciseSelected: workout.exerciseSelected
  };
};

export default connect(mapStateToProps)(ListItemExercise);
