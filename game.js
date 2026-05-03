// -----------------------------
// GAME STATE
// -----------------------------
let currentIndex = 0;
let score = 0;
let countries = [];
let firstTry = true;

// -----------------------------
// DOM ELEMENTS
// -----------------------------
const startScreen = document.getElementById("start-screen");
const startButton = document.getElementById("start-button");

const gameContainer = document.getElementById("game-container");
const flagImage = document.getElementById("flag-image");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options");
const feedback = document.getElementById("feedback");
const progressBar = document.getElementById("progress-bar");

const endScreen = document.getElementById("end-screen");
const finalScore = document.getElementById("final-score");
const playAgain = document.getElementById("play-again");

// -----------------------------
// SOUNDS
// -----------------------------
const correctSound = new Audio("sounds/correct.mp3");
const wrongSound = new Audio("sounds/wrong.mp3");

// -----------------------------
// START GAME
// -----------------------------
startButton.addEventListener("click", () => {
  startScreen.classList.add("hidden");
  gameContainer.classList.remove("hidden");

  countries = [...COUNTRIES];
  shuffleArray(countries);

  currentIndex = 0;
  score = 0;

  loadQuestion();
});

// -----------------------------
// LOAD FLAG QUESTION
// -----------------------------
function loadQuestion() {
  feedback.textContent = "";
  firstTry = true;

  const item = countries[currentIndex];

  // Progress bar
  const progress = (currentIndex / countries.length) * 100;
  progressBar.style.width = progress + "%";

  // Show flag
  flagImage.onerror = null;
  flagImage.src = item.flagImage;

  questionText.textContent = "Which country does this flag belong to?";

  const options = generateCountryOptions(item.country);
  displayOptions(options, item.country, true);
}

// -----------------------------
// GENERATE COUNTRY OPTIONS
// -----------------------------
function generateCountryOptions(correctCountry) {
  const options = [correctCountry];

  while (options.length < 4) {
    const random = countries[Math.floor(Math.random() * countries.length)].country;
    if (!options.includes(random)) {
      options.push(random);
    }
  }

  shuffleArray(options);
  return options;
}

// -----------------------------
// DISPLAY OPTIONS
// -----------------------------
function displayOptions(options, correctAnswer, isCountryQuestion) {
  optionsContainer.innerHTML = "";

  options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;

    btn.addEventListener("click", () => {
      if (option === correctAnswer) {
        correctSound.play();
        feedback.textContent = "Correct!";
        feedback.style.color = "green";

        if (firstTry) score++;

        setTimeout(() => {
          if (isCountryQuestion) {
            loadCapitalQuestion();
          } else {
            nextQuestion();
          }
        }, 800);

      } else {
        wrongSound.play();
        feedback.textContent = "Try again!";
        feedback.style.color = "red";
        firstTry = false;
      }
    });

    optionsContainer.appendChild(btn);
  });
}

// -----------------------------
// CAPITAL QUESTION
// -----------------------------
function loadCapitalQuestion() {
  feedback.textContent = "";
  firstTry = true;

  const item = countries[currentIndex];

  // Pick a landmark image
  const landmark = item.capitalImages[
    Math.floor(Math.random() * item.capitalImages.length)
  ];

  // Load landmark with delayed fallback to flag
  flagImage.onerror = () => {
    setTimeout(() => {
      flagImage.onerror = null;
      flagImage.src = item.flagImage;
    }, 500);
  };

  flagImage.src = landmark.url;

  // Correct question wording
  questionText.textContent = `Which city is the capital of ${item.country}?`;

  const options = generateCapitalOptions(item.capital);
  displayOptions(options, item.capital, false);
}

// -----------------------------
// GENERATE CAPITAL OPTIONS
// -----------------------------
function generateCapitalOptions(correctCapital) {
  const options = [correctCapital];

  while (options.length < 4) {
    const random = countries[Math.floor(Math.random() * countries.length)].capital;
    if (!options.includes(random)) {
      options.push(random);
    }
  }

  shuffleArray(options);
  return options;
}

// -----------------------------
// NEXT QUESTION
// -----------------------------
function nextQuestion() {
  currentIndex++;

  if (currentIndex >= countries.length) {
    endGame();
  } else {
    loadQuestion();
  }
}

// -----------------------------
// END GAME
// -----------------------------
function endGame() {
  gameContainer.classList.add("hidden");
  endScreen.classList.remove("hidden");

  finalScore.textContent = `${score} / ${countries.length}`;
}

// -----------------------------
// PLAY AGAIN
// -----------------------------
playAgain.addEventListener("click", () => {
  endScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");
});

// -----------------------------
// SHUFFLE ARRAY
// -----------------------------
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}
