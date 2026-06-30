import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC1H_NP0T6UR7dYibvMzgcm4S39NrAlGIs",
  authDomain: "flow-master-plumbing.firebaseapp.com",
  projectId: "flow-master-plumbing",
  storageBucket: "flow-master-plumbing.firebasestorage.app",
  messagingSenderId: "405159179210",
  appId: "1:405159179210:web:1ddd2b4c7cb778c4ba5533"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);