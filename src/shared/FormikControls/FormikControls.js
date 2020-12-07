import React from 'react';
import Input from './FormikFields/Input';
import Textarea from './FormikFields/Textarea';
import Select from './FormikFields/Select';
import RadioButtons from './FormikFields/RadioButtons';
import DatePicker from './FormikFields/DatePicker';
import CheckboxGroup from './FormikFields/CheckboxGroup';
const FormikControls = (props) => {
    const {control, ...rest} = props;
    switch(control){
        case 'input': 
            return <Input {...rest}></Input>
        case 'textarea':
            return <Textarea {...rest}></Textarea>
        case 'select':
            return <Select {...rest}></Select>
        case 'radio':
            return <RadioButtons {...rest}></RadioButtons>
        case 'checkbox':
            return <CheckboxGroup {...rest}></CheckboxGroup>
        case 'date':
            return <DatePicker {...rest}></DatePicker>
        default:return null;
    }
}

export default FormikControls;
