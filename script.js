const quizData = [
    {
        question: "Siapa pemain yang dikenal sebagai 'CR7'?",
        options: ["Lionel Messi", "Cristiano Ronaldo", "Neymar", "Kylian Mbappé"],
        correctAnswer: 1
    },
    {
        question: "Di negara mana Piala Dunia 2018 diselenggarakan?",
        options: ["Brasil", "Rusia", "Prancis", "Jerman"],
        correctAnswer: 1
    },
    {
        question: "Tim sepak bola mana yang memiliki julukan 'The Red Devils'?",
        options: ["Manchester City", "Liverpool", "Manchester United", "Arsenal"],
        correctAnswer: 2
    },
    {
        question: "Siapa yang memegang rekor gol terbanyak di Piala Dunia?",
        options: ["Pele", "Marta", "Miroslav Klose", "Cristiano Ronaldo"],
        correctAnswer: 2
    },
    {
        question: "Tim sepak bola mana yang memenangkan Piala Dunia 2014?",
        options: ["Argentina", "Jerman", "Brasil", "Belanda"],
        correctAnswer: 1
    },
    {
        question: "Siapa pelatih yang membawa Spanyol memenangkan Piala Dunia 2010?",
        options: ["Vicente del Bosque", "Luis Enrique", "Zinedine Zidane", "Carlo Ancelotti"],
        correctAnswer: 0
    },
    {
        question: "Siapakah pemain dengan jumlah gol terbanyak dalam sejarah Liga Inggris?",
        options: ["Wayne Rooney", "Sergio Agüero", "Thierry Henry", "Alan Shearer"],
        correctAnswer: 3
    },
    {
        question: "Di klub mana Lionel Messi memulai karir profesionalnya?",
        options: ["Paris Saint-Germain", "Barcelona", "Newell's Old Boys", "Boca Juniors"],
        correctAnswer: 1
    },
    {
        question: "Pemain manakah yang dikenal dengan julukan 'The Egyptian King'?",
        options: ["Mohamed Salah", "Mohamed Fathi", "Ahmed Hegazi", "Ramadan Sobhi"],
        correctAnswer: 0
    },
    {
        question: "Tim sepak bola manakah yang memenangkan Liga Champions Eropa 2020?",
        options: ["Bayern Munich", "Paris Saint-Germain", "Liverpool", "Manchester City"],
        correctAnswer: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    document.getElementById('question-text').textContent = currentQuestion.question;

    const optionButtons = document.querySelectorAll('.option-btn');
    optionButtons.forEach((button, index) => {
        button.textContent = currentQuestion.options[index];
        button.classList.remove('correct', 'incorrect'); // Reset warna
        button.disabled = false; // Enable kembali tombol setelah soal baru
    });

    // Menyembunyikan tombol "Next" sampai jawaban dipilih
    document.getElementById('next-btn').style.display = 'none';
}

function checkAnswer(selectedOption) {
    const currentQuestion = quizData[currentQuestionIndex];
    const optionButtons = document.querySelectorAll('.option-btn');

    // Beri warna pada tombol berdasarkan jawaban yang benar atau salah
    if (selectedOption === currentQuestion.correctAnswer) {
        score++;
        optionButtons[selectedOption].classList.add('correct');
    } else {
        optionButtons[selectedOption].classList.add('incorrect');
        optionButtons[currentQuestion.correctAnswer].classList.add('correct');
    }

    // Nonaktifkan tombol jawaban setelah memilih
    optionButtons.forEach(button => {
        button.disabled = true;
    });

    // Menampilkan tombol "Next"
    document.getElementById('next-btn').style.display = 'inline-block';
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('score-container').style.display = 'block';
    document.getElementById('score').textContent = score;
}

function restartQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    document.getElementById('quiz-container').style.display = 'block';
    document.getElementById('score-container').style.display = 'none';
    loadQuestion();
}

window.onload = loadQuestion;
