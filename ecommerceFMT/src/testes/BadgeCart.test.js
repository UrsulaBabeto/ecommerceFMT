/** @jest-environment jsdom */
import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import { BrowserRouter } from "react-router-dom";
import { BadgeCart } from "../components/BadgeCart/BadgeCart";

test("Footer componente", () => {
  render(
    <BrowserRouter>
      <BadgeCart />
    </BrowserRouter>
  );
/* 
  const text = screen.getByText();
  expect(text).toBeInTheDocument(); */
});
