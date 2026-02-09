class Hero {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    attack() {
        let power = ""; 

        if (this.type === "mago") {
            power = "magia";
        } else if (this.type === "guerreiro") {
            power = "espada";
        } else if (this.type === "monge") {
            power = "artes marciais";
        } else if (this.type === "ninja") {
            power = "shuriken";
        } else {
            power = "um ataque genérico";
        }

        console.log(`O ${this.type} atacou usando ${power}, o nome dele é ${this.name} e tem ${this.age} anos`);
    }
}

let personagemGuerreiro = new Hero("Davi", 23, "guerreiro");
let personagemNinja = new Hero("Thiago", 27, "ninja");

personagemGuerreiro.attack();
personagemNinja.attack();