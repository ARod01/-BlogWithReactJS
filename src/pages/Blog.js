import React from 'react';
import Contact from '../component/Contact';
import Footer from '../component/Footer';

import '../style/blog.css';
import MainNew from '../assets/images/main-news-img.png';

class Blog extends React.Component{
    render(){
        return(
            <React.Fragment>
                <main className="blog">
                    <img className="blog__img" src={MainNew} alt="main news" />
                    <section className="blog__text">
                        <h3>Noticias</h3>
                        <h2>Titulo de la noticias</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum libero sed eaque voluptatum dignissimos earum nisi rem doloremque assumenda voluptates laudantium culpa nemo consequuntur sequi quos, accusamus perferendis enim.Facilis, libero sunt temporibus saepe eligendi totam, fuga inventore voluptatem unde distinctio provident itaque eum expedita. Cupiditate quo fuga animi, esse laboriosam nobis quam quas veritatis, earum aliquam architecto, pariatur neque! Quaerat dignissimos repellat eveniet nobis tenetur repellendus, sapiente quibusdam praesentium aut fuga cum eius suscipit impedit animi voluptatum, soluta laborum earum ab assumenda dolorem iusto.Modi, consequatur assumenda. Quisquam non, quod in minus placeat atque, rerum sed autem eveniet suscipit possimus, vitae totam nihil facilis fuga vel perspiciatis vero eum eaque aspernatur fugit accusamus ipsa beatae cupiditate. Illo modi ducimus rerum enim beatae dolore sunt neque rem. Modi accusamus perspiciatis hic consectetur consequuntur eveniet est accusantium eius impedit maiores magni debitis et commodi ratione excepturi blanditiis quam, non voluptatibus architecto?</p>
                    </section>
                    <Contact />
                </main>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Blog;