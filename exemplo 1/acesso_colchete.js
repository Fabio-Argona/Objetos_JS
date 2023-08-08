const cliente= {
    nome:"Andre",
    idade:32,
    cpf:"11122233345",
    email: "andre@dominio.com"
};

console.log(`o nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos.`);

const chaves = ["nome", "idade", "cpf", "email", "Altura"];

chaves.forEach((chave)=>{
    console.log(`A Chave ${chave} tem valor ${cliente[chave]}`);

});