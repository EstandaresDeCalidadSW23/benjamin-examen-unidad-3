const saludo = require("../src/saludo");

test("Benja", function () {
  expect(saludo("Benja")).toEqual("Hola Benja!");
});

test("Juan", function () {
  expect(saludo("Juan")).toEqual("Hola Juan!");
});
