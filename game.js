const COUNTRIES = [
    { country: "France", capital: "Paris", flagImage: "https://flagcdn.com/w640/fr.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800", attribution: "Unsplash" }] },
    { country: "Japan", capital: "Tokyo", flagImage: "https://flagcdn.com/w640/jp.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800", attribution: "Unsplash" }] },
    { country: "Brazil", capital: "Brasilia", flagImage: "https://flagcdn.com/w640/br.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1510946702635-c3396b8240a1?auto=format&fit=crop&w=800", attribution: "Unsplash" }] },
    { country: "Italy", capital: "Rome", flagImage: "https://flagcdn.com/w640/it.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800", attribution: "Unsplash" }] },
    { country: "Egypt", capital: "Cairo", flagImage: "https://flagcdn.com/w640/eg.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=800", attribution: "Unsplash" }] },
    { country: "Canada", capital: "Ottawa", flagImage: "https://flagcdn.com/w640/ca.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?auto=format&fit=crop&w=800", attribution: "Unsplash" }] },
    { country: "Australia", capital: "Canberra", flagImage: "https://flagcdn.com/w640/au.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800", attribution: "Unsplash" }] },
    { country: "Germany", capital: "Berlin", flagImage: "https://flagcdn.com/w640/de.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?auto=format&fit=crop&w=800", attribution: "Unsplash" }] },
    { country: "India", capital: "New Delhi", flagImage: "https://flagcdn.com/w640/in.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1587474260584-1f20d4296c06?auto=format&fit=crop&w=800", attribution: "Unsplash" }] },
    { country: "United Kingdom", capital: "London", flagImage: "https://flagcdn.com/w640/gb.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800", attribution: "Unsplash" }] },
    { country: "South Korea", capital: "Seoul", flagImage: "https://flagcdn.com/w640/kr.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=800", attribution: "Unsplash" }] },
    { country: "Mexico", capital: "Mexico City", flagImage: "https://flagcdn.com/w640/mx.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1512813588311-50338b2c9aa6?auto=format&fit=crop&w=800", attribution: "Unsplash" }] },
    { country: "Greece", capital: "Athens", flagImage: "https://flagcdn.com/w640/gr.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1503152394-c571994fd383?auto=format&fit=crop&w=800", attribution: "Unsplash" }] },
    { country: "China", capital: "Beijing", flagImage: "https://flagcdn.com/w640/cn.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=800", attribution: "Unsplash" }] },
    { country: "Argentina", capital: "Buenos Aires", flagImage: "https://flagcdn.com/w640/ar.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?auto=format&fit=crop&w=800", attribution: "Unsplash" }] },
    { country: "Thailand", capital: "Bangkok", flagImage: "https://flagcdn.com/w640/th.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1501232829850-3dd2491d92aa?auto=format&fit=crop&w=800", attribution: "Unsplash" }] },
    { country: "Spain", capital: "Madrid", flagImage: "https://flagcdn.com/w640/es.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=800", attribution: "Unsplash" }] },
    { country: "South Africa", capital: "Pretoria", flagImage: "https://flagcdn.com/w640/za.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=800", attribution: "Unsplash" }] },
    { country: "Turkey", capital: "Ankara", flagImage: "https://flagcdn.com/w640/tr.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=800", attribution: "Unsplash" }] },
    { country: "Netherlands", capital: "Amsterdam", flagImage: "https://flagcdn.com/w640/nl.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=800", attribution: "Unsplash" }] },
    { country: "Switzerland", capital: "Bern", flagImage: "https://flagcdn.com/w640/ch.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800", attribution: "Unsplash" }] },
    { country: "Sweden", capital: "Stockholm", flagImage: "https://flagcdn.com/w640/se.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&w=800", attribution: "Unsplash" }] },
    { country: "Norway", capital: "Oslo", flagImage: "https://flagcdn.com/w640/no.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800", attribution: "Unsplash" }] },
    { country: "Portugal", capital: "Lisbon", flagImage: "https://flagcdn.com/w640/pt.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=800", attribution: "Unsplash" }] },
    { country: "Ireland", capital: "Dublin", flagImage: "https://flagcdn.com/w640/ie.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1549918838-3c677244ec40?auto=format&fit=crop&w=800", attribution: "Unsplash" }] },
    { country: "New Zealand", capital: "Wellington", flagImage: "https://flagcdn.com/w640/nz.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1589871109491-524a8b5b3649?auto=format&fit=crop&w=800", attribution: "Unsplash" }] },
    { country: "Austria", capital: "Vienna", flagImage: "https://flagcdn.com/w640/at.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&w=800", attribution: "Unsplash" }] },
    { country: "Belgium", capital: "Brussels", flagImage: "https://flagcdn.com/w640/be.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1563842618954-419f9cc3401c?auto=format&fit=crop&w=800", attribution: "Unsplash" }] },
    { country: "Denmark", capital: "Copenhagen", flagImage: "https://flagcdn.com/w640/dk.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&w=800", attribution: "Unsplash" }] },
    { country: "Finland", capital: "Helsinki", flagImage: "https://flagcdn.com/w640/fi.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&w=800", attribution: "Unsplash" }] },
    { country: "Poland", capital: "Warsaw", flagImage: "https://flagcdn.com/w640/pl.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1519146759285-69bb18170a21?auto=format&fit=crop&w=800", attribution: "Unsplash" }] },
    { country: "Hungary", capital: "Budapest", flagImage: "https://flagcdn.com/w640/hu.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1552331526-7f49557436b7?auto=format&fit=crop&w=800", attribution: "Unsplash" }] },
    { country: "Czech Republic", capital: "Prague", flagImage: "https://flagcdn.com/w640/cz.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=800", attribution: "Unsplash" }] },
    { country: "Vietnam", capital: "Hanoi", flagImage: "https://flagcdn.com/w640/vn.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1509030450996-939a2446a392?auto=format&fit=crop&w=800", attribution: "Unsplash" }] },
    { country: "Indonesia", capital: "Jakarta", flagImage: "https://flagcdn.com/w640/id.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1555661515-8bb0b5b5974f?auto=format&fit=crop&w=800", attribution: "Unsplash" }] },
    { country: "Philippines", capital: "Manila", flagImage: "https://flagcdn.com/w640/ph.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1524914199310-e7597140f77f?auto=format&fit=crop&w=800", attribution: "Unsplash" }] },
    { country: "Singapore", capital: "Singapore City", flagImage: "https://flagcdn.com/w640/sg.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1525596662741-e94ff9f26de1?auto=format&fit=crop&w=800", attribution: "Unsplash" }] },
    { country: "Malaysia", capital: "Kuala Lumpur", flagImage: "https://flagcdn.com/w640/my.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1521404118335-51364585642d?auto=format&fit=crop&w=800", attribution: "Unsplash" }] },
    { country: "Chile", capital: "Santiago", flagImage: "https://flagcdn.com/w640/cl.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1589136142558-94675c60249c?auto=format&fit=crop&w=800", attribution: "Unsplash" }] },
    { country: "Colombia", capital: "Bogota", flagImage: "https://flagcdn.com/w640/co.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1536305030588-45dc07a1cbee?auto=format&fit=crop&w=800", attribution: "Unsplash" }] },
    { country: "Peru", capital: "Lima", flagImage: "https://flagcdn.com/w640/pe.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=800", attribution: "Unsplash" }] },
    { country: "Ukraine", capital: "Kyiv", flagImage: "https://flagcdn.com/w640/ua.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1561542320-9a18ce34fe27?auto=format&fit=crop&w=800", attribution: "Unsplash" }] },
    { country: "Kenya", capital: "Nairobi", flagImage: "https://flagcdn.com/w640/ke.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800", attribution: "Unsplash" }] },
    { country: "Morocco", capital: "Rabat", flagImage: "https://flagcdn.com/w640/ma.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1539020290141-95567b31174d?auto=format&fit=crop&w=800", attribution: "Unsplash" }] },
    { country: "Israel", capital: "Jerusalem", flagImage: "https://flagcdn.com/w640/il.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1544933863-48016caec907?auto=format&fit=crop&w=800", attribution: "Unsplash" }] },
    { country: "Saudi Arabia", capital: "Riyadh", flagImage: "https://flagcdn.com/w640/sa.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1551041777-ed07fa678d21?auto=format&fit=crop&w=800", attribution: "Unsplash" }] },
    { country: "United Arab Emirates", capital: "Abu Dhabi", flagImage: "https://flagcdn.com/w640/ae.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800", attribution: "Unsplash" }] },
    { country: "Iceland", capital: "Reykjavik", flagImage: "https://flagcdn.com/w640/is.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&w=800", attribution: "Unsplash" }] },
    { country: "Croatia", capital: "Zagreb", flagImage: "https://flagcdn.com/w640/hr.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1555990540-120001806015?auto=format&fit=crop&w=800", attribution: "Unsplash" }] },
    { country: "Romania", capital: "Bucharest", flagImage: "https://flagcdn.com/w640/ro.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1582236372131-0678d38096f9?auto=format&fit=crop&w=800", attribution: "Unsplash" }] }
];

