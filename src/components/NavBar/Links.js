import { Link, LinksStyled } from "./NavBar.styled";

export default function Links() {
  return (
    <LinksStyled>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </LinksStyled>
  );
}
