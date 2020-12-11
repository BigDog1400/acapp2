import React from 'react';
import './index.scss';
import {Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
const List_item_exercise = (props) => {
    const {name,sets,reps} = {...props}
    return (
      <div className='list__item-draft'>
        <span>{name}</span>
        <span>
          <span>{sets}</span>x<span>{reps}</span>
        </span>
        <Button  variant="danger">
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </div>
    );
}

export default List_item_exercise;
