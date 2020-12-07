import React from 'react';
import {Field, ErrorMessage} from 'formik';
import TextError from './TextError';

const CheckboxGroup = (props) => {
    const {label, name, options , ...rest} = props;
    return (
        <div className='form-control'>
            <label>{label}</label>
            <Field name={name} {...rest}>
                {
                    ({field})=>{
                        console.log(field, 'field')
                        return options.map(option => {
                            return (
                              <React.Fragment key={option.key}>
                                <input
                                  type='checkbox'
                                  id={option.value}
                                  {...field}
                                  value={option.value}
                                  checked={field.value.includes(option.value)}
                                ></input>
                                <label htmlFor={option.value}>{option.key}</label>
                              </React.Fragment>
                            );
                        })
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError}></ErrorMessage>
        </div>
    );
}

export default CheckboxGroup;
