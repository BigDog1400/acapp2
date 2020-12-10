import React from 'react';
import {Field, ErrorMessage} from 'formik';
import TextError from './TextError';
const Input = (props) => {
    const {label, name, type, ...rest} = props;
    return (
        <div className='form-group' {...rest}  >
            <label className='form-label' htmlFor={name}>{label}</label>
            <Field className='form-control' type={type} id={name} name={name}></Field>
            <ErrorMessage name={name} component={TextError}></ErrorMessage>
        </div>
    );
}

export default Input;
