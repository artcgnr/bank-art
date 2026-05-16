import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getFirestore, getDoc, doc, addDoc, updateDoc, deleteDoc, collection, getDocs, query, where, orderBy, setDoc, onSnapshot, serverTimestamp, Timestamp, runTransaction } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

const appSetting = {
    apiKey: "AIzaSyAFjOWuf6X3ijdYFuIVlPf-HMilCkQfASg",
    authDomain: "bank-transfer-art.firebaseapp.com",
    //databaseURL: "https://bank-transfer-art-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "bank-transfer-art",
    storageBucket: "bank-transfer-art.firebasestorage.app",
    messagingSenderId: "1054871065953",
    appId: "1:1054871065953:web:5362c57c4da13cd240e120"
};

const app = initializeApp(appSetting);
const db = getFirestore(app);

export { db, getDoc, doc, addDoc, updateDoc, deleteDoc, collection, getDocs, query, where, onSnapshot, orderBy, setDoc, serverTimestamp, Timestamp, runTransaction }; 
