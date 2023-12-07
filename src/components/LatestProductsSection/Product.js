import { Link } from "react-router-dom";
import {
  AddToCartBtn,
  ProductStyled,
  Image,
  Info,
  Title,
  Price,
} from "./LatestProductsSection.styled";

export default function Product({ product }) {
  const { id, title, price } = product;

  return (
    <ProductStyled>
      <Link to={`/product/${id}`}>
        <Image src="../imgs/christmas-tree.jpg" />
      </Link>
      <Info>
        <Title>{title}</Title>
        <Price>{price}$</Price>
      </Info>
      <AddToCartBtn>Add to cart</AddToCartBtn>
    </ProductStyled>
  );
}
