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