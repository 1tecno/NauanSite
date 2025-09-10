// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "portaltecnico-6d777.firebaseapp.com",
  projectId: "portaltecnico-6d777",
  storageBucket: "portaltecnico-6d777.appspot.com",
  messagingSenderId: "1004571616226",
  appId: "1:1004571616226:web:4a7076708c9515eea44fbb",
  measurementId: "G-VHCLYGR2L0"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
