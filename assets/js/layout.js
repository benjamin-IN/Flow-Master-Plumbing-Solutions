async function loadLayout() {

    const navbar = document.getElementById("navbar");

    if (navbar) {
        const response = await fetch("includes/navbar.html");
        navbar.innerHTML = await response.text();
    }

    const footer = document.getElementById("footer");

    if (footer) {
        const response = await fetch("includes/footer.html");
        footer.innerHTML = await response.text();
    }

}

loadLayout();