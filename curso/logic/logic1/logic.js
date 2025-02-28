

let usuarios = [];


document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    let name1 = document.querySelector("#name");
    let sobrenome1 = document.querySelector("#sobrenome");
    let idade1 = document.querySelector("#idade");  
    let peso1 = document.querySelector("#peso");
    let fumante1 = document.querySelector("#fumante");

 

    let nome = name1.value.trim();
    let sobrenome = sobrenome1.value.trim();
    let idade = parseInt(idade1.value.trim(), 10);
    let peso = parseFloat(peso1.value.trim());
    let fumante = fumante1.checked;

    usuarios.push({
        
        name: nome,
        sobrenome: sobrenome,
        idade: idade,
        peso: peso,
        fumante: fumante

});
let mensagem = "";

if (idade < 18 || peso < 50 || fumante) {
    mensagem = `Olá ${nome} ${sobrenome}, vocé não pode entrar.`;}

else {
    mensagem = `Olá ${nome} ${sobrenome}, vocé pode entrar.`;
}

document.getElementById("result").innerHTML += `<p>${mensagem}</p>`





name1.value = "";
sobrenome1.value = "";
idade1.value = "";
peso1.value = "";
fumante1.checked = "";




});


validateForm();