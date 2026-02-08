// EXEMPLO: PEGAR O PRIMEIRO NOME
// Boas práticas: Nomes em inglês, parâmetros claros e camelCase.

let userName = getFirstName("July Ribeiro");
console.log("Seja bem vindo(a) " + userName);

function getFirstName(name) {
    // split: quebra o texto em um vetor (array) usando o espaço como corte
    // "July Ribeiro" -> ["July", "Ribeiro"]
    let firstName = name.split(" ")[0]; 
    return firstName;
}

// Exemplo com delimitador dinâmico e valor padrão
let userName1 = getFirstName1("Julia-Ribeiro", "-");

// splitChar tem o espaço " " como valor padrão caso não seja informado
function getFirstName1(name, splitChar = " ") { 
    let firstName = name.split(splitChar)[0]; 
    return firstName;
}

console.log("Seja bem vindo(a) " + userName1);