// DIFERENÇA ENTRE TRANSFERIR DADOS COM VARIÁVEIS SOLTAS VS. JSON

// Imagine que uma tela de sistema capturou os dados abaixo:
let name = "July";
let age = 28;
let products = ["Mouse 2xwm", "Teclado mecânico", "Monitor"];
let productsValues = [29.90, 129.99, 899.99];

// PROBLEMA: Sem JSON, precisamos passar MUITOS argumentos para a função.
// Se esquecermos a ordem de um deles, o código quebra ou gera dados errados.
generateInvoice(name, products, productsValues, age);

function generateInvoice(name, products, productsValues, age) {
    console.log("=== SISTEMA ANTIGO (SEM JSON) ===");
    console.log("O(A) comprador(a) é " + name);
    console.log("A idade é " + age + " anos");
    console.log("--------------------------");
    console.log("O produto é " + products[0]);
    console.log("O valor é R$ " + productsValues[0]);
}

/**
 * REFLEXÃO:
 * E se tivéssemos 50 produtos? Ou se precisássemos enviar o endereço, 
 * CPF e telefone? A função teria parâmetros infinitos. 
 * O JSON (visto no próximo arquivo) resolve isso "empacotando" tudo 
 * em um único objeto.
 */