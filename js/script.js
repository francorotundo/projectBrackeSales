const email = document.querySelector(".navbar-email");
const emailMenu = document.querySelector(".desktop-menu");
const car = document.querySelector(".navbar-shopping-cart");
const navOrder = document.querySelector(".nav-product-detail");
const burgerMenu = document.querySelector(".fa-bars");
const mobileMenu = document.querySelector(".mobile-menu");
const cardContainer = document.querySelector(".cards-container");

burgerMenu.addEventListener("click", toggleMobileMenu);
email.addEventListener("click", toggleEmailMenu);
car.addEventListener("click", toggleCarMenu);

function toggleMobileMenu() {
    mobileMenu.classList.toggle("inactive");
    navOrder.classList.add("inactive");
}


function toggleEmailMenu() {
    emailMenu.classList.toggle("inactive");
    navOrder.classList.add("inactive");
}


function toggleCarMenu() {
    navOrder.classList.toggle("inactive");
    emailMenu.classList.add("inactive");
    mobileMenu.classList.add("inactive");
}

const productList = [];
productList.push({
    name: "Brembo Caliper Cover",
    price: "8",
    photo: "https://http2.mlstatic.com/D_NQ_NP_868029-MLV49436270791_032022-V.webp"
});
productList.push({
    name: "Chevrolet Aveo Optra green front brake pads",
    price: "12",
    photo: "https://http2.mlstatic.com/D_NQ_NP_790921-MLV41584765730_042020-O.webp"
});
productList.push({
    name: "Brake master cylinder Ford F150 Bronco",
    price: "60",
    photo: "https://http2.mlstatic.com/D_NQ_NP_880411-MLV45294657991_032021-V.webp"
});

function renderProducts(arr){
    for (product of arr) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.photo);
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const productInfoDiv = document.createElement("div");
    
        const productPrice = document.createElement("p");
        productPrice.innerText = "US$" + product.price;
        const productName = document.createElement("p");
        productName.innerText = product.name;
    
        productInfoDiv.append(productPrice, productName);
    
        const productInfoFigure = document.createElement("div");
        productInfoFigure.classList.add("addProduct");
        const productImgCard = document.createElement("i");
        productImgCard.classList.add("fa-solid");
        productImgCard.classList.add("fa-cart-arrow-down");
    
        productInfoFigure.appendChild(productImgCard);
    
        productInfo.append(productInfoDiv, productInfoFigure);
    
        productCard.append(productImg, productInfo);
    
        cardContainer.append(productCard);
    }
    console.log(arr);
}

renderProducts(productList);