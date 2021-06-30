import React from 'react';

import '../style/proyect.css';

const Proyect = (props) =>{
    return(
        <React.Fragment>
            <article className="proyect">
                <h3>{props.title}</h3>
                <p>{props.content}</p>
            </article>
        </React.Fragment>
    );
}

export default Proyect;