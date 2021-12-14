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
        cookies.remove("nombre",{path:"/"})
        cookies.remove("rut_afiliado",{path:"/"})
        cookies.remove("sueldo", {path:"/"})
        cookies.remove("telefono", {path:"/"})
        cookies.remove("celular", {path:"/"})
        cookies.remove("antiguedad_afiliado", {path:"/"})
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
                                <NavLinks to="perfil">
                                    Inicio
                                </NavLinks>
                            </NavItem>
                            
                            <NavItem>
                                
                                <NavLinks to="ConvenioAfiliado">
                                    Convenios
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="MisConvenios">
                                    Mis convenios
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="pagosUsuario">
                                    Pagos
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="bonosAfiliado">
                                    Mis bonos
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