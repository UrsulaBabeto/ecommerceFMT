TotalCart
/** @jest-environment jsdom */
import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import { BrowserRouter } from "react-router-dom";
import TotalCart from "../components/TotalCart/TotalCart";


test("TotalCart ", () => {
  render(
    <BrowserRouter>
      <TotalCart total={[{product:"", img:"", price:0}]} />
    </BrowserRouter>
  );
/* 
  const text = screen.getByText();
  expect(text).toBeInTheDocument(); */
});
