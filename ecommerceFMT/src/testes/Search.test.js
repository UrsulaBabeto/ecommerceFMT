/** @jest-environment jsdom */
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Search from "../components/Search/Search";

test("Search componente", () => {
  const mockTest = jest.fn();
  render(<Search />);
  expect(
    screen.findByRole("datalist", { name: "datalistOptions" })
  ).toBeInTheDocument();

  const inputSearch = getByPlaceholderText("Digite para procurar...");
  fireEvent.change(inputSearch, { target: { value: "teste" } });
  expect(mockTest).toHaveBeenCalledWith({
    inputSearch: "teste"
  });
});
