
import { db } from "./firebase.js";

import {
    collection,
    getDocs,
    deleteDoc,
    doc
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

const table = document.getElementById("messageTable");

async function loadMessages() {

    table.innerHTML = "";

    try {

        const snapshot = await getDocs(collection(db, "contacts"));

        snapshot.forEach((messageDoc) => {

            const message = messageDoc.data();

            table.innerHTML += `
                <tr>

                    <td>${message.name}</td>

                    <td>${message.phone}</td>

                    <td>${message.service}</td>

                    <td>
                        ${
                            message.createdAt?.toDate
                                ? message.createdAt.toDate().toLocaleDateString()
                                : "-"
                        }
                    </td>

                    <td>

                        <a href="message-details.html?id=${messageDoc.id}"
                           class="btn btn-info btn-sm">

                            <i class="fas fa-eye"></i>

                        </a>

                        <button
                            class="btn btn-danger btn-sm deleteBtn"
                            data-id="${messageDoc.id}">

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

loadMessages();

document.addEventListener("click", async (e) => {

    const button = e.target.closest(".deleteBtn");

    if (!button) return;

    if (!confirm("Delete this message?")) return;

    try {

        await deleteDoc(doc(db, "contacts", button.dataset.id));

        alert("✅ Message deleted successfully!");

        loadMessages();

    } catch (error) {

        console.error(error);

        alert(error.message);

    }

});