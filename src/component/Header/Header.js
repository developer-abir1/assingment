import React from 'react';
import Navbar from '../../Shared/Navbar';
import HeaderMain from '../HeaderMain/HeaderMain';
import './Header.css'


const Header = () => {
    return (
        <section className='header-section'>
            <Navbar />
            <HeaderMain></HeaderMain>

        </section>
    );
};

export default Header;