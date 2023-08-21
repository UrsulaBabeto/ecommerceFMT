 /** @jest-environment jsdom */
import React from "react";
import '@testing-library/jest-dom';
import { render } from "@testing-library/react";
import { AppContext } from "../context/Context";
import { CartPage } from "../pages/CartPage/CartPage";

const userContextValue = {
  products: [],
  cart: [],
  total: 0,
};

// Função de renderização personalizada que envolve o componente com o context provider
const customRender = (ui) => (
  <AppContext.Provider value={userContextValue}>{ui}</AppContext.Provider>
);

test("CartPage", () => {
  const { getByText } = render(
    <AppContext.Provider value={userContextValue}>
      <CartPage />
    </AppContext.Provider>
  );
});
 