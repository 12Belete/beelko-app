// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyDiM1RFp-yWr9luVLJslNJYiZOhsiwLLO4",
  authDomain: "beelko-7dcaa.firebaseapp.com",
  projectId: "beelko-7dcaa",
  storageBucket: "beelko-7dcaa.firebasestorage.app",
  messagingSenderId: "757679525639",
  appId: "1:757679525639:web:faceb6756f2ab687de7fa2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Qorannoo qofa
window.auth = auth;

console.log("BEELKO Firebase Connected");
