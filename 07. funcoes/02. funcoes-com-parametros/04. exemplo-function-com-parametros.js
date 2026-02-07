// EXERCÍCIO PRÁTICO: STRING DE CONEXÃO
// Utilizando Template Literals (Crase ` ` e ${ }) para facilitar a leitura.

function createStringConnection(databaseName, user, pass) {
    // A interpolação torna o código muito mais limpo que usar o sinal de +
    console.log(`connect:DBCONNECT;user=${user};pass=${pass};initial_database=${databaseName}`);
}

createStringConnection("db_products", "felipe", "9876");