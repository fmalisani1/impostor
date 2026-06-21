const MIN_PLAYERS = 3;
const DICTIONARY_CACHE_KEY = "impostor_dictionary_cache_v2";
const USED_WORDS_SESSION_KEY = "impostor_used_words_session_v1";
const MIME_USED_WORDS_SESSION_KEY = "impostor_mime_used_words_session_v1";
const MIME_RATINGS_STORAGE_KEY = "impostor_mime_ratings_v1";
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

const MIME_ADDITIONAL_DICTIONARY_TEXT = `[Objetos complicados]
Una brújula que apunta mal
Un catalejo que no enfoca
Binoculares usados al revés
Un ábaco que cuenta solo
Un tocadiscos demasiado rápido
Un paracaídas que no se abre
Un telescopio que sigue un avión
Un microscopio con algo vivo
Un fonógrafo que habla solo
Una marioneta con hilos enredados
Un búmeran que no regresa
Una lupa bajo el sol
Una palanca imposible de mover
Una polea que levanta demasiado
Un extintor fuera de control
Un salvavidas que se desinfla
Una cerradura que se traba
Una antena buscando señal
Un radar que detecta fantasmas
Un tobogán demasiado caliente
Un títere que cobra vida
Un ancla imposible de levantar
Un imán pegado a todo

[Objetos con historia]
Una corona que queda enorme
Un escudo demasiado pesado

[Lugares y momentos]
Perderse dentro de un aeropuerto
Bailar solo en un casamiento
Salir disconforme de la peluquería

[Personajes para actuar]
Un detective siguiendo pistas falsas
Un espía con un disfraz pésimo

[Escenas absurdas]
Un vampiro en el dentista
Un astronauta buscando señal de wifi
Un fantasma que tiene miedo
Un robot aprendiendo a bailar
Un pirata mareado en tierra firme
Un superhéroe con dolor de espalda
Un mago perseguido por su conejo
Un monstruo que pide permiso
Un zombie haciendo ejercicio
Una momia desenrollando papel higiénico
Un extraterrestre probando mate
Un dinosaurio entrando en un ascensor
Un gigante escondido detrás de una planta
Un payaso serio en un cumpleaños
Un ninja pisando juguetes ruidosos
Una sirena aprendiendo a caminar
Un rey buscando la corona perdida
Una bruja con la escoba rota
Un cavernícola usando un celular
Un ángel perdiendo una pluma
Un demonio pidiendo disculpas
Un muñeco de nieve en la playa
Un espantapájaros espantado por un pájaro
Un hombre invisible chocando muebles
Un genio sin deseos disponibles
Un caballero con una espada de goma
Un científico convertido en bebé
Un director de orquesta sin músicos
Un ladrón devolviendo lo que robó
Un guardavidas que no sabe nadar

[Problemas inesperados]
Abrir un paraguas con mucho viento
Descubrir que el piso está pegajoso
Quedar atrapado dentro de un disfraz
Perder un zapato mientras corrés
Romper el cierre de una valija llena
Encontrar una araña dentro de la ropa
Quedarse sin papel en el baño
Abrir una gaseosa que explota
Sentarse sobre una silla mojada
Pisar un juguete en la oscuridad
Recibir una llamada en pleno silencio
Olvidar dónde estacionaste el auto
Encontrar las llaves dentro del auto
Perder el colectivo por un segundo
Romper el regalo antes de entregarlo
Quemarse la lengua con la comida
Confundir la sal con el azúcar
Ponerse dos zapatos diferentes
Descubrir una mancha en la ropa
Que se corte el agua bañándote
Que se vuele toda la tarea
Que un pájaro robe tu comida
Que el perro esconda el control remoto
Que suene una alarma desconocida
Que se rompa la cama saltando
Quedar encerrado en un baño público
Recibir un paquete que no pediste
Encontrar un pelo en la sopa
Olvidar el nombre de alguien conocido
Saludar a alguien que no te saludaba

[Acciones complicadas]
Doblar una sábana ajustable
Caminar sobre un piso resbaloso
Comer fideos sin hacer ruido
Inflar un globo que se escapa
Cerrar una valija demasiado llena
Sacar una foto grupal perfecta
Cambiar una lamparita muy alta
Armar una carpa bajo la lluvia
Desenredar unos auriculares imposibles
Abrir un frasco muy apretado
Transportar una torta sin inclinarla
Ponerse un pantalón demasiado ajustado
Caminar con los cordones atados
Atrapar una mosca con las manos
Servir agua sin derramar una gota
Escribir mientras viaja el colectivo
Buscar algo debajo de la cama
Hacer equilibrio con muchos platos
Envolver un regalo de forma horrible
Peinarse frente a un espejo roto
Subir una escalera con miedo
Cruzar un charco sin mojarse
Guardar un colchón en un ascensor
Hacer una videollamada sin señal
Abrir una bolsa que no se abre
Vestirse con muchísimo apuro
Apagar muchas velas de una vez
Mover un mueble sin hacer ruido
Leer un mapa completamente al revés
Esquivar gotas debajo de una gotera

[Aventuras imaginarias]
Escapar de un castillo encantado
Cruzar un puente que se derrumba
Encontrar un tesoro lleno de medias
Navegar durante una tormenta gigante
Volar sobre una alfombra descontrolada
Entrar en una casa abandonada
Descubrir una puerta hacia otro mundo
Huir de una estatua que camina
Explorar una cueva llena de ecos
Rescatar a un dragón asustado
Pelear contra una sombra propia
Buscar agua en un desierto
Subir una montaña durante una nevada
Cruzar una selva sin hacer ruido
Escapar de arenas movedizas
Abrir un cofre que estornuda
Viajar en una máquina del tiempo
Encontrarse con uno mismo del futuro
Llegar a un planeta diminuto
Manejar una nave sin instrucciones
Sobrevivir a una lluvia de almohadas
Defender una fortaleza de juguete
Seguir un mapa dibujado por un niño
Despertar dentro de un videojuego
Entrar en un cuadro famoso
Perseguir un tren a caballo
Caminar por la luna sin gravedad
Descubrir que podés atravesar paredes
Convertirse en gigante por accidente
Volver a casa montando una nube`;

