// Mensagens de saída comentadas para referência:
// console.log("Pokemon Go diz: tem um novo pokemon na região");
// console.log("Pokemon Go diz: Você foi derrotado por um líder");

// Criação de constante para armazenar informação repetitiva (padrão que não muda)
const notificacao = "Pokemon Go diz: ";

// Mensagem de saída com o uso da constante
console.log(notificacao + "Tem um novo pokemon na região");
console.log(notificacao + "Você foi derrotado por um líder");

// Diferença de Constante e Variável:
// - let: permite a mudança do valor no decorrer do código; ele pode variar.
// - const: não permite alteração do valor após definido; ele é constante.