// Main app logic: events data, voting, drag-drop planner, all animations

declare const anime: any;

// ─── TYPES ────────────────────────────────────────────────────────────────────

type Category = 'kultur' | 'outdoor' | 'food' | 'nightlife' | 'museum';
type Day = 'do' | 'fr' | 'sa' | 'so';

interface Event {
  id: string;
  day: Day;
  title: string;
  category: Category;
  desc: string;
  address?: string;
  time?: string;
  recommended: boolean;
}

// ─── EVENT DATA ───────────────────────────────────────────────────────────────

const EVENTS: Event[] = [
  {
    id: 'do-1',
    day: 'do',
    title: 'Ankunft & Bier in Prenzlauer Berg',
    category: 'food',
    desc: 'Traditioneller Einstieg im Kiez. Kastanienallee oder Helmholtzplatz, Craft Beer an der Bar, Döner danach. Chill, kein Stress am Anreisetag.',
    address: 'Kastanienallee / Helmholtzplatz, Prenzlauer Berg',
    recommended: true,
  },
  {
    id: 'do-2',
    day: 'do',
    title: 'Theatertreffen — Abendvorstellung',
    category: 'kultur',
    desc: 'Das wichtigste Theaterfestival Deutschlands läuft noch bis 17. Mai. Tickets für eine Abendvorstellung wären ein starker Einstieg. Karten vorab auf berliner-festspiele.de sichern.',
    address: 'Berliner Festspiele, Schaperstraße 24, Wilmersdorf',
    recommended: false,
  },
  {
    id: 'fr-1',
    day: 'fr',
    title: 'Tempelhofer Feld — Fahrräder & Sonne',
    category: 'outdoor',
    desc: 'Das ehemalige Flughafengelände ist Berlins größtes Freizeitparadies. Fahrräder leihen, über die Landebahnen fahren, Grillen erlaubt. Einzigartiges Stadtgefühl — ein Muss für Besucher.',
    address: 'Tempelhofer Damm 1–7, Tempelhof',
    recommended: true,
  },
  {
    id: 'fr-2',
    day: 'fr',
    title: 'Markthalle Neun — Street Food',
    category: 'food',
    desc: 'Einer der besten Streetfood-Märkte Berlins. Internationales Essen, lokale Craft-Beer-Händler, lockere Atmosphäre. Auch freitags läuft hier immer was.',
    address: 'Eisenbahnstraße 42–43, Kreuzberg',
    recommended: false,
  },
  {
    id: 'fr-3',
    day: 'fr',
    title: 'Bar-Hopping Kreuzberg / Neukölln',
    category: 'food',
    desc: 'Sonnenallee trifft Weserstraße — hier reiht sich eine Beiz an die nächste. Klunkerkranich (Rooftop-Bar auf Parkdeck), Prince Charles, Tier Bar. Kein Plan nötig, einfach laufen.',
    address: 'Weserstraße / Sonnenallee, Neukölln',
    recommended: true,
  },
  {
    id: 'fr-4',
    day: 'fr',
    title: 'Else Club (Open Air, Spree)',
    category: 'nightlife',
    desc: 'Else ist Berlins schönste Open-Air-Location direkt an der Spree. Öffnet von Mai bis September, freitags und samstags. House und Techno, Riverside-Feeling.',
    address: 'Alt-Treptow 1, Treptow',
    recommended: false,
  },
  {
    id: 'sa-1',
    day: 'sa',
    title: 'Mauerpark Flohmarkt + Bearpit Karaoke',
    category: 'outdoor',
    desc: 'Das legendäre Bearpit Karaoke im Amphitheater ist gratis, absurd und großartig. Davor Flohmarkt-Bummel und Kaffee zum Aufwachen.',
    address: 'Bernauer Straße 63–64, Prenzlauer Berg',
    time: 'Ab 9:00 Uhr',
    recommended: true,
  },
  {
    id: 'sa-2',
    day: 'sa',
    title: 'East Side Gallery + Oberbaumbrücke',
    category: 'museum',
    desc: '1,3 km Mauerkunst direkt an der Spree — kostenlos und immer eindrucksvoll. Danach über die Oberbaumbrücke in Friedrichshain schlendern.',
    address: 'Mühlenstraße 3–100, Friedrichshain',
    recommended: false,
  },
  {
    id: 'sa-3',
    day: 'sa',
    title: 'Berghain / Panorama Bar 🖤',
    category: 'nightlife',
    desc: 'Das berühmteste Techno-Tempel der Welt. Dresscode: dunkel, kein Touristenmodus. Die Panorama Bar im Obergeschoss ist etwas zugänglicher. Nach Mitternacht anstellen.',
    address: 'Am Wriezener Bahnhof, Friedrichshain',
    time: 'Ab ca. 00:00 Uhr',
    recommended: true,
  },
  {
    id: 'sa-4',
    day: 'sa',
    title: 'Kater Blau',
    category: 'nightlife',
    desc: 'Kater Blau an der Spree ist Berghains zugänglichere Alternative — mehrere Floors, Riverside-Terrasse, House bis Techno. Marathon-Partys bekannt.',
    address: 'Holzmarktstraße 25, Mitte',
    recommended: false,
  },
  {
    id: 'so-1',
    day: 'so',
    title: 'Museumstag: DDR Museum oder Pergamon 🎉 KOSTENLOS',
    category: 'museum',
    desc: 'Am 17. Mai ist Internationaler Museumstag — viele Berliner Museen öffnen kostenlos. DDR Museum (interaktiv, witzig) oder Pergamon (Weltklasse-Antike). Combo möglich!',
    address: 'DDR Museum: Karl-Liebknecht-Str. 1 | Pergamon: Am Kupfergraben 5',
    time: 'Ab 10:00 Uhr',
    recommended: true,
  },
  {
    id: 'so-2',
    day: 'so',
    title: 'Urban Nation Museum — Street Art',
    category: 'museum',
    desc: 'Urban Nation ist das weltweit erste Museum für Urban Contemporary Art. Street Art auf Museumsebene — gratis am Museumstag.',
    address: 'Bülowstraße 7, Schöneberg',
    recommended: false,
  },
  {
    id: 'so-3',
    day: 'so',
    title: 'Abschluss-Brunch (Roamers)',
    category: 'food',
    desc: 'Berlins Brunches sind legendär. Roamers in Neukölln für den gemütlichen Abschluss vor der Heimreise. Frühzeitig reservieren empfohlen.',
    address: 'Roamers: Pannierstraße 64, Neukölln',
    recommended: true,
  },
];

