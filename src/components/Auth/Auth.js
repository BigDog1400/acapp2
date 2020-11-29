import React, { Component } from 'react';
import {Container, Button, Form, Card} from 'react-bootstrap';
import Logo from '../../assets/logo-black.png';
class Auth extends Component {
    handlerSubmit = event =>{
        event.preventDefault();
        console.log(event);
    }
    render() {
        return (
          <Container className='mx-auto w-50 pt-5'>
            <Card className="mx-auto w-75" >
            <Card.Img src={Logo}  variant='top'
            className="mx-auto mt-2"
            style={{width: '100px'}} />
              <Card.Body>
                <Card.Title>Registro</Card.Title>
                <Form onSubmit={this.handlerSubmit}>
                  <Form.Group controlId='email'>
                    <Form.Label>Correo Electronico</Form.Label>
                    <Form.Control type='email' placeholder='Enter an email' />
                    <Form.Text variant='light'>
                      Esto te ayudara a mantener tus rutinas registradas
                    </Form.Text>
                  </Form.Group>
                  <Form.Group controlId='password'>
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                      type='password'
                      placeholder='Enter an email'
                    />
                  </Form.Group>
                  <Button variant='primary' type='submit'>
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Container>
        );
    }
}

export default Auth;
