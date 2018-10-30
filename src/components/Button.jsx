import React from 'react';

const Button = (props) => {

    return (
        <React.Fragment>
            <button onClick={props.logout} >Salir</button>
        </React.Fragment>
    );
}

export default Button;