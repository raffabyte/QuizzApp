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
        showEndScreen()
    } else {
        showNextQuestion()
    }
}

function showNextQuestion() {
    let question = questions[currentQuestion]

    document.getElementById('questionText').innerHTML = question.question
    document.getElementById('answer_1').innerHTML = question.answer_1
    document.getElementById('answer_2').innerHTML = question.answer_2
    document.getElementById('answer_3').innerHTML = question.answer_3
    document.getElementById('answer_4').innerHTML = question.answer_4
}

function showEndScreen() {
    document.getElementById('endScreen').style = ""
    document.getElementById('questionBody').style = 'display : none'
    document.getElementById('arrayLengthFinish').innerHTML = questions.length
    document.getElementById('correctAnswers').innerHTML = rightAnswers
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

    disableAnswers()
    document.getElementById('next-button').disabled = false
}

function disableAnswers() {
    ["answer-1", "answer-2", "answer-3", "answer-4"].forEach(id => {
        const el = document.getElementById(id);
        el.classList.add("disabled");
        el.style.pointerEvents = "none";
        el.style.opacity = "0.6"; // optional für "deaktivierten Look"
    });
}

function enableAnswers() {
    ["answer-1", "answer-2", "answer-3", "answer-4"].forEach(id => {
        const el = document.getElementById(id);
        el.style.pointerEvents = "auto";
        el.style.opacity = "1";
    });
}

function nextQuestion() {
    currentQuestion++
    document.getElementById('next-button').disabled = true
    showCurrentQuestionNumber()
    resetAnswers()
    enableAnswers()
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
