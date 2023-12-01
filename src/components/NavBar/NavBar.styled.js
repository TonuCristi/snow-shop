import styled from "styled-components";

import { FaRegSnowflake, FaShoppingBag } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const NavBarStyled = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 4.8rem;
  z-index: 2;
  box-shadow: 0rem 0.6rem 1.2rem #343a40;
`;

export const LinksStyled = styled.ul`
  list-style: none;
  display: flex;
  gap: 2.4rem;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 1.6rem;
  color: #212529;
  font-weight: 700;
  transition: 0.2s all ease;

  &:hover {
    color: #868e96;
  }
`;

export const Icon = styled(FaRegSnowflake)`
  color: #fa5252;
`;

export const Logo = styled(NavLink)`
  display: flex;
  gap: 0.6rem;
  font-size: 2rem;
  text-decoration: none;
  font-weight: 700;
  text-transform: uppercase;
  background-color: #212529;
  color: #fff;
  padding: 1.2rem 2.4rem;
  border-radius: 2.7rem;
  transition: 0.2s all ease;
`;

export const Utilities = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const Cart = styled(FaShoppingBag)`
  font-size: 2rem;
  cursor: pointer;
`;

export const ShowLoginBtn = styled.button`
  border: none;
  background-color: #fa5252;
  color: #fff;
  font-family: inherit;
  font-size: 1.6rem;
  font-weight: 700;
  padding: 0.6rem 1.2rem;
  border-radius: 2.7rem;
  cursor: pointer;
`;
