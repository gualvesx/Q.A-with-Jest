function transferenciaentrecontas(contaA, contaB, valor) {
    contaA -= valor;
    contaB += valor;
    return { contaA, contaB };
  }
  
  module.exports = { transferenciaentrecontas };
  