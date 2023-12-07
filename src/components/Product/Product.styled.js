import styled from "styled-components";

export const Title = styled.h1`
  font-size: 3.2rem;
  margin-bottom: 2.4rem;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 50fr 50fr;
  gap: 6.4rem;
`;

export const Image = styled.img`
  max-width: 85%;
  border-radius: 2.7rem;
`;

export const Container = styled.div``;

export const Price = styled.h2`
  color: #fa5252;
  font-size: 3.2rem;
  margin-bottom: 0.2rem;
`;

export const Disponibility = styled.p`
  color: #40c057;
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 2.4rem;
`;

export const Description = styled.p`
  font-size: 1.6rem;
  line-height: 1.6;
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
  width: 50%;
  cursor: pointer;
  transition: all 0.3s linear;

  &:hover {
    background-color: #c92a2a;
  }
`;
