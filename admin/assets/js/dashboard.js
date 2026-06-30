
import { db } from "./firebase.js";

import {
    collection,
    getDocs
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

// ======================
// Dashboard Counts
// ======================

async function loadDashboard() {

    try {

        const products = await getDocs(collection(db, "products"));
        document.getElementById("productCount").textContent = products.size;

        const gallery = await getDocs(collection(db, "gallery"));
        document.getElementById("galleryCount").textContent = gallery.size;

        const bookings = await getDocs(collection(db, "bookings"));
        document.getElementById("bookingCount").textContent = bookings.size;

        const messages = await getDocs(collection(db, "contacts"));
        document.getElementById("messageCount").textContent = messages.size;

    } catch (error) {

        console.error("Dashboard Error:", error);

    }

}

// ======================
// Products Chart
// ======================

async function loadProductsChart() {

    try {

        const snapshot = await getDocs(collection(db, "products"));

        const categories = {};

        snapshot.forEach((doc) => {

            const product = doc.data();

            const category = product.category || "Other";

            categories[category] = (categories[category] || 0) + 1;

        });

        const ctx = document.getElementById("productsChart");

        new Chart(ctx, {

            type: "bar",

            data: {

                labels: Object.keys(categories),

                datasets: [{

                    label: "Products",

                    data: Object.values(categories)

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

    } catch (error) {

        console.error(error);

    }

}

// ======================
// Booking Status Chart
// ======================

async function loadBookingChart() {

    try {

        const snapshot = await getDocs(collection(db, "bookings"));

        const statusCounts = {};

        snapshot.forEach((doc) => {

            const booking = doc.data();

            const status = booking.status || "Pending";

            statusCounts[status] = (statusCounts[status] || 0) + 1;

        });

        const ctx = document.getElementById("bookingChart");

        new Chart(ctx, {

            type: "doughnut",

            data: {

                labels: Object.keys(statusCounts),

                datasets: [{

                    data: Object.values(statusCounts)

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

    } catch (error) {

        console.error(error);

    }

}


async function loadRecentActivity() {

    const activity = document.getElementById("recentActivity");

    activity.innerHTML = "";

    // Products
    const products = await getDocs(collection(db, "products"));

    products.forEach((doc) => {

        const product = doc.data();

        activity.innerHTML += `
            <li class="list-group-item">
                🟢 <strong>New Product</strong><br>
                ${product.name}
            </li>
        `;

    });

    const messages = await getDocs(collection(db, "contacts"));

messages.forEach((doc) => {

    const message = doc.data();

    activity.innerHTML += `
        <li class="list-group-item">
            🔴 <strong>New Message</strong><br>
            ${message.name}
        </li>
    `;

});

const quotes = await getDocs(collection(db, "quotes"));

quotes.forEach((doc) => {

    const quote = doc.data();

    activity.innerHTML += `
        <li class="list-group-item">
            🟡 <strong>Quote Request</strong><br>
            ${quote.name}
        </li>
    `;

});

    const bookings = await getDocs(collection(db, "bookings"));

bookings.forEach((doc) => {

    const booking = doc.data();

    activity.innerHTML += `
        <li class="list-group-item">
            🔵 <strong>New Booking</strong><br>
            ${booking.name}
        </li>
    `;

});

}




// ======================
// Initialize Dashboard
// ======================

loadDashboard();
loadProductsChart();
loadBookingChart();
loadRecentActivity();

