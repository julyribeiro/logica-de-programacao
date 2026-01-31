let idade = 30;
console.log("Valor da minha variável é " + idade);

// ADIÇÃO: Somando valores à variável
idade = 30 + 6;
console.log("Após a adição, o valor é: " + idade);

// SUBTRAÇÃO: Diminuindo valores da variável
idade = 30 - 6;
console.log("Após a subtração, o valor é: " + idade);

// EXEMPLO PRÁTICO 1: Extraindo final de IDs padronizados (ex: remover o milhar)
// Uma loja que tem IDs de produtos já padronizados com 1000, mas é necessário somente os dois últimos números
let codigoDoProduto = 1023;
let codigoExato = codigoDoProduto - 1000;
console.log("O código simplificado do produto é: " + codigoExato);

// EXEMPLO PRÁTICO 2: Cálculo direto dentro de Template Literals (${})
// Calculando valores por meio das variáveis
let primeiroNumero = 1023;
let segundoNumero = 23;
console.log(`Resultado do cálculo direto: ${primeiroNumero - segundoNumero}`);