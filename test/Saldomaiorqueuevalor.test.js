const { deposito } = require('../arquivo__js/Saldomaiorqueumvalor.js');

test('após depositar 1000 em uma conta, o saldo fica maior que 500', () => {
  const saldoInicial = 0;
  const resultado = deposito(saldoInicial, 1000);
  expect(resultado).toBeGreaterThan(500);
});
