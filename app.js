let questions = [];
let currentQuestion = 0;
let score = 0;
let canAnswer = true; // Prevent double answers

// Load questions from JSON file
fetch("./questions.json")
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Handle multiple arrays by flattening
    if (Array.isArray(data)) {
      // Check if first element is an array (multiple arrays)
      if (data.length > 0 && Array.isArray(data[0])) {
        questions = data.flat();
      } else {
        questions = data;
      }
    }
    
    console.log("Loaded " + questions.length + " questions");
    
    if (questions.length === 0) {
      throw new Error("No questions loaded!");
    }
    
    showQuestion();
    updateScore();
  })
  .catch(error => {
    console.error("Error:", error);
    document.getElementById("question").innerHTML = "❌ Failed to load questions.<br>Check that questions.json exists and is valid JSON.";
    document.getElementById("options").innerHTML = "";
  });

function showQuestion() {
  if (!questions.length || currentQuestion >= questions.length) return;
  
  const q = questions[currentQuestion];
  const questionNumber = currentQuestion + 1;
  
  document.getElementById("question").innerHTML = `Question ${questionNumber}/${questions.length}<br>${q.question}`;
  
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  canAnswer = true;

  q.options.forEach((option, index) => {
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
  if (!canAnswer) return; // Prevent multiple answers
  canAnswer = false;
  
  const correct = questions[currentQuestion].answer;
  const isCorrect = (selected === correct);
  
  if (isCorrect) {
    score++;
  }
  
  // Show feedback
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
  
  // Update score display
  updateScore();
  
  // Disable all option buttons
  const allBtns = document.querySelectorAll(".option-btn");
  allBtns.forEach(btn => btn.disabled = true);
  
  // Auto-advance to next question after delay
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
  let gradeMessage = "";
  
  if (percentage >= 90) gradeMessage = "🎉 Excellent! 🎉";
  else if (percentage >= 70) gradeMessage = "👍 Good job! 👍";
  else if (percentage >= 50) gradeMessage = "📚 Keep studying! 📚";
  else gradeMessage = "💪 Try again! 💪";
  
  document.getElementById("question").innerHTML = `
    🏆 Quiz Complete! 🏆<br><br>
    ${gradeMessage}<br><br>
    Your Score: ${score} / ${questions.length}<br>
    (${percentage}%)
  `;
  document.getElementById("options").innerHTML = "";
  document.getElementById("nextBtn").style.display = "none";
  
  // Add restart button
  const restartBtn = document.createElement("button");
  restartBtn.innerText = "🔄 Restart Quiz";
  restartBtn.className = "restart-btn";
  restartBtn.onclick = () => location.reload();
  document.querySelector(".container").appendChild(restartBtn);
}

// Next button handler
document.getElementById("nextBtn").addEventListener("click", () => {
  // Don't allow next if waiting for timeout or quiz is complete
  const btns = document.querySelectorAll(".option-btn");
  if (btns.length > 0 && btns[0].disabled && btns[0].parentElement.querySelector(".message")) {
    return; // Still showing feedback
  }
  
  if (currentQuestion < questions.length && !canAnswer) {
    // Force move to next if user clicks Next instead of waiting
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      completeQuiz();
    }
  }
});
