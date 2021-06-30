import React from 'react';
import { Link } from 'react-router-dom';

import '../style/contact.css';
import Like from '../assets/icons/like.png';
import Email from '../assets/icons/email.png'

const Contact = () =>{
    return(
        <React.Fragment>
            <section className="blog__contact">
                <div className="blog__contact-card">
                    <img src={Like} alt="logo de preferencia" />
                    <Link to="#" className="blog__contact-link">Contacto</Link>
                    <p>Lorem ipsum dolor, sit amet consectetur</p>
                </div>
                <div className="blog__contact-card">
                    <img src={Email} alt="logo de email" />
                    <Link to="#" className="blog__contact-link">Escribe</Link>
                    <p>Lorem ipsum dolor, sit amet consectetur</p>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Contact;