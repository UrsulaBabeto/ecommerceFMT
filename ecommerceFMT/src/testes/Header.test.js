/** @jest-environment jsdom */
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Header } from "../components/Header/Header";
import { BrowserRouter } from "react-router-dom";

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
