// 
// fetch('./api/some.json')
//     .then(
//         function(response) {
//             if (response.status !== 200) {
//                 console.log('Looks liek there was a problem');
//                 return;
//             }

//             response.json().then(function(data) {
//                 console.log(data);
//             });
//         }
//     )
//     .catch(function(err) {
//         console.log('Fetch Error :-S', err)
//     });

// DOM element grab constants
const typeButton = document.querySelector('.type')
const userInput = document.getElementById('my-input')
const submitButton = document.querySelector('.submit')
const skipButton = document.querySelector('.skip')
const revealButton = document.querySelector('.reveal')
const questions = document.querySelector('.questions')
const stats = document.querySelector('.stats')
const skip = document.querySelector('.skipcount')

// Global Variables
const questionSet = ['A succulent can be any plant with fleshy, thick tissues adapted to store this', 'Baltimore Orioles defensive wizard Brooks Robinson won 16 straight gold these from 1960 to 1975', 'A spy who lures another into a trap, or just a wooden duck', "Chatting at your desk on Instant Messenger? Type AFK into the window to tell them you're away from this", "You might play 301, 501 or 1001 when you're playing when you're having fun playing this barroom favorite", 'This syndrome is also called terror-bonding or traumatic bonding', "It's the type of keyboard named for the succession of 6 letters found near the upper-left corner", "It's not cloudbursts in the skull, but shared problem solving in which everyone contributes ideas", 'If you like it hot, use this brand of sauce made with red peppers, vinegar & salt mined on Avery Island', 'At 16, Tracy Austin beat Chris Evert to win this tennis tournament at Flushing Meadows', 'A type of treeless plain, or the oldest city in Georgia', 'On the night of April 18, 1775 this man rode to Lexington to warn Hancock to get out of town', 'An opening dice throw of 2, 3 or 12 is a loser in this game', 'This unit of measure is equal to 2 pints', 'The olfactory nerve is the nerve of this sense']
const answerSet = ['water', 'gloves', 'decoy', 'keyboard', 'darts', 'Stockholm', 'QWERTY', 'brainstorming', 'Tabasco', 'U.S. Open', 'Savannah', 'Paul Revere', 'craps', 'quart', 'smell']
let currentQuestion = null
let currentAnswer = null
let newQuestionId = 0
let questionCount = 0
let correctCount = 0
let skipCount = 0

// Initialize: Fetch random question, display random question, correct/total, and skipped questions
newQuestion()
questions.innerHTML = currentQuestion
stats.innerHTML = `${correctCount}/${questionCount}`
skip.innerHTML = `Skipped Questions: ${skipCount}`

// Get Random Number 0-14 (For question/answer index), assign number to newQuestionId, use that to change to new question and answer, remove case-sensitivity
function newQuestion() {
    let newNum = Math.floor(Math.random() * questionSet.length)
    newQuestionId = newNum
    currentQuestion = questionSet[newQuestionId]
    currentAnswer = answerSet[newQuestionId]
    rightAnswer = currentAnswer.toLowerCase()
}

// Press skip to fetch + display random question, reset all buttons + user input, remove "CORRECT!!" or "Incorrect!!" text, increment + display skip count
skipButton.addEventListener('click', () => {
    newQuestion()
    questions.innerHTML = currentQuestion
    submitButton.innerHTML = 'Submit Answer'
    submitButton.style.display = 'inline'
    skipButton.innerHTML = 'Skip Question'
    revealButton.style.display = 'inline'
    revealButton.innerHTML = 'Reveal Answer'
    userInput.style.display = 'inline'
    userInput.value = ''
    typeButton.style.display = 'none'
    skipCount++
    stats.innerHTML = `${correctCount}/${questionCount}`
    skip.innerHTML = `Skipped Questions: ${skipCount}`
})

// Press "Type Answer" for user input field and submit answer button to appear
typeButton.addEventListener('click', () => {
    typeButton.style.display = 'none'
    userInput.style.display = 'inline'
    submitButton.style.display = 'inline'
})

/* Press "Submit Answer" to check if correct, remove both "Submit Answer" + "Reveal Answer" button if correct + changes text of "Skip Question" to "Next Question", increment correct count and total question count, then display
   If incorrect, same behavior as correct answer except "Reveal Answer" button stays and correct count does not increment */
submitButton.addEventListener('click', () => {
    if (userInput.value.toLowerCase() === rightAnswer) {
        submitButton.style.display = 'none'
        revealButton.style.display = 'none'
        skipButton.innerHTML = 'Next Question'
        correctCount++
        questionCount++
        skipCount--
        stats.innerHTML = `${correctCount}/${questionCount} CORRECT!!`
    }else {
        submitButton.style.display = 'none'
        revealButton.style.display = 'inline'
        skipButton.innerHTML = 'Next Question'
        questionCount++
        skipCount--
        stats.innerHTML = `${correctCount}/${questionCount} Incorrect!!`
    }
})

// Press "Reveal Answer" button to change text to current correct answer,change text of "Skip Question" to "Next Question", and remove all other buttons + user input field
revealButton.addEventListener('click', () => {
    revealButton.innerHTML = currentAnswer
    skipButton.innerHTML = 'Next Question'
    submitButton.style.display = 'none'
    userInput.style.display = 'none'
    typeButton.style.display = 'none'
})