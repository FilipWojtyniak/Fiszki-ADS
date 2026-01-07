// Stan aplikacji
let currentQuestionIndex = 0;
let userAnswers = [];
let checked = false;

// Elementy DOM
const questionText = document.getElementById('questionText');
const answersContainer = document.getElementById('answersContainer');
const checkBtn = document.getElementById('checkBtn');
const nextBtn = document.getElementById('nextBtn');
const progressFill = document.getElementById('progressFill');
const currentQuestionSpan = document.getElementById('currentQuestion');
const totalQuestionsSpan = document.getElementById('totalQuestions');
const lectureBadge = document.getElementById('lectureBadge');

// Inicjalizacja
totalQuestionsSpan.textContent = questions.length;
loadQuestion();

// Funkcja ładowania pytania
function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showFinalScore();
        return;
    }

    const question = questions[currentQuestionIndex];
    checked = false;
    userAnswers = [];

    // Aktualizuj UI
    questionText.textContent = question.question;
    lectureBadge.textContent = question.lecture;
    currentQuestionSpan.textContent = currentQuestionIndex + 1;
    progressFill.style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;

    // Wyczyść kontener odpowiedzi
    answersContainer.innerHTML = '';

    // Utwórz checkboxy dla odpowiedzi
    question.answers.forEach((answer, index) => {
        const answerItem = document.createElement('div');
        answerItem.className = 'answer-item';
        answerItem.id = `answer-${index}`;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `checkbox-${index}`;
        checkbox.value = index;
        checkbox.addEventListener('change', handleCheckboxChange);

        const label = document.createElement('label');
        label.htmlFor = `checkbox-${index}`;
        label.textContent = answer.text;

        answerItem.appendChild(checkbox);
        answerItem.appendChild(label);
        answersContainer.appendChild(answerItem);
    });

    // Reset przycisków
    checkBtn.disabled = true;
    checkBtn.style.display = 'inline-block';
    nextBtn.style.display = 'none';
}

// Obsługa zmiany checkboxa
function handleCheckboxChange(event) {
    const index = parseInt(event.target.value);
    
    if (event.target.checked) {
        userAnswers.push(index);
    } else {
        userAnswers = userAnswers.filter(i => i !== index);
    }

    // Włącz przycisk sprawdzania jeśli wybrano przynajmniej jedną odpowiedź
    checkBtn.disabled = userAnswers.length === 0;
}

// Sprawdzanie odpowiedzi
function checkAnswers() {
    if (checked) return;
    
    checked = true;
    const question = questions[currentQuestionIndex];
    
    // Wyłącz wszystkie checkboxy
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(cb => {
        cb.disabled = true;
    });

    // Oznacz odpowiedzi
    question.answers.forEach((answer, index) => {
        const answerItem = document.getElementById(`answer-${index}`);
        const isSelected = userAnswers.includes(index);
        const isCorrect = answer.correct;

        answerItem.classList.add('disabled');

        if (isCorrect) {
            // Poprawna odpowiedź - zawsze zielona
            answerItem.classList.add('correct-answer');
        } else if (isSelected) {
            // Użytkownik wybrał niepoprawną odpowiedź - czerwona
            answerItem.classList.add('incorrect-answer');
        }
    });

    // Pokaż przycisk następnego pytania
    checkBtn.style.display = 'none';
    nextBtn.style.display = 'inline-block';
}

// Następne pytanie
function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

// Pokaż końcowy wynik
function showFinalScore() {
    questionText.textContent = 'Gratulacje! Ukończyłeś quiz!';
    answersContainer.innerHTML = '';
    checkBtn.style.display = 'none';
    nextBtn.style.display = 'none';
    lectureBadge.style.display = 'none';
}

// Event listeners
checkBtn.addEventListener('click', checkAnswers);
nextBtn.addEventListener('click', nextQuestion);

