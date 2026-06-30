import { db } from "./firebase.js";

import {
    doc,
    getDoc,
    updateDoc
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

const params = new URLSearchParams(window.location.search);
const galleryId = params.get("id");

const form = document.getElementById("galleryForm");

async function loadGallery() {

    const docRef = doc(db, "gallery", galleryId);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {

        alert("Gallery item not found.");

        window.location.href = "gallery.html";

        return;

    }

    const item = docSnap.data();

    document.getElementById("title").value = item.title;
    document.getElementById("category").value = item.category;
    document.getElementById("image").value = item.image;
    document.getElementById("description").value = item.description;
    document.getElementById("status").value = item.status;

}

loadGallery();

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    try {

        await updateDoc(doc(db, "gallery", galleryId), {

            title: document.getElementById("title").value.trim(),
            category: document.getElementById("category").value,
            image: document.getElementById("image").value.trim(),
            description: document.getElementById("description").value.trim(),
            status: document.getElementById("status").value

        });

        alert("✅ Gallery updated successfully!");

        window.location.href = "gallery.html";

    } catch (error) {

        console.error(error);

        alert(error.message);

    }

});