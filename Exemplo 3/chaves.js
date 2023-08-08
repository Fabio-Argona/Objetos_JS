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

const chavesDoObjeto = Object.keys(cliente);
console.log(chavesDoObjeto);

if(!chavesDoObjeto.includes("enderecos")){
    console.log("Erro. É necessário ter um endereço cadastrado.");

}