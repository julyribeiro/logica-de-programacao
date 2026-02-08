// O QUE É UM OBJETO? 
// Representação de algo do mundo real.
// Possui Atributos (características) e Métodos (ações).

let pessoa = {
    nome: "July",
    idade: 25,
    falar: function() {
        console.log("Olá!");
    }
};

console.log(pessoa.nome); // Acessando atributo
pessoa.falar();           // Chamando método

// =========================================
// CLASSES E CONSTRUTOR
// Classe = Molde / Objeto = Criado a partir do molde
// Constructor = método que roda quando o objeto é criado, define os valores iniciais no momento do 'new'

class Heroi {
    constructor(nome, vida) {
        this.nome = nome; // 'this' refere-se ao herói que está sendo criado
        this.vida = vida;
    }

    atacar() {
        console.log(`${this.nome} está atacando!`);
    }
}

let heroi1 = new Heroi("July", 100); // Instanciando um objeto
heroi1.atacar();

// Exemplo Prático: Carro
class Carro {
    constructor(marca, cor) {
        this.marca = marca;
        this.cor = cor;
    }

    dirigir() {
        console.log(`O ${this.marca} ${this.cor} está andando...`);
    }
}

let meuCarro = new Carro("Fiat", "Vermelho");
meuCarro.dirigir();
