// DOM element grab constants
const typeButton = document.querySelector('.type')
const userInput = document.getElementById('my-input')
const submitButton = document.querySelector('.submit')
const skipButton = document.querySelector('.skip')
const revealButton = document.querySelector('.reveal')
const questions = document.querySelector('.questions')
const stats = document.querySelector('.stats')
const skip = document.querySelector('.skipcount')
const statbox = document.querySelector('.statbox')
const getCategory = document.querySelector('.category')

// Global Variables
const questionSet = ['A succulent can be any plant with fleshy, thick tissues adapted to store this', 'Baltimore Orioles defensive wizard Brooks Robinson won 16 straight gold these from 1960 to 1975', 'A spy who lures another into a trap, or just a wooden duck', "Chatting at your desk on Instant Messenger? Type AFK into the window to tell them you're away from this", "You might play 301, 501 or 1001 when you're playing when you're having fun playing this barroom favorite", 'This syndrome is also called terror-bonding or traumatic bonding', "It's the type of keyboard named for the succession of 6 letters found near the upper-left corner", "It's not cloudbursts in the skull, but shared problem solving in which everyone contributes ideas", 'If you like it hot, use this brand of sauce made with red peppers, vinegar & salt mined on Avery Island', 'At 16, Tracy Austin beat Chris Evert to win this tennis tournament at Flushing Meadows', 'A type of treeless plain, or the oldest city in Georgia', 'On the night of April 18, 1775 this man rode to Lexington to warn Hancock to get out of town', 'An opening dice throw of 2, 3 or 12 is a loser in this game', 'This unit of measure is equal to 2 pints', 'The olfactory nerve is the nerve of this sense']
const answerSet = ['water', 'gloves', 'decoy', 'keyboard', 'darts', 'Stockholm', 'QWERTY', 'brainstorming', 'Tabasco', 'U.S. Open', 'Savannah', 'Paul Revere', 'craps', 'quart', 'smell']
let category = null
let question = null
let answer = null
let currentQuestion = null
let currentAnswer = null
let newQuestionId = null
let questionCount = 0
let correctCount = 0
let skipCount = 0

// Initialize: Fetch random question, display random question, correct/total, and skipped questions
newQuestion()
questions.innerHTML = currentQuestion
stats.innerHTML = `${correctCount}/${questionCount}`
skip.innerHTML = `Skipped Questions: ${skipCount}`

// IF NOT USING API: Get Random Number 0-14 (For question/answer index), assign number to newQuestionId, use that to change to new question and answer, remove case-sensitivity
// Otherwise, uses fetch request to pull random category, question, & answer from jservice/random API JSON data
function newQuestion() {
    // newQuestionId = Math.floor(Math.random() * questionSet.length)
    // currentQuestion = questionSet[newQuestionId]
    // currentAnswer = answerSet[newQuestionId]
    // rightAnswer = currentAnswer.toLowerCase()
    fetch('https://jservice.io/api/random')
    .then(
        function(response) {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' + response.status);
                return;
            }

            response.json().then(function(data) {
                category = data[0].category.title
                question = data[0].question;
                answer = data[0].answer
                currentQuestion = question
                currentAnswer = answer
                rightAnswer = currentAnswer.toLowerCase()
                getCategory.innerHTML = `Question Category: ${category}`
                questions.innerHTML = currentQuestion
                console.log(question)
                console.log(answer)
                console.log(data)
            });
        }
    )
    .catch(function(err) {
        console.log('Fetch Error :-S', err)
    });
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
    skip.innerHTML = `Skipped Questions: ${skipCount}`
    statbox.classList.remove('right', 'wrong')
})

// Press "Type Answer" for user input field and submit answer button to appear
typeButton.addEventListener('click', () => {
    typeButton.style.display = 'none'
    userInput.style.display = 'inline'
    submitButton.style.display = 'inline'
})

/* Press "Submit Answer" to check if correct, remove both "Submit Answer" + "Reveal Answer" button if correct + changes text of "Skip Question" to "Next Question", increment correct count and total question count,decrement skipcount, turn statbox green, display new correct out of total count and CORRECT!!
   If incorrect, same behavior as correct answer except "Reveal Answer" button stays, incorrect count increments instead of correct count, the statbox turns red and displays Incorrect!!*/
submitButton.addEventListener('click', () => {
    if (userInput.value.toLowerCase() === rightAnswer) {
        submitButton.style.display = 'none'
        revealButton.style.display = 'none'
        skipButton.innerHTML = 'Next Question'
        correctCount++
        questionCount++
        skipCount--
        statbox.classList.add('right')
        stats.innerHTML = `${correctCount}/${questionCount} CORRECT!!`
    }else {
        submitButton.style.display = 'none'
        revealButton.style.display = 'inline'
        skipButton.innerHTML = 'Next Question'
        questionCount++
        skipCount--
        stats.innerHTML = `${correctCount}/${questionCount} Incorrect!!`
        statbox.classList.add('wrong')
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