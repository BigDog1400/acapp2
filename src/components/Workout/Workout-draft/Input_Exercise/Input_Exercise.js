import React from 'react';
import FormikControls from '../../../../shared/FormikControls/FormikControls';
import {Formik, Form} from 'formik';
import {Row, Button} from 'react-bootstrap';
import * as Yup from 'yup';
import './styles.scss';
const Input_Exercise = (props) => {
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
    const handlerSubmit = (values) =>{
      // console.log(values)
      newExercise(values);
    }
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={handlerSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <Row className='input__exercise'>
            <FormikControls
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
              +
            </Button>
          </Row>
        </Form>
      </Formik>
    );
}

export default Input_Exercise;
