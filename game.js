/**
 * THE ASK ME SOCIAL GAME - CORE ENGINE
 * Feature: Cache-Busting & Direct URL Validation
 */

const COUNTRIES = [
    { country: "Canada", capital: "Ottawa", flagImage: "https://flagcdn.com/w640/ca.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1559511260-66a654ae982a", attribution: "Parliament Hill" }] },
    { country: "Brazil", capital: "Brasilia", flagImage: "https://flagcdn.com/w640/br.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1562916600-47fa364e12e1", attribution: "National Congress" }] },
    { country: "Portugal", capital: "Lisbon", flagImage: "https://flagcdn.com/w640/pt.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1580238150334-118858686e0c", attribution: "Belém Tower" }] },
    { country: "France", capital: "Paris", flagImage: "https://flagcdn.com/w640/fr.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34", attribution: "Eiffel Tower" }] },
    { country: "Japan", capital: "Tokyo", flagImage: "https://flagcdn.com/w640/jp.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26", attribution: "Tokyo Tower" }] },
    { country: "Italy", capital: "Rome", flagImage: "https://flagcdn.com/w640/it.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1552832230-c0197dd311b5", attribution: "Colosseum" }] },
    { country: "United Kingdom", capital: "London", flagImage: "https://flagcdn.com/w640/gb.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad", attribution: "Big Ben" }] },
    { country: "Egypt", capital: "Cairo", flagImage: "https://flagcdn.com/w640/eg.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368", attribution: "Pyramids" }] },
    { country: "India", capital: "New Delhi", flagImage: "https://flagcdn.com/w640/in.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1585506942812-e72b29cef752", attribution: "Red Fort" }] },
    { country: "USA", capital: "Washington D.C.", flagImage: "https://flagcdn.com/w640/us.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1501466044931-62695aada8e9", attribution: "The Capitol" }] },
    { country: "China", capital: "Beijing", flagImage: "https://flagcdn.com/w640/cn.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b", attribution: "Forbidden City" }] },
    { country: "Greece", capital: "Athens", flagImage: "https://flagcdn.com/w640/gr.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1503152394-c571994fd383", attribution: "Parthenon" }] },
    { country: "Australia", capital: "Canberra", flagImage: "https://flagcdn.com/w640/au.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1590759223965-060ee483a7ad", attribution: "Parliament House" }] },
    { country: "Germany", capital: "Berlin", flagImage: "https://flagcdn.com/w640/de.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1528728329032-2972f65dfb3f", attribution: "Brandenburg Gate" }] },
    { country: "Turkey", capital: "Ankara", flagImage: "https://flagcdn.com/w640/tr.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b", attribution: "Anitkabir" }] },
    { country: "Mexico", capital: "Mexico City", flagImage: "https://flagcdn.com/w640/mx.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1512813588311-50338b2c9aa6", attribution: "Bellas Artes" }] },
    { country: "Spain", capital: "Madrid", flagImage: "https://flagcdn.com/w640/es.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4", attribution: "Royal Palace" }] },
    { country: "Thailand", capital: "Bangkok", flagImage: "https://flagcdn.com/w640/th.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1501232829850-3dd2491d92aa", attribution: "Grand Palace" }] },
    { country: "Netherlands", capital: "Amsterdam", flagImage: "https://flagcdn.com/w640/nl.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4", attribution: "Canals" }] },
    { country: "South Korea", capital: "Seoul", flagImage: "https://flagcdn.com/w640/kr.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc", attribution: "Gyeongbokgung" }] },
    { country: "Russia", capital: "Moscow", flagImage: "https://flagcdn.com/w640/ru.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1512495039889-52a3b799c9bc", attribution: "Red Square" }] },
    { country: "Vietnam", capital: "Hanoi", flagImage: "https://flagcdn.com/w640/vn.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1509030450996-939a2446a392", attribution: "Hanoi" }] },
    { country: "UAE", capital: "Abu Dhabi", flagImage: "https://flagcdn.com/w640/ae.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c", attribution: "Grand Mosque" }] },
    { country: "Argentina", capital: "Buenos Aires", flagImage: "https://flagcdn.com/w640/ar.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849", attribution: "Obelisk" }] },
    { country: "Peru", capital: "Lima", flagImage: "https://flagcdn.com/w640/pe.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1526392060635-9d6019884377", attribution: "Plaza" }] },
    { country: "South Africa", capital: "Pretoria", flagImage: "https://flagcdn.com/w640/za.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99", attribution: "Union Buildings" }] },
    { country: "Hungary", capital: "Budapest", flagImage: "https://flagcdn.com/w640/hu.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1552331526-7f49557436b7", attribution: "Parliament" }] },
    { country: "Czech Republic", capital: "Prague", flagImage: "https://flagcdn.com/w640/cz.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf", attribution: "Charles Bridge" }] },
    { country: "Switzerland", capital: "Bern", flagImage: "https://flagcdn.com/w640/ch.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99", attribution: "Zytglogge" }] },
    { country: "Singapore", capital: "Singapore", flagImage: "https://flagcdn.com/w640/sg.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1525596662741-e94ff9f26de1", attribution: "Marina Bay" }] },
    { country: "Malaysia", capital: "Kuala Lumpur", flagImage: "https://flagcdn.com/w640/my.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1521404118335-51364585642d", attribution: "Petronas" }] },
    { country: "Indonesia", capital: "Jakarta", flagImage: "https://flagcdn.com/w640/id.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1555661515-8bb0b5b5974f", attribution: "Monas" }] },
    { country: "Poland", capital: "Warsaw", flagImage: "https://flagcdn.com/w640/pl.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1519146759285-69bb18170a21", attribution: "Old Town" }] },
    { country: "Austria", capital: "Vienna", flagImage: "https://flagcdn.com/w640/at.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1516550893923-42d28e5677af", attribution: "Palace" }] },
    { country: "Ireland", capital: "Dublin", flagImage: "https://flagcdn.com/w640/ie.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1549918838-3c677244ec40", attribution: "Temple Bar" }] },
    { country: "Norway", capital: "Oslo", flagImage: "https://flagcdn.com/w640/no.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38", attribution: "Opera House" }] },
    { country: "Sweden", capital: "Stockholm", flagImage: "https://flagcdn.com/w640/se.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11", attribution: "City Hall" }] },
    { country: "Finland", capital: "Helsinki", flagImage: "https://flagcdn.com/w640/fi.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1517154421773-0529f29ea451", attribution: "Cathedral" }] },
    { country: "Denmark", capital: "Copenhagen", flagImage: "https://flagcdn.com/w640/dk.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc", attribution: "Nyhavn" }] },
    { country: "New Zealand", capital: "Wellington", flagImage: "https://flagcdn.com/w640/nz.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1589871109491-524a8b5b3649", attribution: "Beehive" }] },
    { country: "Chile", capital: "Santiago", flagImage: "https://flagcdn.com/w640/cl.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1589136142558-94675c60249c", attribution: "La Moneda" }] },
    { country: "Colombia", capital: "Bogota", flagImage: "https://flagcdn.com/w640/co.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1536305030588-45dc07a1cbee", attribution: "Monserrate" }] },
    { country: "Ukraine", capital: "Kyiv", flagImage: "https://flagcdn.com/w640/ua.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1561542320-9a18ce34fe27", attribution: "Maidan" }] },
    { country: "Morocco", capital: "Rabat", flagImage: "https://flagcdn.com/w640/ma.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1539020290141-95567b31174d", attribution: "Hassan Tower" }] },
    { country: "Kenya", capital: "Nairobi", flagImage: "https://flagcdn.com/w640/ke.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e", attribution: "Nairobi" }] },
    { country: "Saudi Arabia", capital: "Riyadh", flagImage: "https://flagcdn.com/w640/sa.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1551041777-ed07fa678d21", attribution: "Kingdom Centre" }] },
    { country: "Iceland", capital: "Reykjavik", flagImage: "https://flagcdn.com/w640/is.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1476610182048-b716b8518aae", attribution: "Hallgrimskirkja" }] },
    { country: "Croatia", capital: "Zagreb", flagImage: "https://flagcdn.com/w640/hr.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1555990540-120001806015", attribution: "St. Mark's" }] },
    { country: "Romania", capital: "Bucharest", flagImage: "https://flagcdn.com/w640/ro.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1582236372131-0678d38096f9", attribution: "Parliament" }] },
    { country: "Israel", capital: "Jerusalem", flagImage: "https://flagcdn.com/w640/il.png", capitalImages: [{ url: "https://images.unsplash.com/photo-1544933863-48016caec907", attribution: "Old City" }] }
];