const CATEGORY_LABELS: Record<Category, string> = {
  kultur:    '🎭 Kultur',
  outdoor:   '🌿 Outdoor',
  food:      '🍻 Bar / Food',
  nightlife: '🎶 Nightlife',
  museum:    '🏛️ Museum',
};

const DAY_LABELS: Record<Day, string> = {
  do: 'Donnerstag · 14.05.',
  fr: 'Freitag · 15.05.',
  sa: 'Samstag · 16.05.',
  so: 'Sonntag · 17.05.',
};

// ─── STATE ────────────────────────────────────────────────────────────────────

interface AppState {
  names: [string, string, string];
  votes: Record<string, boolean[]>; // eventId -> [v0, v1, v2]
  activeVoter: 0 | 1 | 2;
}

const DEFAULT_STATE: AppState = {
  names: ['Berliner', 'Besucher 1', 'Besucher 2'],
  votes: {},
  activeVoter: 0,
};

let state: AppState = loadState();

function loadState(): AppState {
  try {
    const raw = localStorage.getItem('bib-state');
    if (raw) return { ...DEFAULT_STATE, ...JSON.parse(raw) };
  } catch { /* ignore */ }
  return { ...DEFAULT_STATE, votes: {} };
}

function saveState() {
  localStorage.setItem('bib-state', JSON.stringify(state));
}

