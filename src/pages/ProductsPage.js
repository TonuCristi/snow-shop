import Filters from "../components/Filters/Filters";
import ProductsSection from "../components/Products/ProductsSection";
import { ProductsPageStyled } from "../styles/ProductsPage.styled";

export default function ProductsPage() {
  return (
    <ProductsPageStyled>
      <Filters />
      <ProductsSection />
    </ProductsPageStyled>
  );
}
