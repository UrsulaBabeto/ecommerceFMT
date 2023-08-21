/** @jest-environment jsdom */
import React from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { ProductCardComponent } from "../components/ProductCard/ProductCard.component";

const mockProduct = {
  id: 1,
  nome: "Produto de Exemplo",
  imagem: "imagem.jpg",
  preco: 10.99,
};

test("ProductCard componente", () => {
   const closeRightSectionSpy  = jest.fn();
  render(
    <BrowserRouter>
      <ProductCardComponent product={mockProduct} addProductToCart={closeRightSectionSpy } />
    </BrowserRouter>
  );
  expect(screen.getByText("Produto de Exemplo")).toBeInTheDocument();
  expect(screen.getByText("$10.99")).toBeInTheDocument();

  expect(screen.getByRole("img")).toBeInTheDocument();

  const btn = expect(screen.getByRole("button", { name: "Adicionar ao carrinho" })).toBeInTheDocument();
  expect(btn).not.toBeDisabled();

   fireEvent.click(getByTestId("id"));
  expect(closeRightSectionSpy ).toHaveBeenCalled();
});
