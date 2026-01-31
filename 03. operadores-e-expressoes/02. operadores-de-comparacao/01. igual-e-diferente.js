// Diferenças entre Atribuição e Comparação:
// =   é atribuição (guarda um valor)
// ==  é para comparar o VALOR (não checa o tipo)
// === é para comparar o VALOR e o TIPO (estritamente igual)
// !== é o operador de "Diferente de?" (estritamente diferente)

// COMPARAÇÃO DE VALOR (Retorna true pois ambos valem 1)
let numero = "1";
console.log(numero == 1); 

// COMPARAÇÃO DE VALOR E TIPO (Recomendado pela boa prática)
let marca = "Apple";
console.log(marca === "Apple");

let marca2 = "Apple";
console.log(marca2 !== "Samsung"); // Retorna true, pois Apple é diferente de Samsung

// É possível guardar o resultado de uma comparação dentro de uma variável (boolean: true/false)
let marca3 = "Apple";
let resultado = marca3 === "Samsung";
console.log(resultado);

// Exemplo: CPF bloqueado
let cpfBloqueado = "123.456.789-10";
let cpfUsuario = "109.876.543-21";
let ehCpfBloqueado = cpfUsuario === cpfBloqueado;

console.log("O usuário está barrado? " + ehCpfBloqueado);

// Exemplo: Acesso permitido
let cpfPermitido = "123.456.789-10";
let cpfDoUsuario = "109.876.543-21";
let ehBloqueado = cpfDoUsuario !== cpfPermitido;

console.log("É um usuário inválido? " + ehBloqueado);

// CUIDADO: Case Sensitive
// O resultado abaixo é false, pois letras maiúsculas e minúsculas são diferentes para o código.
let texto = "july";
console.log(texto === "July");