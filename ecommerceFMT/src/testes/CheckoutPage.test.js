 /** @jest-environment jsdom */
/*import React from "react";
import '@testing-library/jest-dom';
import { render } from "@testing-library/react";
import { Homepage } from "../pages/Homepage/Homepage";
import { AppContext } from "../context/Context";

const userContextValue = {
  products: [],
  cart: [],
  total: 0,
};

// Função de renderização personalizada que envolve o componente com o context provider
const customRender = (ui) => (
  <AppContext.Provider value={userContextValue}>{ui}</AppContext.Provider>
);

test("Apresenta pagina com produtos, barra de busca", () => {
  const { getByText } = render(
    <AppContext.Provider value={userContextValue}>
      <Homepage />
    </AppContext.Provider>
  );
});
 */