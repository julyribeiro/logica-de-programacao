// OR ( || ) - Pelo menos uma das condições deve ser verdadeira.
// Se uma das perguntas for "SIM", o resultado final é VERDADEIRO.

// Exemplo: O personagem só pode sair se não estiver chovendo OU se tiver um guarda-chuva
let tempo = "sol";
let item = "guarda chuva";

let podeSair = (tempo !== "chuva") || (item === "guarda chuva");

console.log("O personagem pode sair? " + podeSair);