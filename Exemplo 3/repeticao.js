const cliente = {
    nome:"Joaõ",
    idade:24,
    email:"joao@firma.com",
    telefone:["11555555550","11444444440"],
    
};
cliente.enderecos = [
    {
      rua:"Rua Joseph Climber",
      mumero:1337,
      apartamento: true,
      complemento: "ap 934"
    },
];

for(let chave in cliente){
    let tipo = typeof cliente[chave];
    if (tipo !== "object" && tipo !== "function"){
        console.log(`a chave ${chave} tem o valor ${cliente[chave]}`);

    }
};
