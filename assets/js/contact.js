import { db } from "./firebase.js";

import {
    collection,
    addDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value.trim();

    try {

        await addDoc(collection(db, "contacts"), {

            name,
            email,
            phone,
            service,
            message,
            createdAt: serverTimestamp()

        });

        const whatsappMessage =

`Hello Flow Master,

My name is ${name}

Phone: ${phone}

Service: ${service}

Project Details:

${message}`;

        window.open(

            `https://wa.me/2349012709720?text=${encodeURIComponent(whatsappMessage)}`,

            "_blank"

        );

        alert("✅ Message sent successfully!");

        form.reset();

    } catch (error) {

        console.error(error);

        alert(error.message);

    }

});