import { auth } from "./firebase.js";
import {
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

const form = document.getElementById("loginForm");
const error = document.getElementById("error");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    error.textContent = "";

    try {

        await signInWithEmailAndPassword(auth, email, password);

        window.location.href = "index.html";

    } catch (err) {

        error.textContent = "Invalid email or password.";

        console.error(err);

    }

});