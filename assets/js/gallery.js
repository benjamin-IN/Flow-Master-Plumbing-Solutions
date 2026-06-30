console.log("Gallery JS loaded");

const snapshot = await getDocs(collection(db, "gallery"));

console.log("Gallery documents:", snapshot.size);

snapshot.forEach((doc) => {
    console.log(doc.id, doc.data());
});


import { db } from "./firebase.js";

import {
    collection,
    getDocs
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

const container = document.getElementById("galleryContainer");

async function loadGallery() {

    container.innerHTML = "";

    try {

        const snapshot = await getDocs(collection(db, "gallery"));

        snapshot.forEach((galleryDoc) => {

            const item = galleryDoc.data();

            if (item.status !== "Active") return;

            container.innerHTML += `
                <div class="col-lg-4 col-md-6">

                    <div class="card shadow h-100">

                        <img
                            src="${item.image}"
                            class="card-img-top"
                            alt="${item.title}"
                            style="height:250px;object-fit:cover;">

                        <div class="card-body">

                            <h5>${item.title}</h5>

                            <p>${item.description}</p>

                            <span class="badge bg-primary">

                                ${item.category}

                            </span>

                        </div>

                    </div>

                </div>
            `;

        });

    } catch (error) {

        console.error(error);

    }

}

loadGallery();