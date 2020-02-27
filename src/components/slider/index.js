import React from 'react';

import {Row, Col} from "react-bootstrap";

import OwlCarousel from 'react-owl-carousel';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import "./style.scss";

const Slider = ({title, images}) => (
    <section className="slider">
        <Row>
            <Col>
                <h2>{title}</h2>
                {images.length > 0 && (
                    <OwlCarousel
                        className="owl-theme"
                        loop
                        navText={[]}
                        margin={10}
                        nav
                        responsive={{
                            0: {
                                items: 1,
                                nav: false,
                            },
                            600: {
                                items: 2,
                            },
                            1000: {
                                items: 3,
                            }
                        }}
                    >
                        {images.map(item => (
                            <div className="item" key={item}>
                                <img src={item} alt=""/>
                            </div>
                        ))}
                    </OwlCarousel>
                )}
            </Col>
        </Row>
    </section>
);
export default Slider;