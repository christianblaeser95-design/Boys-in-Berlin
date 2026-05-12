const EVENTS = [
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
    desc: "Das wichtigste Theaterfestival Deutschlands l\xE4uft noch bis 17. Mai. Tickets f\xFCr eine Abendvorstellung w\xE4ren ein starker Einstieg. Karten vorab auf berliner-festspiele.de sichern.",
    address: "Berliner Festspiele, Schaperstra\xDFe 24, Wilmersdorf",
    recommended: false
  },
  {
    id: "fr-1",
    day: "fr",
    title: "Tempelhofer Feld \u2014 Fahrr\xE4der & Sonne",
    category: "outdoor",
    desc: "Das ehemalige Flughafengel\xE4nde ist Berlins gr\xF6\xDFtes Freizeitparadies. Fahrr\xE4der leihen, \xFCber die Landebahnen fahren, Grillen erlaubt. Einzigartiges Stadtgef\xFChl \u2014 ein Muss f\xFCr Besucher.",
    address: "Tempelhofer Damm 1\u20137, Tempelhof",
    recommended: true
  },
  {
    id: "fr-2",
    day: "fr",
    title: "Markthalle Neun \u2014 Street Food",
    category: "food",
    desc: "Einer der besten Streetfood-M\xE4rkte Berlins. Internationales Essen, lokale Craft-Beer-H\xE4ndler, lockere Atmosph\xE4re. Auch freitags l\xE4uft hier immer was.",
    address: "Eisenbahnstra\xDFe 42\u201343, Kreuzberg",
    recommended: false
  },
  {
    id: "fr-3",
    day: "fr",
    title: "Bar-Hopping Kreuzberg / Neuk\xF6lln",
    category: "food",
    desc: "Sonnenallee trifft Weserstra\xDFe \u2014 hier reiht sich eine Beiz an die n\xE4chste. Klunkerkranich (Rooftop-Bar auf Parkdeck), Prince Charles, Tier Bar. Kein Plan n\xF6tig, einfach laufen.",
    address: "Weserstra\xDFe / Sonnenallee, Neuk\xF6lln",
    recommended: true
  },
  {
    id: "fr-4",
    day: "fr",
    title: "Else Club (Open Air, Spree)",
    category: "nightlife",
    desc: "Else ist Berlins sch\xF6nste Open-Air-Location direkt an der Spree. \xD6ffnet von Mai bis September, freitags und samstags. House und Techno, Riverside-Feeling.",
    address: "Alt-Treptow 1, Treptow",
    recommended: false
  },
  {
    id: "sa-1",
    day: "sa",
    title: "Mauerpark Flohmarkt + Bearpit Karaoke",
    category: "outdoor",
    desc: "Das legend\xE4re Bearpit Karaoke im Amphitheater ist gratis, absurd und gro\xDFartig. Davor Flohmarkt-Bummel und Kaffee zum Aufwachen.",
    address: "Bernauer Stra\xDFe 63\u201364, Prenzlauer Berg",
    time: "Ab 9:00 Uhr",
    recommended: true
  },
  {
    id: "sa-2",
    day: "sa",
    title: "East Side Gallery + Oberbaumbr\xFCcke",
    category: "museum",
    desc: "1,3 km Mauerkunst direkt an der Spree \u2014 kostenlos und immer eindrucksvoll. Danach \xFCber die Oberbaumbr\xFCcke in Friedrichshain schlendern.",
    address: "M\xFChlenstra\xDFe 3\u2013100, Friedrichshain",
    recommended: false
  },
  {
    id: "sa-3",
    day: "sa",
    title: "Berghain / Panorama Bar \u{1F5A4}",
    category: "nightlife",
    desc: "Das ber\xFChmteste Techno-Tempel der Welt. Dresscode: dunkel, kein Touristenmodus. Die Panorama Bar im Obergeschoss ist etwas zug\xE4nglicher. Nach Mitternacht anstellen.",
    address: "Am Wriezener Bahnhof, Friedrichshain",
    time: "Ab ca. 00:00 Uhr",
    recommended: true
  },
  {
    id: "sa-4",
    day: "sa",
    title: "Kater Blau",
    category: "nightlife",
    desc: "Kater Blau an der Spree ist Berghains zug\xE4nglichere Alternative \u2014 mehrere Floors, Riverside-Terrasse, House bis Techno. Marathon-Partys bekannt.",
    address: "Holzmarktstra\xDFe 25, Mitte",
    recommended: false
  },
  {
    id: "so-1",
    day: "so",
    title: "Museumstag: DDR Museum oder Pergamon \u{1F389} KOSTENLOS",
    category: "museum",
    desc: "Am 17. Mai ist Internationaler Museumstag \u2014 viele Berliner Museen \xF6ffnen kostenlos. DDR Museum (interaktiv, witzig) oder Pergamon (Weltklasse-Antike). Combo m\xF6glich!",
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
const DEFAULT_STATE = {
  names: ["Berliner", "Besucher 1", "Besucher 2"],
  votes: {},
  activeVoter: 0
};
let state = loadState();
function loadState() {
  try {
    const raw = localStorage.getItem("bib-state");
    if (raw) return { ...DEFAULT_STATE, ...JSON.parse(raw) };
  } catch {
  }
  return { ...DEFAULT_STATE, votes: {} };
}
function saveState() {
  localStorage.setItem("bib-state", JSON.stringify(state));
}
function getVotes(id) {
  return state.votes[id] ?? [false, false, false];
}
function voteCount(id) {
  return getVotes(id).filter(Boolean).length;
}
function initModal() {
  const overlay = document.getElementById("name-modal-overlay");
  const inputs = [0, 1, 2].map((i) => document.getElementById(`name-${i}`));
  inputs.forEach((inp, i) => {
    inp.value = state.names[i];
  });
  const allDefault = state.names.every((n, i) => n === DEFAULT_STATE.names[i]);
  const hasData = Object.keys(state.votes).length > 0;
  if (!allDefault || hasData) {
    overlay.style.display = "none";
    return;
  }
  document.getElementById("name-confirm-btn").addEventListener("click", () => {
    inputs.forEach((inp, i) => {
      const val = inp.value.trim();
      if (val) state.names[i] = val;
    });
    saveState();
    overlay.style.display = "none";
    updateVoterButtons();
    updateFooterNames();
  });
  inputs.forEach((inp) => inp.addEventListener("keydown", (e) => {
    if (e.key === "Enter") document.getElementById("name-confirm-btn").click();
  }));
}
function updateVoterButtons() {
  [0, 1, 2].forEach((i) => {
    const span = document.getElementById(`vname-${i}`);
    if (span) span.textContent = state.names[i];
    const btn = document.getElementById(`vbtn-${i}`);
    if (btn) btn.classList.toggle("active", state.activeVoter === i);
  });
}
function initVoterButtons() {
  [0, 1, 2].forEach((i) => {
    document.getElementById(`vbtn-${i}`)?.addEventListener("click", () => {
      state.activeVoter = i;
      updateVoterButtons();
    });
  });
}
function renderEvents() {
  const grid = document.getElementById("events-grid");
  grid.innerHTML = "";
  const days = ["do", "fr", "sa", "so"];
  days.forEach((day) => {
    const dayEvents = EVENTS.filter((e) => e.day === day);
    const labelEl = document.createElement("div");
    labelEl.className = "day-group";
    labelEl.innerHTML = `<div class="day-label">${DAY_LABELS[day]}</div>`;
    grid.appendChild(labelEl);
    dayEvents.forEach((event) => {
      const card = createCard(event);
      grid.appendChild(card);
    });
  });
  const cards = grid.querySelectorAll(".event-card");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const idx = parseInt(el.dataset.idx ?? "0", 10);
        anime({
          targets: el,
          translateY: [40, 0],
          opacity: [0, 1],
          duration: 600,
          delay: idx % 3 * 80,
          easing: "easeOutCubic"
        });
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.1 });
  cards.forEach((card, i) => {
    card.dataset.idx = String(i);
    observer.observe(card);
  });
}
function createCard(event) {
  const card = document.createElement("div");
  card.className = `event-card${event.recommended ? " recommended" : ""}`;
  card.dataset.id = event.id;
  const votes = getVotes(event.id);
  const dots = [0, 1, 2].map(
    (i) => `<div class="vote-dot v${i}${votes[i] ? " voted" : ""}" data-voter="${i}"></div>`
  ).join("");
  const myVote = votes[state.activeVoter];
  card.innerHTML = `
    ${event.recommended ? '<div class="card-star">\u2B50</div>' : ""}
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
  card.querySelector(".vote-btn").addEventListener("click", () => {
    toggleVote(event.id);
  });
  return card;
}
function toggleVote(id) {
  const votes = getVotes(id);
  votes[state.activeVoter] = !votes[state.activeVoter];
  state.votes[id] = votes;
  saveState();
  const card = document.querySelector(`.event-card[data-id="${id}"]`);
  if (!card) return;
  const btn = card.querySelector(".vote-btn");
  const myVote = votes[state.activeVoter];
  btn.classList.toggle("voted", myVote);
  btn.textContent = myVote ? "\u2713 Dabei" : "+ Abstimmen";
  [0, 1, 2].forEach((i) => {
    const dot = card.querySelector(`.vote-dot[data-voter="${i}"]`);
    if (dot) {
      dot.classList.toggle("voted", votes[i]);
      if (i === state.activeVoter) {
        anime({
          targets: dot,
          scale: [1, 1.6, 1],
          duration: 350,
          easing: "easeOutElastic(1, .6)"
        });
      }
    }
  });
  anime({
    targets: btn,
    scale: [1, 1.25, 1],
    duration: 300,
    easing: "easeOutElastic(1, .5)"
  });
  renderPlanner();
}
function renderPlanner() {
  const days = ["do", "fr", "sa", "so"];
  days.forEach((day) => {
    const col = document.getElementById(`plan-${day}`);
    const header = col.querySelector("h3");
    col.innerHTML = "";
    col.appendChild(header);
    const dayEvents = EVENTS.filter((e) => e.day === day && voteCount(e.id) > 0);
    if (dayEvents.length === 0) {
      const empty = document.createElement("div");
      empty.className = "plan-empty";
      empty.textContent = "Noch keine Votes";
      col.appendChild(empty);
      return;
    }
    dayEvents.forEach((event) => {
      const count = voteCount(event.id);
      const confirmed = count === 3;
      const item = document.createElement("div");
      item.className = `plan-event-item ${confirmed ? "confirmed" : "maybe"}`;
      item.draggable = true;
      item.dataset.id = event.id;
      item.innerHTML = `
        <span class="plan-item-label">${event.title}</span>
        <span class="plan-item-status ${confirmed ? "confirmed" : "maybe"}">
          ${confirmed ? "Alle \u2713" : `${count}/3`}
        </span>
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
      if (dragEl && col.contains(dragEl) === false) {
        col.appendChild(dragEl);
        dragEl.style.opacity = "";
      } else if (dragEl) {
        const afterEl = getDragAfterElement(col, e.clientY);
        if (afterEl) col.insertBefore(dragEl, afterEl);
        else col.appendChild(dragEl);
      }
    });
  });
}
function getDragAfterElement(container, y) {
  const draggables = [...container.querySelectorAll('.plan-event-item:not([style*="opacity: 0.4"])')];
  return draggables.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) return { offset, el: child };
      return closest;
    },
    { offset: Number.NEGATIVE_INFINITY, el: null }
  ).el;
}
function updateFooterNames() {
  const el = document.getElementById("footer-names");
  if (el) el.textContent = state.names.join(" \xB7 ");
}
function animateHero() {
  const titleEl = document.getElementById("hero-title");
  const words = ["Boys", "in", "Berlin", "\u{1F1E9}\u{1F1EA}"];
  words.forEach((word, wi) => {
    const wordSpan = document.createElement("span");
    wordSpan.className = "word";
    if (wi > 0) wordSpan.style.marginLeft = "0.2em";
    ;
    [...word].forEach((char, ci) => {
      const span = document.createElement("span");
      span.className = "char" + (wi === 2 ? " accent" : "");
      span.textContent = char;
      wordSpan.appendChild(span);
    });
    titleEl.appendChild(wordSpan);
  });
  const chars = titleEl.querySelectorAll(".char");
  anime({
    targets: chars,
    translateY: [-30, 0],
    opacity: [0, 1],
    duration: 700,
    delay: (_el, i) => 80 + i * 55,
    easing: "easeOutCubic"
  });
  anime({
    targets: "#hero-subtitle",
    opacity: [0, 1],
    translateY: [10, 0],
    duration: 600,
    delay: 900,
    easing: "easeOutCubic"
  });
  anime({
    targets: "#hero-scroll-hint",
    opacity: [0, 0.6],
    duration: 600,
    delay: 1400,
    easing: "easeOutCubic"
  });
  anime({
    targets: "#skyline-svg",
    translateX: ["-50%", "calc(-50% - 30px)"],
    duration: 2e4,
    direction: "alternate",
    loop: true,
    easing: "linear"
  });
}
function animateTimeline() {
  const line = document.getElementById("timeline-line");
  const items = document.querySelectorAll(".timeline-item");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        anime({
          targets: line,
          scaleY: [0, 1],
          duration: 1e3,
          easing: "easeInOutCubic"
        });
        anime({
          targets: items,
          translateX: [-12, 0],
          opacity: [0, 1],
          duration: 500,
          delay: (_el, i) => 200 + i * 120,
          easing: "easeOutCubic"
        });
        observer.disconnect();
      }
    });
  }, { threshold: 0.2 });
  const box = document.querySelector(".recommendation-box");
  if (box) observer.observe(box);
}
function init() {
  initModal();
  updateVoterButtons();
  updateFooterNames();
  initVoterButtons();
  renderEvents();
  renderPlanner();
  initDragDropColumns();
  animateHero();
  animateTimeline();
}
document.addEventListener("DOMContentLoaded", init);
