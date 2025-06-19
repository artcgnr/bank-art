import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getDatabase, ref, push, onValue, update, set, get, remove} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

const appSetting = {
    apiKey: "AIzaSyAFjOWuf6X3ijdYFuIVlPf-HMilCkQfASg",
    authDomain: "bank-transfer-art.firebaseapp.com",
    databaseURL: "https://bank-transfer-art-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "bank-transfer-art",
    storageBucket: "bank-transfer-art.firebasestorage.app",
    messagingSenderId: "1054871065953",
    appId: "1:1054871065953:web:5362c57c4da13cd240e120"
};

const app = initializeApp(appSetting);
const db = getDatabase(app);

export { db, ref, push, onValue, update, set, get, remove }; 


