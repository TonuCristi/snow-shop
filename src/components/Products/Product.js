import {
  AddToCartBtn,
  Disponibility,
  Image,
  Price,
  ProductStyled,
  Title,
  Info,
} from "./ProductsSectionstyled";

export default function Product({ product }) {
  const { title, price, disponibility } = product;

  return (
    <ProductStyled>
      <Image src="../imgs/christmas-tree.jpg" />
      <Info>
        <Title>{title}</Title>
        <Disponibility>{disponibility}</Disponibility>
        <Price>{price}$</Price>
        <AddToCartBtn>Add to cart</AddToCartBtn>
      </Info>
    </ProductStyled>
  );
}
