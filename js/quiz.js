// ── QUIZ ──
// TODO: Personalize these questions and answers!
const questions = [
  {
    q: "What is [Your Name]'s favorite food?",
    opts: ["[Food A]", "[Food B]", "[Food C]", "[Food D]"],
    ans: 0
  },
  {
    q: "Where did we go on our very first date?",
    opts: ["[Place A]", "[Place B]", "[Place C]", "[Place D]"],
    ans: 1
  },
  {
    q: "What movie do I never get tired of watching?",
    opts: ["[Movie A]", "[Movie B]", "[Movie C]", "[Movie D]"],
    ans: 2
  },
  {
    q: "What's my love language?",
    opts: ["Words of Affirmation", "Quality Time", "Acts of Service", "Physical Touch"],
    ans: 1
  },
  {
    q: "How do I feel about you right now?",
    opts: ["Pretty okay", "Really happy", "So in love", "All of the above 💕"],
    ans: 3
  }
];

let current = 0, score = 0, answered = false;

function renderQuestion() {
  const q = questions[current];
  const qNumElem = document.getElementById('q-num');
  const qTextElem = document.getElementById('q-text');
  const qBarElem = document.getElementById('quiz-bar');
  const optsElem = document.getElementById('q-opts');

  if (!qNumElem || !qTextElem || !qBarElem || !optsElem) return;

  qNumElem.textContent = `Question ${current + 1} of ${questions.length}`;
  qTextElem.textContent = q.q;
  qBarElem.style.width = (current / questions.length * 100) + '%';
  optsElem.innerHTML = '';
  
  q.opts.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-opt';
    btn.textContent = opt;
    btn.onclick = () => selectAnswer(i);
    optsElem.appendChild(btn);
  });
  answered = false;
}

function selectAnswer(i) {
  if (answered) return;
  answered = true;
  const q = questions[current];
  const btns = document.querySelectorAll('.quiz-opt');
  btns[q.ans].classList.add('correct');
  if (i !== q.ans) btns[i].classList.add('wrong');
  else score++;
  
  setTimeout(() => {
    current++;
    if (current < questions.length) {
      renderQuestion();
    } else {
      showResult();
    }
  }, 1000);
}

function showResult() {
  const qBarElem = document.getElementById('quiz-bar');
  const qBodyElem = document.getElementById('quiz-body');
  const qScoreElem = document.getElementById('quiz-score');
  const qMsgElem = document.getElementById('quiz-msg');
  const qResultElem = document.getElementById('quiz-result');

  if (qBarElem) qBarElem.style.width = '100%';
  if (qBodyElem) qBodyElem.style.display = 'none';
  if (qScoreElem) qScoreElem.textContent = `${score}/${questions.length}`;
  
  const msgs = [
    "We still have some catching up to do! 😄",
    "Not bad! Keep paying attention. 💬",
    "Pretty good! You know me well. 🌸",
    "You almost have me figured out! 💕",
    "You know me so well. I love you! 💕💕"
  ];
  
  if (qMsgElem) qMsgElem.textContent = msgs[score] || msgs[4];
  if (qResultElem) qResultElem.classList.add('show');
  
  // Trigger confetti for perfect score
  if (score === questions.length) {
    triggerConfetti();
  }
}

function triggerConfetti() {
  const container = document.getElementById('confetti-container');
  if (!container) return;
  
  const icons = ['ph-fill ph-heart', 'ph-fill ph-paw-print', 'ph-fill ph-cat', 'ph-fill ph-star'];
  const colors = ['#bfa97e', '#c9a87c', '#8a7656', '#f0ebe0'];
  
  for (let i = 0; i < 50; i++) {
    setTimeout(function() {
      const confetti = document.createElement('i');
      confetti.className = icons[Math.floor(Math.random() * icons.length)] + ' confetti';
      confetti.style.left = Math.random() * 100 + '%';
      confetti.style.color = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.animationDuration = (2 + Math.random() * 2) + 's';
      container.appendChild(confetti);
      
      setTimeout(function() {
        confetti.remove();
      }, 4000);
    }, i * 30);
  }
}

function resetQuiz() {
  current = 0; score = 0;
  const qBodyElem = document.getElementById('quiz-body');
  const qResultElem = document.getElementById('quiz-result');
  
  if (qBodyElem) qBodyElem.style.display = 'block';
  if (qResultElem) qResultElem.classList.remove('show');
  renderQuestion();
}

// Initialize quiz
renderQuestion();
