import Links from "./Links";
import {
  NavBarStyled,
  Logo,
  Icon,
  Utilities,
  Cart,
  ShowLoginBtn,
} from "./NavBar.styled";

export default function NavBar() {
  return (
    <NavBarStyled>
      <Logo to="/">
        Snow
        <Icon />
      </Logo>

      <Links />

      <Utilities>
        <Cart />
        <ShowLoginBtn>Login</ShowLoginBtn>
      </Utilities>
    </NavBarStyled>
  );
}
