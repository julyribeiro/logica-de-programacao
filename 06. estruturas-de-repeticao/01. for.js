// FOR (Para)
// Usado quando sabemos exatamente quantas vezes o código deve se repetir.

// Exemplo 1 - Contar até 3
// Sintaxe: (inicialização ; condição ; incremento)
for (let i = 0; i < 4; i++) {
    console.log(i); 
    console.log("Aumentando o contador");
} 

/**
 * Explicação do raciocínio:
 * 1. Criamos a variável 'i' (iterador) começando em 0.
 * 2. O loop continua enquanto 'i' for menor que 4.
 * 3. A cada volta, somamos 1 ao 'i' (i++).
 * 4. Ele contou 4 vezes (0, 1, 2, 3) e parou quando chegou no 4.
 */

// Exemplo 2 - Recuperação de Vida
let pontosDeVida = 0;

for (let i = 0; i < 10; i++) {
    pontosDeVida += 1; // Mesma coisa que: pontosDeVida = pontosDeVida + 1
    console.log("Tomou uma poção mágica " + i); 
}

console.log(pontosDeVida + " Totais");