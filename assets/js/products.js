console.log("Products JS loaded");
const snapshot = await getDocs(collection(db, "products"));

snapshot.forEach((doc) => {
    console.log("Product:", doc.id, doc.data());
});

console.log("Documents found:", snapshot.size);

import { db } from "./firebase.js";

import {
    collection,
    getDocs
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

const container = document.getElementById("productsContainer");

async function loadProducts() {

    container.innerHTML = "";

    const snapshot = await getDocs(collection(db, "products"));

    snapshot.forEach((doc) => {

        const product = doc.data();

        if (product.status !== "Active") return;

        container.innerHTML += `

            <div class="col-lg-4 col-md-6">

                <div class="card h-100 shadow">

                    <img
                        src="${product.image}"
                        class="card-img-top"
                        style="height:250px;object-fit:cover;">

                    <div class="card-body">

                        <h5>${product.name}</h5>

                        <p>${product.description}</p>

                        <p>

                            <strong>Brand:</strong>

                            ${product.brand}

                        </p>

                        <p>

                            <strong>Category:</strong>

                            ${product.category}

                        </p>

                        <h4 class="text-primary">

                            ₦${product.price}

                        </h4>

                    </div>

                </div>

            </div>

        `;

    });

}

loadProducts();