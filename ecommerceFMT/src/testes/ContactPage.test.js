/** @jest-environment jsdom */
import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { FormContact } from "../components/FormContact";

test("Apresenta pagina com formulário de contato", () => {
  const testFormContact = render(<FormContact />);
});
