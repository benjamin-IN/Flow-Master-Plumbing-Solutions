import { db } from "./firebase.js";

import {
    doc,
    getDoc
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

async function loadSettings() {

    const snapshot = await getDoc(doc(db, "settings", "site"));

    if (!snapshot.exists()) return;

    const settings = snapshot.data();

    // Company Name
    document.querySelectorAll(".company-name").forEach(el => {
        el.textContent = settings.companyName || "";
    });

    // Phone
    document.querySelectorAll(".company-phone").forEach(el => {
        el.textContent = settings.phone || "";
    });

    // Email
    document.querySelectorAll(".company-email").forEach(el => {
        el.textContent = settings.email || "";
    });

    // Address
    document.querySelectorAll(".company-address").forEach(el => {
        el.textContent = settings.address || "";
    });

        // Facebook
    const facebookLink = document.getElementById("facebookLink");
    if (facebookLink)
        facebookLink.href = settings.facebook || "#";

    // Instagram
    const instagramLink = document.getElementById("instagramLink");
    if (instagramLink)
        instagramLink.href = settings.instagram || "#";

    // X (Twitter)
    const twitterLink = document.getElementById("twitterLink");
    if (twitterLink)
        twitterLink.href = settings.twitter || "#";

    // LinkedIn
    const linkedinLink = document.getElementById("linkedinLink");
    if (linkedinLink)
        linkedinLink.href = settings.linkedin || "#";

    // TikTok
    const tiktokLink = document.getElementById("tiktokLink");
    if (tiktokLink)
        tiktokLink.href = settings.tiktok || "#";

    // WhatsApp
    const whatsappLink = document.getElementById("whatsappLink");
    if (whatsappLink)
        whatsappLink.href = settings.whatsapp || "#";

        // WhatsApp
    const whatsappLink = document.getElementById("whatsapp");
    if (whatsappLink)
        whatsappLink.href = settings.whatsapp || "#";

    // YouTube (Optional)
    const youtubeLink = document.getElementById("youtubeLink");
    if (youtubeLink)
        youtubeLink.href = settings.youtube || "#";


    // Hero Title
    const heroTitle = document.getElementById("heroTitle");

    if (heroTitle)
        heroTitle.textContent = settings.heroTitle || "";

    // Hero Subtitle
    const heroSubtitle = document.getElementById("heroSubtitle");

    if (heroSubtitle)
        heroSubtitle.textContent = settings.heroSubtitle || "";

}

loadSettings();