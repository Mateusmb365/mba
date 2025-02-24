const pessoa =  {
    nome: "Mateus",
    sobrenome: "Barbosa",
    idade: 26,

    fala() { 
        console.log(`meu nome é ${this.nome} ${this.sobrenome} e tenho ${this.idade} anos`);
    },

    alterarSobrenome(sobrenome) {
        this.sobrenome = this.sobrenome.replace("Barbosa", "Dias");
    },
    incrementaridade() {
        this.idade++;}
};

pessoa.fala();
pessoa.alterarSobrenome();
pessoa.incrementaridade();
pessoa.fala();

    

    