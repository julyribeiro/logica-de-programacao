// WHILE (Enquanto)
// Primeiro verifica a condição, depois executa. 
// Ideal para quando NÃO sabemos quantas vezes o loop vai rodar (ex: até o usuário clicar em sair).

let contador = 0;

// Enquanto a condição for verdadeira, o bloco é executado.
while (contador < 3) {
    console.log("Olá");
    
    // IMPORTANTE: Incrementamos para evitar o LOOP INFINITO.
    contador++; 
}

/**
 * Diferença do FOR: 
 * No FOR, a variável de controle nasce e morre dentro do loop. 
 * No WHILE, geralmente usamos uma variável que já existe fora dele.
 */