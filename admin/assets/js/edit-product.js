import { db } from "./firebase.js";

import {
    doc,
    getDoc,
    updateDoc
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

const form = document.getElementById("productForm");

// Load product
async function loadProduct() {

    const docRef = doc(db, "products", productId);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
        alert("Product not found.");
        window.location.href = "products.html";
        return;
    }

    const product = docSnap.data();

    document.getElementById("productName").value = product.name;
    document.getElementById("category").value = product.category;
    document.getElementById("brand").value = product.brand;
    document.getElementById("price").value = product.price;
    document.getElementById("image").value = product.image;
    document.getElementById("description").value = product.description;
    document.getElementById("status").value = product.status;
}

loadProduct();

// Update product
form.addEventListener("submit", async (e) => {

    e.preventDefault();

    try {

        await updateDoc(doc(db, "products", productId), {

            name: document.getElementById("productName").value.trim(),
            category: document.getElementById("category").value,
            brand: document.getElementById("brand").value.trim(),
            price: Number(document.getElementById("price").value),
            image: document.getElementById("image").value.trim(),
            description: document.getElementById("description").value.trim(),
            status: document.getElementById("status").value

        });

        alert("✅ Product updated successfully!");

        window.location.href = "products.html";

    } catch (error) {

        console.error(error);
        alert(error.message);

    }

});