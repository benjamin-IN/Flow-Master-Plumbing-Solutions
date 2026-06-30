import { showLoader, hideLoader } from "./utils/loading.js";


let products = [];

import { db } from "./firebase.js";

import {
    collection,
    getDocs,
    deleteDoc,
    doc
}from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

const table = document.getElementById("productsTable");

async function loadProducts() {

    table.innerHTML = "";

    try {

        const querySnapshot = await getDocs(collection(db, "products"));

querySnapshot.forEach((docSnap) => {

    products.push({
        id: docSnap.id,
        ...docSnap.data()
    });


    const product = docSnap.data();

            table.innerHTML += `

                <tr>

                    <td>

                        <img src="${product.image}"
                             width="60"
                             height="60"
                             style="object-fit:cover;">

                    </td>

                    <td>${product.name}</td>

                    <td>${product.category}</td>

                    <td>${product.brand}</td>

                    <td>

                        <span class="badge bg-success">

                            ${product.status}

                        </span>

                    </td>

                    <td>

                        
                    <a href="edit-product.html?id=${docSnap.id}" class="btn btn-warning btn-sm">
                    <i class="fas fa-edit"></i>
                    </a>

                        <button
                             class="btn btn-danger btn-sm deleteBtn"
                                data-id="${docSnap.id}">

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


loadProducts();

document.addEventListener("click", async (e) => {

    if (e.target.closest(".deleteBtn")) {

        const id = e.target.closest(".deleteBtn").dataset.id;

        const confirmDelete = confirm("Delete this product?");

        if (!confirmDelete) return;

        try {

            await deleteDoc(doc(db, "products", id));

        showToast("✅ Product deleted successfully!");

            loadProducts();

        } catch (error) {

            console.error(error);

        }

    }

});


function displayProducts(list) {

    table.innerHTML = "";

    list.forEach((product) => {

        table.innerHTML += `

            <tr>

                <td>${product.name}</td>

                <td>${product.category}</td>

                <td>${product.brand}</td>

                <td>₦${product.price}</td>

                <td>

                    <a href="edit-product.html?id=${product.id}"
                        class="btn btn-warning btn-sm">

                        Edit

                    </a>

                    <button
                        class="btn btn-danger btn-sm deleteBtn"
                        data-id="${product.id}">

                        Delete

                    </button>

                </td>

            </tr>

        `;

    });

}

document
.getElementById("searchProduct")
.addEventListener("input", function () {

    const keyword = this.value.toLowerCase();

    const filtered = products.filter(product =>

        product.name.toLowerCase().includes(keyword) ||

        product.category.toLowerCase().includes(keyword) ||

        product.brand.toLowerCase().includes(keyword)

    );

    displayProducts(filtered);

});

import { showToast } from "./utils/toast.js";

