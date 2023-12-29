const calculadora = require("../models/calculadora.js");

test("somar 2 + 2 deve ser igual a 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});
