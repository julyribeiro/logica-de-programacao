// Métodos (Methods) são ações que podem ser realizadas nos vetores.
// No VS Code: Caixinhas Azuis = Métodos (Ações) | Caixinhas Roxas = Propriedades (Características).

let nomePessoas = ["Gabriela", "Fernanda", "João", "Thiago"];
console.log("Lista original: " + nomePessoas);

// .shift() -> Remove o PRIMEIRO elemento da lista
nomePessoas.shift();

// .pop() -> Remove o ÚLTIMO elemento da lista
nomePessoas.pop();

// Resultado após as exclusões
console.log("Lista modificada: " + nomePessoas); 

// Dica: Existem diversos outros métodos na documentação oficial (MDN Web Docs).