import { DataContext } from "../../App.js";
import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import Product from "./Product";
import Loader from "../Loader/Loader.js";
import Error from "../ErrorMessage/Error.js";
import { Container, ProductsSectionStyled } from "./ProductsSectionstyled";

// const filters = [
//   { inStock: "In stock", promotion: "Promotion", resealed: "Resealed" },
//   {
//     christmasTree: "Christmas tree",
//     socks: "Socks",
//     candles: "Candles",
//     lights: "Lights",
//   },
//   {
//     under100: "Under 100",
//     from100To200: "100 - 200",
//     from200To300: "200 - 300",
//     from300To400: "300 - 400",
//     from400To500: "400 - 500",
//     over500: "Over 500",
//   },
// ];

export default function ProductsSection() {
  const [searchParams] = useSearchParams();
  const { data, status } = useContext(DataContext);
  const [filterData, setFilterData] = useState([]);

  // console.log(filteredProducts);

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
          if (
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

    console.log(filteredData);

    // Create the price filter

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
