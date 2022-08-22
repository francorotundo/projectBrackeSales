const email = document.querySelector(".navbar-email");
const emailMenu = document.querySelector(".desktop-menu");
const car = document.querySelector(".navbar-shopping-cart");
const navOrder = document.querySelector(".nav-product-detail");

email.addEventListener("click", toggleEmailMenu);
car.addEventListener("click", toggleCarMenu);
function toggleEmailMenu() {
    emailMenu.classList.toggle("inactive");
    navOrder.classList.add("inactive");
}

function toggleCarMenu() {
    navOrder.classList.toggle("inactive");
    emailMenu.classList.add("inactive");
}