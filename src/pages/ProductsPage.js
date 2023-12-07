import Filters from "../components/Filters/Filters";
import ProductsSection from "../components/Products/ProductsSection";
import { QuantityProvider } from "../contexts/QuantityContext";
import { ProductsPageStyled } from "../styles/ProductsPage.styled";

export default function ProductsPage() {
  return (
    <QuantityProvider>
      <ProductsPageStyled>
        <Filters />
        <ProductsSection />
      </ProductsPageStyled>
    </QuantityProvider>
  );
}
