// jest.setup.js
import '@testing-library/jest-dom/extend-expect'; // Importa extensões de expect do Testing Library
import { server } from './mocks/server'; // Configuração de servidor de mock usando MSW (exemplo)

// Configurações globais, mocks ou ações de setup
beforeAll(() => {
  // Configuração global antes dos testes
  server.listen(); // Inicia o servidor de mock
});

afterAll(() => {
  // Limpeza global após os testes
  server.close(); // Encerra o servidor de mock
});