function buildMimeCategories() {
  const excludedCategories = new Set(["animales raros", "animales dificiles"]);
  const combinedCategories = [];
  const sources = [parseDictionaryText(MIME_DICTIONARY_TEXT), parseDictionaryText(MIME_ADDITIONAL_DICTIONARY_TEXT)];

  sources.forEach((categories, sourceIndex) => {
    categories.forEach((category) => {
      if (sourceIndex === 0 && excludedCategories.has(category.name.toLowerCase())) {
        return;
      }

      const targetCategory = ensureRawCategory(combinedCategories, category.name);
      const validPhrases = sourceIndex === 0
        ? category.words.filter((phrase) => phrase.trim().split(/\s+/).length > 1)
        : category.words;
      targetCategory.words.push(...validPhrases);
    });
  });

  return normalizeCategories(combinedCategories);
}

function validateMimeCategories(categories) {
  const phraseKeys = new Set();

  categories.forEach((category) => {
    category.words.forEach((phrase) => {
      if (phrase.trim().split(/\s+/).length < 2) {
        throw new Error(`La frase de mimica debe tener varias palabras: "${phrase}"`);
      }

      const key = normalizeWordKey(phrase);
      if (phraseKeys.has(key)) {
        throw new Error(`Frase de mimica duplicada: "${phrase}"`);
      }
      phraseKeys.add(key);
    });
  });

  return categories;
}

