//DOM element grab constants
const typeButton = document.querySelector('.type')
const userInput = document.getElementById('my-input')

    typeButton.addEventListener('click', () => {
        typeButton.style.display = 'none'
        userInput.style.display = 'inline'
    })