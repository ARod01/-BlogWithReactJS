import React from 'react';
import { Link } from 'react-router-dom';
import '../style/global.css';

const Header = () =>{
    return(
        <React.Fragment>
            <header className="header">
                <nav className="header-contact">
                    <ul className="header-contact-items">
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>LinkedIn</li>
                        <li>Twitter</li>
                        <li>YouTube</li>
                    </ul>
                </nav>
                <section className="header__page">
                    <Link to="/" className="header__page-logo"></Link>
                    <Link to="/profile" className="header__page-about text-dark">Sobre mi</Link>
                </section>
            </header>
        </React.Fragment>
    )
}

export default Header;