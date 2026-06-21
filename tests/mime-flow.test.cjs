const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");
const { webcrypto } = require("node:crypto");

const appSource = fs.readFileSync(path.join(__dirname, "..", "app.js"), "utf8");

class FakeClassList {
  constructor(initial = []) {
    this.values = new Set(initial);
  }

  add(...names) {
    names.forEach((name) => this.values.add(name));
  }

  remove(...names) {
    names.forEach((name) => this.values.delete(name));
  }

  toggle(name, force) {
    const enabled = force === undefined ? !this.values.has(name) : Boolean(force);
    if (enabled) {
      this.values.add(name);
    } else {
      this.values.delete(name);
    }
    return enabled;
  }

  contains(name) {
    return this.values.has(name);
  }
}

class FakeElement {
  constructor(id = "") {
    this.id = id;
    this.classList = new FakeClassList();
    this.dataset = {};
    this.value = "";
    this.textContent = "";
    this.innerHTML = "";
    this.disabled = false;
    this.files = [];
    this.children = [];
    this.listeners = new Map();
  }

  addEventListener(name, listener) {
    this.listeners.set(name, listener);
  }

  appendChild(child) {
    this.children.push(child);
    return child;
  }

  insertBefore(child) {
    this.children.push(child);
    return child;
  }

  remove() {}
  setAttribute() {}
  querySelectorAll() { return []; }
  closest() { return this; }
  getBoundingClientRect() { return { top: 0, left: 0, width: 320, height: 48 }; }
}

function createStorage(seed = new Map()) {
  return {
    values: seed,
    getItem(key) { return this.values.has(key) ? this.values.get(key) : null; },
    setItem(key, value) { this.values.set(key, String(value)); },
    removeItem(key) { this.values.delete(key); }
  };
}

function createApp(sessionValues = new Map(), localValues = new Map()) {
  const elements = new Map();
  const getElement = (id) => {
    if (!elements.has(id)) {
      elements.set(id, new FakeElement(id));
    }
    return elements.get(id);
  };

  const screenIds = [
    "setup-screen",
    "pass-screen",
    "role-screen",
    "timer-screen",
    "end-screen",
    "mime-pass-screen",
    "mime-word-screen",
    "mime-end-screen"
  ];
  const screens = screenIds.map(getElement);
  const modeTabs = ["impostor", "mimica"].map((mode) => {
    const tab = new FakeElement();
    tab.dataset.mode = mode;
    return tab;
  });

  getElement("category-select").value = "aleatorio";
  getElement("duration-select").value = "5";
  getElement("setup-screen").classList.add("active");

  const document = {
    body: new FakeElement("body"),
    createElement: () => new FakeElement(),
    getElementById: getElement,
    querySelectorAll(selector) {
      if (selector === ".screen") return screens;
      if (selector === ".mode-tab") return modeTabs;
      if (selector === ".impostor-setting") {
        return [getElement("dictionary-status"), getElement("session-word-status")];
      }
      return [];
    },
    elementFromPoint: () => null
  };

  const context = vm.createContext({
    console,
    crypto: webcrypto,
    document,
    fetch: async () => ({ ok: false, text: async () => "" }),
    globalThis: null,
    localStorage: createStorage(localValues),
    performance: { now: () => 0 },
    sessionStorage: createStorage(sessionValues),
    setInterval: () => 1,
    clearInterval: () => {},
    setTimeout,
    Uint32Array,
    window: {
      addEventListener: () => {},
      confirm: () => true,
      removeEventListener: () => {},
      innerWidth: 390,
      scrollY: 0
    }
  });
  context.globalThis = context;
  vm.runInContext(appSource, context, { filename: "app.js" });

  return {
    context,
    elements,
    run(expression) {
      return vm.runInContext(expression, context);
    }
  };
}

function drawPhrase(app) {
  app.run("showMimeWordScreen()");
  const phrase = app.run("state.mime.currentWord");
  app.run("nextMimeTurn()");
  return phrase;
}

