/** @jest-environment jsdom */
import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import { BrowserRouter } from "react-router-dom";
import { CardContactSubmit } from "../components/CardContactSubmit/CardContactSubmit";

test("CardContactSubmit componente", () => {
  render(
  
      <CardContactSubmit lastName="" firstName="" email="" message="" />
  
  );

});
