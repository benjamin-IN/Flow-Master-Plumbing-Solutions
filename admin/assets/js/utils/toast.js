export function showToast(message, type = "success") {

    const toastContainer = document.getElementById("toastContainer");

    const toast = document.createElement("div");

    toast.className = `toast align-items-center text-bg-${type} border-0 mb-2`;

    toast.setAttribute("role", "alert");

    toast.innerHTML = `
        <div class="d-flex">
            <div class="toast-body">
                ${message}
            </div>

            <button
                class="btn-close btn-close-white me-2 m-auto"
                data-bs-dismiss="toast">
            </button>
        </div>
    `;

    toastContainer.appendChild(toast);

    const bsToast = new bootstrap.Toast(toast);

    bsToast.show();

    toast.addEventListener("hidden.bs.toast", () => {
        toast.remove();
    });

}