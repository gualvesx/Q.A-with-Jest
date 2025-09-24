const { saque } = require('../arquivo__js/negativoproibido.js'); 

test('saldo após saque maior que o saldo é negativo', () => {
  const resultado = saque(100, 150);
  expect(resultado).toBeLessThan(0);
});