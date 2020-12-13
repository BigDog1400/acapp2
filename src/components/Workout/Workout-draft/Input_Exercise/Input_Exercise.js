import React, {useRef} from 'react';
import FormikControls from '../../../../shared/FormikControls/FormikControls';
import {Formik, Form} from 'formik';
import {Row, Button} from 'react-bootstrap';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './styles.scss';
const Input_Exercise = (props) => {
    const inputNameEl = useRef(null);

    const {newExercise} = {...props}
    const initialValues= {
        name: '',
        sets: 0,
        reps: 0,
    }
    const validationSchema= Yup.object({
        name : Yup.string().required('Requerido'),
        sets : Yup.number().required('Requerido'),
        reps : Yup.number().required('Requerido'),
    })
    const handlerSubmit = (values,formik) =>{
      console.log(values)
      console.log(formik)
      formik.resetForm(initialValues)
      newExercise(values);
    }
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={handlerSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <div className='input__exercise'  >
            <FormikControls
              shouldAutoFocus
              control='input'
              type='text'
              label='Nombre'
              name='name'
              className='input__exercise-name'
            />
            <FormikControls
              control='input'
              type='number'
              label='Sets'
              name='sets'
              className='input__exercise-sets'
            />
            <FormikControls
              control='input'
              type='number'
              label='Reps'
              name='reps'
              className='input__exercise-sets '
            />
            <Button type='submit'>
              <FontAwesomeIcon icon={faPlus}/>
            </Button>
          </div>
        </Form>
      </Formik>
    );
}

export default Input_Exercise;
