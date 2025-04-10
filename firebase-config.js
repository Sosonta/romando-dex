// Replace with your own config values from Firebase Console
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC-Cm1l3B2PEij8qpL4e5jdXMkw8hdEo8A",
  authDomain: "romando-pokedex.firebaseapp.com",
  projectId: "romando-pokedex",
  storageBucket: "romando-pokedex.firebasestorage.app",
  messagingSenderId: "899618896757",
  appId: "1:899618896757:web:65f6bef3bb67c87b45313c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
