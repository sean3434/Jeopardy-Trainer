//DOM element grab constants
const typeButton = document.querySelector('.type')
const userInput = document.getElementById('my-input')
const submitButton = document.querySelector('.submit')
const skipButton = document.querySelector('.skip')
const revealButton = document.querySelector('.reveal')

//On click of the "type answer" button, text box and submit answer button appear
typeButton.addEventListener('click', () => {
    typeButton.style.display = 'none'
    userInput.style.display = 'inline'
    submitButton.style.display = 'inline'
})
//works but had to copy paste same skip and reveal lines for else statment
//REVEAL BUTTON ALWAYS SHOWS?
submitButton.addEventListener('click', () => {
    if(userInput.value === 'hi') {
        submitButton.innerHTML = 'Correct!'
        skipButton.innerHTML = 'Next Question'
        revealButton.style.display = 'none'
    }else submitButton.innerHTML = 'Incorrect :('
    skipButton.innerHTML = 'Skip Question'
    revealButton.style.display = 'inline'
})