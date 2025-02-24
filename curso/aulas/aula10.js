let a = [1 ,2 , 3, 4, 5,  ];// tipos mutaveis
let b =  [...a]; // copia o array
let c = b;
console.log(a , b) ;

a.push(11);

console.log(a, b , c);

b.pop();

console.log(a , b , c);

a.push("mateus");

console.log(a );


// copiando objetos
const pessoa =  {
    nome: "Mateus",
    sobrenome: "Barbosa",
    idade: 26,
};


const pessoa2 = {...pessoa};// copia o objeto

pessoa.idade = 27;
pessoa.sobrenome = "jorge";

console.log(pessoa);
console.log(pessoa2);


