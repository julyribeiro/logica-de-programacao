// PRECEDÊNCIA DE OPERADORES (Escopo)
// Assim como na matemática, o JavaScript resolve primeiro o que está entre parênteses.

// Exemplo 1: O parênteses faz o (5+5) ser resolvido ANTES da multiplicação.
let resultado = 2 * (5 + 5) - 10; 
// Passo a passo: 2 * 10 - 10 -> 20 - 10 = 10
console.log("Resultado 1: " + resultado);

// Exemplo 2: Parênteses aninhados (um dentro do outro)
let resultado2 = 2 * ((5 + 5) - 10);
// Passo a passo: 2 * (10 - 10) -> 2 * 0 = 0
console.log("Resultado 2: " + resultado2);