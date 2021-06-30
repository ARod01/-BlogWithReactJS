import React from 'react';
import Header from '../component/Header';
import { Link } from 'react-router-dom';
import '../style/home.css';

class Home extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Header />
                <main className="home">
                    <div className="home__text">
                        <h1 className="home__text-title">Conoce las novedades y noticias del mundo Tech</h1>
                        <Link className="home__text-button" to="./blogs">Entra ya!</Link>
                    </div>
                </main>
            </React.Fragment>
        );
    }
}

export default Home;