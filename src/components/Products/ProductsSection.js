import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ProductsContext } from "../../contexts/ProductsContext.js";

import Product from "./Product";
import Loader from "../Loader/Loader.js";
import Error from "../ErrorMessage/Error.js";
import { Container, ProductsSectionStyled } from "./ProductsSectionstyled";

export default function ProductsSection() {
  const [searchParams] = useSearchParams();
  const { data, status } = useContext(ProductsContext);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const filtersNames = [];

    for (let entry of searchParams.entries()) {
      const [key] = entry;
      filtersNames.push(key);
    }

    const filters = filtersNames
      .filter((flt, i, arr) => arr.indexOf(flt) === i && flt !== "sort")
      .map((filterName) => {
        return { type: filterName, all: searchParams.getAll(filterName) };
      });

    let filteredData = [...data];

    function doFilter(type, all) {
      let tempArr = [];

      filteredData.forEach((prod) => {
        all.forEach((filt) => {
          // Filter for price
          if (type === "price") {
            const [from, to] = filt
              .toLowerCase()
              .split("from")
              .join("")
              .split("to");

            if (
              filt.includes("under") &&
              +filt.toLowerCase().split("under").join("") > prod.price
            ) {
              tempArr.push(prod);
            } else if (
              filt.includes("over") &&
              +filt.toLowerCase().split("over").join("") < prod.price
            ) {
              tempArr.push(prod);
            } else if (prod.price >= +from && prod.price <= +to) {
              tempArr.push(prod);
            }
            // Filter for disponibility, category
          } else if (
            prod[type].split(" ").join("").toLowerCase() === filt.toLowerCase()
          ) {
            tempArr.push(prod);
          }
        });
      });

      filteredData = tempArr;
    }

    if (filters.length) {
      filters.forEach((filter) => {
        const { type, all } = filter;
        doFilter(type, all);
      });
    }

    setFilterData(filteredData);
  }, [searchParams, data]);

  // Sort
  const sort = searchParams.get("sort");

  return (
    <ProductsSectionStyled>
      {status === "dataFetched" && (
        <Container>
          {sort === "recommended"
            ? filterData.map((product) => (
                <Product key={product.id} product={product} />
              ))
            : filterData
                .slice(0)
                .sort((a, b) => {
                  if (sort === "ascendant") return a.price - b.price;
                  if (sort === "descendant") return b.price - a.price;
                  return null;
                })
                .map((product) => (
                  <Product key={product.id} product={product} />
                ))}
        </Container>
      )}
      {status === "fetchingData" && <Loader />}
      {status === "errorFetching" && <Error message="Something went wrong!" />}
    </ProductsSectionStyled>
  );
}
