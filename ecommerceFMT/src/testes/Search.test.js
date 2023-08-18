/** @jest-environment jsdom */
import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import { BrowserRouter } from "react-router-dom";
import Search from "../components/Search/Search";

test("Footer componente", () => {
  render(
    <BrowserRouter>
      <Search />
    </BrowserRouter>
  );
/* 
  const text = screen.getByText();
  expect(text).toBeInTheDocument(); */
});
