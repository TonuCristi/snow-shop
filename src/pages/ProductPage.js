import { useParams } from "react-router-dom";
import { useFetchProduct } from "../hooks/useFetchProduct";
// import Image from "./../../public";

import Loader from "../components/Loader/Loader";
import Error from "../components/ErrorMessage/Error";
import { ProductPageStyled } from "../styles/ProductPage.styled";
import {
  AddToCartBtn,
  Container,
  Description,
  Disponibility,
  Image,
  Price,
  Title,
  Wrapper,
} from "../components/Product/Product.styled";
import { Promotion } from "../components/Products/ProductsSectionstyled";

export default function ProductPage() {
  const { productId } = useParams();
  const { product, isLoading, error } = useFetchProduct(productId);
  const { title, price, stock, promotion, resealed, longDescription, type } =
    product;

  function disponibilityCheck(stock, resealed) {
    if (!stock) return "No stock";
    if (stock && resealed) return "Resealed";
    if (stock && !resealed) return "In stock";
  }

  if (isLoading) return <Loader />;
  if (error) return <Error message={error} />;

  return (
    <ProductPageStyled>
      <Title>
        {title} {!!type ? type.slice(0, 1).toUpperCase() + type.slice(1) : ""}
      </Title>
      <Wrapper>
        <Image
          src="./../../imgs/christmas-tree.jpg"
          alt={`Photo of the ${title}`}
        />
        <Container>
          <Price>
            {price}$ {promotion && <Promotion>Promotion</Promotion>}
          </Price>
          <Disponibility>{disponibilityCheck(stock, resealed)}</Disponibility>
          <Description>{longDescription}</Description>
          <AddToCartBtn>Add to cart</AddToCartBtn>
        </Container>
      </Wrapper>
    </ProductPageStyled>
  );
}
