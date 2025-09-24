const { Contanolimite } = require('../arquivo__js/Contanolimite.js');

test('Quando saque é menor que o saldo, retorna saldo - saque', () => {
    const saldoInicial = 100;
    const saque = 95;

    const resultado = Contanolimite(saque, saldoInicial);

    expect(resultado).toBe(5); 
});

test('Quando saque é maior que o saldo, deve retornar 0', () => {
    const saldoInicial = 100;
    const saque = 150;

    const resultado = Contanolimite(saque, saldoInicial);

    expect(resultado).toBe(0);
});
