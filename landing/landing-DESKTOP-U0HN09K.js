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
   
    name.style.borderColor = "";
    email.style.borderColor = "";
    contato.style.borderColor = "";

    let isValid = true;

    if (name.value.trim() === "") {
        name.style.borderColor = "red";
        name.style.backgroundColor = "rgba(255, 0, 0, 0.36)";
        isValid = false;
    }

    if (email.value.trim() === "") {
        email.style.borderColor = "red";
        email.style.backgroundColor = "rgba(255, 0, 0, 0.36)";
        isValid = false;

    } else if (!isValidEmail(email.value)) {
        email.style.borderColor = "red";
        email.style.backgroundColor = "rgba(255, 0, 0, 0.36)";
        alert("Por favor, insira um e-mail válido.");
        isValid = false;
    }

    if (contato.value.trim() === "") {
        contato.style.borderColor = "red";
        contato.style.backgroundColor = "rgba(255, 0, 0, 0.36)";
        isValid = false;
    }

    if (!isValid) {
        alert("Por favor, preencha todos os campos corretamente.");
        return false;
    }

    return true;
}


    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

 const galleryimg = document.querySelector('.img-sobre');
 const imgitem = document.querySelectorAll('.img-itens');
 const passar = document.querySelector('.passar-btn');
 const voltar = document.querySelector('.voltar-btn');

 let indece = 0;  

 function updategallery() {
    const transition = -indece * 100;
    galleryimg.style.transform = `translateX(${transition}%)`;
 }

 passar.addEventListener('click', () => {
    if (indece < imgitem.length -1) {
        indece++;
    } else {
        indece = 0; // Volta ao primeiro item
    }
    updategallery();

 } );

 voltar.addEventListener('click', () => {
    if (indece > 0) {
        indece--;
    } else {
        indece = imgitem.length - 1; // Volta ao ultimo item
    }
    updategallery();
 });