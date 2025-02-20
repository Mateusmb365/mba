const carrossel = document.querySelector('.carrossel');
const items = document.querySelectorAll('.carrossel-itens');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

function updateCarrossel() {
    const offset = -currentIndex * 100;
    carrossel.style.transform = `translateX(${offset}%)`;
}

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = items.length - 1; // Volta ao último item
    }
    updateCarrossel();
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < items.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Volta ao primeiro item
    }
    updateCarrossel();
});

function validateForm() {
    const name = document.getElementById("nome");
    const email = document.getElementById("email");
    const contato = document.getElementById("telefone");

    // Limpa as bordas antes da validação
    name.style.borderColor = "";
    email.style.borderColor = "";
    contato.style.borderColor = "";

    let isValid = true;

    if (name.value.trim() === "") {
        name.style.borderColor = "red";
        isValid = false;
    }

    if (email.value.trim() === "") {
        email.style.borderColor = "red";
        isValid = false;
        
    } else if (!isValidEmail(email.value)) {
        email.style.borderColor = "red";
        alert("Por favor, insira um e-mail válido.");
        isValid = false;
    }

    if (contato.value.trim() === "") {
        contato.style.borderColor = "red";
        isValid = false;
    }

    if (!isValid) {
        alert("Por favor, preencha todos os campos corretamente.");
        return false;
    }

    return true;
}

// Função auxiliar para validar o formato do e-mail
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}