test("el catálogo de mímica tiene 300 frases, sin animales, palabras sueltas ni duplicados", () => {
  const app = createApp();
  const summary = app.run(`({
    categories: state.mimeCategories.map((category) => category.name),
    phrases: state.mimeCategories.flatMap((category) => category.words)
  })`);

  assert.equal(summary.phrases.length, 300);
  assert.equal(summary.categories.some((name) => name.toLowerCase().includes("animales")), false);
  assert.equal(summary.phrases.some((phrase) => phrase.trim().split(/\s+/).length < 2), false);
  assert.equal(new Set(summary.phrases.map((phrase) => phrase.toLowerCase())).size, 300);
});

test("mímica se puede iniciar sin jugadores y oculta su configuración", () => {
  const app = createApp();
  app.run("switchMode('mimica')");

  assert.equal(app.elements.get("players-card").classList.contains("hidden"), true);
  assert.equal(app.elements.get("start-button").disabled, false);
  app.run("startMimeGame()");
  assert.equal(app.run("state.mime.turnsPlayed"), 0);
  assert.equal(app.elements.get("mime-progress").textContent, "Turno 1");
});

test("salir de mímica vuelve a la pantalla principal", () => {
  const app = createApp();
  app.run("switchMode('mimica'); startMimeGame(); finishMimeGame('Juego terminado.'); exitMimeGame()");

  assert.equal(app.run("state.activeMode"), "impostor");
  assert.equal(app.run("state.mime"), null);
  assert.equal(app.elements.get("setup-screen").classList.contains("active"), true);
  assert.equal(app.elements.get("players-card").classList.contains("hidden"), false);
});

test("el ciudadano ve directamente la palabra y solo el impostor ve su rol", () => {
  const app = createApp();
  app.run(`
    state.players = ['Ana', 'Beto', 'Cami'];
    state.game = {
      revealOrder: [0, 1, 2],
      revealPosition: 0,
      impostorIndex: 1,
      secretWord: 'Parque de diversiones'
    };
    showRoleScreen();
  `);

  assert.equal(app.elements.get("role-name").textContent, "");
  assert.equal(app.elements.get("role-name").classList.contains("hidden"), true);
  assert.equal(app.elements.get("role-label").classList.contains("hidden"), true);
  assert.equal(app.elements.get("secret-word").textContent, "Parque de diversiones");
  assert.equal(app.elements.get("secret-word").classList.contains("hidden"), false);

  app.run("state.game.revealPosition = 1; showRoleScreen()");
  assert.equal(app.elements.get("role-name").textContent, "Impostor");
  assert.equal(app.elements.get("role-name").classList.contains("hidden"), false);
  assert.equal(app.elements.get("role-label").classList.contains("hidden"), false);
  assert.equal(app.elements.get("secret-word").classList.contains("hidden"), true);
});

test("Impostor no repite palabras y comienza otro ciclo al agotarlas", () => {
  const app = createApp();
  app.run(`
    state.players = ['Ana', 'Beto', 'Cami'];
    state.dictionaryCategories = parseDictionaryText('[Prueba]\\nUno\\nDos\\nTres');
    state.selectedCategoryId = 'aleatorio';
    renderCategorySelect();
  `);

  const firstCycle = [];
  for (let round = 0; round < 3; round += 1) {
    app.run("startGame()");
    firstCycle.push(app.run("state.game.secretWord"));
    app.run("prepareNextRound()");
  }
  assert.equal(new Set(firstCycle).size, 3);

  app.run("startGame()");
  const firstWordOfNextCycle = app.run("state.game.secretWord");
  assert.equal(firstCycle.includes(firstWordOfNextCycle), true);
  assert.equal(app.run("state.usedWordKeys.size"), 1);
});

test("Jugar de nuevo inicia otra ronda y Salir vuelve a la configuración", () => {
  const app = createApp();
  app.run(`
    state.players = ['Ana', 'Beto', 'Cami'];
    state.dictionaryCategories = parseDictionaryText('[Prueba]\\nUno\\nDos\\nTres');
    startGame();
  `);
  const firstWord = app.run("state.game.secretWord");

  app.run("finishGame('Juego terminado.'); playImpostorAgain()");
  assert.equal(app.elements.get("pass-screen").classList.contains("active"), true);
  assert.notEqual(app.run("state.game.secretWord"), firstWord);
  assert.equal(app.run("state.game.revealPosition"), 0);

  app.run("prepareNextRound()");
  assert.equal(app.run("state.game"), null);
  assert.equal(app.elements.get("setup-screen").classList.contains("active"), true);
});

