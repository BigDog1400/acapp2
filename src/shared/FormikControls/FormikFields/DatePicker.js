import React from 'react';
import {Field, ErrorMessage} from 'formik';
import TextError from './TextError';
import DateView from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePicker = (props) => {
    const {label, name, ...rest} = props;
    return (
        <div className='form-group'>
            <label className='form-label' htmlFor={name}>{label}</label>
            <Field className='form-control' name={name}>
                {({form, field})=>{
                    const  {setFieldValue} = form;
                    const {value} = field;
                    return (
                      <DateView
                        id={name}
                        {...field}
                        {...rest}
                        selected={value}
                        onChange={value => setFieldValue(name, value)}
                      ></DateView>
                    );
                }
                }
            </Field>
            <ErrorMessage name={name} component={TextError}></ErrorMessage>
        </div>
    );
}

export default DatePicker;
