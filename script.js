let currentPage = 0;
let userAnswers = [];
const questionsPerPage = 5;

function loadQuestionsPage() {
  const start = currentPage * questionsPerPage;
  const end = Math.min(start + questionsPerPage, questions.length);
  const quizContainer = document.getElementById("quiz-container");
  quizContainer.innerHTML = "";

  for (let i = start; i < end; i++) {
    const q = questions[i];
    const isMultiple = q.correct.length > 1;
    const questionElem = document.createElement("div");
    questionElem.className = "question-block";

    questionElem.innerHTML = `
      <div class="question-text">Pregunta ${i + 1}: ${q.question}</div>
      <form class="answers" id="answers-${i}"></form>
      <button class="validate-btn" onclick="validateAnswer(${i}); return false;">Validar</button>
      <div class="feedback" id="feedback-${i}"></div>
    `;

    quizContainer.appendChild(questionElem);

    const answersContainer = document.getElementById(`answers-${i}`);

    q.answers.forEach((answer, idx) => {
      const inputType = isMultiple ? "checkbox" : "radio";
      const id = `q${i}_a${idx}`;
      const input = document.createElement("input");
      input.type = inputType;
      input.name = `question-${i}`;
      input.value = idx;
      input.id = id;

      const label = document.createElement("label");
      label.setAttribute("for", id);
      label.textContent = answer;

      const wrapper = document.createElement("div");
      wrapper.appendChild(input);
      wrapper.appendChild(label);

      answersContainer.appendChild(wrapper);
    });
  }

  document.getElementById("result").classList.add("hidden");
}


function selectAnswer(questionIndex, answerIndex, button) {
  userAnswers[questionIndex] = answerIndex;

  const buttons = document.querySelectorAll(`#answers-${questionIndex} .answer-btn`);
  buttons.forEach(btn => btn.classList.remove("selected"));
  button.classList.add("selected");
}

function validateAnswer(index) {
  const inputs = document.querySelectorAll(`#answers-${index} input`);
  const selected = [];

  inputs.forEach((input, i) => {
    if (input.checked) {
      selected.push(Number(input.value));
    }
  });

  const correctAnswers = questions[index].correct;
  const feedback = document.getElementById(`feedback-${index}`);

  if (selected.length === 0) {
    feedback.textContent = "❗ Debes seleccionar al menos una respuesta.";
    feedback.style.color = "orange";
    return;
  }

  const isCorrect =
    selected.length === correctAnswers.length &&
    selected.every(val => correctAnswers.includes(val));

  if (isCorrect) {
    feedback.textContent = "✅ ¡Correcto!";
    feedback.style.color = "green";
  } else {
    const correctText = correctAnswers.map(i => questions[index].answers[i]).join(", ");
    feedback.textContent = `❌ Incorrecto. La(s) respuesta(s) correcta(s): ${correctText}`;
    feedback.style.color = "red";
  }
}


function nextQuestion() {
  if ((currentPage + 1) * questionsPerPage < questions.length) {
    currentPage++;
    loadQuestionsPage();
  }
}

function previousQuestion() {
  if (currentPage > 0) {
    currentPage--;
    loadQuestionsPage();
  }
}

function submitQuiz() {
  let score = 0;
  questions.forEach((q, i) => {
    if (q.correct.includes(userAnswers[i])) score++;
  });

  const result = document.getElementById("result");
  const message = score >= questions.length * 0.6
    ? "¡Aprobado!"
    : "No aprobado. Intenta de nuevo.";

  result.innerHTML = `
    <h2 id="score">Has obtenido ${score} de ${questions.length} puntos</h2>
    <p>${message}</p>
    <button onclick="restartQuiz()">Reiniciar Test</button>
  `;

  document.getElementById("quiz-container").classList.add("hidden");
  result.classList.remove("hidden");
}

function restartQuiz() {
  userAnswers = [];
  currentPage = 0;
  loadQuestionsPage();
  document.getElementById("result").classList.add("hidden");
  document.getElementById("quiz-container").classList.remove("hidden");
}

window.onload = () => {
  loadQuestionsPage();
};

