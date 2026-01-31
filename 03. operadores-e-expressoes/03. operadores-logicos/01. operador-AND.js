// AND ( && ) - Ambas as condições devem ser verdadeiras.
// É como se fizéssemos duas perguntas: se UMA for falsa, o resultado total é FALSO.

// Exemplo 1: Requisitos para viagem internacional
let idade = 18;
let vistoVerificado = true;
let podeViajar = (idade >= 18) && (vistoVerificado === true);

console.log("Pode viajar? " + podeViajar);

// Exemplo 2: Condição para passar de nível em um jogo
let moedasColetadas = 100;
let item = "estrela";

// Só passa se tiver 100 moedas E a estrela
let resultadoNivel = (moedasColetadas >= 100) && (item === "estrela");
console.log("Passou de nível? " + resultadoNivel);