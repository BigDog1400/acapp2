import React, { Component } from 'react';
import {Container, Button, Card, Row, FormGroup, Form, FormControl} from 'react-bootstrap';
import {Formik, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import Logo from '../../assets/logo-black.png';
const initialValues= {
  email: '',
  password: '',
}

const validationSchema = Yup.object({
  email: Yup.string().required('Por favor introduzca un email'),
  password: Yup.string().required('Por favor ingrse una contraseña')
})

class Auth extends Component {
  handlerSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };
  onSubmitHandler = (values) => {
    console.log(values);
  };
  render() {
    return (
      <Container className='mx-auto d-flex pt-5'>
        <Card className='mx-auto'>
          <Card.Img
            src={Logo}
            variant='top'
            className='mx-auto mt-2'
            style={{ width: '100px' }}
          />
          <Card.Body>
            <Card.Title>Registro</Card.Title>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={this.onSubmitHandler}
            >
              {({handleSubmit, values,handleChange}) => (
                <Form>
                {console.log(values)}
                  <Form.Group controlId='email'>
                    <Form.Label>Correo Electronico</Form.Label>
                    <Field
                      component={FormControl}
                      type='email'
                      name='email'
                      onChange={handleChange}

                      nameplaceholder='Enter an email'
                      values={values.email}
                    />
                    <Form.Text variant='light'>
                      Esto te ayudara a mantener tus rutinas registradas
                    </Form.Text>
                  </Form.Group>
                  <Form.Group controlId='password'>
                    <Form.Label>Contraseña</Form.Label>
                    <Field
                      component={FormControl}
                      type='password'
                      name='password'
                      placeholder='Password'
                      values={values.password}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Button onClick={handleSubmit} variant='primary'>
                    Submit
                  </Button>
                </Form>
              )}
            </Formik>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default Auth;
