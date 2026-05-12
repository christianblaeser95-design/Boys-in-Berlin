// Firebase Realtime Database config
// ─────────────────────────────────────────────────────────────────────────────
// 1. Gehe zu https://console.firebase.google.com
// 2. "Add project" → Name z.B. "boys-in-berlin" → Continue → Create project
// 3. Links auf "Build" → "Realtime Database" → "Create Database"
//    → Start in TEST mode (für euch 3 reicht das) → Enable
// 4. Links auf das Zahnrad → "Project settings" → "Your apps" → Web-Icon (</>)
//    → App-Nickname eingeben → "Register app"
//    → Die Config unten einkopieren (apiKey, databaseURL, etc.)
// ─────────────────────────────────────────────────────────────────────────────
// Ohne Config läuft die App lokal – Votes werden NICHT zwischen Geräten geteilt.

window.FIREBASE_CONFIG = {
  apiKey:            "AIzaSyAiPPggUSZKAsTaiQTJRCBdcc9icWwYOsc",
  authDomain:        "boys-in-berlin.firebaseapp.com",
  databaseURL:       "https://boys-in-berlin-default-rtdb.europe-west1.firebasedatabase.app",
  projectId:         "boys-in-berlin",
  storageBucket:     "boys-in-berlin.firebasestorage.app",
  messagingSenderId: "137554839638",
  appId:             "1:137554839638:web:0f6fcd9e6295edc9bb13f7",
  measurementId:     "G-W7Z3L7CC0T",
};
