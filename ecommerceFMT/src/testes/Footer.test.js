/** @jest-environment jsdom */
import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import { BrowserRouter } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";

test("Footer componente", () => {
  render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  );
/* 
  const text = screen.getByText();
  expect(text).toBeInTheDocument(); */
});
