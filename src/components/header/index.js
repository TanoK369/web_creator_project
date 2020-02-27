import React from 'react';

import {Container, Row, Col} from "react-bootstrap";

import "./style.scss";

const Header = ({title}) => (
    <header>
        <Container fluid={true}>
            <Row>
                <Col>
                    <h1>{title}</h1>
                </Col>
            </Row>
        </Container>
    </header>
);

export default Header;