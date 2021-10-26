import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";


export const EmpresasContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const EmpresasWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: left;
  grid-gap: 16px;
  padding: 0 40px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const EmpresasWrapperr = styled.div`
  max-width: 800px;
  margin: 20 auto;
  display: grid;
  grid-template-columns: repeat(0, 1fr);
  align-items: left;
  grid-gap: 25px;
  padding: 0 50px;
  margin-bottom: 20px; 

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const EmpresasCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 55px;
  max-height: 340px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const EmpresasCardd = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 55px;
  max-height: 50px;
  padding: 7px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const EmpresasIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 64px;
`;


export const EmpresasIconn = styled.img`
  height: 30px;
  width: 30px;
  margin-bottom: 50px;
`;

export const EmpresasH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 100px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const EmpresasH2 = styled.h2`
  font-size: 2rem;
  margin-bottom: -65px;       

`;

export const EmpresasH22 = styled.h2`
  font-size: 2rem;
  margin-bottom: -30px;       

`;

export const EmpresasP = styled.p`
  font-size: 1.5rem;
  text-align: Justify;
`;

export const EmpresasBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const EmpresasBtnLink = styled.a`
  border-radius: 50px;
  background: #7cf1b6;
  white-space: nowrap;
  padding: 10px 105px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const NavLinkR = styled(LinkR)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

