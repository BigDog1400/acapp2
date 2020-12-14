import React from 'react';
import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown , faCaretUp} from '@fortawesome/free-solid-svg-icons'
import {  faCheckSquare} from '@fortawesome/free-regular-svg-icons'
const IndicatorExercise = () => {
    return (
      <div className='container-indicator'>
        <div className='indicator-exercise-name'>
          <h3>Dominadas 4/5</h3>
        </div>
        <div className='indicator-exercise-rest-sets'>
          <h3 className='mt-2'>4x</h3>
          <div className='control-sets'>
            <div className='set-reps'>
              <FontAwesomeIcon style={{ fontSize: '34px' }} icon={faCaretUp} />{' '}
              <span style={{fontSize:'28px'}}>15</span>
              <FontAwesomeIcon style={{ fontSize: '34px' }} icon={faCaretDown} />
            </div>
            <div className='checkout-set'>
              <FontAwesomeIcon style={{ fontSize: '40px' }} icon={faCheckSquare} />
            </div>
          </div>
        </div>
      </div>
    );
}

export default IndicatorExercise;
