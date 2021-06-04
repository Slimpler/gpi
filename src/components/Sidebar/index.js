import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="afiliate" onClick={toggle}>
            Nosotros
          </SidebarLink>
          <SidebarLink to="beneficios" onClick={toggle}>
            Beneficios
          </SidebarLink>
          <SidebarLink to="empresas" onClick={toggle}>
            Información
          </SidebarLink>
          <SidebarLink to="informacion" onClick={toggle}>
            Afíliate
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/entrar">Entrar</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
