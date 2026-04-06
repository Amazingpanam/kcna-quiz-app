// Questions embedded directly (first 5 questions - add all later)
let questions = [
  {
    "question": "What native runtime is Open Container Initiative (OCI) compliant?",
    "options": ["runC", "runV", "kata-containers", "gvisor"],
    "answer": "runC"
  },
  {
    "question": "Which API object is the recommended way to run a scalable, stateless application?",
    "options": ["ReplicaSet", "Deployment", "DaemonSet", "Pod"],
    "answer": "Deployment"
  },
  {
    "question": "What is kubelet?",
    "options": ["Dashboard", "Network proxy", "Scheduler", "Agent that ensures containers run in Pods"],
    "answer": "Agent that ensures containers run in Pods"
  },
  {
    "question": "CI/CD stands for?",
    "options": ["Continuous Info/Development", "Continuous Integration/Development", "Cloud Integration/Cloud Development", "Continuous Integration/Continuous Deployment"],
    "answer": "Continuous Integration/Continuous Deployment"
  },
  {
    "question": "What does kube-proxy do?",
    "options": ["Ingress control", "Forward traffic to endpoints", "Manage egress", "Manage API access"],
    "answer": "Forward traffic to endpoints"
  }
];

let currentQuestion = 0;
let score = 0;
let canAnswer = true;

function showQuestion() {
  if (!questions.length || currentQuestion >= questions.length) return;
  
  const q = questions[currentQuestion];
  const questionNumber = currentQuestion + 1;
  
  document.getElementById("question").innerHTML = `Question ${questionNumber}/${questions.length}<br>${q.question}`;
  
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  canAnswer = true;

  q.options.forEach((option) => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.className = "option-btn";
    btn.onclick = () => checkAnswer(option);
    optionsDiv.appendChild(btn);
  });
}

function updateScore() {
  document.getElementById("score").innerHTML = `📊 Score: ${score} / ${questions.length}`;
}

function checkAnswer(selected) {
  if (!canAnswer) return;
  canAnswer = false;
  
  const correct = questions[currentQuestion].answer;
  const isCorrect = (selected === correct);
  
  if (isCorrect) {
    score++;
  }
  
  const messageDiv = document.createElement("div");
  messageDiv.className = "message";
  
  if (isCorrect) {
    messageDiv.innerHTML = "✅ Correct!";
    messageDiv.style.backgroundColor = "#d4edda";
    messageDiv.style.color = "#155724";
  } else {
    messageDiv.innerHTML = `❌ Wrong! Correct answer: ${correct}`;
    messageDiv.style.backgroundColor = "#f8d7da";
    messageDiv.style.color = "#721c24";
  }
  
  const optionsDiv = document.getElementById("options");
  optionsDiv.appendChild(messageDiv);
  updateScore();
  
  const allBtns = document.querySelectorAll(".option-btn");
  allBtns.forEach(btn => btn.disabled = true);
  
  setTimeout(() => {
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      completeQuiz();
    }
  }, 1500);
}

function completeQuiz() {
  const percentage = Math.round((score / questions.length) * 100);
  document.getElementById("question").innerHTML = `🏆 Quiz Complete! 🏆<br><br>Your Score: ${score} / ${questions.length}<br>(${percentage}%)`;
  document.getElementById("options").innerHTML = "";
  document.getElementById("nextBtn").style.display = "none";
  
  const restartBtn = document.createElement("button");
  restartBtn.innerText = "🔄 Restart Quiz";
  restartBtn.className = "restart-btn";
  restartBtn.onclick = () => location.reload();
  document.querySelector(".container").appendChild(restartBtn);
}

document.getElementById("nextBtn").addEventListener("click", () => {
  const btns = document.querySelectorAll(".option-btn");
  if (btns.length > 0 && btns[0].disabled && btns[0].parentElement.querySelector(".message")) {
    return;
  }
  
  if (currentQuestion < questions.length && !canAnswer) {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      completeQuiz();
    }
  }
});

// Initialize
showQuestion();
updateScore();