function getVotes(id: string): boolean[] {
  return state.votes[id] ?? [false, false, false];
}

function voteCount(id: string): number {
  return getVotes(id).filter(Boolean).length;
}

// ─── NAME MODAL ───────────────────────────────────────────────────────────────

function initModal() {
  const overlay = document.getElementById('name-modal-overlay')!;
  const inputs = [0, 1, 2].map(i => document.getElementById(`name-${i}`) as HTMLInputElement);

  // Pre-fill saved names
  inputs.forEach((inp, i) => { inp.value = state.names[i]; });

  // If names were already customised, skip modal
  const allDefault = state.names.every((n, i) => n === DEFAULT_STATE.names[i]);
  const hasData = Object.keys(state.votes).length > 0;
  if (!allDefault || hasData) {
    overlay.style.display = 'none';
    return;
  }

  document.getElementById('name-confirm-btn')!.addEventListener('click', () => {
    inputs.forEach((inp, i) => {
      const val = inp.value.trim();
      if (val) (state.names as string[])[i] = val;
    });
    saveState();
    overlay.style.display = 'none';
    updateVoterButtons();
    updateFooterNames();
  });

  // Allow Enter key
  inputs.forEach(inp => inp.addEventListener('keydown', e => {
    if (e.key === 'Enter') (document.getElementById('name-confirm-btn') as HTMLButtonElement).click();
  }));
}

// ─── VOTER BUTTONS ────────────────────────────────────────────────────────────

function updateVoterButtons() {
  [0, 1, 2].forEach(i => {
    const span = document.getElementById(`vname-${i}`);
    if (span) span.textContent = state.names[i];
    const btn = document.getElementById(`vbtn-${i}`);
    if (btn) btn.classList.toggle('active', state.activeVoter === i);
  });
}

function initVoterButtons() {
  [0, 1, 2].forEach(i => {
    document.getElementById(`vbtn-${i}`)?.addEventListener('click', () => {
      state.activeVoter = i as 0 | 1 | 2;
      updateVoterButtons();
    });
  });
}

// ─── RENDER EVENTS ────────────────────────────────────────────────────────────

