import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
  
export const Nav = styled.nav`
  justify-content: space-around;
  z-index: 12;
  display: flex;
  align-items: center;
  justifyContent: center;
`;
  
// This is the content within the nav boxes
export const NavLink = styled(Link)`
  display: inline;
  align-items: center;
  justifyContent: center;
  text-decoration: none;
  text-align: center;
  font-size: 200%;
  padding: 5rem 2rem;
  border-style: solid;
  width: 100%;
  background-color: #cccccc;

  cursor: pointer;
  &.active {
    color: #000000;
  }

  &:hover {
    background-color: #dddddd;
  }
`;
  
export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 1650px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
  
export const NavMenu = styled.div`
  height: 200px;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justifyContent: center;
  width: 100%;
  padding: 0 !important;
`;

// @media screen might switch around min and max width.