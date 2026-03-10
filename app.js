const MIN_PLAYERS = 3;
const DICTIONARY_CACHE_KEY = "impostor_dictionary_cache_v1";
const FALLBACK_WORDS = [
  "Rojo",
  "Azul",
  "Verde",
  "Amarillo",
  "Naranja",
  "Violeta",
  "Rosa",
  "Celeste",
  "Turquesa",
  "Marron",
  "Beige",
  "Negro",
  "Blanco",
  "Gris",
  "Dorado",
  "Plateado",
  "Coral",
  "Lavanda",
  "Fucsia",
  "Magenta",
  "Granate",
  "Bordo",
  "Oliva",
  "Lila",
  "Aguamarina",
  "Mostaza",
  "Cian",
  "Cobre",
  "Esmeralda",
  "Marfil"
];

const state = {
  players: [],
  dictionary: [],
  game: null
};

const screens = {
  setup: document.getElementById("setup-screen"),
  pass: document.getElementById("pass-screen"),
  role: document.getElementById("role-screen"),
  timer: document.getElementById("timer-screen"),
  end: document.getElementById("end-screen")
};

const elements = {
  playerForm: document.getElementById("player-form"),
  playerInput: document.getElementById("player-input"),
  playersList: document.getElementById("players-list"),
  durationSelect: document.getElementById("duration-select"),
  dictionaryStatus: document.getElementById("dictionary-status"),
  dictionaryTools: document.getElementById("dictionary-tools"),
  dictionaryFile: document.getElementById("dictionary-file"),
  dictionaryButton: document.getElementById("dictionary-button"),
  startButton: document.getElementById("start-button"),

  passPlayer: document.getElementById("pass-player"),
  passProgress: document.getElementById("pass-progress"),
  showRoleButton: document.getElementById("show-role-button"),

  rolePlayer: document.getElementById("role-player"),
  roleCard: document.getElementById("role-card"),
  roleName: document.getElementById("role-name"),
  wordLabel: document.getElementById("word-label"),
  secretWord: document.getElementById("secret-word"),
  impostorHint: document.getElementById("impostor-hint"),
  understoodButton: document.getElementById("understood-button"),

  timerDisplay: document.getElementById("timer-display"),
  pauseButton: document.getElementById("pause-button"),
  finishButton: document.getElementById("finish-button"),

  endSummary: document.getElementById("end-summary"),
  playAgainButton: document.getElementById("play-again-button")
};

elements.playerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addPlayer(elements.playerInput.value);
});

elements.dictionaryButton.addEventListener("click", () => {
  elements.dictionaryFile.click();
});
elements.dictionaryFile.addEventListener("change", handleDictionarySelection);
elements.startButton.addEventListener("click", startGame);
elements.showRoleButton.addEventListener("click", showRoleScreen);
elements.understoodButton.addEventListener("click", nextRevealStep);
elements.pauseButton.addEventListener("click", togglePauseTimer);
elements.finishButton.addEventListener("click", () => finishGame("Partida finalizada manualmente."));
elements.playAgainButton.addEventListener("click", prepareNextRound);

void loadDictionary();
renderPlayers();

function addPlayer(rawName) {
  const nextNumber = state.players.length + 1;
  const name = rawName.trim() || `Jugador ${nextNumber}`;
  state.players.push(name);
  elements.playerInput.value = "";
  renderPlayers();
}

function removePlayer(index) {
  state.players.splice(index, 1);
  renderPlayers();
}

function renderPlayers() {
  elements.playersList.innerHTML = "";

  if (state.players.length === 0) {
    const empty = document.createElement("li");
    empty.textContent = "Todavia no hay jugadores.";
    elements.playersList.appendChild(empty);
  } else {
    state.players.forEach((player, index) => {
      const item = document.createElement("li");
      const name = document.createElement("span");
      name.textContent = `${index + 1}. ${player}`;

      const removeButton = document.createElement("button");
      removeButton.type = "button";
      removeButton.textContent = "Quitar";
      removeButton.setAttribute("aria-label", `Quitar ${player}`);
      removeButton.addEventListener("click", () => removePlayer(index));

      item.appendChild(name);
      item.appendChild(removeButton);
      elements.playersList.appendChild(item);
    });
  }

  updateStartAvailability();
}

async function loadDictionary() {
  try {
    const response = await fetch("palabras.txt", { cache: "no-store" });
    if (!response.ok) {
      throw new Error("No se pudo leer el archivo palabras.txt");
    }

    const text = await response.text();
    const words = normalizeLines(text);
    if (words.length === 0) {
      throw new Error("El archivo palabras.txt esta vacio");
    }

    setDictionary(words, `Diccionario cargado desde palabras.txt: ${words.length} palabras.`);
    saveDictionaryCache(text);
  } catch (_error) {
    elements.dictionaryTools.classList.remove("hidden");
    const cachedText = readDictionaryCache();
    const cachedWords = cachedText ? normalizeLines(cachedText) : [];

    if (cachedWords.length > 0) {
      setDictionary(cachedWords, `Diccionario cargado desde cache local: ${cachedWords.length} palabras.`);
    } else {
      setDictionary(
        [...FALLBACK_WORDS],
        "Modo local sin servidor: se usa diccionario integrado de respaldo. Si quieres, selecciona palabras.txt para personalizar."
      );
      elements.dictionaryStatus.classList.add("warning");
    }
  }

  updateStartAvailability();
}

function normalizeLines(content) {
  return content
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.length > 0);
}

function updateStartAvailability() {
  const hasPlayers = state.players.length >= MIN_PLAYERS;
  const hasWords = state.dictionary.length > 0;
  elements.startButton.disabled = !(hasPlayers && hasWords);
}

