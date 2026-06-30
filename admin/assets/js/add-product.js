
import { db } from "./firebase.js";
import { showToast } from "./utils/toast.js";

import {
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

// ======================
// Image Preview
// ======================

const imageFile = document.getElementById("imageFile");
const previewImage = document.getElementById("previewImage");

imageFile.addEventListener("change", () => {

    const file = imageFile.files[0];

    if (!file) return;

    previewImage.src = URL.createObjectURL(file);
    previewImage.classList.remove("d-none");

});

// ======================
// Upload Image to Cloudinary
// ======================

async function uploadImage(file) {

    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", "flowmaster_uploads");

    const response = await fetch(
        "https://api.cloudinary.com/v1_1/dt1enluk9/image/upload",
        {
            method: "POST",
            body: formData
        }
    );

    if (!response.ok) {
        throw new Error("Image upload failed.");
    }

    const data = await response.json();

    return data.secure_url;
}

// ======================
// Add Product
// ======================

const productForm = document.getElementById("productForm");

productForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    try {

        const file = imageFile.files[0];

        if (!file) {
            showToast("Please select an image.", "danger");
            return;
        }

        // Upload image first
        const imageUrl = await uploadImage(file);

        // Save product
        await addDoc(collection(db, "products"), {

            name: document.getElementById("productName").value.trim(),
            category: document.getElementById("category").value,
            brand: document.getElementById("brand").value.trim(),
            price: Number(document.getElementById("price").value),

            image: imageUrl,

            description: document.getElementById("description").value.trim(),
            status: document.getElementById("status").value,

            createdAt: serverTimestamp()

        });

        showToast("✅ Product added successfully!");

        productForm.reset();

        previewImage.src = "";
        previewImage.classList.add("d-none");

    } catch (error) {

        console.error(error);

        showToast(error.message, "danger");

    }

});

