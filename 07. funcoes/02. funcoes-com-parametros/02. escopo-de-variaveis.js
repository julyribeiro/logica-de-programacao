// ESCOPO E MÚLTIPLOS PARÂMETROS
// Podemos passar quantos parâmetros forem necessários, separados por vírgula.

function torrar(pao, nome) {
    console.log("Torrada feita com " + pao);
    console.log("Ela é um pedido de " + nome);
}

// A ordem importa! O primeiro valor vai para o primeiro parâmetro.
torrar("pão de forma", "July");
torrar("pão integral", "Ana");

// Lembre-se: 'let' respeita o escopo das chaves { }, 'var' é global (evitar o uso, pois não é boa prática).