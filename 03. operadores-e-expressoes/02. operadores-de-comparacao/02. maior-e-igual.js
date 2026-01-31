// OPERADORES DE GRANDEZA (Relacionais)

// MAIOR OU IGUAL (>=)
let idadeMinima = 18;
let idadeUsuario = 18;

let idadePermitidaValida = idadeUsuario >= idadeMinima;
console.log("O usuário tem a idade mínima? " + idadePermitidaValida);

// MENOR (<)
let idadeDeCorte = 50;
let idadeDoUsuario = 45;

// Se a idade do usuário for menor que a de corte, ele não é terceira idade neste exemplo
let resultadoEhTerceiraIdade = idadeDoUsuario > idadeDeCorte; 
console.log("O usuário é considerado terceira idade? " + resultadoEhTerceiraIdade);

// MENOR OU IGUAL (<=)
let valorVoucher = 100;
let valorCompra = 80;
let compraComDesconto = valorCompra <= valorVoucher;
console.log("O voucher cobre o valor total? " + compraComDesconto);