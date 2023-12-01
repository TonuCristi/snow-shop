import { ErrorStyled } from "./Error.styled";

export default function Error({ message }) {
  return <ErrorStyled>Error: {message}</ErrorStyled>;
}
