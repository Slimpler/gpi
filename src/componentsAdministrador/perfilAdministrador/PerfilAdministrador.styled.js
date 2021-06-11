import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";


export const Item = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.5rem;
  box-shadow: rgba(0, 0, 0, 1);
  background: #e5e8e8;
  margin: 5px;
  box-shadow: 0px 18px 28px 3px rgba(0, 0, 0, 0.28);
  margin-bottom: 1rem;
  font-family: sans-serif;
  text-align:center;
  border-radius: 10px;
`;

export const ItemImg = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.5rem;
  box-shadow: rgba(0, 0, 0, 1);
  background: #e5e8e8;
  margin: 50px;
  border-radius: 70%;
  align-items:center;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  grid-gap: 5px;
  box-shadow: 1px 9px 30px -5px rgba(0, 0, 0, 0.9);
`;

export const Grid2 = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto;
  grid-gap: 5px;
  box-shadow: rgba(0, 0, 0, 0.5);
  padding-top:10%;
  padding-bottom:10%;
  padding-right:10%;


`;

export const ContainerPerfil = styled.div`
  background: black;
  margin: 100px;
  justify-content:center;
  border-radius: 10px;
  `;


export const Boton = styled(LinkR)`
  margin: 5px;
  border-radius: 15px;
  background: #fff;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #23BB77;
    color: #010606;
  }
`;

export const BtnEdit = styled(Boton)`
    text-align: center;  
    margin:auto;
`
