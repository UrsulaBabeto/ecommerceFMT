/** @jest-environment jsdom */
import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { AppContext } from "../context/Context";
import { ProductPage } from "../pages/ProductPage/Product.page";

const userContextValue = {
  products: [],
  cart: [],
  total: 0,
};

// Função de renderização personalizada que envolve o componente com o context provider
const customRender = (ui) => (
  <AppContext.Provider value={userContextValue}>{ui}</AppContext.Provider>
);

test(" ProductPage Renderiza lista de card de produtos", () => {
  const closeRightSectionSpy  = jest.fn();
  const { getByTestId } = render(
    <AppContext.Provider value={userContextValue}>
      <ProductPage addProductToCart={closeRightSectionSpy } />
    </AppContext.Provider>
  );

  const btn = expect(screen.getByRole("button", { name: "Adicionar ao carrinho" })).toBeInTheDocument();
  expect(btn).not.toBeDisabled();

  fireEvent.click(getByTestId("id"));
  expect(closeRightSectionSpy ).toHaveBeenCalled();
});
