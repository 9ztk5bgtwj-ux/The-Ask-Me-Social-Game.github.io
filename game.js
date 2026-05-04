/**
 * THE ASK ME SOCIAL GAME - VERSION 4.0
 * Hard-coded Direct URLs - No dynamic construction
 */

const COUNTRIES = [
    { 
        country: "Canada", 
        capital: "Ottawa", 
        flagImage: "https://flagcdn.com/w640/ca.png", 
        capitalImages: [{ url: "https://images.unsplash.com/photo-1559511260-66a654ae982a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }] 
    },
    { 
        country: "Brazil", 
        capital: "Brasilia", 
        flagImage: "https://flagcdn.com/w640/br.png", 
        capitalImages: [{ url: "https://images.unsplash.com/photo-1562916600-47fa364e12e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }] 
    },
    { 
        country: "Portugal", 
        capital: "Lisbon", 
        flagImage: "https://flagcdn.com/w640/pt.png", 
        capitalImages: [{ url: "https://images.unsplash.com/photo-1580238150334-118858686e0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }] 
    },
    { 
        country: "France", 
        capital: "Paris", 
        flagImage: "https://flagcdn.com/w640/fr.png", 
        capitalImages: [{ url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }] 
    },
    { 
        country: "Japan", 
        capital: "Tokyo", 
        flagImage: "https://flagcdn.com/w640/jp.png", 
        capitalImages: [{ url: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }] 
    },
    { 
        country: "Italy", 
        capital: "Rome", 
        flagImage: "https://flagcdn.com/w640/it.png", 
        capitalImages: [{ url: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }] 
    },
    { 
        country: "United Kingdom", 
        capital: "London", 
        flagImage: "https://flagcdn.com/w640/gb.png", 
        capitalImages: [{ url: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }] 
    },
    { 
        country: "USA", 
        capital: "Washington D.C.", 
        flagImage: "https://flagcdn.com/w640/us.png", 
        capitalImages: [{ url: "https://images.unsplash.com/photo-1501466044931-62695aada8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }] 
    }
    // Add other countries following this EXACT URL pattern
];

let currentIndex = 0;
let isCountryQuestion = true;
let score = 0;
let firstTry = true;
let soundEnabled = false;

const imgElement = document.getElementById('flag-image');
const questionText = document.getElementById('question-text');
const optionsGrid = document.getElementById('options-grid');
const progressBar = document.getElementById('progress-bar');
const scoreDisplay = document.getElementById('score-display');

const correctSound = new Audio('sounds/correct.mp3');
const wrongSound = new Audio('sounds/wrong.mp3');

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

document.getElementById('start-btn').onclick = () => {
    soundEnabled = true;
    shuffleArray(COUNTRIES);
    currentIndex = 0;
    score = 0;
    scoreDisplay.innerText = `Score: 0`;
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('game-screen').classList.remove('hidden');
    loadQuestion();
};

function loadQuestion() {
    const data = COUNTRIES[currentIndex];
    firstTry = true;
    updateProgress();

    // Reset the image source to empty first to force a clean swap
    imgElement.src = ""; 

    if (isCountryQuestion) {
        imgElement.src = data.flagImage;
        questionText.innerText = "Which country does this flag belong to?";
    } else {
        imgElement.src = data.capitalImages[0].url;
        questionText.innerText = `Which city is the capital of ${data.country}?`;
    }
    displayOptions(isCountryQuestion);
}

function displayOptions(isCountryType) {
    optionsGrid.innerHTML = '';
    const current = COUNTRIES[currentIndex];
    const correctAnswer = isCountryType ? current.country : current.capital;
    
    let pool = COUNTRIES.filter(c => c !== current);
    let distractors = pool.sort(() => 0.5 - Math.random())
                          .slice(0, 3)
                          .map(c => isCountryType ? c.country : c.capital);
    
    let choices = [...distractors, correctAnswer].sort(() => 0.5 - Math.random());

    choices.forEach(choice => {
        const btn = document.createElement('button');
        btn.innerText = choice;
        btn.onclick = () => checkAnswer(choice, correctAnswer, btn);
        optionsGrid.appendChild(btn);
    });
}

function checkAnswer(choice, correct, btn) {
    if (choice === correct) {
        btn.classList.add('correct');
        if (soundEnabled) { correctSound.currentTime = 0; correctSound.play(); }
        if (firstTry) score += 10;
        scoreDisplay.innerText = `Score: ${score}`;
        
        const buttons = optionsGrid.querySelectorAll('button');
        buttons.forEach(b => b.disabled = true);

        setTimeout(() => {
            if (isCountryQuestion) {
                isCountryQuestion = false;
                loadQuestion();
            } else {
                currentIndex++;
                isCountryQuestion = true;
                if (currentIndex < COUNTRIES.length) {
                    loadQuestion();
                } else {
                    showEndScreen();
                }
            }
        }, 1000);
    } else {
        btn.classList.add('wrong');
        if (soundEnabled) { wrongSound.currentTime = 0; wrongSound.play(); }
        btn.disabled = true;
        firstTry = false;
    }
}

function updateProgress() {
    const percent = (currentIndex / COUNTRIES.length) * 100;
    progressBar.style.width = percent + '%';
}

function showEndScreen() {
    document.getElementById('game-screen').classList.add('hidden');
    document.getElementById('end-screen').classList.remove('hidden');
    document.getElementById('final-score').innerText = `Final Score: ${score}`;
}

document.getElementById('restart-btn').onclick = () => {
    location.reload(); // Cleanest way to reset everything
};
