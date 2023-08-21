/** @jest-environment jsdom */
import React from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { FormContact } from "../components/FormContact/FormContact";

test("FormContact componente", () => {
  const mockTest = jest.fn();
  const { getByPlaceholderText, getByText } = render(<FormContact  handleSubmit={mockTest}/>);

  const firstName = getByPlaceholderText("Digite seu nome");
  const lastName = getByPlaceholderText("Digite seu sobrenome");
  const email = getByPlaceholderText("Digite seu e-mail");
  const submitBtn = getByText("Enviar");

  fireEvent.change(firstName, { target: { value: "Branca" } });
  fireEvent.change(lastName, { target: { value: "Thunder" } });
  fireEvent.change(email, { target: { value: "email@email.com" } });
  fireEvent.click(submitBtn);

  fireEvent.click(getByTestId("id"));
  expect(mockTest).toHaveBeenCalled();

  const clickEvent = new MouseEvent('click');
  Object.assign(clickEvent, {preventDefault: jest.fn()});

  fireEvent(button, clickEvent);

  expect(clickEvent.preventDefault).toHaveBeenCalledTimes(1);

});
