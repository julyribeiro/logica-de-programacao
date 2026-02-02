// MÚLTIPLAS POSSIBILIDADES
// É possível agrupar casos que levam à mesma ação e usar números ou strings.

let fruta = "Morango";

switch (fruta) {
    case "Laranja": 
        console.log("Suco de Laranja");
        break;

    // Agrupamento: Banana ou Morango resultam em Vitamina
    case "Banana":
    case "Morango": 
        console.log("Vitamina de " + fruta); // Exemplo de concatenação
        break;

    default:
        console.log("Suco genérico");
}

// Exemplo com números:
let códigoFruta = 1;

switch (códigoFruta) {
    case 1: 
        console.log("Suco de Laranja");
        break;
    case 2:
    case 3: 
        console.log("Vitamina");
        break;
    default:
        console.log("Opção inválida");
}