import { db } from "./firebase.js";

import {
    doc,
    getDoc,
    updateDoc
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

const params = new URLSearchParams(window.location.search);
const bookingId = params.get("id");

async function loadBooking() {

    const bookingRef = doc(db, "bookings", bookingId);
    const bookingSnap = await getDoc(bookingRef);

    if (!bookingSnap.exists()) {

        alert("Booking not found.");
        window.location.href = "bookings.html";
        return;

    }

    const booking = bookingSnap.data();

    document.getElementById("customerName").textContent = booking.customerName;
    document.getElementById("email").textContent = booking.email;
    document.getElementById("phone").textContent = booking.phone;
    document.getElementById("service").textContent = booking.service;
    document.getElementById("address").textContent = booking.address;
    document.getElementById("preferredDate").textContent = booking.preferredDate;
    document.getElementById("message").textContent = booking.message;
    document.getElementById("status").value = booking.status;

}

loadBooking();

document.getElementById("saveBtn").addEventListener("click", async () => {

    try {

        await updateDoc(doc(db, "bookings", bookingId), {

            status: document.getElementById("status").value

        });

        alert("✅ Booking updated successfully!");

        window.location.href = "bookings.html";

    } catch (error) {

        console.error(error);

        alert(error.message);

    }

});