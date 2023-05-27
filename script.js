
const quizData = [
    {
      question: "Which of the following words is a synonym for 'happy'?",
      options: ["Sad", "Joyful", "Angry", "Confused"],
      answer: "Joyful"
    },
    {
      question: "What is the plural form of 'child'?",
      options: ["Children", "Childs", "Childes", "Childer"],
      answer: "Children"
    },
    {
      question: "Which of the following is a preposition?",
      options: ["Jump", "Run", "With", "Sing"],
      answer: "With"
    },
    {
      question: "What is the comparative form of 'good'?",
      options: ["Better", "Gooder", "Goodest", "Well"],
      answer: "Better"
    },
    {
      question: "Which of the following is a conjunction?",
      options: ["Fast", "And", "Big", "Under"],
      answer: "And"
    }
  ];
  

  
  const container = document.querySelector(".container");
  const questionElem = document.getElementById("question");
  const optionsElem = document.getElementById("options");
  const submitBtn = document.getElementById("submit");
  const scoreElem = document.getElementById("score");
  
  let currentQuestion = 0;
  let score = 0;
  

  function displayQuestion() {
    const currentQuiz = quizData[currentQuestion];
    questionElem.textContent = currentQuiz.question;
  
    optionsElem.innerHTML = "";
    currentQuiz.options.forEach(option => {
      const radioElem = document.createElement("input");
      radioElem.type = "radio";
      radioElem.name = "answer";
      radioElem.value = option;
      optionsElem.appendChild(radioElem);
  
      const labelElem = document.createElement("label");
      labelElem.textContent = option;
      optionsElem.appendChild(labelElem);
  
      optionsElem.appendChild(document.createElement("br"));
    });
  }

  function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
      if (selectedAnswer.value === quizData[currentQuestion].answer) {
        score++;
      }
      currentQuestion++;
  
      if (currentQuestion < quizData.length) {
        displayQuestion();
      } else {
        let message = "";
        let emoji = "";
  
        if (score === 0 || score === 1) {
          message = "Oh no! Better luck next time!";
          emoji = "😞";
        } else if (score === 2 || score === 3 || score === 4) {
          message = "Good effort! Keep practicing!";
          emoji = "👍";
        } else if (score === 5) {
          message = "Congratulations! You got a perfect score!";
          emoji = "🎉";
        }
  
        container.innerHTML = `<h2>Quiz Completed</h2><p>Your score: ${score}/${quizData.length}</p><p>${message}</p><p>${emoji}</p>`;
      }
    }
  }
  
  submitBtn.addEventListener("click", checkAnswer);
  displayQuestion();
  