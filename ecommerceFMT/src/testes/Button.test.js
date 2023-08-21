/** @jest-environment jsdom */
import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { BrowserRouter } from "react-router-dom";
import { ButtonDefault } from "../components/ButtonDefault/ButtonDefault";

test("Botao componente", () => {
  render(
    <BrowserRouter>
      <ButtonDefault text='ola' />
    </BrowserRouter>
  );

  expect(screen.getByRole("button")).toHaveTextContent()
});
