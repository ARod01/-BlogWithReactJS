import React from 'react';
import { Link } from 'react-router-dom';

import '../style/news.css'

const News = (props) =>{
    return(
        <React.Fragment>
            <article className="News">
                <img className="News__img"src={props.image} alt="imagen post" />
                <h3 className="News__title">Titulo del blogpost</h3>
                <p className="News__content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quam voluptatem, minus reiciendis tempora illum eligendi ipsam, magni facere, a quod totam nesciunt rem illo sed. Unde, esse. Quidem, culpa!</p>
                <Link to="/blog" className="News__link">Leer mas</Link>
            </article>
        </React.Fragment>
    )
}

export default News;