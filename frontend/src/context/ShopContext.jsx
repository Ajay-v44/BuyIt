import react, { createContext } from "react";

import all_product from "../components/Assets/all_product";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    console.log("all_product in context:", all_product);
  const contextValue = { all_product };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