// STATE MANAGEMENT
let currentIndex = 0;
let isCountryQuestion = true;
let score = 0;
let firstTry = true;
let soundEnabled = false;

// DOM ELEMENTS
const imgElement = document.getElementById('flag-image');
const questionText = document.getElementById('question-text');
const optionsGrid = document.getElementById('options-grid');
const progressBar = document.getElementById('progress-bar');
const scoreDisplay = document.getElementById('score-display');

// AUDIO
const correctSound = new Audio('sounds/correct.mp3');
const wrongSound = new Audio('sounds/wrong.mp3');

/**
 * SHUFFLE LOGIC
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// INITIALIZE GAME
document.getElementById('start-btn').onclick = () => {
    soundEnabled = true;
    correctSound.play().then(() => correctSound.pause()).catch(() => {});
    wrongSound.play().then(() => wrongSound.pause()).catch(() => {});
    
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

    // CACHE BUSTER: Adds unique timestamp to force browser to re-download images
    const cacheBuster = "?t=" + new Date().getTime();

    if (isCountryQuestion) {
        imgElement.src = data.flagImage + cacheBuster;
        questionText.innerText = "Which country does this flag belong to?";
    } else {
        // Direct URL construction with sizing and cache-busting
        const capImgBase = data.capitalImages[0].url;
        imgElement.src = `${capImgBase}?auto=format&fit=crop&w=800&q=80&t=${new Date().getTime()}`;
        questionText.innerText = `Which city is the capital of ${data.country}?`;

        imgElement.onerror = () => {
            console.warn(`Landmark load failed for ${data.capital}. Falling back to flag.`);
            imgElement.src = data.flagImage + cacheBuster;
        };
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
        if (soundEnabled) {
            correctSound.currentTime = 0;
            correctSound.play();
        }
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
        if (soundEnabled) {
            wrongSound.currentTime = 0;
            wrongSound.play();
        }
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
    document.getElementById('end-screen').classList.add('hidden');
    document.getElementById('start-screen').classList.remove('hidden');
};