function renderEvents() {
  const grid = document.getElementById('events-grid')!;
  grid.innerHTML = '';

  const days: Day[] = ['do', 'fr', 'sa', 'so'];
  days.forEach(day => {
    const dayEvents = EVENTS.filter(e => e.day === day);

    const labelEl = document.createElement('div');
    labelEl.className = 'day-group';
    labelEl.innerHTML = `<div class="day-label">${DAY_LABELS[day]}</div>`;
    grid.appendChild(labelEl);

    dayEvents.forEach(event => {
      const card = createCard(event);
      grid.appendChild(card);
    });
  });

  // Animate cards into view with IntersectionObserver
  const cards = grid.querySelectorAll<HTMLElement>('.event-card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target as HTMLElement;
        const idx = parseInt(el.dataset.idx ?? '0', 10);
        anime({
          targets: el,
          translateY: [40, 0],
          opacity: [0, 1],
          duration: 600,
          delay: (idx % 3) * 80,
          easing: 'easeOutCubic',
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

function createCard(event: Event): HTMLElement {
  const card = document.createElement('div');
  card.className = `event-card${event.recommended ? ' recommended' : ''}`;
  card.dataset.id = event.id;

  const votes = getVotes(event.id);
  const dots = [0, 1, 2].map(i =>
    `<div class="vote-dot v${i}${votes[i] ? ' voted' : ''}" data-voter="${i}"></div>`
  ).join('');

  const myVote = votes[state.activeVoter];

  card.innerHTML = `
    ${event.recommended ? '<div class="card-star">⭐</div>' : ''}
    <div class="card-header">
      <div>
        <span class="card-cat-badge cat-${event.category}">${CATEGORY_LABELS[event.category]}</span>
      </div>
      <div class="card-title">${event.title}</div>
    </div>
    <p class="card-desc">${event.desc}</p>
    <div class="card-meta">
      ${event.address ? `<div class="card-meta-item">📍 <span>${event.address}</span></div>` : ''}
      ${event.time ? `<div class="card-meta-item">🕐 <span>${event.time}</span></div>` : ''}
    </div>
    <div class="card-footer">
      <div class="vote-dots">${dots}</div>
      <button class="vote-btn${myVote ? ' voted' : ''}" data-id="${event.id}">
        ${myVote ? '✓ Dabei' : '+ Abstimmen'}
      </button>
    </div>
  `;

  card.querySelector<HTMLButtonElement>('.vote-btn')!.addEventListener('click', () => {
    toggleVote(event.id);
  });

  return card;
}

function toggleVote(id: string) {
  const votes = getVotes(id);
  votes[state.activeVoter] = !votes[state.activeVoter];
  state.votes[id] = votes;
  saveState();

  // Update card UI
  const card = document.querySelector<HTMLElement>(`.event-card[data-id="${id}"]`);
  if (!card) return;

  const btn = card.querySelector<HTMLButtonElement>('.vote-btn')!;
  const myVote = votes[state.activeVoter];
  btn.classList.toggle('voted', myVote);
  btn.textContent = myVote ? '✓ Dabei' : '+ Abstimmen';

  // Update dots
  [0, 1, 2].forEach(i => {
    const dot = card.querySelector<HTMLElement>(`.vote-dot[data-voter="${i}"]`);
    if (dot) {
      dot.classList.toggle('voted', votes[i]);
      if (i === state.activeVoter) {
        anime({
          targets: dot,
          scale: [1, 1.6, 1],
          duration: 350,
          easing: 'easeOutElastic(1, .6)',
        });
      }
    }
  });

  // Animate vote button
  anime({
    targets: btn,
    scale: [1, 1.25, 1],
    duration: 300,
    easing: 'easeOutElastic(1, .5)',
  });

  // Update planner
  renderPlanner();
}

// ─── PLANNER ──────────────────────────────────────────────────────────────────

function renderPlanner() {
  const days: Day[] = ['do', 'fr', 'sa', 'so'];
  days.forEach(day => {
    const col = document.getElementById(`plan-${day}`)!;
    const header = col.querySelector('h3')!;
    col.innerHTML = '';
    col.appendChild(header);

    const dayEvents = EVENTS.filter(e => e.day === day && voteCount(e.id) > 0);

    if (dayEvents.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'plan-empty';
      empty.textContent = 'Noch keine Votes';
      col.appendChild(empty);
      return;
    }

    dayEvents.forEach(event => {
      const count = voteCount(event.id);
      const confirmed = count === 3;
      const item = document.createElement('div');
      item.className = `plan-event-item ${confirmed ? 'confirmed' : 'maybe'}`;
      item.draggable = true;
      item.dataset.id = event.id;
      item.innerHTML = `
        <span class="plan-item-label">${event.title}</span>
        <span class="plan-item-status ${confirmed ? 'confirmed' : 'maybe'}">
          ${confirmed ? 'Alle ✓' : `${count}/3`}
        </span>
      `;
      setupDrag(item);
      col.appendChild(item);
    });
  });
}

// ─── DRAG & DROP ─────────────────────────────────────────────────────────────

let dragEl: HTMLElement | null = null;

function setupDrag(el: HTMLElement) {
  el.addEventListener('dragstart', e => {
    dragEl = el;
    el.style.opacity = '0.4';
    e.dataTransfer?.setData('text/plain', el.dataset.id ?? '');
  });
  el.addEventListener('dragend', () => {
    el.style.opacity = '';
    dragEl = null;
    document.querySelectorAll('.plan-day-col').forEach(c => c.classList.remove('drag-over'));
  });
}

function initDragDropColumns() {
  document.querySelectorAll<HTMLElement>('.plan-day-col').forEach(col => {
    col.addEventListener('dragover', e => {
      e.preventDefault();
      col.classList.add('drag-over');
    });
    col.addEventListener('dragleave', () => col.classList.remove('drag-over'));
    col.addEventListener('drop', e => {
      e.preventDefault();
      col.classList.remove('drag-over');
      if (dragEl && col.contains(dragEl) === false) {
        // Move item visually; actual day is display-only here (state doesn't change day)
        col.appendChild(dragEl);
        dragEl.style.opacity = '';
      } else if (dragEl) {
        // Reorder within same column
        const afterEl = getDragAfterElement(col, e.clientY);
        if (afterEl) col.insertBefore(dragEl, afterEl);
        else col.appendChild(dragEl);
      }
    });
  });
}

function getDragAfterElement(container: HTMLElement, y: number): HTMLElement | null {
  const draggables = [...container.querySelectorAll<HTMLElement>('.plan-event-item:not([style*="opacity: 0.4"])') ];
  return draggables.reduce<{ offset: number; el: HTMLElement | null }>(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) return { offset, el: child };
      return closest;
    },
    { offset: Number.NEGATIVE_INFINITY, el: null }
  ).el;
}

// ─── FOOTER NAMES ────────────────────────────────────────────────────────────

function updateFooterNames() {
  const el = document.getElementById('footer-names');
  if (el) el.textContent = state.names.join(' · ');
}

// ─── HERO ANIMATION ──────────────────────────────────────────────────────────

function animateHero() {
  const titleEl = document.getElementById('hero-title')!;
  const words = ['Boys', 'in', 'Berlin', '🇩🇪'];

  words.forEach((word, wi) => {
    const wordSpan = document.createElement('span');
    wordSpan.className = 'word';
    if (wi > 0) wordSpan.style.marginLeft = '0.2em';

    ;[...word].forEach((char, ci) => {
      const span = document.createElement('span');
      span.className = 'char' + (wi === 2 ? ' accent' : '');
      span.textContent = char;
      wordSpan.appendChild(span);
    });
    titleEl.appendChild(wordSpan);
  });

  const chars = titleEl.querySelectorAll('.char');
  anime({
    targets: chars,
    translateY: [-30, 0],
    opacity: [0, 1],
    duration: 700,
    delay: (_el: any, i: number) => 80 + i * 55,
    easing: 'easeOutCubic',
  });

  anime({
    targets: '#hero-subtitle',
    opacity: [0, 1],
    translateY: [10, 0],
    duration: 600,
    delay: 900,
    easing: 'easeOutCubic',
  });

  anime({
    targets: '#hero-scroll-hint',
    opacity: [0, 0.6],
    duration: 600,
    delay: 1400,
    easing: 'easeOutCubic',
  });

  // Slow skyline pan
  anime({
    targets: '#skyline-svg',
    translateX: ['-50%', 'calc(-50% - 30px)'],
    duration: 20000,
    direction: 'alternate',
    loop: true,
    easing: 'linear',
  });
}

// ─── TIMELINE ANIMATION ──────────────────────────────────────────────────────

function animateTimeline() {
  const line = document.getElementById('timeline-line');
  const items = document.querySelectorAll('.timeline-item');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        anime({
          targets: line,
          scaleY: [0, 1],
          duration: 1000,
          easing: 'easeInOutCubic',
        });
        anime({
          targets: items,
          translateX: [-12, 0],
          opacity: [0, 1],
          duration: 500,
          delay: (_el: any, i: number) => 200 + i * 120,
          easing: 'easeOutCubic',
        });
        observer.disconnect();
      }
    });
  }, { threshold: 0.2 });

  const box = document.querySelector('.recommendation-box');
  if (box) observer.observe(box);
}

// ─── INIT ─────────────────────────────────────────────────────────────────────

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

document.addEventListener('DOMContentLoaded', init);
