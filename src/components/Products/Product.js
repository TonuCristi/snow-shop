import { Link } from "react-router-dom";
import {
  AddToCartBtn,
  Disponibility,
  Image,
  Price,
  ProductStyled,
  Title,
  Info,
  Promotion,
  Type,
} from "./ProductsSectionstyled";

export default function Product({ product }) {
  const { id, title, price, stock, promotion, resealed, type } = product;

  function disponibilityCheck(stock, resealed) {
    if (!stock) return "No stock";
    if (stock && resealed) return "Resealed";
    if (stock && !resealed) return "In stock";
  }

  return (
    <ProductStyled>
      <Link to={`${id}`}>
        <Image src="../imgs/christmas-tree.jpg" />
      </Link>
      <Info>
        <Title>{title}</Title>
        <Type>{type}</Type>
        <Disponibility>{disponibilityCheck(stock, resealed)}</Disponibility>
        <Price>
          {price}$ {promotion && <Promotion>Promotion</Promotion>}
        </Price>
        <AddToCartBtn>Add to cart</AddToCartBtn>
      </Info>
    </ProductStyled>
  );
}
