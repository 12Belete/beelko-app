// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiM1RFp-yWr9luVLJslNJYiZOhsiwLLO4",
  authDomain: "beelko-7dcaa.firebaseapp.com",
  projectId: "beelko-7dcaa",
  storageBucket: "beelko-7dcaa.firebasestorage.app",
  messagingSenderId: "757679525639",
  appId: "1:757679525639:web:faceb6756f2ab687de7fa2",
  measurementId: "G-7YPRWT675Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

console.log("✅ BEELKO Firebase Connected");
