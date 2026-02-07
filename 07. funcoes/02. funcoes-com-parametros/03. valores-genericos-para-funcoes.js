// VALORES PADRÃO (GENÉRICOS)
// Se esquecermos um argumento, ele retorna 'undefined'. 
// Para evitar isso, atribuímos um valor padrão no parâmetro.

// Boa prática: Deixe os parâmetros com valor padrão por último.
function torrar(pao, valor, nome = "Cliente") {
    console.log("Torrada feita com " + pao);
    console.log("Ela é um pedido de " + nome);
    console.log("O valor total é " + valor);
}

// Aqui o 'nome' assumirá o valor "Cliente" (padrão)
torrar("pão de forma", 10.90); 

// Aqui o nome "July" predomina sobre o padrão
torrar("pão integral", 12.50, "July");