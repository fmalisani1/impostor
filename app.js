const MIN_PLAYERS = 3;
const DICTIONARY_CACHE_KEY = "impostor_dictionary_cache_v2";
const MALISANIS_PLAYERS = ["Fede", "Clari", "Marta", "Norbert", "Dani", "Romi"];

const FALLBACK_DICTIONARY_TEXT = `[Objetos cotidianos]
Mochila
Cartuchera
Lapicera
Cuaderno
Goma de borrar
Sacapuntas
Regla
Tijera
Plasticola
Marcador
Pegamento en barra
Papel afiche
Botella
Termo
Mate
Bombilla
Celu
Cargador
Auriculares
Control remoto
Parlante
Lampara
Silla
Mesa
Escritorio
Almohada
Frazada
Sabana
Toalla
Cepillo de dientes
Peine
Shampoo
Jabon
Remera
Buzo
Campera
Jean
Short
Zapatillas
Medias
Pelota
Heladera
Microondas
Plato
Vaso
Cuchara
Tenedor
Llave
Candado
Bicicleta

[Comida]
Milanesa
Empanada
Asado
Choripan
Hamburguesa
Pizza
Fideos
Ravioles
Noquis
Arroz
Pure
Ensalada
Lechuga
Tomate
Zanahoria
Papa frita
Tarta
Polenta
Guiso
Sopa
Pan
Sanguche de miga
Alfajor
Medialuna
Facturas
Dulce de leche
Helado
Flan
Gelatina
Budin
Panqueque
Bizcochuelo
Chocotorta
Yogur
Chocolatada
Mate cocido
Banana
Manzana
Naranja
Mandarina
Pera
Frutilla
Uva
Pochoclo
Galletitas
Lentejas
Limonada
Agua
Queso
Jamon

[Animales]
Perro
Gato
Conejo
Hamster
Tortuga
Loro
Canario
Caballo
Vaca
Oveja
Cabra
Cerdo
Gallina
Pato
Ganso
Abeja
Mariposa
Hormiga
Arana
Rana
Sapo
Pez
Delfin
Ballena
Pulpo
Pinguino
Foca
Lechuza
Aguila
Hornero
Carpincho
Yaguarete
Zorro
Mono
Elefante
Jirafa
Leon
Tigre
Cebra
Hipopotamo
Cocodrilo
Lobo
Camello
Canguro
Puma
Gorila
Koala
Oso
Panda
Gallo`;

