import React from "react";
import { Button, NavItem } from "react-materialize";



const Home = () => {
    return (
            <NavItem>
            <Button floating large className="teal" waves='ligth' icon='person'></Button>,
            <Button floating large className="teal" waves='ligth' icon='alarm'></Button>,
            <Button floating large className="teal" waves='ligth' icon='map'></Button>,
            <Button floating large className="teal" waves='ligth' icon='calendary'></Button>
            </NavItem>

    
    );
};

export default Home;