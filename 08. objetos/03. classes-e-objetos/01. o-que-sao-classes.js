// CLASSES E OBJETOS
// Pode-se pensar que a classe é como uma "forma de bolo": o formato é padronizado, 
// mas os sabores e recheios podem variar para cada bolo criado.

/**
 * CONCEITOS CHAVE:
 * - Classe: O molde (guarda informações e comportamentos/funções).
 * - Instanciar: O ato de criar um objeto real a partir do molde usando a palavra 'new'.
 * - Constructor: Método padrão que "constrói" o objeto com os dados iniciais. É uma função.
 */

class FormaDeBolo {
    // O constructor é uma função obrigatória para receber os dados
    constructor(saborDaMassa, saborRecheio) {
        this.saborDaMassa = saborDaMassa; // 'this' refere-se ao bolo que está sendo criado agora
        this.saborRecheio = saborRecheio;
    }

    // Métodos (Ações): Não precisam da palavra 'function' dentro da classe
    escrever() {
        console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio}`);
    }

    assar() {
        console.log(`O bolo de ${this.saborDaMassa} já está assando!`);
    }
}

// INSTANCIANDO OBJETOS (Criando os bolos reais)
let boloFesta = new FormaDeBolo("chocolate", "Nutella");
let boloPremium = new FormaDeBolo("baunilha", "coco");

// ACESSO MANUAL (Atributos)
console.log(boloFesta.saborDaMassa); // Saída: chocolate

// ACESSO VIA MÉTODOS (Comportamentos)
boloFesta.escrever();   // Saída: Um delicioso bolo de chocolate com recheio de Nutella
boloPremium.escrever(); // Saída: Um delicioso bolo de baunilha com recheio de coco
boloFesta.assar();      // Saída: O bolo de chocolate já está assando!