// DOM element grab constants
const typeButton = document.querySelector('.type')
const userInput = document.getElementById('my-input')
const submitButton = document.querySelector('.submit')
const skipButton = document.querySelector('.skip')
const revealButton = document.querySelector('.reveal')
const questions = document.querySelector('.questions')

// Global Variables
const questionSet = ['A succulent can be any plant with fleshy, thick tissues adapted to store this', 'Baltimore Orioles defensive wizard Brooks Robinson won 16 straight gold these from 1960 to 1975', 'A spy who lures another into a trap, or just a wooden duck', "Chatting at your desk on Instant Messenger? Type AFK into the window to tell them you're away from this", "You might play 301, 501 or 1001 when you're playing when you're having fun playing this barroom favorite", 'This syndrome is also called terror-bonding or traumatic bonding', "It's the type of keyboard named for the succession of 6 letters found near the upper-left corner", "It's not cloudbursts in the skull, but shared problem solving in which everyone contributes ideas", 'If you like it hot, use this brand of sauce made with red peppers, vinegar & salt mined on Avery Island', 'At 16, Tracy Austin beat Chris Evert to win this tennis tournament at Flushing Meadows', 'A type of treeless plain, or the oldest city in Georgia', 'On the night of April 18, 1775 this man rode to Lexington to warn Hancock to get out of town', 'An opening dice throw of 2, 3 or 12 is a loser in this game', 'This unit of measure is equal to 2 pints', 'The olfactory nerve is the nerve of this sense']
const answerSet = ['water', 'gloves', 'decoy', 'keyboard', 'darts', 'Stockholm', 'QWERTY', 'brainstorming', 'Tabasco', 'U.S. Open', 'Savannah', 'Paul Revere', 'craps', 'quart', 'smell']
let currentQuestion = null
let currentAnswer = null
let questionNumber = 1
let NewQuestionId = 0

// Initialize
newQuestion()

// Display Questions
questions.innerHTML = currentQuestion

// Get Random Number 0-14 (For question/answer index)
function newQuestion() {
    newNum = Math.floor(Math.random() * questionSet.length)
    NewQuestionId = newNum
    currentQuestion = questionSet[NewQuestionId]
    currentAnswer = answerSet[NewQuestionId]
}

console.log(currentQuestion)
console.log(currentAnswer)

//Show next question and increment question number every time skip/next question is clicked
skipButton.addEventListener('click', () => {
    newQuestion()
    questionNumber++
    console.log(questionNumber)
    console.log(NewQuestionId)
    console.log(currentQuestion)
})

// On click of the "type answer" button, text box and submit answer button appear
typeButton.addEventListener('click', () => {
    typeButton.style.display = 'none'
    userInput.style.display = 'inline'
    submitButton.style.display = 'inline'
})
// Logic for submitting answer, checking if correct, taking away reveal answer button if correct and changing text of next question to skip question
submitButton.addEventListener('click', () => {
    // if(userInput.value === 'hi') {
        if(userInput.value === answerSet[val]) {
        submitButton.innerHTML = 'Correct!'
        skipButton.innerHTML = 'Next Question'
        revealButton.style.display = 'none'
    }else {submitButton.innerHTML = 'Incorrect :('
            revealButton.style.display = 'inline'
}
})

 