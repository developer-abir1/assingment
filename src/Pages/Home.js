import React from 'react';
import Contact from '../component/contact/Contact';
import Header from '../component/Header/Header';
import HeaderMain from '../component/HeaderMain/HeaderMain';
import Pakeage from '../component/Pakeage/Pakeage';
import RealChat from '../component/RealChat/RealChat';

const Home = () => {
    return (
        <div>

            <Header></Header>
            <Contact />
            <RealChat />
            <Pakeage />
        </div>
    );
};

export default Home;