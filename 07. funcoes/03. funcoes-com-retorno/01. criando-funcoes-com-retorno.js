// FUNÇÕES COM RETORNO (RETURN)
// O 'return' permite que o resultado da função seja enviado para fora do seu escopo.

// Atribuindo o resultado de uma função a uma variável:
let resultado = soma(5, 10);

function soma(numA, numB) {
    let somatorio = numA + numB;
    return somatorio; // A função "morre" aqui e entrega o valor
}

console.log("O resultado dessa função é: " + resultado);

// Importante: O return só pode retornar UM valor (ou um objeto/vetor contendo vários).