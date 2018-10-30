import React from "react";
import { SideNav, SideNavItem, Icon } from "react-materialize";
import { logout } from '../config/firebase';
import ButtonA from './Button';


const Home = () => {
    const offSesion = () =>{
        logout()
    }
  return (
    <nav className='btn margin-bottom'>
      <SideNav className="menu"
        trigger={
        <a className="left-align"><Icon>dehaze</Icon></a>
      }
        options={{ closeOnClick: true }}
      >
        <SideNavItem/>
        <SideNavItem><Icon>person</Icon>Perfil</SideNavItem>
        <SideNavItem><Icon>notifications</Icon>Notificaciones</SideNavItem>
        <SideNavItem divider />
        <SideNavItem waves href="#!third">
        <ButtonA classname="btn" logout={offSesion}/>
        </SideNavItem>
      </SideNav> 
    </nav>

  );
};

export default Home;
