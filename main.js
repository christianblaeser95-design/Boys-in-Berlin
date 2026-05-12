const NAMES = ["Arni", "Yoel", "Chris"];
const VOTER_COLORS = ["#f5e642", "#e74c3c", "#3498db"];
const CATEGORY_LABELS = {
  kultur: "\u{1F3AD} Kultur",
  outdoor: "\u{1F33F} Outdoor",
  food: "\u{1F37B} Bar / Food",
  nightlife: "\u{1F3B6} Nightlife",
  museum: "\u{1F3DB}\uFE0F Museum"
};
const DAY_LABELS = {
  do: "Donnerstag \xB7 14.05.",
  fr: "Freitag \xB7 15.05.",
  sa: "Samstag \xB7 16.05.",
  so: "Sonntag \xB7 17.05."
};
const DAYS = ["do", "fr", "sa", "so"];
const STATIC_EVENTS = [
  {
    id: "do-1",
    day: "do",
    title: "Ankunft & Bier in Prenzlauer Berg",
    category: "food",
    desc: "Traditioneller Einstieg im Kiez. Kastanienallee oder Helmholtzplatz, Craft Beer an der Bar, D\xF6ner danach. Chill, kein Stress am Anreisetag.",
    address: "Kastanienallee / Helmholtzplatz, Prenzlauer Berg",
    recommended: true
  },
  {
    id: "do-2",
    day: "do",
    title: "Theatertreffen \u2014 Abendvorstellung",
    category: "kultur",
    desc: "Das wichtigste Theaterfestival Deutschlands l\xE4uft noch bis 17. Mai. Tickets vorab auf berliner-festspiele.de sichern.",
    address: "Berliner Festspiele, Schaperstra\xDFe 24, Wilmersdorf",
    recommended: false
  },
  {
    id: "fr-1",
    day: "fr",
    title: "Tempelhofer Feld \u2014 Fahrr\xE4der & Sonne",
    category: "outdoor",
    desc: "Das ehemalige Flughafengel\xE4nde ist Berlins gr\xF6\xDFtes Freizeitparadies. Fahrr\xE4der leihen, \xFCber die Landebahnen fahren, Grillen erlaubt.",
    address: "Tempelhofer Damm 1\u20137, Tempelhof",
    recommended: true
  },
  {
    id: "fr-2",
    day: "fr",
    title: "Markthalle Neun \u2014 Street Food",
    category: "food",
    desc: "Einer der besten Streetfood-M\xE4rkte Berlins. Internationales Essen, lokale Craft-Beer-H\xE4ndler, lockere Atmosph\xE4re.",
    address: "Eisenbahnstra\xDFe 42\u201343, Kreuzberg",
    recommended: false
  },
  {
    id: "fr-3",
    day: "fr",
    title: "Bar-Hopping Kreuzberg / Neuk\xF6lln",
    category: "food",
    desc: "Sonnenallee trifft Weserstra\xDFe. Klunkerkranich (Rooftop-Bar auf Parkdeck), Prince Charles, Tier Bar. Kein Plan n\xF6tig, einfach laufen.",
    address: "Weserstra\xDFe / Sonnenallee, Neuk\xF6lln",
    recommended: true
  },
  {
    id: "fr-4",
    day: "fr",
    title: "Else Club (Open Air, Spree)",
    category: "nightlife",
    desc: "Else ist Berlins sch\xF6nste Open-Air-Location direkt an der Spree. \xD6ffnet von Mai bis September, freitags und samstags.",
    address: "Alt-Treptow 1, Treptow",
    recommended: false
  },
  {
    id: "sa-1",
    day: "sa",
    title: "Mauerpark Flohmarkt + Bearpit Karaoke",
    category: "outdoor",
    desc: "Das legend\xE4re Bearpit Karaoke im Amphitheater ist gratis, absurd und gro\xDFartig. Davor Flohmarkt-Bummel und Kaffee.",
    address: "Bernauer Stra\xDFe 63\u201364, Prenzlauer Berg",
    time: "Ab 9:00 Uhr",
    recommended: true
  },
  {
    id: "sa-2",
    day: "sa",
    title: "East Side Gallery + Oberbaumbr\xFCcke",
    category: "museum",
    desc: "1,3 km Mauerkunst direkt an der Spree \u2014 kostenlos und immer eindrucksvoll. Danach \xFCber die Oberbaumbr\xFCcke schlendern.",
    address: "M\xFChlenstra\xDFe 3\u2013100, Friedrichshain",
    recommended: false
  },
  {
    id: "sa-3",
    day: "sa",
    title: "Berghain / Panorama Bar \u{1F5A4}",
    category: "nightlife",
    desc: "Das ber\xFChmteste Techno-Tempel der Welt. Dresscode: dunkel, kein Touristenmodus. Die Panorama Bar im Obergeschoss ist etwas zug\xE4nglicher.",
    address: "Am Wriezener Bahnhof, Friedrichshain",
    time: "Ab ca. 00:00 Uhr",
    recommended: true
  },
  {
    id: "sa-4",
    day: "sa",
    title: "Kater Blau",
    category: "nightlife",
    desc: "Kater Blau an der Spree ist Berghains zug\xE4nglichere Alternative \u2014 mehrere Floors, Riverside-Terrasse, House bis Techno.",
    address: "Holzmarktstra\xDFe 25, Mitte",
    recommended: false
  },
  {
    id: "so-1",
    day: "so",
    title: "Museumstag: DDR Museum oder Pergamon \u{1F389} KOSTENLOS",
    category: "museum",
    desc: "Am 17. Mai ist Internationaler Museumstag \u2014 viele Berliner Museen \xF6ffnen kostenlos. DDR Museum (interaktiv, witzig) oder Pergamon (Weltklasse-Antike).",
    address: "DDR Museum: Karl-Liebknecht-Str. 1 | Pergamon: Am Kupfergraben 5",
    time: "Ab 10:00 Uhr",
    recommended: true
  },
  {
    id: "so-2",
    day: "so",
    title: "Urban Nation Museum \u2014 Street Art",
    category: "museum",
    desc: "Urban Nation ist das weltweit erste Museum f\xFCr Urban Contemporary Art. Street Art auf Museumsebene \u2014 gratis am Museumstag.",
    address: "B\xFClowstra\xDFe 7, Sch\xF6neberg",
    recommended: false
  },
  {
    id: "so-3",
    day: "so",
    title: "Abschluss-Brunch (Roamers)",
    category: "food",
    desc: "Berlins Brunches sind legend\xE4r. Roamers in Neuk\xF6lln f\xFCr den gem\xFCtlichen Abschluss vor der Heimreise. Fr\xFChzeitig reservieren empfohlen.",
    address: "Roamers: Pannierstra\xDFe 64, Neuk\xF6lln",
    recommended: true
  }
];
let activeVoter = (() => {
  const saved = localStorage.getItem("bib-active-voter");
  const n = Number(saved);
  return n === 0 || n === 1 || n === 2 ? n : 0;
})();
let shared = { votes: {}, customEvents: {} };
let firebaseDB = null;
let firebaseRef = null;
let syncEnabled = false;
function initFirebase() {
  const cfg = window.FIREBASE_CONFIG;
  if (!cfg || !cfg.databaseURL) {
    showSyncBanner(false);
    loadFromLocalStorage();
    return;
  }
  try {
    const app = firebase.initializeApp(cfg);
    firebaseDB = firebase.database(app);
    firebaseRef = firebaseDB.ref("bib-state");
    firebaseRef.on("value", (snap) => {
      const data = snap.val();
      if (data) {
        shared = {
          votes: data.votes ?? {},
          customEvents: data.customEvents ?? {}
        };
      } else {
        shared = { votes: {}, customEvents: {} };
      }
      syncEnabled = true;
      showSyncBanner(true);
      renderEvents();
      renderPlanner();
    });
  } catch (e) {
    console.error("Firebase init failed:", e);
    showSyncBanner(false);
    loadFromLocalStorage();
  }
}
function writeToFirebase() {
  if (firebaseRef) {
    firebaseRef.set(shared);
  } else {
    saveToLocalStorage();
  }
}
function loadFromLocalStorage() {
  try {
    const raw = localStorage.getItem("bib-shared");
    if (raw) shared = JSON.parse(raw);
  } catch {
  }
  renderEvents();
  renderPlanner();
}
function saveToLocalStorage() {
  localStorage.setItem("bib-shared", JSON.stringify(shared));
}
function showSyncBanner(active) {
  const banner = document.getElementById("sync-banner");
  if (active) {
    banner.textContent = "\u{1F7E2} Echtzeit-Sync aktiv \u2014 Arni, Yoel & Chris sehen die Votes live";
    banner.className = "sync-banner sync-on";
  } else {
    banner.textContent = "\u{1F7E1} Kein Sync \u2014 Votes nur lokal. Firebase in config.js einrichten um Votes zu teilen.";
    banner.className = "sync-banner sync-off";
  }
}
function getVotes(id) {
  return shared.votes[id] ?? [false, false, false];
}
function voteCount(id) {
  return getVotes(id).filter(Boolean).length;
}
function toggleVote(id) {
  const votes = [...getVotes(id)];
  votes[activeVoter] = !votes[activeVoter];
  shared.votes[id] = votes;
  writeToFirebase();
  updateCardVotes(id);
  renderPlanner();
}
function addCustomEvent(ev) {
  shared.customEvents[ev.id] = ev;
  writeToFirebase();
  renderEvents();
  renderPlanner();
}
function deleteCustomEvent(id) {
  delete shared.customEvents[id];
  delete shared.votes[id];
  writeToFirebase();
  renderEvents();
  renderPlanner();
}
function getAllEvents() {
  const custom = Object.values(shared.customEvents);
  return [...STATIC_EVENTS, ...custom];
}
let addEventTargetDay = "do";
function openAddEventModal(day) {
  addEventTargetDay = day;
  const modal = document.getElementById("add-event-modal-overlay");
  const dayLabel = document.getElementById("add-event-day-label");
  dayLabel.textContent = DAY_LABELS[day];
  document.getElementById("ae-title").value = "";
  document.getElementById("ae-time").value = "";
  document.getElementById("ae-address").value = "";
  document.getElementById("ae-desc").value = "";
  document.getElementById("ae-category").value = "food";
  modal.style.display = "flex";
  anime({ targets: "#add-event-modal", scale: [0.9, 1], opacity: [0, 1], duration: 280, easing: "easeOutCubic" });
  document.getElementById("ae-title").focus();
}
function closeAddEventModal() {
  const modal = document.getElementById("add-event-modal-overlay");
  anime({
    targets: "#add-event-modal",
    scale: [1, 0.9],
    opacity: [1, 0],
    duration: 200,
    easing: "easeInCubic",
    complete: () => {
      modal.style.display = "none";
    }
  });
}
function initAddEventModal() {
  document.getElementById("ae-cancel").addEventListener("click", closeAddEventModal);
  document.getElementById("add-event-modal-overlay").addEventListener("click", (e) => {
    if (e.target.id === "add-event-modal-overlay") closeAddEventModal();
  });
  document.getElementById("ae-save").addEventListener("click", () => {
    const title = document.getElementById("ae-title").value.trim();
    if (!title) {
      document.getElementById("ae-title").focus();
      anime({ targets: "#ae-title", translateX: [-6, 6, -4, 4, 0], duration: 300, easing: "easeInOutSine" });
      return;
    }
    const id = `custom-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
    addCustomEvent({
      id,
      day: addEventTargetDay,
      title,
      category: document.getElementById("ae-category").value,
      time: document.getElementById("ae-time").value.trim() || void 0,
      address: document.getElementById("ae-address").value.trim() || void 0,
      desc: document.getElementById("ae-desc").value.trim() || "Selbst hinzugef\xFCgtes Event.",
      recommended: false,
      custom: true
    });
    closeAddEventModal();
  });
  ["ae-title", "ae-time", "ae-address"].forEach((id) => {
    document.getElementById(id)?.addEventListener("keydown", (e) => {
      if (e.key === "Enter") document.getElementById("ae-save").click();
    });
  });
}
function renderEvents() {
  const grid = document.getElementById("events-grid");
  grid.innerHTML = "";
  const allEvents = getAllEvents();
  DAYS.forEach((day) => {
    const dayEvents = allEvents.filter((e) => e.day === day);
    const labelEl = document.createElement("div");
    labelEl.className = "day-group";
    labelEl.innerHTML = `<div class="day-label">${DAY_LABELS[day]}</div>`;
    grid.appendChild(labelEl);
    dayEvents.forEach((event, i) => {
      const card = createCard(event);
      card.dataset.animIdx = String(i);
      grid.appendChild(card);
    });
    const addBtn = document.createElement("div");
    addBtn.className = "add-event-btn";
    addBtn.dataset.day = day;
    addBtn.innerHTML = "<span>\uFF0B Event hinzuf\xFCgen</span>";
    addBtn.addEventListener("click", () => openAddEventModal(day));
    grid.appendChild(addBtn);
  });
  const cards = grid.querySelectorAll(".event-card");
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const idx = parseInt(el.dataset.animIdx ?? "0", 10);
      anime({ targets: el, translateY: [40, 0], opacity: [0, 1], duration: 600, delay: idx % 3 * 80, easing: "easeOutCubic" });
      io.unobserve(el);
    });
  }, { threshold: 0.08 });
  cards.forEach((c) => io.observe(c));
}
function createCard(event) {
  const card = document.createElement("div");
  card.className = `event-card${event.recommended ? " recommended" : ""}`;
  card.dataset.id = event.id;
  const votes = getVotes(event.id);
  const dots = [0, 1, 2].map(
    (i) => `<div class="vote-dot v${i}${votes[i] ? " voted" : ""}" data-voter="${i}" title="${NAMES[i]}"></div>`
  ).join("");
  const myVote = votes[activeVoter];
  const deleteBtn = event.custom ? `<button class="card-delete-btn" data-id="${event.id}" title="Event l\xF6schen">\u2715</button>` : "";
  card.innerHTML = `
    ${event.recommended ? '<div class="card-star">\u2B50</div>' : ""}
    ${deleteBtn}
    <div class="card-header">
      <div>
        <span class="card-cat-badge cat-${event.category}">${CATEGORY_LABELS[event.category]}</span>
      </div>
      <div class="card-title">${event.title}</div>
    </div>
    <p class="card-desc">${event.desc}</p>
    <div class="card-meta">
      ${event.address ? `<div class="card-meta-item">\u{1F4CD} <span>${event.address}</span></div>` : ""}
      ${event.time ? `<div class="card-meta-item">\u{1F550} <span>${event.time}</span></div>` : ""}
    </div>
    <div class="card-footer">
      <div class="vote-dots">${dots}</div>
      <button class="vote-btn${myVote ? " voted" : ""}" data-id="${event.id}">
        ${myVote ? "\u2713 Dabei" : "+ Abstimmen"}
      </button>
    </div>
  `;
  card.querySelector(".vote-btn").addEventListener("click", () => toggleVote(event.id));
  card.querySelector(".card-delete-btn")?.addEventListener("click", (e) => {
    e.stopPropagation();
    if (confirm(`"${event.title}" wirklich l\xF6schen?`)) deleteCustomEvent(event.id);
  });
  return card;
}
function updateCardVotes(id) {
  const card = document.querySelector(`.event-card[data-id="${id}"]`);
  if (!card) return;
  const votes = getVotes(id);
  const myVote = votes[activeVoter];
  const btn = card.querySelector(".vote-btn");
  btn.classList.toggle("voted", myVote);
  btn.textContent = myVote ? "\u2713 Dabei" : "+ Abstimmen";
  [0, 1, 2].forEach((i) => {
    const dot = card.querySelector(`.vote-dot[data-voter="${i}"]`);
    if (!dot) return;
    const wasVoted = dot.classList.contains("voted");
    dot.classList.toggle("voted", votes[i]);
    if (i === activeVoter && votes[i] !== wasVoted) {
      anime({ targets: dot, scale: [1, 1.7, 1], duration: 380, easing: "easeOutElastic(1, .5)" });
    }
  });
  anime({ targets: btn, scale: [1, 1.22, 1], duration: 320, easing: "easeOutElastic(1, .5)" });
}
function renderPlanner() {
  const allEvents = getAllEvents();
  DAYS.forEach((day) => {
    const col = document.getElementById(`plan-${day}`);
    const header = col.querySelector("h3").cloneNode(true);
    col.innerHTML = "";
    col.appendChild(header);
    const voted = allEvents.filter((e) => e.day === day && voteCount(e.id) > 0);
    if (voted.length === 0) {
      const empty = document.createElement("div");
      empty.className = "plan-empty";
      empty.textContent = "Noch keine Votes";
      col.appendChild(empty);
      return;
    }
    voted.forEach((event) => {
      const count = voteCount(event.id);
      const confirmed = count === 3;
      const votes = getVotes(event.id);
      const item = document.createElement("div");
      item.className = `plan-event-item ${confirmed ? "confirmed" : "maybe"}`;
      item.draggable = true;
      item.dataset.id = event.id;
      const miniDots = [0, 1, 2].map(
        (i) => `<span class="plan-mini-dot${votes[i] ? " on" : ""}" style="background:${votes[i] ? VOTER_COLORS[i] : "transparent"};border-color:${VOTER_COLORS[i]}" title="${NAMES[i]}"></span>`
      ).join("");
      item.innerHTML = `
        <div class="plan-item-main">
          <span class="plan-item-label">${event.title}</span>
          ${event.time ? `<span class="plan-item-time">\u{1F550} ${event.time}</span>` : ""}
        </div>
        <div class="plan-item-right">
          <div class="plan-mini-dots">${miniDots}</div>
          <span class="plan-item-status ${confirmed ? "confirmed" : "maybe"}">${confirmed ? "Alle \u2713" : `${count}/3`}</span>
        </div>
      `;
      setupDrag(item);
      col.appendChild(item);
    });
  });
}
let dragEl = null;
function setupDrag(el) {
  el.addEventListener("dragstart", (e) => {
    dragEl = el;
    el.style.opacity = "0.4";
    e.dataTransfer?.setData("text/plain", el.dataset.id ?? "");
  });
  el.addEventListener("dragend", () => {
    el.style.opacity = "";
    dragEl = null;
    document.querySelectorAll(".plan-day-col").forEach((c) => c.classList.remove("drag-over"));
  });
}
function initDragDropColumns() {
  document.querySelectorAll(".plan-day-col").forEach((col) => {
    col.addEventListener("dragover", (e) => {
      e.preventDefault();
      col.classList.add("drag-over");
    });
    col.addEventListener("dragleave", () => col.classList.remove("drag-over"));
    col.addEventListener("drop", (e) => {
      e.preventDefault();
      col.classList.remove("drag-over");
      if (!dragEl) return;
      const after = getDragAfterElement(col, e.clientY);
      if (after) col.insertBefore(dragEl, after);
      else col.appendChild(dragEl);
      dragEl.style.opacity = "";
    });
  });
}
function getDragAfterElement(container, y) {
  const items = [...container.querySelectorAll('.plan-event-item:not([style*="opacity: 0.4"])')];
  return items.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      return offset < 0 && offset > closest.offset ? { offset, el: child } : closest;
    },
    { offset: Number.NEGATIVE_INFINITY, el: null }
  ).el;
}
function initVoterButtons() {
  [0, 1, 2].forEach((i) => {
    document.getElementById(`vbtn-${i}`)?.addEventListener("click", () => {
      activeVoter = i;
      localStorage.setItem("bib-active-voter", String(i));
      updateVoterButtons();
      renderEvents();
    });
  });
}
function updateVoterButtons() {
  [0, 1, 2].forEach((i) => {
    document.getElementById(`vbtn-${i}`)?.classList.toggle("active", activeVoter === i);
  });
}
function updateFooterNames() {
  const el = document.getElementById("footer-names");
  if (el) el.textContent = NAMES.join(" \xB7 ");
}
function animateHero() {
  const titleEl = document.getElementById("hero-title");
  const words = ["Boys", "in", "Berlin", "\u{1F1E9}\u{1F1EA}"];
  words.forEach((word, wi) => {
    const wordSpan = document.createElement("span");
    wordSpan.className = "word";
    if (wi > 0) wordSpan.style.marginLeft = "0.2em";
    ;
    [...word].forEach((char) => {
      const span = document.createElement("span");
      span.className = "char" + (wi === 2 ? " accent" : "");
      span.textContent = char;
      wordSpan.appendChild(span);
    });
    titleEl.appendChild(wordSpan);
  });
  anime({ targets: titleEl.querySelectorAll(".char"), translateY: [-30, 0], opacity: [0, 1], duration: 700, delay: (_, i) => 80 + i * 55, easing: "easeOutCubic" });
  anime({ targets: "#hero-subtitle", opacity: [0, 1], translateY: [10, 0], duration: 600, delay: 900, easing: "easeOutCubic" });
  anime({ targets: "#hero-scroll-hint", opacity: [0, 0.6], duration: 600, delay: 1400, easing: "easeOutCubic" });
  anime({ targets: "#skyline-svg", translateX: ["-50%", "calc(-50% - 30px)"], duration: 2e4, direction: "alternate", loop: true, easing: "linear" });
}
function animateTimeline() {
  const box = document.querySelector(".recommendation-box");
  if (!box) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      anime({ targets: "#timeline-line", scaleY: [0, 1], duration: 1e3, easing: "easeInOutCubic" });
      anime({ targets: ".timeline-item", translateX: [-12, 0], opacity: [0, 1], duration: 500, delay: (_, i) => 200 + i * 120, easing: "easeOutCubic" });
      io.disconnect();
    });
  }, { threshold: 0.2 });
  io.observe(box);
}
function init() {
  updateVoterButtons();
  updateFooterNames();
  initVoterButtons();
  initAddEventModal();
  initDragDropColumns();
  initFirebase();
  animateHero();
  animateTimeline();
}
document.addEventListener("DOMContentLoaded", init);
