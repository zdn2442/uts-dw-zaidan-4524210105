const inputName = document.querySelector('#game-name');
const inputCategory = document.querySelector('#category');
const inputInformation = document.querySelector('#information');

const cardTitle = document.querySelector('#card-title');
const cardCategory = document.querySelector('#card-category');
const cardInfo = document.querySelector('#card-info');

const gameForm = document.querySelector('#game-form');
const targetCard = document.querySelector('#target-game-card');

function updateCard(inputElement, previewElement, defaultText) {
    const value = inputElement.value.trim();
    
    if (value === '') {
        previewElement.textContent = defaultText;
    } else {
        previewElement.textContent = value;
    }
}

inputName.addEventListener('input', function() {
    updateCard(inputName, cardTitle, 'Judul Game');
});

inputCategory.addEventListener('input', function() {
    updateCard(inputCategory, cardCategory, 'Action');
});

inputInformation.addEventListener('input', function() {
    updateCard(inputInformation, cardInfo, 'Ini output dari informasi.');
});

gameForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const targetCard = document.getElementById('target-game-card');
    targetCard.style.boxShadow = '0 0 15px 3px var(--secondary-color)';
    
    setTimeout(() => {
        targetCard.style.boxShadow = '0 1px 5px rgba(0, 0, 0, 0.05)';
    }, 1500);

    gameForm.reset();

    updateCard(inputName, cardTitle, 'Judul Game');
    updateCard(inputCategory, cardCategory, 'Action');
    updateCard(inputInformation, cardInfo, 'Ini output dari informasi.');
});