import styled from "styled-components";

import { FaRegSnowflake } from "react-icons/fa";

export const HeroSectionStyled = styled.section`
  background-image: url("../imgs/bg.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #0123;
  width: 100%;
  height: 40rem;
  color: #fff;
`;

export const Container = styled.div`
  height: 100%;
  padding: 2.4rem 4.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(0.2rem);
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 2.7rem;
  padding: 2.4rem;
`;

export const Title = styled.h1`
  font-size: 4.8rem;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  background-color: #212529;
  color: #fff;
  padding: 1.2rem 2.4rem;
  border-radius: 3.7rem;
  margin-bottom: 1.2rem;
  text-shadow: 0rem 0.6rem 1.2rem #000;
`;

export const Icon = styled(FaRegSnowflake)`
  color: #fa5252;
`;

export const Quote = styled.p`
  font-size: 1.4rem;
  font-weight: 700;
  text-shadow: 0rem 0.6rem 1.2rem #000;
`;
