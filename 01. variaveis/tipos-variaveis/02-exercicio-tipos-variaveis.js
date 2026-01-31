// Dados de usuário
// Objetivo: Praticar a escolha correta dos tipos de dados.

// Campos: nome, idade, número de telefone, cpf, endereço, se tem benefício
let nomePessoa = "Joana";
let idadePessoa = 30;
let numeroTelefone = "11-00000-0000";
let cpf = "xxx.xxx.xxx-xx";
let endereco = "Rua da Joana, 123";
let recebeBeneficio = true;

// DICA IMPORTANTE: 
// É ideal que números de telefone e CPF sejam tratados como texto (string), 
// pois não realizamos cálculos matemáticos com eles e podem conter símbolos (traços/pontos).

// Saída de dados formatada
console.log(
    "O nome dela é " + nomePessoa + 
    ", ela tem " + idadePessoa + " anos e mora na " + endereco + ". " + 
    "O status do benefício é: " + recebeBeneficio + "."
);