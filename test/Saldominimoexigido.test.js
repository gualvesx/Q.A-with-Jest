const { operacao } = require('../arquivo__js/Saldominimoexigido.js');


test('após uma operação, o saldo da conta é maior ou igual a 50', () => {
  const saldoInicial = 100;
  const resultado = operacao(saldoInicial, 40); 
  expect(resultado).toBeGreaterThanOrEqual(50);
});