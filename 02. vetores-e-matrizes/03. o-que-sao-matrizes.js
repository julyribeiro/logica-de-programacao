// Matrizes: “Armário com gavetas dentro de gavetas”.
// É um "vetor de vetores" (estrutura bidimensional - X e Y).
// Útil para: Tabelas, planilhas e tabuleiros.

let nomesPessoas = [
    ["Gabriela", "Feminino", "Nível 10"], // Linha 0
    ["Fernanda", "Feminino", "Nível 15"], // Linha 1
    ["João", "Masculino", "Nível 17"],    // Linha 2
    ["Thiago", "Masculino", "Nível 13"]    // Linha 3
];

// OBSERVAÇÃO:
// Para consultar um item dentro do elemento, ou seja, alguma informação da linha, deve-se informar a posição do elemento e depois a posição do item

// Consultando uma linha inteira
console.log(nomesPessoas[0]); // Retorna o array completo da Gabriela

// Consultando um item específico (Linha e depois Coluna)
// Ex: Gênero da Gabriela (Linha 0, Coluna 1)
console.log("O gênero da Gabriela é: " + nomesPessoas[0][1]);

// Ex: Nome do Thiago (Linha 3, Coluna 0)
console.log("O nome do Thiago é: " + nomesPessoas[3][0]);

// Ex: Nível da Fernanda (Linha 1, Coluna 2)
console.log("A Fernanda está no " + nomesPessoas[1][2]);

