document.addEventListener('DOMContentLoaded', () => {

    const punishments = {
        1: "Bailar 10 segundos la canción que prefieran.",
        2: "Presentarse: Nombre, edad y hobbie preferido con acento yucateco.",
        3: "Hacer 15 sentadillas.",
        4: "Imitar a un animal por 10 segundos.",
        5: "Cuenta un chiste."
    };

    const questions = {
        parTrenzado: [
            { points: 1, question: "¿De qué material son los hilos que componen un cable de par trenzado?", options: ["Aluminio", "Vidrio", "Cobre"], answer: "Cobre" },
            { points: 1, question: "¿Cuál es uno de los usos principales del par trenzado?", options: ["Redes troncales de internet", "Redes de área local (LAN)", "Señales de televisión"], answer: "Redes de área local (LAN)" },
            { points: 2, question: "¿Cuál es el propósito fundamental de trenzar los pares de hilos de cobre?", options: ["Ahorrar material", "Reducir la interferencia", "Aumentar la flexibilidad"], answer: "Reducir la interferencia" },
            { points: 2, question: "¿Qué tipo de cable de par trenzado es el más utilizado por su bajo costo y no tiene blindaje metálico?", options: ["STP", "UTP", "FTP"], answer: "UTP" },
            { points: 3, question: "El fenómeno de interferencia entre cables vecinos se conoce como...", options: ["Inductancia capacitiva", "Ruido de modo común", "Diafonía o crosstalk"], answer: "Diafonía o crosstalk" },
            { points: 3, question: "¿Cuál es la distancia máxima recomendada para un cable de par trenzado sin usar un repetidor?", options: ["100 metros", "90 metros", "150 metros"], answer: "100 metros" },
            { points: 4, question: "¿Qué elemento adicional clave tiene un cable STP (apantallado) que no tiene un UTP?", options: ["Un separador de pares (spline)", "Un hilo de drenaje a tierra", "Una malla o lámina metálica"], answer: "Una malla o lámina metálica" },
            { points: 4, question: "Un cable de categoría Cat 6A puede alcanzar velocidades de hasta...", options: ["10 Gigabits por segundo", "5 Gigabits por segundo", "1 Gigabit por segundo"], answer: "10 Gigabits por segundo" }
        ],
        cableCoaxial: [
            { points: 1, question: "El núcleo de un cable coaxial está hecho de...", options: ["Cobre sólido", "Plástico aislante", "Filamentos de vidrio"], answer: "Cobre sólido" },
            { points: 1, question: "¿Cuál es el uso más común mencionado para el cable coaxial?", options: ["Telefonía tradicional", "Distribución de TV por cable", "Redes de fibra óptica"], answer: "Distribución de TV por cable" },
            { points: 2, question: "¿Qué componente del cable coaxial actúa como blindaje contra interferencias?", options: ["La cubierta exterior", "El aislante dieléctrico", "La malla metálica"], answer: "La malla metálica" },
            { points: 2, question: "Una ventaja del cable coaxial sobre el par trenzado es que ofrece...", options: ["Menor costo", "Mayor flexibilidad", "Mayor ancho de banda"], answer: "Mayor ancho de banda" },
            { points: 3, question: "La malla metálica del cable coaxial funciona como una Jaula de..., aislando el núcleo del ruido.", options: ["Faraday", "Maxwell", "Ohm"], answer: "Faraday" },
            { points: 3, question: "En comparación con el par trenzado, el cable coaxial es...", options: ["Menos propenso a la atenuación", "Más rígido y difícil de instalar", "Inmune a la diafonía"], answer: "Más rígido y difícil de instalar" },
            { points: 4, question: "Además de la TV, ¿en qué tipo de redes antiguas fue muy utilizado el cable coaxial?", options: ["Redes Token Ring", "Primeras redes Ethernet", "Conexiones seriales RS-232"], answer: "Primeras redes Ethernet" },
            { points: 4, question: "El cable coaxial transporta señales de alta frecuencia con menos... que el par trenzado.", options: ["Pérdida de inserción y ruido", "Atenuación e interferencia", "Latencia y jitter"], answer: "Atenuación e interferencia" }
        ],
        fibraOptica: [
            { points: 1, question: "A diferencia de los cables de cobre, la fibra óptica no transmite electricidad, sino...", options: ["Pulsos de luz", "Ondas de sonido", "Vibraciones magnéticas"], answer: "Pulsos de luz" },
            { points: 1, question: "El núcleo de la fibra óptica, por donde viaja la señal, está hecho de filamentos de...", options: ["Cobre o aluminio", "Plástico o caucho", "Vidrio o plástico"], answer: "Vidrio o plástico" },
            { points: 2, question: "La fibra óptica es completamente inmune a...", options: ["La humedad", "La interferencia electromagnética", "Los daños físicos"], answer: "La interferencia electromagnética" },
            { points: 2, question: "El fenómeno físico que permite a la luz viajar por el núcleo de la fibra se llama...", options: ["Refracción externa", "Reflexión interna total", "Difracción lumínica"], answer: "Reflexión interna total" },
            { points: 3, question: "¿Qué tipo de fibra tiene un núcleo más grande y se usa para distancias cortas, como dentro de un edificio?", options: ["Multimodo", "Monomodo de baja dispersión", "Fibra de índice gradual"], answer: "Multimodo" },
            { points: 3, question: "El término 'FTTH' se refiere a llevar la fibra óptica hasta...", options: ["El nodo de distribución (FTTN)", "El hogar (FTTH)", "La acera (FTTC)"], answer: "El hogar (FTTH)" },
            { points: 4, question: "¿Qué tipo de fibra tiene un núcleo extremadamente delgado y se usa para cruzar océanos?", options: ["Monomodo", "Multimodo de índice escalonado", "Fibra Híbrida"], answer: "Monomodo" },
            { points: 4, question: "Una de las grandes desventajas de la fibra óptica es que...", options: ["Requiere conversión de señal (O/E/O)", "Es costosa y frágil", "Sufre de dispersión cromática"], answer: "Es costosa y frágil" }
        ]
    };

    const startScreen = document.getElementById('start-screen');
    const gameScreen = document.getElementById('game-screen');
    const endScreen = document.getElementById('end-screen');
    const playerCountSelect = document.getElementById('player-count');
    const startBtn = document.getElementById('start-btn');
    const gameBoard = document.getElementById('game-board');
    const scoreboard = document.getElementById('scoreboard');
    const turnIndicator = document.getElementById('turn-indicator');
    const questionModal = document.getElementById('question-modal');
    const questionText = document.getElementById('question-text');
    const answerOptions = document.getElementById('answer-options');
    const timerDisplay = document.getElementById('timer-display');
    const punishmentBtn = document.getElementById('punishment-btn');
    const rouletteModal = document.getElementById('roulette-modal');
    const rouletteDisplay = document.getElementById('roulette-display');
    const rouletteResult = document.getElementById('roulette-result');
    const closeRouletteBtn = document.getElementById('close-roulette-btn');
    
    let players = [];
    let currentPlayerIndex = 0;
    let totalPlayers = 0;
    let questionsAnsweredCount = 0;
    const totalQuestions = Object.keys(questions).length * questions.parTrenzado.length;
    let timer;
    const TIME_LIMIT = 12;

    startBtn.addEventListener('click', initializeGame);

    function initializeGame() {
        totalPlayers = parseInt(playerCountSelect.value);
        players = [];
        for (let i = 1; i <= totalPlayers; i++) {
            players.push({ name: `Jugador ${i}`, score: 0 });
        }
        
        startScreen.classList.remove('active');
        gameScreen.classList.add('active');

        renderScoreboard();
        renderGameBoard();
        updateTurnIndicator();
    }

    function renderScoreboard() {
        scoreboard.innerHTML = '';
        players.forEach((player, index) => {
            const playerScoreDiv = document.createElement('div');
            playerScoreDiv.classList.add('player-score');
            if (index === currentPlayerIndex) {
                playerScoreDiv.classList.add('active-turn');
            }
            playerScoreDiv.innerHTML = `<h3>${player.name}</h3><p>${player.score}</p>`;
            scoreboard.appendChild(playerScoreDiv);
        });
    }

    function renderGameBoard() {
        gameBoard.innerHTML = '';
        const categories = { parTrenzado: "Par Trenzado", cableCoaxial: "Cable Coaxial", fibraOptica: "Fibra Óptica" };
        const numQuestionsPerCategory = questions.parTrenzado.length;

        for (const categoryId in categories) {
            const categoryTitle = document.createElement('div');
            categoryTitle.classList.add('category-title');
            categoryTitle.textContent = categories[categoryId];
            gameBoard.appendChild(categoryTitle);
        }

        for (let i = 0; i < numQuestionsPerCategory; i++) {
            for (const categoryId in categories) {
                const cell = document.createElement('div');
                cell.classList.add('question-cell');
                const questionData = questions[categoryId][i];
                cell.textContent = questionData.points;
                cell.dataset.category = categoryId;
                cell.dataset.questionIndex = i;
                cell.addEventListener('click', handleCellClick);
                gameBoard.appendChild(cell);
            }
        }
    }

    function updateTurnIndicator() {
        turnIndicator.textContent = `Turno de: ${players[currentPlayerIndex].name}`;
    }

    function handleCellClick(event) {
        const cell = event.currentTarget;
        const { category, questionIndex } = cell.dataset;
        const questionData = questions[category][questionIndex];
        showQuestion(questionData, cell);
    }

    function showQuestion(questionData, cell) {
        questionText.textContent = questionData.question;
        answerOptions.innerHTML = '';
        
        questionData.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.addEventListener('click', () => handleAnswer(option, questionData, cell));
            answerOptions.appendChild(button);
        });

        questionModal.style.display = 'flex';
        startTimer(questionData, cell);
    }

    function startTimer(questionData, cell) {
        let timeLeft = TIME_LIMIT;
        timerDisplay.textContent = timeLeft;
        timerDisplay.style.backgroundColor = '#4dd0e1';

        timer = setInterval(() => {
            timeLeft--;
            timerDisplay.textContent = timeLeft;
            if (timeLeft < 4) {
                timerDisplay.style.backgroundColor = '#ff4500';
            }
            if (timeLeft <= 0) {
                clearInterval(timer);
                handleTimeUp(questionData, cell);
            }
        }, 1000);
    }

    function handleTimeUp(questionData, cell) {
        questionModal.style.display = 'none';
        players[currentPlayerIndex].score -= questionData.points;
        cell.classList.add('disabled');
        questionsAnsweredCount++;
        nextTurn();
    }

    function handleAnswer(selectedOption, questionData, cell) {
        clearInterval(timer);
        questionModal.style.display = 'none';
        
        if (selectedOption === questionData.answer) {
            players[currentPlayerIndex].score += questionData.points;
        } else {
            players[currentPlayerIndex].score -= questionData.points;
        }

        cell.classList.add('disabled');
        questionsAnsweredCount++;
        nextTurn();
    }
    
    function nextTurn() {
        currentPlayerIndex = (currentPlayerIndex + 1) % totalPlayers;
        renderScoreboard();
        
        if (questionsAnsweredCount === totalQuestions) {
            endGame();
        } else {
            updateTurnIndicator();
        }
    }
    
    function endGame() {
        gameScreen.classList.remove('active');
        endScreen.classList.add('active');

        players.sort((a, b) => b.score - a.score);

        const finalScoresList = document.getElementById('final-scores');
        finalScoresList.innerHTML = '';
        
        players.forEach((player, index) => {
            const li = document.createElement('li');
            li.textContent = `${index + 1}º Lugar: ${player.name} (${player.score} puntos)`;
            finalScoresList.appendChild(li);
        });

        const prizesContainer = document.getElementById('prizes-container');
        const winner = players[0];
        const secondPlace = players.length > 1 ? players[1] : null;
        const lastPlaceScore = players[players.length - 1].score;
        const lastPlacePlayers = players.filter(p => p.score === lastPlaceScore).map(p => p.name).join(', ');

        let prizesHTML = '<h3>🏆 Premios y Castigos</h3><ul>';
        prizesHTML += `<li><strong>1er Lugar (Ganador):</strong> ${winner.name} &rarr; 3 sellos</li>`;
        if (secondPlace) {
            prizesHTML += `<li><strong>2do Lugar:</strong> ${secondPlace.name} &rarr; 1 sello</li>`;
        }
        prizesHTML += `<li><strong>Último Lugar:</strong> ${lastPlacePlayers} &rarr; -1 punto en su exposición</li>`;
        prizesHTML += '</ul>';
        prizesContainer.innerHTML = prizesHTML;

        punishmentBtn.textContent = `Girar Ruleta de Castigo para ${lastPlacePlayers}`;
        punishmentBtn.style.display = 'inline-block';
        punishmentBtn.addEventListener('click', startRoulette);
    }

    function startRoulette() {
        rouletteModal.style.display = 'flex';
        rouletteResult.innerHTML = '';
        closeRouletteBtn.style.display = 'none';

        let spinCount = 0;
        const spinAnimation = setInterval(() => {
            const randomNum = Math.floor(Math.random() * 5) + 1;
            rouletteDisplay.textContent = randomNum;
            rouletteDisplay.style.transform = `scale(1.1)`;
            setTimeout(() => {
                rouletteDisplay.style.transform = `scale(1)`;
            }, 100);
            spinCount++;
            if (spinCount > 20) {
                clearInterval(spinAnimation);
                finishRoulette();
            }
        }, 100);
    }

    function finishRoulette() {
        const finalNumber = Math.floor(Math.random() * 5) + 1;
        rouletteDisplay.textContent = finalNumber;
        const punishment = punishments[finalNumber];
        rouletteResult.innerHTML = `<strong>Castigo:</strong> ${punishment}`;
        closeRouletteBtn.style.display = 'inline-block';
    }

    closeRouletteBtn.addEventListener('click', () => {
        rouletteModal.style.display = 'none';
    });
});