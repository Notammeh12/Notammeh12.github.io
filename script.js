const menu = document.querySelector(".menu-links");
const toggleButton = document.querySelector(".hamburger-icon");

function toggleMenu(forceOpen) {
    if (!menu || !toggleButton) return;
    const shouldOpen = typeof forceOpen === "boolean" ? forceOpen : !menu.classList.contains("open");
    menu.classList.toggle("open", shouldOpen);
    toggleButton.classList.toggle("open", shouldOpen);
    toggleButton.setAttribute("aria-expanded", String(shouldOpen));
}

if (toggleButton && menu) {
    toggleButton.addEventListener("click", () => toggleMenu());

    menu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => toggleMenu(false));
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            toggleMenu(false);
        }
    });

    document.addEventListener("click", (event) => {
        const clickTarget = event.target;
        if (!(clickTarget instanceof Element) || !clickTarget.closest("#hamburger-nav")) {
            toggleMenu(false);
        }
    });
}

const yearEl = document.getElementById("current-year");
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}
