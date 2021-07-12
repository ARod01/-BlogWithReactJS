import React from 'react';
import Contact from '../component/Contact';
import Footer from '../component/Footer';
import Proyect from '../component/Proyect';

import '../style/profile.css';
import Profilepicture from '../assets/images/profile.png';

class Profile extends React.Component{
    render(){
        return(
            <React.Fragment>
                <main>
                    <section className="perfil__data">
                        <img src={Profilepicture} alt="imagen de perfil" />
                        <h2>hola !</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt explicabo atque perspiciatis. Error sequi minima ipsam cumque velit veniam, corporis nemo quibusdam placeat quis rerum necessitatibus facere optio molestiae eaque?</p>
                    </section>
                    <section className="perfil__proyect">
                        <h3 className="perfil__proyect-title">Proyectos</h3>
                        <div className="perfil__proyect-container">
                        <Proyect title={"titulo 1"} content={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem magni distinctio ea aperiam sunt ullam magnam in consequuntur at ex quo suscipit nostrum, dignissimos, nemo dolores excepturi? Eius, eveniet delectus."}/>
                        <Proyect title={"titulo 2"} content={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem magni distinctio ea aperiam sunt ullam magnam in consequuntur at ex quo suscipit nostrum, dignissimos, nemo dolores excepturi? Eius, eveniet delectus."}/>
                        <Proyect title={"titulo 3"} content={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem magni distinctio ea aperiam sunt ullam magnam in consequuntur at ex quo suscipit nostrum, dignissimos, nemo dolores excepturi? Eius, eveniet delectus."}/>
                        </div>
                    </section>
                    <Contact/>
                </main>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Profile;