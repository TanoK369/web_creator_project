import React from 'react';

import {Container} from "react-bootstrap";

import Slider from "../slider";
import ContentBlock from "../content_block";
import FormContaier from "../form";

import './style.scss';

const ContentSection = ({data}) => {

    const sliderData = data.components.find(item => item.type === 'GalleryComponent').metadata;
    const contentData = data.components.find(item => item.type === 'GridComponent').metadata.components;

    return (
        <section className="content-section">
            <Container fluid={true}>
                <Slider
                    title={sliderData.title}
                    images={sliderData.images}
                />
                <ContentBlock
                    data={contentData}
                />
                <FormContaier data={data.form}/>
            </Container>
        </section>
    );
};

export default ContentSection;