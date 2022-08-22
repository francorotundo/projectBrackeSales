const email = document.querySelector(".navbar-email");
const emailMenu = document.querySelector(".desktop-menu");

email.addEventListener("click", toggleEmailMenu);
function toggleEmailMenu() {
    emailMenu.classList.toggle("inactive");
}