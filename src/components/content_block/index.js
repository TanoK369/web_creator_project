import React from 'react';

import Parser from 'html-react-parser';

import {Row, Col} from "react-bootstrap";

import "./style.scss";

const ContentBlock = ({data}) => (
    <section className="content_block">
        <Row>
            {data.length > 0 && data.map((item, index) => (
                <Col md={item.col} key={index}>
                    <div className="content_block__item">
                        <h2 className="content_block__item-title">{item.metadata.title}</h2>
                        <div className="content_block__content">{Parser(item.metadata.text)}</div>
                    </div>
                </Col>
            ))}
        </Row>
    </section>
);
export default ContentBlock;