// NOT ( ! ) - Inverte o valor booleano (nega uma afirmação).

let tempo = "chuva";
let resultado = tempo !== "chuva"; // Isso é false, pois está chovendo.

console.log("Resultado original: " + resultado);      // false
console.log("Com 1 negação (!): " + !resultado);       // true (Inverteu)
console.log("Com 2 negações (!!): " + !!resultado);    // false (Inverteu e voltou ao original)

// --- Exemplo Complexo ---
let tempo1 = "chuva";
let horario = 8;

// A lógica interna diz: (Não é chuva? [F]) E (Horário > 6? [V]) -> Resultado: [F]
// O "!" lá fora inverte esse [F] para [V]
let resultado1 = !((tempo1 !== "chuva") && (horario > 6));

console.log("Resultado do cenário complexo: " + resultado1);