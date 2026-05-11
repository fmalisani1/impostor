const MIN_PLAYERS = 3;
const MIN_MIME_PLAYERS = 2;
const DICTIONARY_CACHE_KEY = "impostor_dictionary_cache_v2";
const USED_WORDS_SESSION_KEY = "impostor_used_words_session_v1";
const MALISANIS_PLAYERS = ["Fede", "Viri", "Norbert", "Marta", "Dani", "Romi", "Clari"];

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
Araña
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
Gallo

[Frutas]
Sandia
Melon
Durazno
Ciruelas
Kiwi
Anana
Limon
Lima
Pomelo
Arándano
Frambuesa
Mora
Cereza
Higo
Pelón
Damasco
Mango
Papaya
Caqui
Nueces
Almendras
Coco

[Verduras]
Papa
Cebolla
Ajo
Choclo
Arveja
Brocoli
Coliflor
Repollo
Espinaca
Acelga
Remolacha
Zapallo
Calabaza
Berenjenas
Pimiento
Poroto
Champignon
Apio
Puerro
Radicheta
Tomate cherry
Pepino
Berenjena
Rabanito

[Deportes]
Futbol
Basquet
Tenis
Voley
Handball
Hockey
Atletismo
Natacion
Ciclismo
Skateboard
Patinaje
Gimnasia
Judo
Karate
Boxeo
Esqui
Snowboard
Windsurf
Surf
Rugby
Polo
Golf
Ping pong
Badminton
Beisbol
Softbol
Parkour
Escalada
Alpinismo

[Medios de Transporte]
Auto
Colectivo
Taxi
Moto
Camion
Tren
Avion
Helicoptero
Barco
Velero
Crucero
Subte
Tranvia
Carreta
Carruaje
Canoa
Kayak
Bote
Teleférico
Ascensor
Escalera mecanica
Patineta
Patines
Carrito de compras

[Vehiculos]
Ambulancia
Patrullero
Camioneta
Pickup
Vagón
Lancha

[Ropa]
Pantalon
Falda
Vestido
Pollera
Chomba
Camisa
Saco
Corbata
Bufanda
Gorro
Gafas de sol
Zapatos
Sandalias
Chinelas
Cinturon
Guantes
Chaleco
Abrigo
Impermeable
Uniforme
Pijama
Sweater
Cartera

[Personajes Famosos]
Mario Bros
Mickey Mouse
Minnie Mouse
Pato Donald
Bugs Bunny
Bob Esponja
Dora la Exploradora
Elmo
Winnie Pooh
Pocoyo
Shrek
Rapunzel
Blancanieves
La Cenicienta
Aladino
Simba
Woody
Buzz Lightyear
Nemo
Dory
Moana
Lightning McQueen
Rayo McQueen
Harry Potter
Terminator
Doc Brown
Marty McFly
Peppa Pig
Homero Simpson
Bart Simpson

[Random]
Cachirla
Momia
Sorete
Culo
Convencion
Channel
Inodoro
Videt
Impresora
Peteta
Petete

[Peliculas super conocidas]
Volver al futuro
El Rey Leon
Lilo & Stich
Querida encogí a los niños
La bella y la bestia
Toy Story
Frozen
Mi pobre angelito
E.T.
Buscando a Nemo
Peter Pan
Mary Poppins
Jurassic Park
Los Increibles
Monsters, Inc.
La sirenita
Intensamente
Pinocho
Dumbo
Blancanieves y los siete enanitos
El libro de la selva
Harry Potter y la piedra filosofal

[Lugares conocidos]
Unicenter
Mar del Sur
Mar del Plata
Obelisco
Guerrin
Parque de la costa
El Ecoparque
Teatro Colón
`;

const MIME_DICTIONARY_TEXT = `[Animales raros]
Ornitorrinco
Camaleon
Perezoso
Armadillo
Flamenco
Tucan
Suricata
Erizo
Lemur
Oso hormiguero
Murcielago
Ajolote
Medusa
Caballito de mar
Pulpo
Calamar
Langosta
Cangrejo
Caracol
Mantis religiosa
Escorpion
Rinoceronte
Hipopotamo
Pavo real
Koala
Mapache
Nutria
Castor
Topo
Comadreja
Iguana
Tarantula
Puercoespin
Morsa
Pez globo

