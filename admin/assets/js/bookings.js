

import { db } from "./firebase.js";

import {
    collection,
    getDocs,
    deleteDoc,
    doc
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

const table = document.getElementById("bookingTable");

async function loadBookings() {

    table.innerHTML = "";

    try {

        const snapshot = await getDocs(collection(db, "bookings"));

        snapshot.forEach((bookingDoc) => {

            const booking = bookingDoc.data();

            let badge = "bg-warning";

            if (booking.status === "Confirmed") badge = "bg-primary";
            if (booking.status === "Completed") badge = "bg-success";
            if (booking.status === "Cancelled") badge = "bg-danger";

            table.innerHTML += `

                <tr>

                    <td>${booking.customerName}</td>

                    <td>${booking.phone}</td>

                    <td>${booking.service}</td>

                    <td>${booking.preferredDate}</td>

                    <td>
                        <span class="badge ${badge}">
                            ${booking.status}
                        </span>
                    </td>

                    <td>

                        <a href="booking-details.html?id=${bookingDoc.id}"
                           class="btn btn-info btn-sm">

                            <i class="fas fa-eye"></i>

                        </a>

                        <button
                            class="btn btn-danger btn-sm deleteBtn"
                            data-id="${bookingDoc.id}">

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

loadBookings();

document.addEventListener("click", async (e) => {

    const button = e.target.closest(".deleteBtn");

    if (!button) return;

    if (!confirm("Delete this booking?")) return;

    try {

        await deleteDoc(doc(db, "bookings", button.dataset.id));

        alert("✅ Booking deleted successfully!");

        loadBookings();

    } catch (error) {

        console.error(error);

        alert(error.message);

    }

});

async function loadProductsChart() {

    const snapshot = await getDocs(collection(db, "products"));

    const categories = {};

    snapshot.forEach((doc) => {

        const product = doc.data();

        const category = product.category || "Other";

        categories[category] = (categories[category] || 0) + 1;

    });

    const labels = Object.keys(categories);

    const values = Object.values(categories);

    const ctx = document.getElementById("productsChart");

    new Chart(ctx, {

        type: "bar",

        data: {

            labels,

            datasets: [{

                label: "Products",

                data: values

            }]

        },

        options: {

            responsive: true,

            plugins: {

                legend: {

                    display: false

                }

            }

        }

    });

}

loadProductsChart();

async function loadBookingChart() {

    console.log("Bookings found:", snapshot.size);

snapshot.forEach((doc) => {
    console.log(doc.data());
});

    const snapshot = await getDocs(collection(db, "bookings"));

    const statusCounts = {};

    snapshot.forEach((doc) => {

        const booking = doc.data();

        const status = booking.status || "Pending";

        statusCounts[status] = (statusCounts[status] || 0) + 1;

    });

    const labels = Object.keys(statusCounts);

    const values = Object.values(statusCounts);

    const ctx = document.getElementById("bookingChart");

    new Chart(ctx, {

        type: "doughnut",

        data: {

            labels,

            datasets: [{

                data: values

            }]

        },

        options: {

            responsive: true,

            plugins: {

                legend: {

                    position: "bottom"

                }

            }

        }

    });

}

loadProductsChart();
loadBookingChart();