// Stan aplikacji
let currentQuestionIndex = 0;
let userAnswers = [];
let checked = false;
let results = []; // Przechowuje wyniki wszystkich pytań

// Elementy DOM
const questionText = document.getElementById("questionText");
const answersContainer = document.getElementById("answersContainer");
const checkBtn = document.getElementById("checkBtn");
const nextBtn = document.getElementById("nextBtn");
const progressFill = document.getElementById("progressFill");
const currentQuestionSpan = document.getElementById("currentQuestion");
const totalQuestionsSpan = document.getElementById("totalQuestions");
const lectureBadge = document.getElementById("lectureBadge");

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
  progressFill.style.width = `${
    ((currentQuestionIndex + 1) / questions.length) * 100
  }%`;

  // Wyczyść kontener odpowiedzi
  answersContainer.innerHTML = "";

  // Utwórz checkboxy dla odpowiedzi
  question.answers.forEach((answer, index) => {
    const answerItem = document.createElement("div");
    answerItem.className = "answer-item";
    answerItem.id = `answer-${index}`;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = `checkbox-${index}`;
    checkbox.value = index;
    checkbox.addEventListener("change", handleCheckboxChange);

    const label = document.createElement("label");
    label.htmlFor = `checkbox-${index}`;
    label.textContent = answer.text;

    answerItem.appendChild(checkbox);
    answerItem.appendChild(label);
    answersContainer.appendChild(answerItem);
  });

  // Reset przycisków
  checkBtn.disabled = false; // Zawsze aktywny, bo niektóre pytania mogą nie mieć poprawnej odpowiedzi
  checkBtn.style.display = "inline-block";
  nextBtn.style.display = "none";
}

// Obsługa zmiany checkboxa
function handleCheckboxChange(event) {
  const index = parseInt(event.target.value);

  if (event.target.checked) {
    userAnswers.push(index);
  } else {
    userAnswers = userAnswers.filter((i) => i !== index);
  }
}

// Sprawdzanie odpowiedzi
function checkAnswers() {
  if (checked) return;

  checked = true;
  const question = questions[currentQuestionIndex];

  // Wyłącz wszystkie checkboxy
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((cb) => {
    cb.disabled = true;
  });

  // Sprawdź poprawność odpowiedzi
  const correctAnswers = question.answers
    .map((answer, index) => (answer.correct ? index : -1))
    .filter((index) => index !== -1);

  const selectedAnswers = [...userAnswers].sort();
  const correctAnswersSorted = [...correctAnswers].sort();

  // Porównaj odpowiedzi użytkownika z poprawnymi
  const isCorrect =
    selectedAnswers.length === correctAnswersSorted.length &&
    selectedAnswers.every((val, idx) => val === correctAnswersSorted[idx]);

  // Zapisz wynik
  results.push({
    questionId: question.id,
    question: question.question,
    lecture: question.lecture,
    userAnswers: [...userAnswers],
    correctAnswers: correctAnswers,
    isCorrect: isCorrect,
    answers: question.answers,
  });

  // Oznacz odpowiedzi
  question.answers.forEach((answer, index) => {
    const answerItem = document.getElementById(`answer-${index}`);
    const isSelected = userAnswers.includes(index);
    const isCorrect = answer.correct;

    answerItem.classList.add("disabled");

    if (isCorrect) {
      // Poprawna odpowiedź - zawsze zielona
      answerItem.classList.add("correct-answer");
    } else if (isSelected) {
      // Użytkownik wybrał niepoprawną odpowiedź - czerwona
      answerItem.classList.add("incorrect-answer");
    }
  });

  // Pokaż przycisk następnego pytania
  checkBtn.style.display = "none";
  nextBtn.style.display = "inline-block";
}

// Następne pytanie
function nextQuestion() {
  currentQuestionIndex++;
  loadQuestion();
}

// Pokaż końcowy wynik
function showFinalScore() {
  const correctCount = results.filter((r) => r.isCorrect).length;
  const totalCount = results.length;
  const percentage = Math.round((correctCount / totalCount) * 100);

  // Ukryj główne elementy
  checkBtn.style.display = "none";
  nextBtn.style.display = "none";
  lectureBadge.style.display = "none";

  // Wyświetl podsumowanie
  questionText.innerHTML = `
        <div class="summary-header">
            <h2>🎉 Quiz zakończony!</h2>
            <div class="score-summary">
                <div class="score-circle">
                    <div class="score-number">${correctCount}/${totalCount}</div>
                    <div class="score-percentage">${percentage}%</div>
                </div>
            </div>
        </div>
    `;

  // Wyświetl wszystkie pytania z odpowiedziami
  answersContainer.innerHTML =
    '<h3 class="summary-title">Podsumowanie odpowiedzi:</h3>';

  results.forEach((result, index) => {
    const questionCard = document.createElement("div");
    questionCard.className = `summary-question-card ${
      result.isCorrect ? "correct-question" : "incorrect-question"
    }`;

    const statusIcon = result.isCorrect ? "✅" : "❌";
    const statusText = result.isCorrect ? "Poprawnie" : "Niepoprawnie";

    questionCard.innerHTML = `
            <div class="summary-question-header">
                <span class="question-number">Pytanie ${index + 1}</span>
                <span class="question-status ${
                  result.isCorrect ? "status-correct" : "status-incorrect"
                }">
                    ${statusIcon} ${statusText}
                </span>
            </div>
            <div class="summary-lecture">${result.lecture}</div>
            <div class="summary-question-text">${result.question}</div>
            <div class="summary-answers">
                ${result.answers
                  .map((answer, ansIndex) => {
                    const isUserSelected =
                      result.userAnswers.includes(ansIndex);
                    const isCorrect = answer.correct;
                    let answerClass = "";
                    let icon = "";

                    if (isCorrect && isUserSelected) {
                      answerClass = "summary-answer-correct-selected";
                      icon = "✓";
                    } else if (isCorrect && !isUserSelected) {
                      answerClass = "summary-answer-correct-missed";
                      icon = "";
                    } else if (!isCorrect && isUserSelected) {
                      answerClass = "summary-answer-incorrect-selected";
                      icon = "✗";
                    } else {
                      answerClass = "summary-answer-neutral";
                      icon = "";
                    }

                    return `
                        <div class="summary-answer-item ${answerClass}">
                            <span class="answer-icon">${icon}</span>
                            <span class="answer-text">${answer.text}</span>
                            ${
                              isUserSelected
                                ? '<span class="user-selected-badge">Twoja odpowiedź</span>'
                                : ""
                            }
                        </div>
                    `;
                  })
                  .join("")}
            </div>
        `;

    answersContainer.appendChild(questionCard);
  });

  // Dodaj przycisk restartu
  const restartBtn = document.createElement("button");
  restartBtn.className = "btn btn-secondary";
  restartBtn.textContent = "Rozpocznij od nowa";
  restartBtn.style.marginTop = "30px";
  restartBtn.addEventListener("click", () => {
    location.reload();
  });
  answersContainer.appendChild(restartBtn);
}

// Event listeners
checkBtn.addEventListener("click", checkAnswers);
nextBtn.addEventListener("click", nextQuestion);
