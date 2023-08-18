
/** @jest-environment jsdom */
import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import { BrowserRouter } from "react-router-dom";
import { FormContact } from "../components/FormContact/FormContact";

test("Footer componente", () => {
  render(
    <BrowserRouter>
      <FormContact />
    </BrowserRouter>
  );
/* 
  const text = screen.getByText();
  expect(text).toBeInTheDocument(); */
});
