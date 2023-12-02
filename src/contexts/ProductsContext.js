import { createContext } from "react";
import { useFetch } from "../hooks/useFetch";

export const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const { data, status } = useFetch();

  return (
    <ProductsContext.Provider value={{ data: data, status: status }}>
      {children}
    </ProductsContext.Provider>
  );
}
