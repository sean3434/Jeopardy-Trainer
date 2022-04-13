         __________  ___  ___   ___  _____  __  _________  ___   _____  _________ 
     __ / / __/ __ \/ _ \/ _ | / _ \/ _ \ \/ / /_  __/ _ \/ _ | /  _/ |/ / __/ _ \
    / // / _// /_/ / ___/ __ |/ , _/ // /\  /   / / / , _/ __ |_/ //    / _// , _/
    \___/___/\____/_/  /_/ |_/_/|_/____/ /_/   /_/ /_/|_/_/ |_/___/_/|_/___/_/|_| 
    
# Jeopardy Trainer
## Project Description
Browser based Trivia Game using the jservice api (jservice.io) to ask random random Jeopardy questions. Pulls from over 156,000 Jeopardy questions to test your knowledge in hundreds of different categories. Your stats are updated live and you also have the option to skip questions.
## Planning Process
Wire Frame main screen of the game (as seen below). Brainstorm basic code structure such as html elements for each button, title, and text that requires DOM manipulation. Structure the javascript file so DOM element queries and global variables are listed first followed by initialize function needed to run the game followed by other functions. Check if element interactions work as intended.
## Wire Frame
![](https://i.imgur.com/3Dl1XcN.png)
## User Stories
* As a user, I want to be able to type my answer to the given Jeopardy question
* As a user, I want to be able to see feedback on right and wrong answers
* As a user, I want to be able to skip the current question and be given a new one
* As a user, I want to be able to reveal answers I do not know
### MVP Goals
* As a user, I want to be able to type my answer to the given Jeopardy question
* As a user, I want to be able to see feedback on right and wrong answers
* As a user, I want to be able to skip the current question and be given a new one
* As a user, I want to be able to reveal answers I do not know
### Stretch Goals
* As a user, I want to be able to track my right answers out of total questions
* As a user, I want to be able to track my total skips
* As a user, I want to be able to pick questions from one or more specific categories
* As a user, I want to be able to see my question answer history
* As a user, I want to be able to toggle off repeat questions
## Jeopardy Trainer - MVP
### MVP Project Description
A question is shown initially, can be answered correctly or incorrectly with proper feedback displaying, the correct answer is shown upon clicking the "Reveal Answer" button, and the skip question button properly displays a new question and this can be repeated infinitely.
## Layout
![](https://i.imgur.com/bVexCbN.png)
### Dynamic Questions & Category Display
Each time the page is refreshed or "Skip Question" is clicked, A new question and corresponding category is displayed and the correct answer is also displayed upon clicking the "Reveal Answer" button
### Buttons
#### Type Answer
Upon clicking, The type answer button disappears, the submit answer button appears, and the user can input what they believe is the correct answer into an input field that also appears.
#### Submit Answer
This button checks the user input against the correct answer (not case-sensitive), gives feedback whether the answer is correct or incorrect, and removes all buttons except skip question  and reveal answer on incorrect answers and only the skip question button on correct answers
#### Reveal Answer
The correct answer for the current question is shown when this button is clicked. This removes the ability to answer the question as the answer is already displayed so the only option available is to skip to the next question.
#### Skip Question
Functions as the "reset" for the game. All buttons default to their initial state and a new question/answer pair is generated allowing the user continue playing the game.
### Stat Box
The stat box at the bottom of the screen accurately displays the number of correct answers out of total questions as well as the amount of total questions skipped. This value updates every time a question is answered or skipped.
## Unsolved Problems
The current implementation of the game is unable to detect typos so answers that are off by even one character result in being incorrect. There are also some forward slashes and "<i>" that appear in some answers because of the JSON formatting so those answers are also incorrect. The input field is also slightly lower in position relative to the other on-screen buttons. Occasionally a question is not generated and the skip question button needs to be pressed because the 200 ms timeout is reached when fetching the questions/answers from the jservice api.
## Major Hurdles
The most difficult part of the game was creating the intitialization function that fetches the questions and answers. I had initially hard-coded in 15 questions and answers in two separate arrays and was having issues with it running properly. I also had difficulty figuring out when to increment the correct/total/skips and which functions to put the counters in.
## Future Goals & Implementations
 The biggest feature I would implement in the future is a start screen that allows the user to pick one or more specific categories and even certain difficulties of questions ($ amounts from 100-1000) to make for a better user experience. I would also revamp the UI and spend more time on it. It currently breaks and the text expands past the box that contains it on narrow screen sizes and is not very optimized for mobile devices.