[Animales dificiles]
Cisne
Buitre
Zorro
Pantera
Aguila
Buho
Hiena
Llama
Alpaca
Jabali
Gacela
Antilope
Pelicano
Foca
Ballena
Delfin
Tiburon
Mamut
Dodo
Dragon de Komodo
Nandu
Colibri
Luciernaga
Reno
Camello

[Objetos complicados]
Brujula
Catalejo
Binoculares
Abaco
Tocadiscos
Maquina de escribir
Caja fuerte
Detector de metales
Paracaidas
Telescopio
Microscopio
Fonografo
Reloj de arena
Marioneta
Boomerang
Lupa
Palanca
Polea
Extintor
Salvavidas
Cerradura
Candado con clave
Mapa del tesoro
Antena
Radar
Trampa para ratones
Molino de viento
Sube y baja
Tobogan
Titere
Botella con mensaje
Globo terraqueo
Ancla
Timón de barco
Iman

[Objetos con historia]
Corona
Capa de mago
Varita magica
Escudo
Espada de juguete
Casco de astronauta
Traje de buzo
Mascara de teatro
Disfraz incomodo
Album de fotos
Carta secreta
Diario intimo
Cofre cerrado
Llave misteriosa
Mapa arrugado
Espejo encantado
Lampara antigua
Sillon roto
Cuadro torcido
Jarron carisimo
Robot viejo
Control sin pilas
Remoto universal
Telefono publico
Campana de hotel

[Estados y emociones]
Tener culpa
Estar orgulloso
Tener verguenza
Estar desconfiado
Estar confundido
Aburrirse en una reunion
Estar nervioso
Estar emocionado
Fingir sorpresa
Tener miedo sin gritar
Estar impaciente
Tener sueño en clase
Estar enamorado
Estar ofendido
Estar celoso
Sentirse aliviado
Tener asco
Estar distraido
Estar concentrado
Estar arrepentido
Hacerse el importante
Tener una idea brillante
Estar de mal humor
No poder creer lo que viste
Guardar la compostura

[Situaciones]
Llegar tarde al colegio
Encontrarse con alguien famoso
Perder una llave
Olvidar un cumpleaños
Ganar la loteria
Esperar al medico
Perder una valija
Quedarse encerrado en un ascensor
Recibir malas noticias
Contar un secreto
Intentar no reirse
Entrar a un lugar equivocado
Perderse en un supermercado
Querer pedir perdon
Encontrar un regalo escondido
Ver un precio carisimo
Olvidarse la letra de una cancion
Tocar timbre y salir corriendo
Hacer una promesa
Ver una cucaracha
Cruzar una calle con mucho trafico
Creer que viste un fantasma
Probar comida que no te gusta
Quedarse sin bateria
Llegar a una fiesta sorpresa
Esperar una nota de examen
Romper algo prestado
Recibir un reto
Descubrir una mentira
Perder una apuesta

[Lugares y momentos]
Sala de espera
Casamiento
Primer dia de clases
Cumpleaños sorpresa
Consulta con el dentista
Viaje en avion
Campamento de noche
Clase de gimnasia
Supermercado lleno
Colectivo lleno
Playa con viento
Restaurante elegante
Teatro en silencio
Museo aburrido
Cine de terror
Parque de diversiones
Peluqueria
Cancha en penales
Aeropuerto
Fiesta de disfraces

[Personajes para actuar]
Detective
Espia
Ladron arrepentido
Reina enojada
Profesor estricto
Vecino chusma
Nene caprichoso
Abuela moderna
Vendedor insistente
Director de orquesta
Presentador de television
Guardia de seguridad
Mozo confundido
Turista perdido
Entrenador exigente
Juez serio
Mago que falla
Cantante sin voz
Actor dramatico
Chef apurado

