/** @jest-environment jsdom */
import React from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { FormContact } from "../components/FormContact/FormContact";

test("FormContact componente", () => {
  const mockTest = jest.fn();
  const { getByPlaceholderText, getByText } = render(<FormContact onSubmit={mockTest}/>);

  const firstName = getByPlaceholderText("Digite seu nome");
  const lastName = getByPlaceholderText("Digite seu sobrenome");
  const email = getByPlaceholderText("Digite seu e-mail");
  const submitBtn = getByText("Enviar");

  fireEvent.change(firstName, { target: { value: "Branca" } });
  fireEvent.change(lastName, { target: { value: "Thunder" } });
  fireEvent.change(email, { target: { value: "email@email.com" } });
  fireEvent.click(submitBtn);

});
