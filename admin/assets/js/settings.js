import { db } from "./firebase.js";

import {
    doc,
    getDoc,
    setDoc
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

const form = document.getElementById("settingsForm");

const settingsRef = doc(db, "settings", "site");

// Load settings
async function loadSettings() {

    try {

        const snapshot = await getDoc(settingsRef);

        if (!snapshot.exists()) return;

        const data = snapshot.data();

        document.getElementById("companyName").value = data.companyName || "";
        document.getElementById("phone").value = data.phone || "";
        document.getElementById("whatsapp").value = data.whatsapp || "";
        document.getElementById("email").value = data.email || "";
        document.getElementById("address").value = data.address || "";
        document.getElementById("facebookLink").value = data.facebook || "";
        document.getElementById("instagramLink").value = data.instagram || "";
        document.getElementById("youtubeLink").value = data.youtube || "";
        document.getElementById("twitterLink").value = data.twitter || "";
        document.getElementById("linkedinLink").value = data.linkedin || "";
        document.getElementById("tiktokLink").value = data.tiktok || "";
        document.getElementById("heroTitle").value = data.heroTitle || "";
        document.getElementById("heroSubtitle").value = data.heroSubtitle || "";
        document.getElementById("whatsappLink").value = data.heroSubtitle || "";
        document.getElementById("footerText").value = data.footerText || "";

    } catch (error) {

        console.error(error);

    }

}

loadSettings();

// Save settings
form.addEventListener("submit", async (e) => {

    e.preventDefault();

    try {

        await setDoc(settingsRef, {

            companyName: document.getElementById("companyName").value.trim(),
            phone: document.getElementById("phone").value.trim(),
            whatsapp: document.getElementById("whatsapp").value.trim(),
            email: document.getElementById("email").value.trim(),
            address: document.getElementById("address").value.trim(),
            facebook: document.getElementById("facebookLink").value.trim(),
            instagram: document.getElementById("instagramLink").value.trim(),
            youtube: document.getElementById("youtubeLink").value.trim(),
            twitter: document.getElementById("twitterLink").value.trim(),
            linkedin: document.getElementById("linkedinLink").value.trim(),
            tiktok: document.getElementById("tiktokLink").value.trim(),
            heroTitle: document.getElementById("heroTitle").value.trim(),           
            whatsapp: document.getElementById("whatsappLink").value.trim(),
            heroSubtitle: document.getElementById("heroSubtitle").value.trim(),
            footerText: document.getElementById("footerText").value.trim()

        });

        alert("✅ Website settings saved successfully!");

    } catch (error) {

        console.error(error);

        alert(error.message);

    }

});