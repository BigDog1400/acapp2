import React, {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faPlay, faStop} from '@fortawesome/free-solid-svg-icons'
import './styles.scss';
import FormikControls from '../../../../shared/FormikControls/FormikControls';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import Countdown from './Countdown/Countdown';
const ModalSetTimer = (props) => {
  const {minutes, seconds,changeRest} = {...props};
  const initialValues={
    minutes: minutes,
    seconds: seconds 
  }
  const validationSchema = Yup.object({
    minutes: Yup.number().required('Requerido'),
    seconds: Yup.number().required('Requerido'),
  })
  const handlerSubmit = (values)=>{
    changeRest(values);
    // console.log(values, 'Recibidos');
  }
    return (
      <Modal
        show={props.show}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
        onHide={props.onHide}
      >
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>
            Ajustar descanso
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={initialValues}
            onSubmit={handlerSubmit}
            validationSchema={validationSchema}
          >
            <Form>
              <div className='input__timer'>
                <FormikControls
                  type='number'
                  control='input'
                  label='Minutos'
                  name='minutes'
                ></FormikControls>
                <FormikControls
                  type='number'
                  control='input'
                  label='Segundos'
                  name='seconds'
                ></FormikControls>
              <Button  className='button__submit-timer' type='submit'>
                Guardar
              </Button>
              </div>
            </Form>
          </Formik>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
};



const IndicatorRest = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(2);
  const [isTimerActive, setIsTimerActive] = useState(false);
  return (
    <div className='container-indicator-rest'>
      <FontAwesomeIcon
        style={{ fontSize: '34px' }}
        className='clock-icon'
        icon={faClock}
      />
      <div className='container-input-display'>
        <span style={{ fontSize: '25px' }} onClick={() => setModalShow(true)}>
          {isTimerActive ? (
            <Countdown
            minutes={minutes}
            seconds={seconds}
            stopTimer={() => setIsTimerActive(false)}
            />
          ) : (
            <span>{minutes}:{seconds < 9 ? `0${seconds}` : seconds}</span>
          )}
        </span>
        <FontAwesomeIcon
          style={{ fontSize: '34px' }}
          className='play-icon'
          onClick={() => setIsTimerActive(prevState=> !prevState)}
          icon={isTimerActive ? faStop : faPlay}
        />
        <ModalSetTimer
          seconds={seconds}
          minutes={minutes}
          show={modalShow}
          changeRest={(values) => {
            setSeconds(values.seconds);
            setMinutes(values.minutes);
            setModalShow(false);
          }}
          onHide={() => setModalShow(false)}
        />
      </div>
    </div>
  );
};

export default IndicatorRest;
