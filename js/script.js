const email = document.querySelector(".navbar-email");
const emailMenu = document.querySelector(".desktop-menu");
const car = document.querySelector(".navbar-shopping-cart");
const navOrder = document.querySelector(".nav-product-detail");
const burgerMenu = document.querySelector(".fa-bars");
const mobileMenu = document.querySelector(".mobile-menu");

// burgerMenu.addEventListener("click", toggleMobileMenu);
// email.addEventListener("click", toggleEmailMenu);
// car.addEventListener("click", toggleCarMenu);

function toggleMobileMenu() {
    mobileMenu.classList.toggle("inactive");
    navOrder.classList.add("inactive");
}
burgerMenu.addEventListener("click", toggleMobileMenu);

function toggleEmailMenu() {
    emailMenu.classList.toggle("inactive");
    navOrder.classList.add("inactive");
}
email.addEventListener("click", toggleEmailMenu);

function toggleCarMenu() {
    navOrder.classList.toggle("inactive");
    emailMenu.classList.add("inactive");
    mobileMenu.classList.add("inactive");
}
car.addEventListener("click", toggleCarMenu);