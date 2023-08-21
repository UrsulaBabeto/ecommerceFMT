/** @jest-environment jsdom */
import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import { BrowserRouter } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";

test("Footer componente", () => {
  const getByText = render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  );
  const carrinho = getByText("Carrinho");
  fireEvent.click(carrinho);
  expect(window.location.pathname).toBe("/carrinho");

  const home = getByText("Home");
  fireEvent.click(home);
  expect(window.location.pathname).toBe("/");

  const contato = getByText("Contato");
  fireEvent.click(contato);
  expect(window.location.pathname).toBe("/contato");

  const gamesShop = getByText("Games Shop");
  fireEvent.click(gamesShop);
  expect(window.location.pathname).toBe("/");
});
