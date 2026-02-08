// Desafio - Criar uma classe para um personagem

class Personagem {
    constructor(nome, xp, nivel, poder) {
        this.nome = nome;
        this.xp = xp;
        this.nivel = nivel;
        this.poder = poder;
    }

    dadosPersonagem() {
        console.log(`O nome do personagem é ${this.nome}, ele tem ${this.xp} de XP, está no nível ${this.nivel} e tem o poder ${this.poder}`);
    }

    pular() {
        console.log(`O personagem ${this.nome} pulou`);
    }

    atacar() {
        console.log(`O personagem ${this.nome} atacou usando o poder ${this.poder}`);
    }

    esquivar() {
        console.log(`O personagem ${this.nome} se esquivou!`); // Ajustado para fazer sentido com o método
    }

    andar() {
        console.log(`O personagem ${this.nome} está andando`);
    }
}

let personagemFogo = new Personagem("Fire Girl", 120, 25, "Fogo");

console.log(personagemFogo.nome);
console.log(personagemFogo.xp);
console.log(personagemFogo.nivel);
console.log(personagemFogo.poder);
personagemFogo.dadosPersonagem();
personagemFogo.atacar();
personagemFogo.esquivar();
personagemFogo.andar();