// DO WHILE (Faça enquanto)
// Primeiro executa o código, depois verifica a condição.
// Isso garante que o código rode PELO MENOS UMA VEZ.

let contador = 0;

do {
    // Este bloco será executado antes mesmo de olhar a regra do while
    console.log("Olá - Executado pelo menos uma vez");
    contador++; 
} while (contador < 3);

// Exemplo prático: Seria o mesmo que em um jogo onde você joga o dado uma vez 
// e só depois verifica se quer continuar jogando.