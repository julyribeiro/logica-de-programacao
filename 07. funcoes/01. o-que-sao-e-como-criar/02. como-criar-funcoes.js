// BOAS PRÁTICAS NA CRIAÇÃO
// 1. Nomes começam com Verbos (Ação) e usam camelCase.
// 2. Regra de Ouro: Uma função = Uma responsabilidade.
// 3. Evitar funções muito grandes, quebrar em várias funções
// 4. Manter sempre indentação do código

// Função que pega todos os dados
function getData() {
    console.log("Pegando dados de usuário");
    if (1 < 3) {
        console.log("Número encontrado");
    }
}

// Função que valida os dados
function checkValues() {
    console.log("Validando os dados de usuário");
}

// Função que armazena todos os dados
function sendToDataBase() {
    console.log("Armazenando os dados no Banco de Dados");
}

// FUNÇÃO PRINCIPAL (MAIN)
// Centraliza a ordem de execução do programa.
function mainSaveData() {
    getData();
    checkValues();
    sendToDataBase();
}

mainSaveData();