// FUNÇÃO = AÇÃO
// Programamos uma função para executar uma tarefa específica e isolada.
//Funções criam um pequeno mecanismo inteligente para processar algo no meio da aplicação

function teste() {
    console.log("Realizando um teste"); // Escopo da função
}

// Para a ação acontecer, precisamos CHAMAR a função:
teste();

// Funções podem chamar outras funções (Modularização)
function teste2() {
    console.log("Aqui é o teste dois");
    console.log("Finalizado");
    teste(); // Chamando a primeira função aqui dentro
}

teste2();