test("el historial de palabras de Impostor sobrevive una recarga de la pestaña", () => {
  const sessionValues = new Map();
  const firstApp = createApp(sessionValues);
  firstApp.run(`
    state.players = ['Ana', 'Beto', 'Cami'];
    state.dictionaryCategories = parseDictionaryText('[Prueba]\\nUno\\nDos\\nTres');
    startGame();
  `);
  const firstWord = firstApp.run("state.game.secretWord");

  const secondApp = createApp(sessionValues);
  secondApp.run(`
    state.players = ['Ana', 'Beto', 'Cami'];
    state.dictionaryCategories = parseDictionaryText('[Prueba]\\nUno\\nDos\\nTres');
    startGame();
  `);
  const secondWord = secondApp.run("state.game.secretWord");
  secondApp.run("prepareNextRound(); startGame()");
  const thirdWord = secondApp.run("state.game.secretWord");

  assert.notEqual(secondWord, firstWord);
  assert.notEqual(thirdWord, firstWord);
  assert.notEqual(thirdWord, secondWord);
});

test("las valoraciones de Impostor son locales y solo los dislikes salen del mazo", () => {
  const localValues = new Map();
  const firstApp = createApp(new Map(), localValues);
  firstApp.run(`
    state.players = ['Ana', 'Beto', 'Cami'];
    state.dictionaryCategories = parseDictionaryText('[Prueba]\\nUno\\nDos\\nTres');
    state.game = { secretWord: 'Uno', categoryName: 'Prueba', impostorIndex: 0 };
    finishGame('Juego terminado.');
    toggleCurrentImpostorRating('dislike');
  `);

  assert.equal(firstApp.elements.get("end-word").textContent, '"Uno"');
  assert.equal(firstApp.elements.get("end-impostor").textContent, "Ana");
  assert.equal(firstApp.run("state.impostorRatings.size"), 1);
  assert.equal(firstApp.run("countWords(getImpostorPlayableCategories())"), 2);
  assert.equal(firstApp.elements.get("impostor-disliked-count").textContent, "1");
  assert.match(firstApp.run("createImpostorDislikesText()"), /Uno/);
  firstApp.run("toggleImpostorRatingsPanel()");
  assert.equal(firstApp.elements.get("impostor-ratings-panel").classList.contains("hidden"), false);

  const secondApp = createApp(new Map(), localValues);
  secondApp.run("state.dictionaryCategories = parseDictionaryText('[Prueba]\\nUno\\nDos\\nTres')");
  assert.equal(secondApp.run("getImpostorRating('Uno').rating"), "dislike");
  assert.equal(secondApp.run("getImpostorPlayableCategories()[0].words.includes('Uno')"), false);

  secondApp.run("setImpostorRating('Uno', 'Prueba', null)");
  assert.equal(secondApp.run("countWords(getImpostorPlayableCategories())"), 3);
  secondApp.run("setImpostorRating('Dos', 'Prueba', 'like')");
  assert.equal(secondApp.run("countWords(getImpostorPlayableCategories())"), 3);

  secondApp.run("clearImpostorRatings()");
  assert.equal(secondApp.run("state.impostorRatings.size"), 0);
  assert.equal(localValues.has("impostor_word_ratings_v1"), false);
});

test("cada frase aparece una sola vez antes de comenzar un ciclo nuevo", () => {
  const app = createApp();
  app.run("switchMode('mimica'); startMimeGame()");

  const firstCycle = Array.from({ length: 300 }, () => drawPhrase(app));
  assert.equal(new Set(firstCycle).size, 300);

  const firstPhraseOfNextCycle = drawPhrase(app);
  assert.equal(firstCycle.includes(firstPhraseOfNextCycle), true);
  assert.equal(app.run("state.mimeUsedWordKeys.size"), 1);
});

test("una categoría elegida reinicia solamente después de agotar sus frases", () => {
  const app = createApp();
  app.run(`
    switchMode('mimica');
    state.mimeSelectedCategoryId = 'escenas-absurdas';
    elements.categorySelect.value = 'escenas-absurdas';
    startMimeGame();
  `);

  const firstCycle = Array.from({ length: 30 }, () => drawPhrase(app));
  assert.equal(new Set(firstCycle).size, 30);
  assert.equal(firstCycle.every((phrase) => app.run(`state.mimeCategories
    .find((category) => category.id === 'escenas-absurdas')
    .words.includes(${JSON.stringify(phrase)})`)), true);

  const firstPhraseOfNextCycle = drawPhrase(app);
  assert.equal(firstCycle.includes(firstPhraseOfNextCycle), true);
});

