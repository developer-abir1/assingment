import React from 'react';
import photo from '../../image/Group 39.png'
import './Contact.css'
const Contact = () => {
    return (
        <section className='container contact-section d-flex justify-content-center align-items-center'>
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-6">
                    <img src={photo} className='img-fluid' alt="" srcset="" />
                </div>
                <div className="col-md-6">
                    <h1 className='contact-title'>
                        Connect With Apps You Use for Work
                    </h1>
                    <p className='contact-para'>
                        Tazkily integrates with the products you use, bringing all your tasks, files and communications in one place so you always know what to do next.                    </p>
                    <button className='common-btn mt-4  '>Browse integrations</button>
                </div>
            </div>
        </section>
    );
};

export default Contact;