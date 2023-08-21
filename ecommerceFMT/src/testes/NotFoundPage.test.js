/** @jest-environment jsdom */
import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage";

test("Pagina 404", () => {
  const notFoundIcon = render(<NotFoundPage />);

  const text = screen.getByText("404 Página não encontrada!");
  expect(text).toBeInTheDocument();

});
