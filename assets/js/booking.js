import { db } from "./firebase.js";

import {
    collection,
    addDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const booking = {

        customerName: document.getElementById("customerName").value.trim(),
        phone: document.getElementById("phone").value.trim(),
        email: document.getElementById("email").value.trim(),
        service: document.getElementById("service").value,
        address: document.getElementById("address").value.trim(),
        preferredDate: document.getElementById("preferredDate").value,
        message: document.getElementById("message").value.trim(),

        status: "Pending",

        createdAt: serverTimestamp()

    };

    try {

        await addDoc(collection(db, "bookings"), booking);

        alert("✅ Your booking has been submitted successfully!");

        bookingForm.reset();

    } catch (error) {

        console.error(error);

        alert(error.message);

    }

});