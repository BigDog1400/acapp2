import React, { useState } from "react";
import "./index.scss";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const ListItemExercise = (props) => {
  const { name, sets, reps, exerciseID, handlerRemove } = { ...props };
  return (
    <div className='list__item-draft'>
      <div className='item-draft_name'>
        <span>{name}</span>
      </div>
      <div>
        <span>
          <span>{sets}</span>x<span>{reps}</span>
        </span>
      </div>
      <div>
        <Button onClick={() => handlerRemove(exerciseID)} variant='danger'>
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </div>
    </div>
  );
};

export default ListItemExercise;
