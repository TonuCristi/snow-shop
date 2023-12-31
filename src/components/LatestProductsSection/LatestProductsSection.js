import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";

import {
  LatestProductsSectionStyled,
  ProductsContainer,
  SectionTitle,
} from "./LatestProductsSection.styled";
import Product from "./Product";
import Loader from "../Loader/Loader";
import Error from "../ErrorMessage/Error";

export default function LatestProductsSection() {
  const { data, isLoading, error } = useContext(ProductsContext);

  const dataLength = data.length;
  const latestData = data
    .slice(0, dataLength)
    .sort((a, b) => a.id - b.id)
    .slice(dataLength - 5, dataLength);

  if (isLoading) return <Loader />;
  if (error) return <Error message={error} />;

  return (
    <LatestProductsSectionStyled>
      <SectionTitle>Latest products</SectionTitle>
      <ProductsContainer>
        {latestData.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ProductsContainer>
    </LatestProductsSectionStyled>
  );
}
