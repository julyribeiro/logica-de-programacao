// TRABALHANDO COM JSON NA PRÁTICA

// Exemplo: Simulação de captura de dados de uma interface para envio ao Banco de Dados.

// O JSON facilita o agrupamento de informações complexas em um único objeto.
let invoice = {
    // Chave (identificador) : Valor
    name: "July",
    age: 28,
    products: {
        0: ["Mouse 2xwm", 29.90],
        1: ["Teclado mecânico", 129.99],
        2: ["Monitor", 899.99],
        3: ["TV 100 polegadas", 10000.90]
    },
    taxes: 80.90 
}; // Tudo dentro das chaves {} pertence ao escopo deste objeto JSON.

// Formas de acessar as informações:
console.log(invoice);           // Exibe o objeto completo.
console.log(invoice.name);      // Acessa apenas a propriedade "name".
console.log(invoice.products);  // Acessa apenas a lista de produtos.

// Chamada da função passando o objeto completo como argumento
generateInvoice(invoice);

function generateInvoice(invoice) {
    console.log(`O(A) comprador(a) é ${invoice.name}`);
    console.log(`A idade é ${invoice.age} anos`);
    console.log("--------------------------");

    /**
     * PROCESSO DE DESESTRUTURAÇÃO E REPETIÇÃO:
     * 
     * Utilizamos o "for...in" para percorrer cada propriedade dentro de 'invoice.products'.
     * 
     * O 'index' assumirá automaticamente os valores (0, 1, 2, 3...) de cada item, ou seja, 
     * primeiro o index vai valer 0, depois 1 e depois 2
     * 
     * Quando utilizado for in nao precisa indicar o valor inicial do contador porque ele vai
     * fazer para cada um dos itens que existe dentro da lista
     */
    for (let index in invoice.products) {
        // Criamos duas variáveis (productName e productPrice) extraídas do array atual
        let [productName, productPrice] = invoice.products[index];
        
        console.log(` - ${productName}: R$ ${productPrice}`);
    }
}