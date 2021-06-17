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
                                <NavLinks to="pagos">
                                    Pagos
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="convenios1">
                                    Convenios
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="AdmAfiliados">
                                    Otro
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