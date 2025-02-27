let usuarios = [];

function validateForm() {
    let name1 = document.querySelector("#name");
    let sobrenome1 = document.querySelector("#sobrenome");
    let idade1 = document.querySelector("#idade");
    let peso1 = document.querySelector("#peso");
    let fumante1 = document.querySelector("#fumante");
    let form = document.querySelector("#form");
    let result = document.querySelector("#result");

   
        let nome = name1.value.trim();
        let sobrenome = sobrenome1.value.trim();
        let idade = parseInt(idade1.value.trim(), 10);
        let peso = parseFloat(peso1.value.trim());
        let fumante = fumante1.checked; // Verifica se o checkbox está marcado

        usuarios.push({
            name: nome,
            sobrenome: sobrenome,
            idade: idade,
            peso: peso,
            fumante: fumante
        });

        if (idade < 18 || peso < 50 || fumante) {
            result.innerHTML += `Olá ${nome} ${sobrenome}, você não pode entrar.<br>`;
        } else {
            result.innerHTML += `Olá ${nome} ${sobrenome}, você pode entrar.<br>`;
        }

        // Limpa os campos do formulário
        name1.value = "";
        sobrenome1.value = "";
        idade1.value = "";
        peso1.value = "";
        fumante1.checked = false; // Desmarca o checkbox
    }

// Chama a função para configurar o evento de submit
validateForm();