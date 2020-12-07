import React from 'react';
import {Field, ErrorMessage} from 'formik';
import TextError from './TextError';

const Select = (props) => {
    const {label, name, options, ...rest} = props;
    return (
        <div className='form-group'>
            <label className='form-label' htmlFor={name}>{label}</label>
            <Field className='form-control' as='select' id={name} name={name} {...rest}>
                {
                    options.map(option =>{
                        return (
                          <option
                            key={option.value}
                            value={option.value}
                          >
                              {option.key}
                          </option>
                        );
                    })
                }
            </Field>
            <ErrorMessage name={name} component={TextError}></ErrorMessage>
        </div>
    );
}

export default Select;
