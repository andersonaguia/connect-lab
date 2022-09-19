import { useContext } from "react";

import { AuthenticationContext } from "./AuthenticationContext";

export const useAuthentication = () => {
  const context = useContext(AuthenticationContext);
  return context;
};