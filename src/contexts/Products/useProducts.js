import { useContext } from "react";

import { ProductsContext } from "./ProductsContext";

export const useProducts = () => {
  const context = useContext(ProductsContext);
  return context;
};