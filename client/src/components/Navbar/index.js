import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, [scrollNav]);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              Quintero
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="afiliate"
                  smooth={true}
                  duration={1000}
                  spy={true}
                  exact="true"
                >
                  Afíliate
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="beneficios"
                  smooth={true}
                  duration={1000}
                  spy={true}
                  exact="true"
                >  
                  Beneficios
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="empresas"
                  smooth={true}
                  duration={1000}
                  spy={true}
                  exact="true"
                >
                  Empresas
                </NavLinks>
              </NavItem>
              
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/entrar">Inicio Sesión Afiliado</NavBtnLink>
              <NavBtnLink to="/entrarDirectiva">Inicio Sesión Directiva</NavBtnLink>
            </NavBtn>
            
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
