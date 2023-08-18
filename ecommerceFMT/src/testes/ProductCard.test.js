/** @jest-environment jsdom */
import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import { BrowserRouter } from "react-router-dom";
import { ProductCardComponent } from "../components/ProductCard/ProductCard.component";

test("Footer componente", () => {
  render(
    <BrowserRouter>
      <ProductCardComponent />
    </BrowserRouter>
  );
/* 
  const text = screen.getByText();
  expect(text).toBeInTheDocument(); */
});
