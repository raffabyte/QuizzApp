

let rightAnswers = 0
let currentQuestion = 0

function init() {
    showQuizLength()
    showCurrentQuestionNumber()
    showQuestionCard()
}



function startQuiz() {
    document.getElementById('startScreen').style = "display : none"
    document.getElementById('questionBody').style = "display : block"
}

function showQuizLength() {
    let contentRef = document.getElementById('arrayLength')
    contentRef.innerHTML = questions.length
}

function showCurrentQuestionNumber() {
    document.getElementById('currentQuestion').innerHTML = currentQuestion + 1
}

function showQuestionCard() {
    if (currentQuestion >= questions.length) {
        document.getElementById('endScreen').style = ""
        document.getElementById('questionBody').style = 'display : none'
        document.getElementById('arrayLengthFinish').innerHTML = questions.length
        document.getElementById('correctAnswers').innerHTML = rightAnswers

    } else {
        let question = questions[currentQuestion]

        document.getElementById('questionText').innerHTML = question.question
        document.getElementById('answer_1').innerHTML = question.answer_1
        document.getElementById('answer_2').innerHTML = question.answer_2
        document.getElementById('answer_3').innerHTML = question.answer_3
        document.getElementById('answer_4').innerHTML = question.answer_4
    }
}

function answer(answer) {
    let question = questions[currentQuestion]
    let getSelectetNumber = answer.slice(-1)
    let idOfRightAnswer = `answer_${question.correctanswer}`

    if (getSelectetNumber == question.correctanswer) {
        document.getElementById(answer).parentNode.classList.add('bg-success')
        rightAnswers++
    } else {
        document.getElementById(answer).parentNode.classList.add('bg-danger')
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success')
    }

    document.getElementById('next-button').disabled = false
}

function nextQuestion() {
    currentQuestion++
    document.getElementById('next-button').disabled = true
    showCurrentQuestionNumber()
    resetAnswers()
    showQuestionCard()
}

function resetAnswers() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger')
    document.getElementById('answer_1').parentNode.classList.remove('bg-success')
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger')
    document.getElementById('answer_2').parentNode.classList.remove('bg-success')
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger')
    document.getElementById('answer_3').parentNode.classList.remove('bg-success')
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger')
    document.getElementById('answer_4').parentNode.classList.remove('bg-success')
}

function erneutSpielen() {
    rightAnswers = 0
    currentQuestion = 0
    document.getElementById('endScreen').style = "display : none"
    document.getElementById('questionBody').style = "display : block"
    init()
}
