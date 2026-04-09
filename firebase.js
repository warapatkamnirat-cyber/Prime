// นำเข้า Library จาก Firebase CDN (v10.11.0)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { 
    getAuth, 
    GoogleAuthProvider, 
    FacebookAuthProvider, 
    signInWithPopup, 
    signInWithRedirect, 
    getRedirectResult, 
    onAuthStateChanged, 
    signOut 
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { 
    getFirestore, 
    doc, 
    getDoc, 
    setDoc, 
    updateDoc, 
    collection, 
    query, 
    where, 
    getDocs, 
    serverTimestamp, 
    onSnapshot 
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

// --- CONFIGURATION ---
const firebaseConfig = {
  apiKey: "AIzaSyDne6T2ZmFrqP4idNGNHfp0CipTUxLkXHo",
  authDomain: "prime-store-487ac.firebaseapp.com",
  projectId: "prime-store-487ac",
  storageBucket: "prime-store-487ac.firebasestorage.app",
  messagingSenderId: "312275328003",
  appId: "1:312275328003:web:92459c25dde3fd115c0236",
  measurementId: "G-M8R7C11D8Z"
};

// --- INITIALIZE ---
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// --- EXPORT TO GLOBAL (WINDOW) ---
// เพื่อให้ไฟล์ HTML หรือ JS อื่นๆ เรียกใช้ได้โดยไม่ต้อง import ซ้ำ
window.auth = auth;
window.db = db;

// Auth Providers & Methods
window.GoogleAuthProvider = GoogleAuthProvider;
window.FacebookAuthProvider = FacebookAuthProvider;
window.signInWithPopup = signInWithPopup;
window.signInWithRedirect = signInWithRedirect;
window.getRedirectResult = getRedirectResult;
window.onAuthStateChanged = onAuthStateChanged;
window.signOut = signOut;

// Firestore Methods
window.doc = doc;
window.getDoc = getDoc;
window.setDoc = setDoc;
window.updateDoc = updateDoc;
window.collection = collection;
window.query = query;
window.where = where;
window.getDocs = getDocs;
window.serverTimestamp = serverTimestamp;
window.onSnapshot = onSnapshot;

console.log("🚀 Prime Store: Firebase System Connected!");
