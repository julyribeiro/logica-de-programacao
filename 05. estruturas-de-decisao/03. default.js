// O DEFAULT
// Funciona como o 'ELSE'. É a mensagem genérica caso nenhum dos casos anteriores seja atendido.

let fruta = "Morango";

switch (fruta) { 
    case "Laranja": 
        console.log("Suco de Laranja");
        break;

    case "Banana": 
        console.log("Vitamina de Banana");
        break;
    
    case "Maçã":
        console.log("Suco de Maçã");
        break;

    default: 
        console.log("Suco genérico (Fruta não encontrada)");
}