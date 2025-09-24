const { depositarSaldoinicial } = require('../arquivo__js/depositoSimples');




test('depositar 100 com saldo 0 retorna 100', () => {
  expect(depositarSaldoinicial(100, 0)).toBe(100);
});


