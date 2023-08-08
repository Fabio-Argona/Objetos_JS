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
]

cliente.enderecos.push({
    rua: "Rua Joseph Ladder",
    numero: 404,
    apartamento: false,
})

const listaApenasApartamentos = cliente.enderecos.filter(
    (endereco)=> endereco.apartamento === true
);

console.log(listaApenasApartamentos);