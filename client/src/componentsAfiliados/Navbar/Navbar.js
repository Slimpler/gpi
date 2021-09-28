import React from "react";
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

const Navbar = () => {
  
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
                                <NavLinks to="buscarconvenios">
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
                            <NavBtnLink to="/">Salir</NavBtnLink>
                        </NavBtn>
                </NavbarContainer>
            </Nav>
            </>
   )
}


export default Navbar;