test("las frases usadas se conservan al reiniciar la partida y recargar la pestaña", () => {
  const sessionValues = new Map();
  const firstApp = createApp(sessionValues);
  firstApp.run("switchMode('mimica'); startMimeGame()");
  const usedBeforeReload = new Set(Array.from({ length: 25 }, () => drawPhrase(firstApp)));

  firstApp.run("prepareMimeSetup(); startMimeGame()");
  const afterPlayAgain = Array.from({ length: 25 }, () => drawPhrase(firstApp));
  assert.equal(afterPlayAgain.some((phrase) => usedBeforeReload.has(phrase)), false);

  const secondApp = createApp(sessionValues);
  secondApp.run("switchMode('mimica'); startMimeGame()");
  const afterReload = Array.from({ length: 25 }, () => drawPhrase(secondApp));
  const alreadyUsed = new Set([...usedBeforeReload, ...afterPlayAgain]);
  assert.equal(afterReload.some((phrase) => alreadyUsed.has(phrase)), false);
});

test("likes y dislikes se guardan localmente, pero solamente los dislikes salen del mazo", () => {
  const localValues = new Map();
  const firstApp = createApp(new Map(), localValues);
  firstApp.run("switchMode('mimica'); startMimeGame(); showMimeWordScreen()");
  const dislikedPhrase = firstApp.run("state.mime.currentWord");
  const dislikedCategory = firstApp.run("state.mime.currentCategoryName");
  firstApp.run("toggleCurrentMimeRating('dislike')");

  assert.equal(firstApp.run("state.mimeRatings.size"), 1);
  assert.equal(firstApp.run("countWords(getMimePlayableCategories())"), 299);
  assert.equal(firstApp.elements.get("mime-disliked-count").textContent, "1");
  assert.match(firstApp.run("createDislikesText()"), new RegExp(dislikedPhrase));
  firstApp.run("toggleMimeRatingsPanel()");
  assert.equal(firstApp.elements.get("mime-ratings-panel").classList.contains("hidden"), false);

  const secondApp = createApp(new Map(), localValues);
  assert.equal(secondApp.run(`getMimeRating(${JSON.stringify(dislikedPhrase)}).rating`), "dislike");
  secondApp.run("switchMode('mimica'); startMimeGame()");
  const playableCycle = Array.from({ length: 299 }, () => drawPhrase(secondApp));
  assert.equal(playableCycle.includes(dislikedPhrase), false);

  secondApp.run(`setMimeRating(
    ${JSON.stringify(dislikedPhrase)},
    ${JSON.stringify(dislikedCategory)},
    null
  )`);
  assert.equal(secondApp.run("countWords(getMimePlayableCategories())"), 300);

  secondApp.run("prepareMimeSetup(); startMimeGame(); showMimeWordScreen()");
  const likedPhrase = secondApp.run("state.mime.currentWord");
  secondApp.run("toggleCurrentMimeRating('like')");
  assert.equal(secondApp.run("countWords(getMimePlayableCategories())"), 300);
  assert.equal(secondApp.run(`getMimeRating(${JSON.stringify(likedPhrase)}).rating`), "like");

  secondApp.run("clearMimeRatings()");
  assert.equal(secondApp.run("state.mimeRatings.size"), 0);
  assert.equal(localValues.has("impostor_mime_ratings_v1"), false);
});

test("el barajado distribuye cada frase entre todas las posiciones", () => {
  const app = createApp();
  const counts = app.run(`(() => {
    const result = Array.from({ length: 4 }, () => Array(4).fill(0));
    for (let trial = 0; trial < 4000; trial += 1) {
      shuffleItems([0, 1, 2, 3]).forEach((value, position) => {
        result[value][position] += 1;
      });
    }
    return result;
  })()`);

  counts.flat().forEach((count) => {
    assert.ok(count > 800 && count < 1200, `Distribución fuera de rango: ${count}`);
  });
});
