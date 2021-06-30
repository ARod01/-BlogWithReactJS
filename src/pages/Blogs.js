import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../component/Header';
import News from '../component/News';
import Footer from '../component/Footer';

import '../style/blogs.css';
import MainNew from '../assets/images/main-news-img.png';
import Post1 from '../assets/images/post-1.png';
import Post2 from '../assets/images/post-2.png';
import Post3 from '../assets/images/post-3.png';

class Blogs extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Header />
                <main className="blogs">
                    <section className="blogs__main">
                        <h2 className="blogs__main-title">Noticias</h2>
                        <article className="blogs__main-card">
                            <img src={MainNew} alt="main new"/>
                            <h3>Titulo del blogpost</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quam voluptatem, minus reiciendis tempora illum eligendi ipsam, magni facere, a quod totam nesciunt rem illo sed. Unde, esse. Quidem, culpa!</p>
                            <Link to="./blog" className="blogs__main-link">Leer mas</Link>
                        </article>
                    </section>
                    <section className="blogs__list">
                        <h2 className="blogs__list-title">Ultimos blogposts</h2>
                        <div className="blogs__list-container">
                            <News image={Post1} />
                            <News image={Post2} />
                            <News image={Post3} />
                            <News image={Post2} />
                            <News image={Post3} />
                            <News image={Post1} />
                        </div>
                    </section>
                </main>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Blogs;