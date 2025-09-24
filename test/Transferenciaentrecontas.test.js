const { transferenciaentrecontas } = require('../arquivo__js/Transferenciaentrecontas.js');


test('transferir 100 de contaA 500 para contaB 200', () => {
  const resultado = transferenciaentrecontas(500, 200, 100);
  expect(resultado.contaA).toBe(400);
  expect(resultado.contaB).toBe(300);
});
