import styled from "styled-components";

export const FiltersStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  width: 55%;
  font-size: 1.6rem;
  font-weight: 700;
`;

export const Select = styled.select`
  border: 2px solid #212529;
  border-radius: 2.7rem;
  padding: 0.6rem 1.2rem;
  font-family: inherit;
  font-weight: 700;
  font-size: 1.4rem;
`;

export const Option = styled.option`
  font-weight: 500;
`;

export const Form = styled.form`
  font-size: 1.3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const Input = styled.input`
  cursor: pointer;
`;

export const Label = styled.label``;

export const RemoveFiltersBtnStyled = styled.button`
  border: none;
  width: 50%;
  background-color: #fa5252;
  color: #fff;
  font-family: inherit;
  font-weight: 700;
  font-size: 1.2rem;
  padding: 0.6rem;
  border-radius: 1.3rem;
  cursor: pointer;
`;
