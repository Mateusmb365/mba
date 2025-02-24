
function validateForm() {
    let nome1= document.querySelector("#name"); // pegui o id
let sobrenome1= document.querySelector("#sobrenome");
let idade1= document.querySelector("#idade");
let peso1= document.querySelector("#peso");

let usuarios = [] // cria um array de objetos

    

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

usuarios.push(pessoa);// adiciona o objeto ao array

let result = document.querySelector("#result");//exibir os dados
result.innerHTML += `<p>Nome: ${pessoa.nome}</p>`;
result.innerHTML += `<p>Sobrenome: ${pessoa.sobrenome}</p>`;
result.innerHTML += `<p>Idade: ${pessoa.idade}</p>`;
result.innerHTML += `<p>Peso: ${pessoa.peso}</p>`;

nome1.value = ""; //limpar os campos
sobrenome1.value = "";
idade1.value = "";
peso1.value = "";



};

