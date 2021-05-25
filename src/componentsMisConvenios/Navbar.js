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
                  to="/"
                  smooth={true}
                  duration={1000}
                  spy={true}
                  exact="true"
                >
                  Deportes
                </NavLinks>
              </NavItem>
              {/* <NavItem>
                <NavLinks
                  to="discover"
                  smooth={true}
                  duration={1000}
                  spy={true}
                  exact="true"
                >
                  Pagos
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="/"
                  smooth={true}
                  duration={1000}
                  spy={true}
                  exact="true"
                >
                  Reuniones
                </NavLinks>
              </NavItem> */}
             {/*  <NavItem>
                <NavLinks
                  to="signup"
                  smooth={true}
                  duration={1000}
                  spy={true}
                  exact="true"
                >
                  
                </NavLinks>
              </NavItem> */}
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/">Salir</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