// Game State
let currentIndex = 0;
let isCountryQuestion = true;
let score = 0;
let firstTry = true;
let soundEnabled = false;

// DOM Elements
const imgElement = document.getElementById('flag-image');
const questionText = document.getElementById('question-text');
const optionsGrid = document.getElementById('options-grid');
const progressBar = document.getElementById('progress-bar');
const scoreDisplay = document.getElementById('score-display');

// Sounds
const correctSound = new Audio('sounds/correct.mp3');
const wrongSound = new Audio('sounds/wrong.mp3');

document.getElementById('start-btn').onclick = () => {
    soundEnabled = true; // Unlock audio on iPhone
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('game-screen').classList.remove('hidden');
    loadQuestion();
};

function playSound(isCorrect) {
    if (!soundEnabled) return;
    const sound = isCorrect ? correctSound : wrongSound;
    sound.currentTime = 0;
    sound.play().catch(e => console.log("Sound block:", e));
}

function loadQuestion() {
    const data = COUNTRIES[currentIndex];
    firstTry = true;
    updateProgress();

    if (isCountryQuestion) {
        imgElement.src = data.flagImage;
        questionText.innerText = "Which country does this flag belong to?";
    } else {
        const capImg = data.capitalImages[0].url;
        imgElement.src = capImg;
        questionText.innerText = `Which city is the capital of ${data.country}?`;

        // Delayed Fallback Logic
        imgElement.onerror = () => {
            setTimeout(() => {
                imgElement.src = data.flagImage;
            }, 500);
        };
    }
    
    displayOptions(isCountryQuestion);
}

function displayOptions(isCountryType) {
    optionsGrid.innerHTML = '';
    const current = COUNTRIES[currentIndex];
    const correctAnswer = isCountryType ? current.country : current.capital;
    
    // Generate 3 distractors
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
        playSound(true);
        if (firstTry) score += 10;
        scoreDisplay.innerText = `Score: ${score}`;
        
        // Disable all buttons to prevent double-click
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
        btn.disabled = true;
        playSound(false);
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
