import React from "react";
import { Button } from "@material-ui/core";
import Cookies from 'universal-cookie';
import {
  Nav, 
  NavbarContainer, 
  NavLogo, 
  NavMenu,
  NavItem, 
  NavLinks,
  NavBtn,
  NavBtnLink
} from "./Navbar.styled"

const cookies = new Cookies();
const Navbar = () => {

    const cerrarSesion=()=>{
        cookies.remove("nombre_dir", {path:"/"})
        cookies.remove("rut_dir", {path:"/"})
        cookies.remove("tipo_directiva", {path:"/"})
        window.location.href='./';
    }
  
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        Quintero
                    </NavLogo>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to="admin">
                                    Inicio
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="pagos">
                                    Pagos
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="Convenios">
                                    Convenios
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="AdmAfiliados">
                                    Afiliados
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="AdmSolicitud">
                                    Solicitudes
                                </NavLinks>
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
                        <Button 
              fullWidth
              variant ='contained'
              color = 'primary'
              onClick = {(cerrarSesion)}>
                Cerrar Sesión 
                </Button>
                        </NavBtn>
                </NavbarContainer>
            </Nav>
            </>
   )
}


export default Navbar;