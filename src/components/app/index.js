import React from 'react';

import Header from "../header";
import Footer from "../footer";
import ContentSection from "../content_section";

import data from '../../page';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';

const App = () => (
    <div className="app">
        <Header title="Тестовое задание"/>
        <ContentSection data={data}/>
        <Footer/>
    </div>
);

export default App;