const state = {
  activeMode: "impostor",
  players: [],
  dictionaryCategories: [],
  mimeCategories: validateMimeCategories(buildMimeCategories()),
  dictionaryToolsVisible: false,
  selectedCategoryId: "aleatorio",
  usedWordKeys: readUsedWordsSession(),
  mimeSelectedCategoryId: "aleatorio",
  mimeUsedWordKeys: readMimeUsedWordsSession(),
  mimeRatings: readMimeRatings(),
  mimeRatingsVisible: false,
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
  playersCard: document.getElementById("players-card"),
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
  mimeRatingsTools: document.getElementById("mime-ratings-tools"),
  mimeRatingsToggle: document.getElementById("mime-ratings-toggle"),
  mimeRatingsPanel: document.getElementById("mime-ratings-panel"),
  mimeLikedCount: document.getElementById("mime-liked-count"),
  mimeDislikedCount: document.getElementById("mime-disliked-count"),
  mimeUnratedCount: document.getElementById("mime-unrated-count"),
  mimeRatingsList: document.getElementById("mime-ratings-list"),
  downloadDislikesButton: document.getElementById("download-dislikes-button"),
  clearMimeRatingsButton: document.getElementById("clear-mime-ratings-button"),
  dictionaryTools: document.getElementById("dictionary-tools"),
  dictionaryFile: document.getElementById("dictionary-file"),
  dictionaryButton: document.getElementById("dictionary-button"),
  startButton: document.getElementById("start-button"),

  passPlayer: document.getElementById("pass-player"),
  passProgress: document.getElementById("pass-progress"),
  showRoleButton: document.getElementById("show-role-button"),

  rolePlayer: document.getElementById("role-player"),
  roleCard: document.getElementById("role-card"),
  roleLabel: document.getElementById("role-label"),
  roleName: document.getElementById("role-name"),
  secretWord: document.getElementById("secret-word"),
  impostorHint: document.getElementById("impostor-hint"),
  understoodButton: document.getElementById("understood-button"),

  timerDisplay: document.getElementById("timer-display"),
  pauseButton: document.getElementById("pause-button"),
  finishButton: document.getElementById("finish-button"),

  endSummary: document.getElementById("end-summary"),
  playAgainButton: document.getElementById("play-again-button"),

  mimeProgress: document.getElementById("mime-progress"),
  showMimeWordButton: document.getElementById("show-mime-word-button"),
  mimeSecretWord: document.getElementById("mime-secret-word"),
  mimeCategory: document.getElementById("mime-category"),
  mimeLikeButton: document.getElementById("mime-like-button"),
  mimeDislikeButton: document.getElementById("mime-dislike-button"),
  mimeRatingFeedback: document.getElementById("mime-rating-feedback"),
  nextMimeTurnButton: document.getElementById("next-mime-turn-button"),
  finishMimeButton: document.getElementById("finish-mime-button"),
  mimeEndSummary: document.getElementById("mime-end-summary"),
  playMimeAgainButton: document.getElementById("play-mime-again-button"),
  exitMimeButton: document.getElementById("exit-mime-button")
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
elements.mimeLikeButton.addEventListener("click", () => toggleCurrentMimeRating("like"));
elements.mimeDislikeButton.addEventListener("click", () => toggleCurrentMimeRating("dislike"));
elements.nextMimeTurnButton.addEventListener("click", nextMimeTurn);
elements.finishMimeButton.addEventListener("click", () => finishMimeGame("Juego terminado."));
elements.playMimeAgainButton.addEventListener("click", prepareMimeSetup);
elements.exitMimeButton.addEventListener("click", exitMimeGame);
elements.mimeRatingsToggle.addEventListener("click", toggleMimeRatingsPanel);
elements.downloadDislikesButton.addEventListener("click", downloadDislikes);
elements.clearMimeRatingsButton.addEventListener("click", clearMimeRatings);

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

  elements.playersCard.classList.toggle("hidden", isMimeMode);
  elements.playersHint.textContent = "Agrega al menos 3 jugadores para empezar.";
  elements.settingsTitle.textContent = isMimeMode ? "Mimica" : "Partida";
  elements.categoryLabel.textContent = isMimeMode ? "Tipo de frases" : "Tema de palabras";
  elements.startButton.textContent = isMimeMode ? "Empezar mimica" : "Iniciar partida";
  elements.durationField.classList.toggle("hidden", isMimeMode);
  document.querySelectorAll(".impostor-setting").forEach((element) => {
    element.classList.toggle("hidden", isMimeMode);
  });
  elements.mimeWordStatus.classList.toggle("hidden", !isMimeMode);
  elements.mimeRatingsTools.classList.toggle("hidden", !isMimeMode);
  renderDictionaryTools();
  renderCategorySelect();
  renderMimeRatings();
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
  const categories = isMimeMode ? getMimePlayableCategories() : state.dictionaryCategories;
  const previousValue = isMimeMode ? state.mimeSelectedCategoryId : state.selectedCategoryId;
  elements.categorySelect.innerHTML = "";

  const randomOption = document.createElement("option");
  randomOption.value = "aleatorio";
  randomOption.textContent = "Aleatorio";
  randomOption.disabled = isMimeMode && countWords(categories) === 0;
  elements.categorySelect.appendChild(randomOption);

  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category.id;
    option.textContent = `${category.name} (${category.words.length})`;
    option.disabled = isMimeMode && category.words.length === 0;
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
    const hasPhrases = Boolean(resolveMimeSelection(new Set()));
    elements.startButton.disabled = !hasPhrases;
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

function readMimeUsedWordsSession() {
  try {
    const raw = sessionStorage.getItem(MIME_USED_WORDS_SESSION_KEY);
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

function saveMimeUsedWordsSession() {
  try {
    sessionStorage.setItem(MIME_USED_WORDS_SESSION_KEY, JSON.stringify([...state.mimeUsedWordKeys]));
  } catch (_error) {
    // Persistencia opcional; si falla seguimos en memoria.
  }
}

function readMimeRatings() {
  try {
    const raw = localStorage.getItem(MIME_RATINGS_STORAGE_KEY);
    if (!raw) {
      return new Map();
    }

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return new Map();
    }

    const ratings = new Map();
    parsed.forEach((record) => {
      if (
        record &&
        typeof record.phrase === "string" &&
        typeof record.category === "string" &&
        ["like", "dislike"].includes(record.rating)
      ) {
        ratings.set(normalizeWordKey(record.phrase), {
          phrase: record.phrase.trim(),
          category: record.category.trim(),
          rating: record.rating,
          updatedAt: typeof record.updatedAt === "string" ? record.updatedAt : ""
        });
      }
    });
    return ratings;
  } catch (_error) {
    return new Map();
  }
}

function saveMimeRatings() {
  try {
    localStorage.setItem(MIME_RATINGS_STORAGE_KEY, JSON.stringify([...state.mimeRatings.values()]));
  } catch (_error) {
    // Persistencia opcional; si falla seguimos en memoria.
  }
}

function getMimeRating(phrase) {
  return state.mimeRatings.get(normalizeWordKey(phrase)) || null;
}

function isMimePhraseDisliked(phrase) {
  return getMimeRating(phrase)?.rating === "dislike";
}

function getMimePlayableCategories() {
  return state.mimeCategories.map((category) => ({
    ...category,
    words: category.words.filter((phrase) => !isMimePhraseDisliked(phrase))
  }));
}

function setMimeRating(phrase, category, rating) {
  const key = normalizeWordKey(phrase);
  if (rating === null) {
    state.mimeRatings.delete(key);
  } else if (["like", "dislike"].includes(rating)) {
    state.mimeRatings.set(key, {
      phrase: phrase.trim(),
      category: category.trim(),
      rating,
      updatedAt: new Date().toISOString()
    });
  } else {
    return;
  }

  saveMimeRatings();
  renderMimeRatingButtons();
  renderMimeRatings();
  renderCategorySelect();
  updateStartAvailability();
}

function toggleCurrentMimeRating(rating) {
  const mime = state.mime;
  if (!mime?.currentWord) {
    return;
  }

  const currentRating = getMimeRating(mime.currentWord)?.rating;
  setMimeRating(
    mime.currentWord,
    mime.currentCategoryName,
    currentRating === rating ? null : rating
  );
}

function renderMimeRatingButtons() {
  const currentWord = state.mime?.currentWord;
  const rating = currentWord ? getMimeRating(currentWord)?.rating : null;

  elements.mimeLikeButton.classList.toggle("active", rating === "like");
  elements.mimeDislikeButton.classList.toggle("active", rating === "dislike");
  elements.mimeLikeButton.setAttribute("aria-pressed", String(rating === "like"));
  elements.mimeDislikeButton.setAttribute("aria-pressed", String(rating === "dislike"));

  elements.mimeRatingFeedback.textContent =
    rating === "like"
      ? "Guardada como favorita. Seguira apareciendo normalmente."
      : rating === "dislike"
        ? "No volvera a aparecer en este navegador."
        : "";
}

function toggleMimeRatingsPanel() {
  state.mimeRatingsVisible = !state.mimeRatingsVisible;
  renderMimeRatings();
}

function renderMimeRatings() {
  const records = [...state.mimeRatings.values()].sort((left, right) => {
    if (left.rating !== right.rating) {
      return left.rating === "dislike" ? -1 : 1;
    }
    return left.category.localeCompare(right.category, "es") || left.phrase.localeCompare(right.phrase, "es");
  });
  const liked = records.filter((record) => record.rating === "like");
  const disliked = records.filter((record) => record.rating === "dislike");
  const catalogKeys = new Set(
    state.mimeCategories.flatMap((category) => category.words.map((phrase) => normalizeWordKey(phrase)))
  );
  const ratedCatalogPhrases = records.filter((record) => catalogKeys.has(normalizeWordKey(record.phrase))).length;
  const unrated = Math.max(0, catalogKeys.size - ratedCatalogPhrases);

  elements.mimeRatingsToggle.textContent = `Valoraciones: ${liked.length} likes · ${disliked.length} dislikes`;
  elements.mimeRatingsToggle.setAttribute("aria-expanded", String(state.mimeRatingsVisible));
  elements.mimeRatingsPanel.classList.toggle("hidden", !state.mimeRatingsVisible);
  elements.mimeLikedCount.textContent = String(liked.length);
  elements.mimeDislikedCount.textContent = String(disliked.length);
  elements.mimeUnratedCount.textContent = String(unrated);
  elements.downloadDislikesButton.disabled = disliked.length === 0;
  elements.clearMimeRatingsButton.disabled = records.length === 0;
  elements.mimeRatingsList.innerHTML = "";

  if (records.length === 0) {
    const empty = document.createElement("p");
    empty.className = "muted ratings-empty";
    empty.textContent = "Todavia no valoraste ninguna frase.";
    elements.mimeRatingsList.appendChild(empty);
    return;
  }

  records.forEach((record) => {
    const item = document.createElement("div");
    item.className = `rating-list-item ${record.rating}`;

    const copy = document.createElement("div");
    copy.className = "rating-list-copy";

    const phrase = document.createElement("strong");
    phrase.textContent = `${record.rating === "like" ? "👍" : "👎"} ${record.phrase}`;

    const category = document.createElement("small");
    category.textContent = record.category;

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.className = "subtle";
    removeButton.textContent = record.rating === "dislike" ? "Restaurar" : "Quitar";
    removeButton.addEventListener("click", () => setMimeRating(record.phrase, record.category, null));

    copy.appendChild(phrase);
    copy.appendChild(category);
    item.appendChild(copy);
    item.appendChild(removeButton);
    elements.mimeRatingsList.appendChild(item);
  });
}

function getDislikedMimeRatings() {
  return [...state.mimeRatings.values()]
    .filter((record) => record.rating === "dislike")
    .sort((left, right) =>
      left.category.localeCompare(right.category, "es") || left.phrase.localeCompare(right.phrase, "es")
    );
}

function createDislikesText() {
  const disliked = getDislikedMimeRatings();
  if (disliked.length === 0) {
    return "";
  }

  const grouped = new Map();
  disliked.forEach((record) => {
    if (!grouped.has(record.category)) {
      grouped.set(record.category, []);
    }
    grouped.get(record.category).push(record.phrase);
  });

  const lines = ["# Frases de mimica marcadas con dislike", ""];
  grouped.forEach((phrases, category) => {
    lines.push(`[${category}]`, ...phrases, "");
  });

  return lines.join("\n");
}

function downloadDislikes() {
  const text = createDislikesText();
  if (!text) {
    return;
  }

  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `dislikes-mimica-${new Date().toISOString().slice(0, 10)}.txt`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function clearMimeRatings() {
  if (!window.confirm("¿Borrar todos los likes y dislikes guardados en este navegador?")) {
    return;
  }

  state.mimeRatings.clear();
  try {
    localStorage.removeItem(MIME_RATINGS_STORAGE_KEY);
  } catch (_error) {
    // El estado en memoria ya quedo limpio.
  }
  renderMimeRatings();
  renderCategorySelect();
  updateStartAvailability();
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
  const selectedCategories = getMimeSelectedCategories();
  const totalPhrases = countAvailableWordsFor(selectedCategories, new Set());
  const availablePhrases = countAvailableWordsFor(selectedCategories, state.mimeUsedWordKeys);

  if (totalPhrases === 0) {
    elements.mimeWordStatus.textContent = "No hay frases disponibles.";
    elements.mimeWordStatus.classList.add("warning");
    return;
  }

  elements.mimeWordStatus.textContent =
    availablePhrases > 0
      ? `Frases sin repetir antes de volver a mezclar: ${availablePhrases} de ${totalPhrases}.`
      : `Ciclo completo. Las ${totalPhrases} frases se volveran a mezclar.`;
  elements.mimeWordStatus.classList.toggle("warning", availablePhrases === 0);
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

function resolveMimeSelection(usedWordKeys = state.mimeUsedWordKeys) {
  return resolveWordSelectionFor(
    getMimePlayableCategories(),
    state.mimeSelectedCategoryId,
    usedWordKeys
  );
}

function getMimeSelectedCategories() {
  const playableCategories = getMimePlayableCategories();
  if (state.mimeSelectedCategoryId === "aleatorio") {
    return playableCategories;
  }

  const selectedCategory = playableCategories.find(
    (category) => category.id === state.mimeSelectedCategoryId
  );
  return selectedCategory ? [selectedCategory] : playableCategories;
}

function resetMimeWordCycle() {
  const selectedKeys = new Set();
  getMimeSelectedCategories().forEach((category) => {
    category.words.forEach((word) => selectedKeys.add(normalizeWordKey(word)));
  });

  selectedKeys.forEach((key) => state.mimeUsedWordKeys.delete(key));
  saveMimeUsedWordsSession();
}

function createMimeDeck(roundSelection) {
  const entries = roundSelection.mode === "aleatorio"
    ? roundSelection.availablePool.map((entry) => ({
        category: randomFrom(entry.categories),
        secretWord: entry.word
      }))
    : roundSelection.availableWords.map((word) => ({
        category: roundSelection.category,
        secretWord: word
      }));

  return shuffleItems(entries);
}

function refillMimeDeck() {
  const mime = state.mime;
  if (!mime) {
    return false;
  }

  let roundSelection = resolveMimeSelection();
  if (!roundSelection) {
    resetMimeWordCycle();
    roundSelection = resolveMimeSelection();
  }

  mime.deck = roundSelection ? createMimeDeck(roundSelection) : [];
  return mime.deck.length > 0;
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
  if (!resolveMimeSelection(new Set())) {
    return;
  }

  state.mime = {
    turnsPlayed: 0,
    currentWord: null,
    currentCategoryName: null,
    deck: []
  };

  if (!refillMimeDeck()) {
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

  elements.mimeProgress.textContent = `Turno ${mime.turnsPlayed + 1}`;
}

function showMimeWordScreen() {
  const mime = state.mime;
  if (!mime) {
    return;
  }

  if (mime.deck.length === 0 && !refillMimeDeck()) {
    finishMimeGame("No hay frases disponibles.");
    return;
  }

  const { category, secretWord } = mime.deck.pop();
  state.mimeUsedWordKeys.add(normalizeWordKey(secretWord));
  saveMimeUsedWordsSession();
  mime.currentWord = secretWord;
  mime.currentCategoryName = category.name;

  elements.mimeSecretWord.textContent = secretWord;
  elements.mimeCategory.textContent = category.name;
  renderMimeRatingButtons();
  showScreen("mimeWord");
}

function nextMimeTurn() {
  const mime = state.mime;
  if (!mime) {
    return;
  }

  mime.turnsPlayed += 1;
  mime.currentWord = null;
  mime.currentCategoryName = null;

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

function exitMimeGame() {
  state.mime = null;
  state.activeMode = "impostor";
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
  elements.roleName.textContent = isImpostor ? "Impostor" : "";
  elements.roleCard.classList.toggle("impostor", isImpostor);
  elements.roleCard.classList.toggle("citizen", !isImpostor);

  if (isImpostor) {
    elements.roleLabel.classList.remove("hidden");
    elements.roleName.classList.remove("hidden");
    elements.secretWord.classList.add("hidden");
    elements.impostorHint.classList.remove("hidden");
  } else {
    elements.roleLabel.classList.add("hidden");
    elements.roleName.classList.add("hidden");
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
  const range = max - min + 1;
  if (range <= 0 || range > 0x100000000) {
    throw new RangeError("Rango aleatorio invalido");
  }

  if (globalThis.crypto?.getRandomValues) {
    const values = new Uint32Array(1);
    const limit = 0x100000000 - (0x100000000 % range);
    do {
      globalThis.crypto.getRandomValues(values);
    } while (values[0] >= limit);
    return min + (values[0] % range);
  }

  return Math.floor(Math.random() * range) + min;
}

function shuffleItems(items) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = randomInt(0, index);
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

function showScreen(screenKey) {
  Object.entries(screens).forEach(([key, screen]) => {
    screen.classList.toggle("active", key === screenKey);
  });
}
