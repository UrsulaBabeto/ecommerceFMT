 /** @jest-environment jsdom */
import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import { BrowserRouter } from "react-router-dom";
import { BadgeCart } from "../components/BadgeCart/BadgeCart";

const userContextValue = {
  products: [],
  cart: [1,2,3,4,5],
  total: 5,
};

const customRender = (ui) => (
  <AppContext.Provider value={userContextValue}>{ui}</AppContext.Provider>
);

test("Badge Cart component", () => {
 render(
    <AppContext.Provider value={userContextValue}>
      <BadgeCart />
    </AppContext.Provider>
 )

  const badgeElement = getByText("5"); 
  expect(badgeElement).toBeInTheDocument();
});
 