[Desafios familiares]
El piso esta caliente
No despertar al bebe
La comida esta quemada
Se corto la luz
Hay olor raro
Te pica todo
Tenes chicle pegado
No entra en la valija
El perro se escapo
La puerta no abre
Se perdio el control remoto
Alguien ronca muy fuerte
La silla esta rota
La sopa quema
El zapato aprieta
Te equivocaste de colectivo
No queres compartir
Te estan copiando en la prueba
La foto salio mal
El regalo no te gusta
El ascensor se mueve raro
El pelo quedo horrible
Hay que hablar bajito
Te olvidaste el nombre
La torta se cae`;

const state = {
  activeMode: "impostor",
  players: [],
  dictionaryCategories: [],
  mimeCategories: parseDictionaryText(MIME_DICTIONARY_TEXT),
  dictionaryToolsVisible: false,
  selectedCategoryId: "aleatorio",
  usedWordKeys: readUsedWordsSession(),
  mimeSelectedCategoryId: "aleatorio",
  mime: null,
  drag: null,
  game: null
};

const screens = {
  setup: document.getElementById("setup-screen"),
  pass: document.getElementById("pass-screen"),
  role: document.getElementById("role-screen"),
  timer: document.getElementById("timer-screen"),
  end: document.getElementById("end-screen"),
  mimePass: document.getElementById("mime-pass-screen"),
  mimeWord: document.getElementById("mime-word-screen"),
  mimeEnd: document.getElementById("mime-end-screen")
};

const elements = {
  modeTabs: [...document.querySelectorAll(".mode-tab")],
  playerForm: document.getElementById("player-form"),
  playerInput: document.getElementById("player-input"),
  playersList: document.getElementById("players-list"),
  playersHint: document.getElementById("players-hint"),
  addMalisanisButton: document.getElementById("add-malisanis-button"),

  settingsTitle: document.getElementById("settings-title"),
  categoryLabel: document.getElementById("category-label"),
  categorySelect: document.getElementById("category-select"),
  durationField: document.getElementById("duration-field"),
  durationSelect: document.getElementById("duration-select"),
  dictionaryStatus: document.getElementById("dictionary-status"),
  sessionWordStatus: document.getElementById("session-word-status"),
  mimeWordStatus: document.getElementById("mime-word-status"),
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
  playAgainButton: document.getElementById("play-again-button"),

  mimePlayer: document.getElementById("mime-player"),
  mimeProgress: document.getElementById("mime-progress"),
  showMimeWordButton: document.getElementById("show-mime-word-button"),
  mimeWordPlayer: document.getElementById("mime-word-player"),
  mimeSecretWord: document.getElementById("mime-secret-word"),
  mimeCategory: document.getElementById("mime-category"),
  nextMimeTurnButton: document.getElementById("next-mime-turn-button"),
  finishMimeButton: document.getElementById("finish-mime-button"),
  mimeEndSummary: document.getElementById("mime-end-summary"),
  playMimeAgainButton: document.getElementById("play-mime-again-button")
};

elements.playerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addPlayer(elements.playerInput.value);
});

elements.addMalisanisButton.addEventListener("click", addMalisanisPlayers);

elements.modeTabs.forEach((button) => {
  button.addEventListener("click", () => switchMode(button.dataset.mode));
});

elements.categorySelect.addEventListener("change", () => {
  if (state.activeMode === "mimica") {
    state.mimeSelectedCategoryId = elements.categorySelect.value;
  } else {
    state.selectedCategoryId = elements.categorySelect.value;
  }
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
elements.showMimeWordButton.addEventListener("click", showMimeWordScreen);
elements.nextMimeTurnButton.addEventListener("click", nextMimeTurn);
elements.finishMimeButton.addEventListener("click", () => finishMimeGame("Juego terminado."));
elements.playMimeAgainButton.addEventListener("click", prepareMimeSetup);

void loadDictionary();
renderMode();
renderPlayers();

function switchMode(mode) {
  if (!["impostor", "mimica"].includes(mode) || state.activeMode === mode) {
    return;
  }

  stopTimerLoop();
  state.activeMode = mode;
  state.game = null;
  state.mime = null;
  renderMode();
  showScreen("setup");
  updateStartAvailability();
}

function renderMode() {
  const isMimeMode = state.activeMode === "mimica";
  elements.modeTabs.forEach((button) => {
    const isActive = button.dataset.mode === state.activeMode;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  elements.playersHint.textContent = isMimeMode
    ? "Agrega al menos 2 jugadores para empezar."
    : "Agrega al menos 3 jugadores para empezar.";
  elements.settingsTitle.textContent = isMimeMode ? "Mimica" : "Partida";
  elements.categoryLabel.textContent = isMimeMode ? "Tipo de palabras" : "Tema de palabras";
  elements.startButton.textContent = isMimeMode ? "Empezar mimica" : "Iniciar partida";
  elements.durationField.classList.toggle("hidden", isMimeMode);
  document.querySelectorAll(".impostor-setting").forEach((element) => {
    element.classList.toggle("hidden", isMimeMode);
  });
  elements.mimeWordStatus.classList.toggle("hidden", !isMimeMode);
  renderDictionaryTools();
  renderCategorySelect();
}

function renderDictionaryTools() {
  elements.dictionaryTools.classList.toggle(
    "hidden",
    state.activeMode === "mimica" || !state.dictionaryToolsVisible
  );
}

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
      item.className = "player-item";

      const name = document.createElement("span");
      name.className = "player-name";
      name.textContent = `${index + 1}. ${player}`;

      const actions = document.createElement("div");
      actions.className = "player-actions";

      const dragHandle = document.createElement("button");
      dragHandle.type = "button";
      dragHandle.className = "drag-handle";
      dragHandle.textContent = "Arrastrar";
      dragHandle.setAttribute("aria-label", `Mover ${player}`);
      dragHandle.addEventListener("pointerdown", (event) => beginPlayerDrag(event, index));

      const removeButton = document.createElement("button");
      removeButton.type = "button";
      removeButton.className = "remove-player-button";
      removeButton.textContent = "Quitar";
      removeButton.setAttribute("aria-label", `Quitar ${player}`);
      removeButton.addEventListener("click", () => removePlayer(index));

      item.appendChild(name);
      actions.appendChild(dragHandle);
      actions.appendChild(removeButton);
      item.appendChild(actions);
      elements.playersList.appendChild(item);
    });
  }

  updateStartAvailability();
}

function beginPlayerDrag(event, index) {
  if (event.button !== undefined && event.button !== 0) {
    return;
  }

  if (state.players.length < 2 || state.drag) {
    return;
  }

  const item = event.currentTarget.closest("li");
  if (!item) {
    return;
  }

  event.preventDefault();

  const rect = item.getBoundingClientRect();
  const placeholder = document.createElement("li");
  placeholder.className = "drag-placeholder";
  placeholder.style.height = `${rect.height}px`;
  placeholder.setAttribute("aria-hidden", "true");

  item.parentElement.insertBefore(placeholder, item);
  document.body.appendChild(item);

  item.classList.add("dragging");
  item.style.height = `${rect.height}px`;
  item.style.width = `${rect.width}px`;
  item.style.left = `${rect.left}px`;
  item.style.top = `${rect.top}px`;

  state.drag = {
    pointerId: event.pointerId,
    sourceIndex: index,
    targetIndex: index,
    offsetY: event.clientY - rect.top,
    placeholder,
    item
  };

  document.body.classList.add("dragging-players");
  window.addEventListener("pointermove", handlePlayerDragMove, { passive: false });
  window.addEventListener("pointerup", finishPlayerDrag);
  window.addEventListener("pointercancel", cancelPlayerDrag);
}

function handlePlayerDragMove(event) {
  const drag = state.drag;
  if (!drag || event.pointerId !== drag.pointerId) {
    return;
  }

  event.preventDefault();

  drag.item.style.top = `${event.clientY - drag.offsetY}px`;
  moveDragPlaceholder(event.clientY);
}

function moveDragPlaceholder(clientY) {
  const drag = state.drag;
  if (!drag) {
    return;
  }

  const siblings = [...elements.playersList.querySelectorAll(".player-item")];
  const nextItem = siblings.find((item) => {
    const rect = item.getBoundingClientRect();
    return clientY < rect.top + rect.height / 2;
  });

  if (nextItem) {
    elements.playersList.insertBefore(drag.placeholder, nextItem);
  } else {
    elements.playersList.appendChild(drag.placeholder);
  }

  drag.targetIndex = [...elements.playersList.children].indexOf(drag.placeholder);
}

function finishPlayerDrag(event) {
  const drag = state.drag;
  if (!drag || event.pointerId !== drag.pointerId) {
    return;
  }

  const fromIndex = drag.sourceIndex;
  const toIndex = drag.targetIndex;
  const [movedPlayer] = state.players.splice(fromIndex, 1);
  state.players.splice(toIndex, 0, movedPlayer);

  cleanupPlayerDrag();
  renderPlayers();
}

function cancelPlayerDrag(event) {
  const drag = state.drag;
  if (!drag || event.pointerId !== drag.pointerId) {
    return;
  }

  cleanupPlayerDrag();
  renderPlayers();
}

function cleanupPlayerDrag() {
  const drag = state.drag;
  if (!drag) {
    return;
  }

  window.removeEventListener("pointermove", handlePlayerDragMove);
  window.removeEventListener("pointerup", finishPlayerDrag);
  window.removeEventListener("pointercancel", cancelPlayerDrag);
  document.body.classList.remove("dragging-players");

  drag.item.remove();
  drag.placeholder.remove();
  state.drag = null;
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
    state.dictionaryToolsVisible = false;
    renderDictionaryTools();
  } catch (_error) {
    state.dictionaryToolsVisible = true;
    renderDictionaryTools();

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
  const isMimeMode = state.activeMode === "mimica";
  const categories = isMimeMode ? state.mimeCategories : state.dictionaryCategories;
  const previousValue = isMimeMode ? state.mimeSelectedCategoryId : state.selectedCategoryId;
  elements.categorySelect.innerHTML = "";

  const randomOption = document.createElement("option");
  randomOption.value = "aleatorio";
  randomOption.textContent = "Aleatorio";
  elements.categorySelect.appendChild(randomOption);

  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category.id;
    option.textContent = `${category.name} (${category.words.length})`;
    elements.categorySelect.appendChild(option);
  });

  const selectedExists = previousValue === "aleatorio" || categories.some((category) => category.id === previousValue);

  const selectedValue = selectedExists ? previousValue : "aleatorio";
  if (isMimeMode) {
    state.mimeSelectedCategoryId = selectedValue;
  } else {
    state.selectedCategoryId = selectedValue;
  }
  elements.categorySelect.value = selectedValue;
}

function updateStartAvailability() {
  if (state.activeMode === "mimica") {
    const hasPlayers = state.players.length >= MIN_MIME_PLAYERS;
    const roundSelection = resolveMimeSelection();
    const hasWords = hasAvailableSelectionWords(roundSelection);
    elements.startButton.disabled = !(hasPlayers && hasWords);
    renderMimeWordStatus();
    return;
  }

  const hasPlayers = state.players.length >= MIN_PLAYERS;
  const roundSelection = resolveRoundSelection();
  const hasWords = hasAvailableSelectionWords(roundSelection);
  elements.startButton.disabled = !(hasPlayers && hasWords);
  renderSessionWordStatus();
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

function readUsedWordsSession() {
  try {
    const raw = sessionStorage.getItem(USED_WORDS_SESSION_KEY);
    if (!raw) {
      return new Set();
    }

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return new Set();
    }

    return new Set(parsed.filter((value) => typeof value === "string"));
  } catch (_error) {
    return new Set();
  }
}

function saveUsedWordsSession() {
  try {
    sessionStorage.setItem(USED_WORDS_SESSION_KEY, JSON.stringify([...state.usedWordKeys]));
  } catch (_error) {
    // Persistencia opcional; si falla seguimos en memoria.
  }
}

function normalizeWordKey(word) {
  return word.trim().toLowerCase().replace(/\s+/g, " ");
}

function getAvailableWordsFor(category, usedWordKeys) {
  return category.words.filter((word) => !usedWordKeys.has(normalizeWordKey(word)));
}

function getAvailableWords(category) {
  return getAvailableWordsFor(category, state.usedWordKeys);
}

function getRandomAvailableWordPoolFor(categories, usedWordKeys) {
  const pool = new Map();

  categories.forEach((category) => {
    category.words.forEach((word) => {
      const key = normalizeWordKey(word);
      if (usedWordKeys.has(key)) {
        return;
      }

      const existing = pool.get(key);
      if (existing) {
        existing.categories.push(category);
        return;
      }

      pool.set(key, {
        key,
        word,
        categories: [category]
      });
    });
  });

  return [...pool.values()];
}

function getRandomAvailableWordPool() {
  return getRandomAvailableWordPoolFor(state.dictionaryCategories, state.usedWordKeys);
}

function countAvailableWordsFor(categories, usedWordKeys) {
  const availableKeys = new Set();

  categories.forEach((category) => {
    category.words.forEach((word) => {
      const key = normalizeWordKey(word);
      if (!usedWordKeys.has(key)) {
        availableKeys.add(key);
      }
    });
  });

  return availableKeys.size;
}

function countAvailableWords(categories) {
  return countAvailableWordsFor(categories, state.usedWordKeys);
}

function renderSessionWordStatus() {
  if (!elements.sessionWordStatus) {
    return;
  }

  if (state.dictionaryCategories.length === 0) {
    elements.sessionWordStatus.textContent = "";
    elements.sessionWordStatus.classList.remove("warning");
    return;
  }

  if (state.selectedCategoryId === "aleatorio") {
    const availableWords = countAvailableWords(state.dictionaryCategories);
    elements.sessionWordStatus.textContent =
      availableWords > 0
        ? `Palabras sin repetir en esta sesion: ${availableWords}.`
        : "Ya se usaron todas las palabras de esta sesion.";
    elements.sessionWordStatus.classList.toggle("warning", availableWords === 0);
    return;
  }

  const selectedCategory = state.dictionaryCategories.find((category) => category.id === state.selectedCategoryId);
  if (!selectedCategory) {
    elements.sessionWordStatus.textContent = "";
    elements.sessionWordStatus.classList.remove("warning");
    return;
  }

  const availableWords = getAvailableWords(selectedCategory).length;
  elements.sessionWordStatus.textContent =
    availableWords > 0
      ? `Palabras sin repetir en ${selectedCategory.name}: ${availableWords}.`
      : `Ya se usaron todas las palabras de ${selectedCategory.name} en esta sesion.`;
  elements.sessionWordStatus.classList.toggle("warning", availableWords === 0);
}

function renderMimeWordStatus() {
  const availableWords = countAvailableWordsFor(state.mimeCategories, state.mime?.usedWordKeys || new Set());
  elements.mimeWordStatus.textContent =
    availableWords > 0
      ? `Palabras de mimica disponibles: ${availableWords}.`
      : "Ya se usaron todas las palabras de mimica.";
  elements.mimeWordStatus.classList.toggle("warning", availableWords === 0);
}

function hasAvailableSelectionWords(selection) {
  return Boolean(
    selection &&
      ((selection.mode === "aleatorio" && selection.availablePool.length > 0) ||
        (selection.mode === "categoria" && selection.availableWords.length > 0))
  );
}

function resolveWordSelectionFor(categories, selectedCategoryId, usedWordKeys) {
  if (categories.length === 0) {
    return null;
  }

  if (selectedCategoryId === "aleatorio") {
    const availablePool = getRandomAvailableWordPoolFor(categories, usedWordKeys);
    if (availablePool.length === 0) {
      return null;
    }

    return { mode: "aleatorio", availablePool };
  }

  const selectedCategory = categories.find((category) => category.id === selectedCategoryId);
  if (!selectedCategory) {
    return resolveFallbackWordSelectionFor(categories, usedWordKeys);
  }

  const availableWords = getAvailableWordsFor(selectedCategory, usedWordKeys);
  if (availableWords.length === 0) {
    return null;
  }

  return { mode: "categoria", category: selectedCategory, availableWords };
}

function resolveRoundSelectionFor(usedWordKeys) {
  return resolveWordSelectionFor(state.dictionaryCategories, state.selectedCategoryId, usedWordKeys);
}

function resolveRoundSelection() {
  return resolveRoundSelectionFor(state.usedWordKeys);
}

function resolveFallbackWordSelectionFor(categories, usedWordKeys) {
  const availablePool = getRandomAvailableWordPoolFor(categories, usedWordKeys);
  if (availablePool.length === 0) {
    return null;
  }

  return { mode: "aleatorio", availablePool };
}

function resolveFallbackRoundSelection() {
  return resolveFallbackWordSelectionFor(state.dictionaryCategories, state.usedWordKeys);
}

function resolveMimeSelection() {
  return resolveWordSelectionFor(
    state.mimeCategories,
    state.mimeSelectedCategoryId,
    state.mime?.usedWordKeys || new Set()
  );
}

function pickWordFromRoundSelection(roundSelection) {
  if (roundSelection.mode === "aleatorio") {
    const selectedEntry = randomFrom(roundSelection.availablePool);
    return {
      category: randomFrom(selectedEntry.categories),
      secretWord: selectedEntry.word
    };
  }

  return {
    category: roundSelection.category,
    secretWord: randomFrom(roundSelection.availableWords)
  };
}

function startGame() {
  if (state.activeMode === "mimica") {
    startMimeGame();
    return;
  }

  if (state.players.length < MIN_PLAYERS) {
    return;
  }

  const roundSelection = resolveRoundSelection();
  if (!roundSelection) {
    return;
  }

  const durationMinutes = Number(elements.durationSelect.value);
  const impostorIndex = randomInt(0, state.players.length - 1);
  const { category, secretWord } = pickWordFromRoundSelection(roundSelection);

  state.usedWordKeys.add(normalizeWordKey(secretWord));
  saveUsedWordsSession();

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

function startMimeGame() {
  if (state.players.length < MIN_MIME_PLAYERS) {
    return;
  }

  state.mime = {
    usedWordKeys: new Set(),
    playerIndex: 0,
    turnsPlayed: 0,
    currentWord: null,
    currentCategoryName: null
  };

  if (!resolveMimeSelection()) {
    state.mime = null;
    return;
  }

  showScreen("mimePass");
  renderMimePassStep();
}

function renderMimePassStep() {
  const mime = state.mime;
  if (!mime) {
    return;
  }

  const playerName = state.players[mime.playerIndex];
  elements.mimePlayer.textContent = playerName;
  elements.mimeProgress.textContent = `Turno ${mime.turnsPlayed + 1}`;
}

function showMimeWordScreen() {
  const mime = state.mime;
  if (!mime) {
    return;
  }

  const roundSelection = resolveMimeSelection();
  if (!roundSelection) {
    finishMimeGame("No quedan palabras disponibles.");
    return;
  }

  const { category, secretWord } = pickWordFromRoundSelection(roundSelection);
  mime.usedWordKeys.add(normalizeWordKey(secretWord));
  mime.currentWord = secretWord;
  mime.currentCategoryName = category.name;

  elements.mimeWordPlayer.textContent = state.players[mime.playerIndex];
  elements.mimeSecretWord.textContent = secretWord;
  elements.mimeCategory.textContent = category.name;
  showScreen("mimeWord");
}

function nextMimeTurn() {
  const mime = state.mime;
  if (!mime) {
    return;
  }

  mime.turnsPlayed += 1;
  mime.playerIndex = (mime.playerIndex + 1) % state.players.length;
  mime.currentWord = null;
  mime.currentCategoryName = null;

  if (!resolveMimeSelection()) {
    finishMimeGame("No quedan palabras disponibles.");
    return;
  }

  renderMimePassStep();
  showScreen("mimePass");
}

function finishMimeGame(reason) {
  const mime = state.mime;
  if (!mime) {
    return;
  }

  const playedTurns = mime.turnsPlayed + (mime.currentWord ? 1 : 0);
  elements.mimeEndSummary.textContent = `${reason} Turnos jugados: ${playedTurns}.`;
  showScreen("mimeEnd");
}

function prepareMimeSetup() {
  state.mime = null;
  state.activeMode = "mimica";
  renderMode();
  showScreen("setup");
  updateStartAvailability();
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
