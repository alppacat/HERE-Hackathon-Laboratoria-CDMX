import React from 'react';

const ButtonA = (props) => {

    return (
        <React.Fragment>
            <button className="btn" onClick={props.logout} >Cerrar sesión</button>
        </React.Fragment>   
    );
}

export default ButtonA;
