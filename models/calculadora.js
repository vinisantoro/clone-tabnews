function somar(numero1, numero2) {
  if (typeof (numero1 || numero2) != "number") {
    return "Erro";
  }
  return numero1 + numero2;
}

exports.somar = somar;
