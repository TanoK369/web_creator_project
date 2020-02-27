import React from "react";

import {Row, Col, Form, Button} from "react-bootstrap";

import Input from '../input';

import './style.scss'

const FormContaier = ({data}) => {

    const mainFields = data.fields.filter(item => item.group === 'main');
    const additionalFields = data.fields.filter(item => item.group === 'additional');
    const anotherFields = data.fields.filter(item => item.group === undefined);

    return (
        <section className="form">
            <Row>
                <Col>
                    <h2>{data.title}</h2>
                    <Form>
                        <Row>
                            <Col md={8}>
                                <Row>
                                    {mainFields.length > 0 && mainFields.map(item => (
                                        <Col md={6} key={item.name}>
                                            <Input
                                                name={item.name}
                                                type={item.type}
                                                label={item.label}
                                                required={item.required}
                                            />
                                        </Col>
                                    ))}
                                </Row>
                            </Col>
                            <Col md={4}>
                                {additionalFields.length > 0 && additionalFields.map(item => (
                                    <Input
                                        key={item.name}
                                        name={item.name}
                                        type={item.type}
                                        label={item.label}
                                        required={item.required}
                                    />
                                ))}
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                {anotherFields.length > 0 && anotherFields.map(item => (
                                    <Input
                                        key={item.name}
                                        name={item.name}
                                        type={item.type}
                                        label={item.label}
                                        required={item.required}
                                    />
                                ))}
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button className="form__button" type="submit">
                                    Отправить заявку
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </section>
    );
};

export default FormContaier;
