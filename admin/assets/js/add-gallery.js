import { db } from "./firebase.js";

import {
    collection,
    addDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

const galleryForm = document.getElementById("galleryForm");

if (galleryForm) {

    galleryForm.addEventListener("submit", async (e) => {

        e.preventDefault();

        const gallery = {

            title: document.getElementById("title").value.trim(),
            category: document.getElementById("category").value,
            image: document.getElementById("image").value.trim(),
            description: document.getElementById("description").value.trim(),
            status: document.getElementById("status").value,
            createdAt: serverTimestamp()

        };

        try {

            await addDoc(collection(db, "gallery"), gallery);

            alert("✅ Gallery image added successfully!");

            galleryForm.reset();

            window.location.href = "gallery.html";

        } catch (error) {

            console.error(error);

            alert(error.message);

        }

    });

}