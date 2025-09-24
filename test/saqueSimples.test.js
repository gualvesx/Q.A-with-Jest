const { saqueSimples } = require('../arquivo__js/saqueSimples.js');


test('200 - 50 retorna 150', () => {
  expect(saqueSimples(200, 50)).toBe(150);
});
