function Contanolimite(saque, saldo) {
    if (saque > saldo) {
        return 0; 
    }
    return saldo - saque;
}

module.exports = { Contanolimite };