const state = {
  players: [],
  dictionaryCategories: [],
  selectedCategoryId: "aleatorio",
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
  addMalisanisButton: document.getElementById("add-malisanis-button"),

  categorySelect: document.getElementById("category-select"),
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

elements.addMalisanisButton.addEventListener("click", addMalisanisPlayers);

elements.categorySelect.addEventListener("change", () => {
  state.selectedCategoryId = elements.categorySelect.value;
  updateStartAvailability();
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

function addMalisanisPlayers() {
  state.players = [...MALISANIS_PLAYERS];
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
    const response = await fetch("diccionario.txt", { cache: "no-store" });
    if (!response.ok) {
      throw new Error("No se pudo leer diccionario.txt");
    }

    const text = await response.text();
    const categories = parseDictionaryText(text);
    setDictionary(categories, `Diccionario cargado: ${countWords(categories)} palabras en ${categories.length} categorias.`);
    saveDictionaryCache(text);
    elements.dictionaryTools.classList.add("hidden");
  } catch (_error) {
    elements.dictionaryTools.classList.remove("hidden");

    const cachedText = readDictionaryCache();
    if (cachedText) {
      try {
        const cachedCategories = parseDictionaryText(cachedText);
        setDictionary(
          cachedCategories,
          `Diccionario cargado desde cache local: ${countWords(cachedCategories)} palabras en ${cachedCategories.length} categorias.`
        );
        return;
      } catch (_cacheError) {
        // Si el cache esta roto, seguimos con respaldo integrado.
      }
    }

    const fallbackCategories = parseDictionaryText(FALLBACK_DICTIONARY_TEXT);
    setDictionary(
      fallbackCategories,
      `Modo local sin servidor: usando respaldo integrado (${countWords(fallbackCategories)} palabras).`
    );
    elements.dictionaryStatus.classList.add("warning");
  }
}

function parseDictionaryText(content) {
  const lines = content.split(/\r?\n/);
  const headerPattern = /^\[(.+)\]$/;
  const rawCategories = [];
  let currentCategory = null;

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (line.length === 0) {
      continue;
    }

    const headerMatch = line.match(headerPattern);
    if (headerMatch) {
      const categoryName = headerMatch[1].trim();
      currentCategory = ensureRawCategory(rawCategories, categoryName || "General");
      continue;
    }

    if (!currentCategory) {
      currentCategory = ensureRawCategory(rawCategories, "General");
    }

    currentCategory.words.push(line);
  }

  const normalizedCategories = normalizeCategories(rawCategories);
  if (normalizedCategories.length === 0) {
    throw new Error("Diccionario vacio");
  }

  return normalizedCategories;
}

function ensureRawCategory(categories, name) {
  const normalizedName = name.trim();
  const existing = categories.find((category) => category.name.toLowerCase() === normalizedName.toLowerCase());
  if (existing) {
    return existing;
  }

  const created = { name: normalizedName, words: [] };
  categories.push(created);
  return created;
}

function normalizeCategories(rawCategories) {
  const usedIds = new Set();
  const normalized = [];

  rawCategories.forEach((category) => {
    const words = dedupeWords(category.words);
    if (words.length === 0) {
      return;
    }

    const baseId = slugify(category.name);
    let finalId = baseId;
    let suffix = 2;
    while (usedIds.has(finalId)) {
      finalId = `${baseId}-${suffix}`;
      suffix += 1;
    }
    usedIds.add(finalId);

    normalized.push({
      id: finalId,
      name: category.name,
      words
    });
  });

  return normalized;
}

function dedupeWords(words) {
  const uniqueWords = [];
  const seen = new Set();

  words.forEach((word) => {
    const cleanWord = word.trim();
    if (cleanWord.length === 0) {
      return;
    }

    const key = cleanWord.toLowerCase();
    if (seen.has(key)) {
      return;
    }

    seen.add(key);
    uniqueWords.push(cleanWord);
  });

  return uniqueWords;
}

function slugify(value) {
  const slug = value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return slug || "categoria";
}

function countWords(categories) {
  return categories.reduce((total, category) => total + category.words.length, 0);
}

function setDictionary(categories, message) {
  state.dictionaryCategories = categories;
  elements.dictionaryStatus.textContent = message;
  elements.dictionaryStatus.classList.remove("warning");
  renderCategorySelect();
  updateStartAvailability();
}

function renderCategorySelect() {
  const previousValue = state.selectedCategoryId;
  elements.categorySelect.innerHTML = "";

  const randomOption = document.createElement("option");
  randomOption.value = "aleatorio";
  randomOption.textContent = "Aleatorio";
  elements.categorySelect.appendChild(randomOption);

  state.dictionaryCategories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category.id;
    option.textContent = `${category.name} (${category.words.length})`;
    elements.categorySelect.appendChild(option);
  });

  const selectedExists =
    previousValue === "aleatorio" || state.dictionaryCategories.some((category) => category.id === previousValue);

  state.selectedCategoryId = selectedExists ? previousValue : "aleatorio";
  elements.categorySelect.value = state.selectedCategoryId;
}

function updateStartAvailability() {
  const hasPlayers = state.players.length >= MIN_PLAYERS;
  const selectedCategory = resolveRoundCategory();
  const hasWords = Boolean(selectedCategory && selectedCategory.words.length > 0);
  elements.startButton.disabled = !(hasPlayers && hasWords);
}

async function handleDictionarySelection(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) {
    return;
  }

  try {
    const text = await file.text();
    const categories = parseDictionaryText(text);
    setDictionary(
      categories,
      `Diccionario cargado desde ${file.name}: ${countWords(categories)} palabras en ${categories.length} categorias.`
    );
    saveDictionaryCache(text);
  } catch (_error) {
    elements.dictionaryStatus.textContent = "No se pudo leer el diccionario seleccionado. Usa formato con [Categorias].";
    elements.dictionaryStatus.classList.add("warning");
    state.dictionaryCategories = [];
    renderCategorySelect();
    updateStartAvailability();
  } finally {
    elements.dictionaryFile.value = "";
  }
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

function resolveRoundCategory() {
  if (state.dictionaryCategories.length === 0) {
    return null;
  }

  if (state.selectedCategoryId === "aleatorio") {
    return randomFrom(state.dictionaryCategories);
  }

  const selected = state.dictionaryCategories.find((category) => category.id === state.selectedCategoryId);
  return selected || randomFrom(state.dictionaryCategories);
}

function startGame() {
  if (state.players.length < MIN_PLAYERS) {
    return;
  }

  const category = resolveRoundCategory();
  if (!category || category.words.length === 0) {
    return;
  }

  const durationMinutes = Number(elements.durationSelect.value);
  const impostorIndex = randomInt(0, state.players.length - 1);
  const secretWord = randomFrom(category.words);

  state.game = {
    secretWord,
    categoryName: category.name,
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
  elements.endSummary.textContent =
    `${reason} Categoria: ${game.categoryName}. ` +
    `La palabra era "${game.secretWord}". Impostor: ${impostorName}.`;
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
