import React, { Component } from 'react';
import {Container, Button, Card, FormGroup, FormControl, FormLabel, FormText} from 'react-bootstrap';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import Logo from '../../assets/logo-black.png';
import CustomErrorMessage from '../UI/CustomErrorMessage';
const initialValues= {
  email: '',
  password: '',
}

const validationSchema = Yup.object({
  email: Yup.string().email('Por favor ingrse un email valido').required('Por favor introduzca un email'),
  password: Yup.string().required('Por favor ingrese una contraseña').min(6, 'Por favor ingrese una contraseña mas larga')
})

class Auth extends Component {
 
  onSubmitHandler = (values) => {
    console.log(values);
  };
  render() {
    return (
      <Container className='mx-auto d-flex pt-2' >
        <Card className='mx-auto' >
          <Card.Img
            src={Logo}
            variant='top'
            className='mx-auto mt-3'
            style={{ width: '100px' }}
          />
          <Card.Body>
            <Card.Title className='text-center font-weight-bold'>Registro</Card.Title>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={this.onSubmitHandler}
            >   
            <Form >
                  <FormGroup controlId='email'>
                    <FormLabel>Correo Electronico</FormLabel>
                    <Field
                      as={FormControl}
                      type='email'
                      name='email'
                      placeholder='Enter an email'
                    />
                    <FormText variant='light'>
                      Esto te ayudara a mantener tus rutinas registradas
                    </FormText>
                    <ErrorMessage component={CustomErrorMessage} name='email'></ErrorMessage>

                  </FormGroup>
                  <FormGroup controlId='password'>
                    <FormLabel>Contraseña</FormLabel>
                    <Field
                      as={FormControl}
                      type='password'
                      name='password'
                      placeholder='Password'
                    />
                    <ErrorMessage component={CustomErrorMessage} name='password'></ErrorMessage>
                  </FormGroup>
                  <Button  block type='submit' className='mx-auto' variant='primary'>
                    Submit
                  </Button>
                </Form>
            </Formik>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default Auth;
