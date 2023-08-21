
/** @jest-environment jsdom */
 import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import CartProduct from "../components/CartProduct/CartProduct";

test("CartProduct componente", () => {
  render(
    
      <CartProduct product=""/>
  
  );
});
