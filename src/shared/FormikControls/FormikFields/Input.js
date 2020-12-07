import React from 'react';
import {Field, ErrorMessage} from 'formik';
import TextError from './TextError';
const Input = (props) => {
    const {label, name, ...rest} = props;
    return (
        <div className='form-group'>
            <label className='form-label' htmlFor={name}>{label}</label>
            <Field className='form-control' id={name} name={name} {...rest}></Field>
            <ErrorMessage name={name} component={TextError}></ErrorMessage>
        </div>
    );
}

export default Input;
