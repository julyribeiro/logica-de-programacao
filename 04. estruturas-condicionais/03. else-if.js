//O else if serve para múltiplas verificações em cascata.
// ELSE IF = Opções intermediárias
// SE não for a primeira, verifique a segunda. SE não for nenhuma, cai no ELSE final.

// Exemplo nível de fome das pessoas
let nivelDeFome = 1;

if (nivelDeFome === 1) {
    console.log("Pouca fome");
} else if (nivelDeFome === 2) {
    console.log("Muita fome");
} else {
    console.log("Muitíssima fome");
}
