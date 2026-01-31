// Exemplo: Cálculo de taxa de 2% sobre um produto
let precoProduto = 100.99; // IMPORTANTE: Em programação usamos ponto (.) e não vírgula (,)
let taxa = 2;

// Cálculo da taxa: (Preço * Taxa) / 100
let valorDaTaxa = (precoProduto * taxa) / 100;
let resultadoFinal = precoProduto + valorDaTaxa;

// .toFixed(2) limita as casas decimais para parecer dinheiro
console.log("O valor com taxa inclusa é R$ " + resultadoFinal.toFixed(2));

// ------------------------------------------------------------------ //

// Multiplicador e multiplicando
let multiplicador = 4;
let multiplicando = 12;
let produto = multiplicador * multiplicando;

console.log("O resultado da multiplicação (Produto) é: " + produto);