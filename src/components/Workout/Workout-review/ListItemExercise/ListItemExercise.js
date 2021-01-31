import React from "react";
import "./styles.scss";
const ListItemExerciseReview = (props) => {
  const { name, results } = props;
  return (
    <div className='container-list-item-exercise-review card'>
      <div className='exercise-name'>
        <span>{name}</span>
      </div>
      <div className='container-exercise-sets'>
        {results.map((setResult, index) => (
          <div className='exercise-resume-set'>
            <span className='font-weight-bold'>Set {index + 1}</span>:{"   "}
            {setResult} reps
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListItemExerciseReview;
