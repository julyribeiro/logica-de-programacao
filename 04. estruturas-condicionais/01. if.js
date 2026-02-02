// O IF é o porteiro. Se a condição for true, ele abre a porta (executa o bloco {}).

// Exemplo 1:
let ehLigado = false

if(ehLigado){
    console.log ("Executou o comando")
} // não retornara nada porque valor da variável é false


// Exemplo 2:
if (1 === 1) {
    console.log ("Executou o comando")
} // retornara o texto porque valor da variável é true


// Exemplo 3: Compra no supermercado
// Regra: Só comprar leite SE possuir ovos
let possuiOvos = true; 
let itensComprados = ""; // vazia

if (possuiOvos) {
    itensComprados = "Leite";
}

console.log("Item comprado: " + itensComprados); // fora do escopo
