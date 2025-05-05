let currentPage = 0;
let userAnswers = {}; // Se cambió a objeto para manejar múltiples respuestas
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

      // Restaurar selección previa
      if (userAnswers[i] && userAnswers[i].includes(idx)) {
        input.checked = true;
      }

      input.addEventListener("change", () => saveUserAnswer(i, idx, isMultiple));

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

function saveUserAnswer(questionIndex, answerIndex, isMultiple) {
  if (!isMultiple) {
    userAnswers[questionIndex] = [answerIndex]; 
  } else {
    if (!userAnswers[questionIndex]) {
      userAnswers[questionIndex] = [];
    }
    if (userAnswers[questionIndex].includes(answerIndex)) {
      userAnswers[questionIndex] = userAnswers[questionIndex].filter(a => a !== answerIndex);
    } else {
      userAnswers[questionIndex].push(answerIndex);
    }
  }
}

function nextQuestion() {
    if ((currentPage + 1) * questionsPerPage < questions.length) {
        currentPage++;
        console.log("Página actual:", currentPage);
        loadQuestionsPage();
    }
}

function previousQuestion() {
    if (currentPage > 0) {
        currentPage--;
        console.log("Página actual:", currentPage);
        loadQuestionsPage();
    }
}
function validateAnswer(questionIndex) {
  const selectedAnswers = [...document.querySelectorAll(`#answers-${questionIndex} input:checked`)]
                         .map(input => parseInt(input.value));

  const correctAnswers = questions[questionIndex].correct;

  const feedbackElem = document.getElementById(`feedback-${questionIndex}`);
  
  if (JSON.stringify(selectedAnswers.sort()) === JSON.stringify(correctAnswers.sort())) {
    feedbackElem.textContent = "✅ ¡Correcto!";
    feedbackElem.style.color = "green";
  } else {
    feedbackElem.textContent = "❌ Incorrecto. Intenta de nuevo.";
    feedbackElem.style.color = "red";
  }
}
console.log("Preguntas cargadas:", questions);
window.onload = () => {
  loadQuestionsPage();
};


