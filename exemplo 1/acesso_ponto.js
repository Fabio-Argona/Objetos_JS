const cliente= {
    nome:"Andre",
    idade:32,
    cpf:"11122233345",
    email: "andre@dominio.com"
};

console.log(`o nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade} anos.`);

console.log(`os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0,3)}`);