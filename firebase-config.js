// Firebase configuration for Sapthagiri NPS University Registration Portal
const firebaseConfig = {
  apiKey: "AIzaSyAqib_Jv2STP2KcbHUdXkAubfjldL_oYqk",
  authDomain: "student-registration-24326.firebaseapp.com",
  databaseURL: "https://student-registration-24326-default-rtdb.firebaseio.com",
  projectId: "student-registration-24326",
  storageBucket: "student-registration-24326.firebasestorage.app",
  messagingSenderId: "610247121507",
  appId: "1:610247121507:web:e89c16194e9a817620b656",
  measurementId: "G-CRPR7LR60F"
};

// Initialize global variables so they are accessible by index.html
let db;
let isFirebaseReady = false;

try {
  if (firebaseConfig.apiKey && firebaseConfig.apiKey !== "YOUR_API_KEY_HERE") {
    firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();
    isFirebaseReady = true;
    console.log("Firebase Firestore successfully initialized from firebase-config.js!");
  } else {
    console.warn("Firebase is running in OFFLINE SANDBOX MODE. Please fill in active keys in firebase-config.js.");
  }
} catch (err) {
  console.error("Firebase initialization failed in firebase-config.js:", err);
}
