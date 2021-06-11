import styled from "styled-components";
import { Link } from "react-router-dom";


export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? "#31ce83" : "#cd853f")};
  white-space: nowrap;
  outline: none;
  border: 2px solid black;
  border-radius: 3px;
  min-width: 200px;
  max-width: 400px;
  cursor: pointer;
  text-decoration: none;
  transition: 300ms;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ big }) => (big ? "16px 40px" : "14px 24px")};
  color: ${({ primary }) => (primary ? "#212121" : "#000d1a")};
  font-size: ${({ big }) => (big ? "40px" : "20px")};


  &:hover {
    transform: translateY(-2px);
  }
`;
