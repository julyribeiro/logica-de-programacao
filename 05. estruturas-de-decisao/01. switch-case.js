// ESTRUTURA DE DECISÃO: SWITCH
// Pode ser usado em paralelo ao if/else quando temos muitas opções fixas.

let fruta = "Banana";

switch (fruta) { 
    // Caso 1
    case "Laranja": 
        console.log("Suco de Laranja");

    // Caso 2
    case "Banana": 
        console.log("Vitamina de Banana");
    
    // Caso 3
    case "Maçã":
        console.log("Suco de Maçã");
}

// ATENÇÃO: Sem o 'break', o código executa o caso correto 
// e continua executando todos os abaixo dele por "cascata".