/** @jest-environment jsdom */
import React from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Header } from "../components/Header/Header";
import { BrowserRouter } from "react-router-dom";

jest.mock("../../context/Context", () => ({
  useAppContext: jest.fn(() => ({
    cart: [1, 2, 3], 
  })),
}));
test("Header componente", () => {
  const getByText = render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );

  const carrinho = getByText("Carrinho");
  expect(carrinho).toBeInTheDocument();
  fireEvent.click(carrinho);
  expect(window.location.pathname).toBe("/carrinho");

  const home = getByText("Home");
  fireEvent.click(home);
  expect(window.location.pathname).toBe("/");

  const contato = getByText("Contato");
  fireEvent.click(contato);
  expect(window.location.pathname).toBe("/contato");
});
