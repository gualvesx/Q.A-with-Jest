const { ContaZerada } = require('../arquivo__js/ContaZerada.js');

test('Exercício 7: Conta Zerada - saque igual ao saldo deve deixar o saldo menor ou igual a 0', () => {
    const saldoInicial = 300;
    const saque = 300;

    const resultado = ContaZerada(saque, saldoInicial);

    expect(resultado).toBeLessThanOrEqual(0);
});

test('Saque menor que saldo deve retornar saldo - saque', () => {
    const saldoInicial = 300;
    const saque = 100;

    const resultado = ContaZerada(saque, saldoInicial);

    expect(resultado).toBe(200);
});

test('Saque maior que saldo deve retornar 0', () => {
    const saldoInicial = 300;
    const saque = 400;

    const resultado = ContaZerada(saque, saldoInicial);

    expect(resultado).toBe(0);
});
