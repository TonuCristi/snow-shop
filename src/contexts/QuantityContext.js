import { createContext } from "react";

export const QuantityContext = createContext();

export function QuantityProvider({ children }) {
  return <QuantityContext.Provider>{children}</QuantityContext.Provider>;
}
