const data = [
    {
        id: 1,
        question: "Which animal has the thickest fur of any mammal?",
        answers: [
            {answer: "Mink", isCorrect: false},
            {answer: "Sea Otter", isCorrect: true},
            {answer: "Beaver", isCorrect: false},
            {answer: "Polar Bear", isCorrect: false},
        ]
    },
    {
        id: 2,
        question: "What animal has the highest blood pressure?",
        answers: [
            {answer: "Orca", isCorrect: false},
            {answer: "Elephant", isCorrect: false},
            {answer: "Kangaroo", isCorrect: false},
            {answer: "Giraffe", isCorrect: true},
        ]
    },
    {
        id: 3,
        question: "A 'Clowder' is a group of:",
        answers: [
            {answer: 'Crows', isCorrect: false},
            {answer: 'Snails', isCorrect: false},
            {answer: 'Mussels', isCorrect: false},
            {answer: 'Cats', isCorrect: true},
        ]
    },
    {
        id: 4,
        question: "Which one of these mammals lays eggs?",
        answers: [
            {answer: "Echidna", isCorrect: true},
            {answer: "Quokka", isCorrect: false},
            {answer: "Tasmanian Devil", isCorrect: false},
            {answer: "Tenrec", isCorrect: false},
        ]
    },
    {
        id: 5,
        question: "How long does it take a sloth to digest it's food?",
        answers: [
            {answer: "12 hours", isCorrect: false},
            {answer: "48 hours", isCorrect: false},
            {answer: "2 weeks", isCorrect: true},
            {answer: "A couple weeks", isCorrect: false},
        ]
    },
]

const gameScreen = document.querySelector('.game')
const resultScreen = document.querySelector('.result')
const question = document.querySelector('.question')
const answersContainer = document.querySelector('.answers')
const submit = document.querySelector('.submit')
const play = document.querySelector('.play')

let qIndex = 0
let correctCount = 0
let wrongCount = 0
let selectedAnswer

const showResults = () => {
    const total = correctCount * 10
    resultScreen.style.display = 'block'
    gameScreen.style.display = 'none'

    resultScreen.querySelector('.correct').textContent = `Correct: ${correctCount}`
    resultScreen.querySelector('.wrong').textContent = `Incorrect: ${wrongCount}`
    resultScreen.querySelector('.score').textContent = `Score: ${(correctCount - wrongCount) * 10}`
}

const showQuestion = (qNum) => {
    if (qIndex === data.length) {
        return showResults()
    }
    selectedAnswer = null;
    question.textContent = data[qNum].question
    answersContainer.innerHTML = data[qNum].answers.map((item, i) => {
        return `
        <div class="answer">
            <input type="radio" name="answer" value=${item.isCorrect} id=${i}>
            <label for=${i}>${item.answer}</label>
        </div> `;
    }).join('');

    selectAnswer()
}

const selectAnswer = () => {
    answersContainer.querySelectorAll('input').forEach(el => {
        el.addEventListener('click', (e) => {
            selectedAnswer = e.target.value
        })
    })
}

const submitAnswer = () => {
    submit.addEventListener('click', () => {
        if (selectedAnswer !== null) {
            selectedAnswer === 'true' ? correctCount++ : wrongCount++
            qIndex++
            showQuestion(qIndex)
        } else {
            alert('Select an answer!')
        }
    })    
}

const playAgain = () => {
    qIndex = 0
    correctCount = 0
    wrongCount = 0
    resultScreen.style.display = 'none'
    gameScreen.style.display = 'block'
    showQuestion(qIndex)
}

play.addEventListener('click', () => {
    playAgain()
})

showQuestion(qIndex)
submitAnswer()


