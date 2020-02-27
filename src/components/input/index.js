import React, {useState} from "react";

import Parser from 'html-react-parser';

import DatePicker from "react-datepicker";

import Form from 'react-bootstrap/Form';

import "react-datepicker/dist/react-datepicker.css";
import './style.scss';

const Input = ({name, type, label, required}) => {

    const [value, setValue] = useState('');

    const InputWrapper = ({name, label, required, children}) => (
        <Form.Group controlId={name} className="input">
            {label && (
                <Form.Label>{label}{!required && ' (Не обязательно)'}</Form.Label>
            )}
            {children}
        </Form.Group>
    );

    if (type === 'textarea') {
        return (
            <InputWrapper name={name} label={label} required={required} >
                <Form.Control type={type} required={required} as="textarea" className="input__textarea" rows="3"/>
            </InputWrapper>
        );
    }

    if (type === 'checkbox') {
        return (
            <InputWrapper name={name} required={required} >
                <Form.Check type="checkbox" label={Parser(label)} custom className="input__checkbox"/>
            </InputWrapper>
        );
    }

    if (type === 'date') {
        return (
            <InputWrapper name={name} label={label} required={required} >
                <DatePicker
                    className='input__date form-control'
                    selected={value}
                    onChange={(value) => setValue(value)}
                />
            </InputWrapper>
        );
    }

    return (
        <InputWrapper name={name} label={label} required={required} >
            <Form.Control type={type} required={required} className="input__text"/>
        </InputWrapper>
    );
};

export default Input;
