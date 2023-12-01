import styled from "styled-components";

export const LatestProductsSectionStyled = styled.section`
  padding: 4.8rem 10.4rem;
  margin-bottom: 9.6rem;
`;

export const SectionTitle = styled.h2`
  font-size: 2.4rem;
  text-align: center;
  margin-bottom: 4.8rem;
`;

export const ProductsContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 4.8rem;
`;

export const ProductStyled = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0rem 1.2rem 2.4rem #343a40;
  border-radius: 2.7rem;
  padding: 2.4rem;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-0.7rem);
  }
`;

export const Image = styled.img`
  max-width: 100%;
  border-radius: 1.9rem;
`;

export const Info = styled.div`
  padding: 1.2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h3`
  font-size: 1.6rem;
`;

export const Price = styled.p`
  font-size: 1.6rem;
  font-weight: 700;
  color: #fa5252;
  padding: 0.4rem 0.8rem;
  border-radius: 1.3rem;
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
  cursor: pointer;
  transition: all 0.3s linear;

  &:hover {
    background-color: #c92a2a;
  }
`;
