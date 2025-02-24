let usuarios = [];
function validateForm() {
    let nome1= document.querySelector("#name"); // pegui o id
let sobrenome1= document.querySelector("#sobrenome");
let idade1= document.querySelector("#idade");
let peso1= document.querySelector("#peso");
 // cria um array de objetos

/*  
    

form.onsubmit = function(evento){// quando o form for submetido eu chamo a funcao prevertDefault que previne o comportamento padrao e evita este comportamento
    evento.preventDefault();
}
*/

const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // previne o comportamento padrao
});
    
/*
    let nome = nome1.value.trim(); // tirar os espacos
    let sobrenome = sobrenome1.value.trim();
    let idade = idade1.value.trim();
    let peso = peso1.value.trim();
    
let pessoa = {
    nome,
    sobrenome,
    idade,
    peso
}; 
*/

usuarios.push(  {// adiciona o objeto ao array
    nome: nome1.value.trim(),
    sobrenome: sobrenome1.value.trim(),
    idade: idade1.value.trim(),
    peso: peso1.value.trim(),
    
}
);// adiciona o objeto ao array
console.log(usuarios);

let result = document.querySelector("#result");//exibir os dados
result.innerHTML += `<p>Nome: ${nome1.value}</p>`;
result.innerHTML += `<p>Sobrenome: ${sobrenome1.value}</p>`;
result.innerHTML += `<p>Idade: ${idade1.value}</p>`;
result.innerHTML += `<p>Peso: ${peso1.value}</p>`;

nome1.value = ""; //limpar os campos
sobrenome1.value = "";
idade1.value = "";
peso1.value = "";



};

