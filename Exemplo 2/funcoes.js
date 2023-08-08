const cliente = {
    nome:"Joaõ",
    idade:24,
    email:"joao@firma.com",
    telefone:["11555555550","11444444440"],
    saldo: 200,    
    efetuaPagamento: function (valor){
        if(valor>this.saldo){
            console.log("Saldo insuficiente");
        }else{
            this.saldo -= valor;
            console.log(`Pagamento realizado ${this.saldo}`);
        }
    }
};

cliente.efetuaPagamento(25);

