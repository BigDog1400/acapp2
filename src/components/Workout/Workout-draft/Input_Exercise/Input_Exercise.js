import React from 'react';
import FormikControls from '../../../../shared/FormikControls/FormikControls';
import {Formik, Form} from 'formik';
import {Row, Col} from 'react-bootstrap';
import * as Yup from 'yup';
const Input_Exercise = () => {
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
        console.log(values);
    }
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={handlerSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <Row>
            <FormikControls
              control='input'
              type='text'
              label='Nombre'
              name='name'
              className='mx-auto'
            />
            <FormikControls
              control='input'
              type='number'
              label='Sets'
              name='sets'
              className='mx-auto'
            />
            <FormikControls
              control='input'
              type='number'
              label='Reps'
              name='reps'
              className='mx-auto'
            />
          </Row>
        </Form>
      </Formik>
    );
}

export default Input_Exercise;
