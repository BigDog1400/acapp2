import React, { Component } from 'react';
import {Container, Button, Card} from 'react-bootstrap';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import Logo from '../../assets/logo-black.png';
import { connect } from 'react-redux';
import {auth} from '../../store/actions/index';
import FormikControls from '../../shared/FormikControls/FormikControls';
const initialValues= {
  email: '',
  password: '',
}

const validationSchema = Yup.object({
  email: Yup.string().email('Por favor ingrese un email valido').required('Por favor introduzca un email'),
  password: Yup.string().required('Por favor ingrese una contraseña').min(6, 'Por favor ingrese una contraseña mas larga')
})

class Auth extends Component {
  constructor(props){
    super(props)
    this.state = {
      isSignup: true
    }
  }
  switchModeHandler = ()=>{
    this.setState(prevState =>{
      return { isSignup : !prevState.isSignup}
    })
  }
  onSubmitHandler = (values) => {
    // console.log(values);
    this.props.onAuth(values.email,values.password,this.state.isSignup)
  };
  componentDidMount(){
    console.log(this.props)
  }
  render() {
    let errorMessage;
    if (this.props.error) {
      errorMessage = <p className='text-center font-weight-bold'>{this.props.error.message}</p>;
    }
    return (
      <Container className='mx-auto d-flex pt-2'>
        <Card className='mx-auto'>
          <Card.Img
            src={Logo}
            variant='top'
            className='mx-auto mt-3'
            style={{ width: '100px' }}
          />
          <Card.Body>
            <Card.Title className='text-center font-weight-bold'>
              {this.state.isSignup ? 'Registro' : 'Acceder'}
            </Card.Title>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={this.onSubmitHandler}
            >
              <Form>
                  <FormikControls
                    control='input'
                    type='email'
                    label='Email'
                    name='email'
                  ></FormikControls>
                   <FormikControls
                    control='input'
                    type='password'
                    label='Contraseña'
                    name='password'
                  ></FormikControls>
                {errorMessage}
                <Button
                  block
                  type='submit'
                  className='mx-auto'
                  variant='primary'
                >
                  Submit
                </Button>
                <Button
                  onClick={this.switchModeHandler}
                  block
                  className='mx-auto'
                  variant={this.state.isSignup ? 'dark' : 'light'}
                >
                  {this.state.isSignup
                    ? 'Ya tengo cuenta, deseo logearme'
                    : 'No tengo cuenta. Registrarme'}
                </Button>
              </Form>
            </Formik>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

const mapStateToProps = ({auth}) =>{
  return {
      loading : auth.loading,
      error : auth.error,
      isAuthenticated: auth.token !== null,
  };
}

const mapDispatchToProps = dispatch => {
  return {
      onAuth: (email, password, isSignup) => dispatch(auth(email, password, isSignup)),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Auth);
