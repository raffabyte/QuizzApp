let questions = [
    {
        question: "Was macht das HTML-Element &lt;button&gt;?",
        answer_1: "Es zeigt ein Bild an.",
        answer_2: "Es speichert Daten lokal.",
        answer_3: "Es definiert eine klickbare Schaltfläche.",
        answer_4: "Es erstellt einen Hyperlink.",
        correctanswer: 3
    },
    {
        question: "Wofür steht CSS?",
        answer_1: "Cascading Style Sheets",
        answer_2: "Creative Style Sheets",
        answer_3: "Computer Style Structure",
        answer_4: "Colorful Styling Syntax",
        correctanswer: 1
    },
    {
        question: "Welches Attribut in HTML wird verwendet, um eine Klasse zu definieren?",
        answer_1: "id",
        answer_2: "style",
        answer_3: "type",
        answer_4: "class",
        correctanswer: 4
    },
    {
        question: "Was ist JavaScript hauptsächlich in der Webentwicklung?",
        answer_1: "Ein Datenbankmanagement-System",
        answer_2: "Eine Programmiersprache für dynamische Inhalte",
        answer_3: "Ein Styling-Framework",
        answer_4: "Ein Webserver",
        correctanswer: 2
    },
    {
        question: "Welches Framework hilft beim schnelleren Erstellen von responsiven Layouts?",
        answer_1: "MongoDB",
        answer_2: "jQuery",
        answer_3: "Bootstrap",
        answer_4: "Node.js",
        correctanswer: 3
    },
    {
        question: "Was macht der Befehl `git commit`?",
        answer_1: "Er lädt Dateien auf den Webserver hoch.",
        answer_2: "Er speichert Änderungen lokal im Repository.",
        answer_3: "Er startet den Computer neu.",
        answer_4: "Er installiert ein neues Projekt.",
        correctanswer: 2
    }
]

let currentQuestion = 0

function init() {
    showQuizLength()
    showCurrentQuestionNumber()
    showQuestionCard()
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
