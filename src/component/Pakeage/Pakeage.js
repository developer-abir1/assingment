import React from 'react';
import bg from '../../image/bg.png'
import './Pakeage.css'
import bg2 from '../../image/Group 100.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faCoffee } from '@fortawesome/free-solid-svg-icons'

const ourPakege = [
    {
        name: 'Free plan',
        price: '0',
        service: [''],
        life: 'Life Time',
        backroundImg: bg
    },
    {
        name: 'Basic plan',
        price: '10',
        service: ['Everything in Free', 'Checklist templates', 'Premium integration', '30-day trial'],
        life: 'Per Month',
        backroundImg: bg2,
        backrounColor: '  #8828FF'

    },
    {
        name: 'Advance plan',
        price: '50',
        service: ['Everything in Basic', 'Unlimited members', 'Dedicated support', 'All advance features*'],
        life: 'Per Month',
        backroundImg: bg
    },
]



const Pakeage = () => {
    return (
        <section className='pakeage-section     d-flex justify-content-center align-items-center'>


            <div className="row     ">
                <div className="col-md-4   d-flex justify-content-center ">
                    <div class="card" style={{ width: '18rem', margin: '10px' }}>

                        <div className='pageDev'>
                            <div>
                                <img src={bg} class="card-img-top" alt="..." />
                            </div>

                            <div className='pakegPrice'>
                                <h5> Free Plan</h5>
                                <h4>  $ 0.00 <span className='pakegLife'> / Life Time</span> </h4>
                            </div>
                        </div>
                        <div class="card-body">

                            <ul className='list-unstyled'>
                                {['Browser extension', 'Calendar integration', 'Today & Planning view', 'Checklist templates'].map((item, index) =>
                                    <li className="list " style={{ color: '#666666' }} ><span style={{ marginRight: '10px' }}><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#8828FF', fontSize: '12px' }} /></span> {item}</li>
                                )}
                            </ul>
                            <button className='common-btn'>Get started</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 d-flex justify-content-center">
                    <div class="card middelCard " style={{ width: '18rem', margin: '10px' }}>
                        <div className='mt-5 ms-4 text-white'>
                            <h4>Basic Plan</h4>
                            <h2>$30.00 <span className='pakegLife'>/ Per Month</span> </h2>
                        </div>
                        <div class="card-body">

                            <ul className='list-unstyled'>
                                {['Everything in Free', 'Checklist templates', 'Premium integration', '30-day trial'].map((item, index) =>
                                    <li className="list " style={{ color: '#fff' }} ><span style={{ marginRight: '10px' }}><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#fff', fontSize: '12px' }} /></span> {item}</li>
                                )}
                            </ul>
                            <button className='common-btn'>Get started</button>
                        </div>
                        <p className='recommend'>Recommended</p>

                    </div>
                </div>
                <div className="col-md-4 d-flex justify-content-center">
                    <div class="card" style={{ width: '18rem', margin: '30px' }}>
                        <div className='pageDev'>
                            <div>
                                <img src={bg} class="card-img-top" alt="..." />
                            </div>
                            <div className='pakegPrice'>
                                <h5> Advance   Plan</h5>
                                <h4>  $ 50.00 <span className='pakegLife'>/ Life Time</span></h4>
                            </div>
                        </div>
                        <div class="card-body">

                            <ul className='list-unstyled'>
                                {['Everything in Basic', 'Unlimited members', 'Dedicated support', 'All advance features*'].map((item, index) =>
                                    <li className="list " style={{ color: '#666666' }} ><span style={{ marginRight: '10px' }}><FontAwesomeIcon icon={faCheckCircle} style={{ color: '#8828FF', fontSize: '12px' }} /></span> {item}</li>
                                )}
                            </ul>
                            <button className='common-btn'>Get started</button>
                        </div>
                    </div>
                </div>
            </div>






        </section >
    );
};

export default Pakeage;