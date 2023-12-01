import styled from "styled-components";

export const ProductsSectionStyled = styled.section``;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.4rem;
`;

export const ProductStyled = styled.div`
  border: 1px solid #868e96;
  border-radius: 2.7rem;
  padding: 1.2rem;
`;

export const Image = styled.img`
  max-width: 100%;
  border-radius: 1.9rem;
`;

export const Info = styled.div`
  padding: 1.2rem 0 0;
`;

export const Title = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 2.4rem;
`;

export const Disponibility = styled.p`
  color: #40c057;
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
`;

export const Price = styled.p`
  font-size: 2rem;
  font-weight: 700;
  color: #fa5252;
  border-radius: 1.3rem;
  margin-bottom: 1.2rem;
`;

export const AddToCartBtn = styled.button`
  border: none;
  background-color: #fa5252;
  color: #fff;
  font-family: inherit;
  font-size: 1.6rem;
  font-weight: 700;
  padding: 1rem;
  border-radius: 2.7rem;
  width: 100%;
  cursor: pointer;
  transition: all 0.3s linear;

  &:hover {
    background-color: #c92a2a;
  }
`;
