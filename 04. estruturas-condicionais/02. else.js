// ELSE = SE NÃO
// Executado quando a condição do IF é falsa (false)
// O else é o "plano B". Ele só é executado quando o if falha.

let possuiOvos = false;
let itensComprados = " "; // vazia

if (possuiOvos) {
    itensComprados = "Leite"; 
    //vai dar falso aqui, então ele executará o else, se desse true ele não continuaria com o código

} else {
    console.log("Passou na sessão de congelados");
    itensComprados = "Lasanha congelada";
}

console.log("Item comprado: " + itensComprados);