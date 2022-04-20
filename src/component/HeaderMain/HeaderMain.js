import React from 'react';
import Header from '../Header/Header';
import photo1 from '../../image/Group 117.png'
import photo from '../../image/Group 116.png'
import './HeaderMain.css'


const HeaderMain = () => {
    return (
        <section className=' '>

            <div className="row">
                <div className="col-md-6 ps-5 pt-5  ">
                    <h3 className='header-title'>One place to organise,  communicate and  store work</h3>
                    <p className='header-para'>
                        For businesses who need clarity, productive communication, prioritisation and accountability.
                    </p>
                    <div className='btn-group mt-5 pt-5 d-flex justify-content-center'>
                        <button className='brand-btn  '>
                            Get started
                        </button>
                        <button className='try-btn'>
                            Try free trial
                        </button>
                    </div>

                </div>
                <div className="col-md-6 mt-5 ">

                    <div className='header-photo pt-3  '>
                        <div className='   header-photo1 d-flex justify-content-end'>
                            <img src={photo} className=" " alt="" srcset="" />
                        </div>


                        <div className=' header-photo2'>
                            <img src={photo1} className='img-fluid' alt="" srcset="" />
                        </div>

                    </div>

                </div>
            </div>
        </section>

    );
};

export default HeaderMain;