async function handleDictionarySelection(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) {
    return;
  }

  try {
    const text = await file.text();
    const words = normalizeLines(text);
    if (words.length === 0) {
      elements.dictionaryStatus.textContent = "El archivo seleccionado no tiene palabras validas.";
      elements.dictionaryStatus.classList.add("warning");
      state.dictionary = [];
      updateStartAvailability();
      return;
    }

    setDictionary(words, `Diccionario cargado desde ${file.name}: ${words.length} palabras.`);
    saveDictionaryCache(text);
  } catch (_error) {
    elements.dictionaryStatus.textContent = "No se pudo leer el archivo seleccionado.";
    elements.dictionaryStatus.classList.add("warning");
  } finally {
    elements.dictionaryFile.value = "";
    updateStartAvailability();
  }
}

function setDictionary(words, message) {
  state.dictionary = words;
  elements.dictionaryStatus.textContent = message;
  elements.dictionaryStatus.classList.remove("warning");
}

function saveDictionaryCache(text) {
  try {
    localStorage.setItem(DICTIONARY_CACHE_KEY, text);
  } catch (_error) {
    // Cache opcional; si falla no bloquea.
  }
}

function readDictionaryCache() {
  try {
    return localStorage.getItem(DICTIONARY_CACHE_KEY);
  } catch (_error) {
    return null;
  }
}

function startGame() {
  if (state.players.length < MIN_PLAYERS || state.dictionary.length === 0) {
    return;
  }

  const durationMinutes = Number(elements.durationSelect.value);
  const impostorIndex = randomInt(0, state.players.length - 1);
  const secretWord = randomFrom(state.dictionary);

  state.game = {
    secretWord,
    impostorIndex,
    revealOrder: state.players.map((_, index) => index),
    revealPosition: 0,
    durationMs: durationMinutes * 60 * 1000,
    remainingMs: durationMinutes * 60 * 1000,
    timerId: null,
    timerRunning: false,
    lastTickAt: null
  };

  showScreen("pass");
  renderPassStep();
}

function renderPassStep() {
  const game = state.game;
  if (!game) {
    return;
  }

  const playerIndex = game.revealOrder[game.revealPosition];
  elements.passPlayer.textContent = state.players[playerIndex];
  elements.passProgress.textContent = `Progreso: ${game.revealPosition + 1} / ${state.players.length}`;
}

function showRoleScreen() {
  const game = state.game;
  if (!game) {
    return;
  }

  const playerIndex = game.revealOrder[game.revealPosition];
  const playerName = state.players[playerIndex];
  const isImpostor = playerIndex === game.impostorIndex;

  elements.rolePlayer.textContent = playerName;
  elements.roleName.textContent = isImpostor ? "Impostor" : "Ciudadano";
  elements.roleCard.classList.toggle("impostor", isImpostor);
  elements.roleCard.classList.toggle("citizen", !isImpostor);

  if (isImpostor) {
    elements.wordLabel.classList.add("hidden");
    elements.secretWord.classList.add("hidden");
    elements.impostorHint.classList.remove("hidden");
  } else {
    elements.wordLabel.classList.remove("hidden");
    elements.secretWord.classList.remove("hidden");
    elements.impostorHint.classList.add("hidden");
    elements.secretWord.textContent = game.secretWord;
  }

  showScreen("role");
}

function nextRevealStep() {
  const game = state.game;
  if (!game) {
    return;
  }

  const isLast = game.revealPosition >= game.revealOrder.length - 1;
  if (isLast) {
    startTimerPhase();
    return;
  }

  game.revealPosition += 1;
  renderPassStep();
  showScreen("pass");
}

function startTimerPhase() {
  const game = state.game;
  if (!game) {
    return;
  }

  game.remainingMs = game.durationMs;
  renderTimer();
  showScreen("timer");
  startTimerLoop();
}

function startTimerLoop() {
  const game = state.game;
  if (!game || game.timerRunning) {
    return;
  }

  game.timerRunning = true;
  game.lastTickAt = Date.now();
  elements.pauseButton.textContent = "Pausar";

  game.timerId = window.setInterval(() => {
    const now = Date.now();
    const delta = now - game.lastTickAt;
    game.lastTickAt = now;
    game.remainingMs -= delta;

    if (game.remainingMs <= 0) {
      game.remainingMs = 0;
      renderTimer();
      finishGame("Se acabo el tiempo.");
      return;
    }

    renderTimer();
  }, 200);
}

function stopTimerLoop() {
  const game = state.game;
  if (!game) {
    return;
  }

  if (game.timerId) {
    window.clearInterval(game.timerId);
    game.timerId = null;
  }

  game.timerRunning = false;
}

function togglePauseTimer() {
  const game = state.game;
  if (!game) {
    return;
  }

  if (game.timerRunning) {
    stopTimerLoop();
    elements.pauseButton.textContent = "Reanudar";
  } else {
    startTimerLoop();
  }
}

function renderTimer() {
  const game = state.game;
  if (!game) {
    return;
  }

  const totalSeconds = Math.ceil(game.remainingMs / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  elements.timerDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function finishGame(reason) {
  const game = state.game;
  if (!game) {
    return;
  }

  stopTimerLoop();
  const impostorName = state.players[game.impostorIndex];
  elements.endSummary.textContent = `${reason} La palabra era "${game.secretWord}". Impostor: ${impostorName}.`;
  showScreen("end");
}

function prepareNextRound() {
  stopTimerLoop();
  state.game = null;
  showScreen("setup");
  updateStartAvailability();
}

function randomFrom(items) {
  return items[randomInt(0, items.length - 1)];
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function showScreen(screenKey) {
  Object.entries(screens).forEach(([key, screen]) => {
    screen.classList.toggle("active", key === screenKey);
  });
}
