import { db } from "./firebase.js";

import {
    collection,
    getDocs,
    deleteDoc,
    doc
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

const table = document.getElementById("galleryTable");

async function loadGallery() {

    table.innerHTML = "";

    try {

        const snapshot = await getDocs(collection(db, "gallery"));

        snapshot.forEach((galleryDoc) => {

            const item = galleryDoc.data();

            table.innerHTML += `
                <tr>

                    <td>
                        <img src="../${item.image}"
                             width="70"
                             height="70"
                             style="object-fit:cover;">
                    </td>

                    <td>${item.title}</td>

                    <td>${item.category}</td>

                    <td>
                        <span class="badge ${
                            item.status === "Active"
                                ? "bg-success"
                                : "bg-secondary"
                        }">
                            ${item.status}
                        </span>
                    </td>

                    <td>

                        <a href="edit-gallery.html?id=${galleryDoc.id}"
                           class="btn btn-warning btn-sm">

                            <i class="fas fa-edit"></i>

                        </a>

                        <button
                            class="btn btn-danger btn-sm deleteBtn"
                            data-id="${galleryDoc.id}">

                            <i class="fas fa-trash"></i>

                        </button>

                    </td>

                </tr>
            `;
        });

    } catch (error) {

        console.error(error);

    }

}

loadGallery();

document.addEventListener("click", async (e) => {

    const button = e.target.closest(".deleteBtn");

    if (!button) return;

    if (!confirm("Delete this gallery image?")) return;

    try {

        await deleteDoc(doc(db, "gallery", button.dataset.id));

        alert("✅ Gallery image deleted!");

        loadGallery();

    } catch (error) {

        console.error(error);

        alert(error.message);

    }

});