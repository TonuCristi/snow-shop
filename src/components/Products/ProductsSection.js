import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ProductsContext } from "../../contexts/ProductsContext.js";

import Product from "./Product";
import Loader from "../Loader/Loader.js";
import Error from "../ErrorMessage/Error.js";
import { Container, ProductsSectionStyled } from "./ProductsSectionstyled";
import { disponibility, price, filters } from "../Filters/Filters.js";

export default function ProductsSection() {
  const [searchParams] = useSearchParams();
  const { data, isLoading, error } = useContext(ProductsContext);
  const [newData, setNewData] = useState([...data]);
  let filteredData = [...data];

  function filterByDisponibility() {
    const dispFilters = disponibility.data.map((disp) => {
      const [key] = Object.entries(disp)[0];
      return [key, searchParams.get(key)];
    });

    dispFilters.forEach((flt) => {
      const [key, value] = flt;
      if (value !== null) {
        filteredData = filteredData.filter((prod) => {
          return prod[key] === Boolean(value);
        });
      }
    });
  }

  function filterByPrice() {
    const priceFilters = searchParams.get(price.title);
    let filteredProducts = [];

    if (!!priceFilters) {
      priceFilters.split("_").forEach((flt) => {
        const [from, to] = flt.split("-");
        const filtered = filteredData.filter(
          (prod) => prod.price >= +from && prod.price <= +to
        );
        filteredProducts.push(...filtered);
      });
    }

    if (searchParams.getAll(price.title).length) {
      filteredData = filteredProducts.filter(
        (price, i, arr) => arr.indexOf(price) === i
      );
    }
  }

  function filterBy() {
    const allFilters = [];
    const allFilteredProducts = [];
    const filteredProducts = [];

    filters.forEach((flt) =>
      allFilters.push({
        key: flt.title,
        filterValues: searchParams.getAll(flt.title),
      })
    );

    allFilters.forEach((flt) => {
      const { key, filterValues } = flt;

      filterValues.forEach((val) => {
        const filtered = filteredData.filter(
          (prod) => prod[key].toLowerCase() === val.toLowerCase()
        );
        filteredProducts.push(...filtered);
      });
      allFilteredProducts.push(...filteredProducts);
    });

    if (
      !allFilteredProducts.every((flt) => {
        const { key } = flt;
        return searchParams.getAll(key).length;
      })
    ) {
      filteredData = allFilteredProducts;
    }
  }

  useEffect(() => {
    // Disponibility
    filterByDisponibility();

    // Price
    filterByPrice();

    // Other filters
    filterBy();

    setNewData([...filteredData]);
  }, [searchParams, data]);

  // Sort
  const sort = searchParams.get("sort");

  if (isLoading) return <Loader />;
  if (error) return <Error message={error} />;

  return (
    <ProductsSectionStyled>
      <Container>
        {sort === "recommended"
          ? newData.map((product) => (
              <Product key={product.id} product={product} />
            ))
          : newData
              .slice(0)
              .sort((a, b) => {
                if (sort === "ascendant") return a.price - b.price;
                if (sort === "descendant") return b.price - a.price;
                return null;
              })
              .map((product) => <Product key={product.id} product={product} />)}
      </Container>
    </ProductsSectionStyled>
  );
}
