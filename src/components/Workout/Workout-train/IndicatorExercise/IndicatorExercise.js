import React from 'react';
import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown , faCaretUp} from '@fortawesome/free-solid-svg-icons'
import {  faCheckSquare} from '@fortawesome/free-regular-svg-icons'
const IndicatorExercise = () => {
    return (
      <div className='container-indicator-sets'>
        <div className='indicator-exercise-name'>
          <span>Dominadas 4/5</span>
        </div>
        <div className='indicator-exercise-rest-sets'>
          <span>4x</span>
          <div className='control-sets'>
            <div className='set-reps'>
              <FontAwesomeIcon style={{ fontSize: '34px' }} icon={faCaretUp} />{' '}
              <span>15</span>
              <FontAwesomeIcon style={{ fontSize: '34px' }} icon={faCaretDown} />
            </div>
            <div className='checkout-set'>
              <FontAwesomeIcon style={{ fontSize: '34px' }} icon={faCheckSquare} />
            </div>
          </div>
        </div>
      </div>
    );
}

export default IndicatorExercise;
