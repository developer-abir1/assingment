import React from 'react';
import photo from '../../image/Capture.JPG'
import './RealChat.css'
import backround from '../../image/Group 100.png'

const RealChat = () => {
    return (
        <section className='realChat-section  d-flex justify-content-center align-items-center'>

            <div className='backround'>
                <img src={backround} alt="" />
            </div>
            <div className='row d-flex  align-items-center'>
                <div className="col-md-6  ">
                    <h3 className='contact-title'  >
                        Easy and familiar <br /> Real-time-chat <br /> Features
                    </h3>
                    <p className='contact-para'>Add unlimited people. Easy and familiar to use. Productive <br /> and focused chat related to a task and/or   a document. <br /> Searchable content by keyword.</p>
                </div>
                <div className="col-md-6">
                    <img src={photo} className='img-fluid' alt="" />
                </div>

            </div>

        </section>
    );
};

export default RealChat;