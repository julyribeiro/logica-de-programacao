// FUNÇÕES COM PARÂMETROS
// Recebem uma "receita" fixa, mas permitem variar os "ingredientes" (valores).
// O parâmetro vira uma variável local, disponível apenas dentro do escopo da função.

// Exemplo 1 - Soma de valores
function somar(a, b) {
    let resultado = a + b;
    console.log("O valor da soma é: " + resultado);
}

// Ao chamar, passamos os argumentos (os valores reais)
somar(2, 5); 
somar(10, 20);