import { createContext } from "react";
import { useFetch } from "../hooks/useFetch";

export const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const { data, isLoading, error } = useFetch();

  return (
    <ProductsContext.Provider value={{ data, isLoading, error }}>
      {children}
    </ProductsContext.Provider>
  );
}
