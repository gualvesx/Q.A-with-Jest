

const { calcularJuros } = require('../arquivo__js/jurosSimples.js');

test('0.1 + 0.2 é próximo de 0.3', () => {
  const resultado = calcularJuros(0.1, 0.2);
  expect(resultado).toBeCloseTo(0.3, 5); 
});
