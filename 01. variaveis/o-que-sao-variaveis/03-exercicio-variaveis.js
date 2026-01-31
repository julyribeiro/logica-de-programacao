let poteCafe = "Café Pilão";
let poteAcucar = "Açúcar Cristal";
let poteBiscoito = "Biscoito Maizena";

// Criação de constante para frase que sempre vai se repetir:
const mensagemCozinha = "Na cozinha tem: ";

// Chamada sem uso da constante e sem alteração do valor da variável
console.log("Na cozinha tem: " + poteCafe + ", " + poteAcucar + ", " + poteBiscoito);

// Mudança de valor da variável (Reatribuição)
poteCafe = "Café 3 corações";

// Nova chamada para ver a mudança da variável usando a constante mensagemCozinha
console.log(mensagemCozinha + poteCafe + ", " + poteAcucar + ", " + poteBiscoito);