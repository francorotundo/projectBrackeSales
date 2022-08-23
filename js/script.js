const email = document.querySelector(".navbar-email");
const emailMenu = document.querySelector(".desktop-menu");
const car = document.querySelector(".navbar-shopping-cart");
const navOrder = document.querySelector(".nav-product-detail");
const burgerMenu = document.querySelector(".fa-bars");
const mobileMenu = document.querySelector(".mobile-menu");
const cardContainer = document.querySelector(".cards-container");
const productDescription = document.querySelector(".product-description");

burgerMenu.addEventListener("click", toggleMobileMenu);
email.addEventListener("click", toggleEmailMenu);
car.addEventListener("click", toggleCarMenu);

function toggleMobileMenu() {
    mobileMenu.classList.toggle("inactive");
    navOrder.classList.add("inactive");
    productDescription.classList.add("inactive");
}


function toggleEmailMenu() {
    emailMenu.classList.toggle("inactive");
    navOrder.classList.add("inactive");
    productDescription.classList.add("inactive");
}


function toggleCarMenu() {
    navOrder.classList.toggle("inactive");
    emailMenu.classList.add("inactive");
    mobileMenu.classList.add("inactive");
    productDescription.classList.add("inactive");
}

const productList = [];
productList.push({
    name: "Brembo Caliper Cover",
    price: "8",
    photo: "https://http2.mlstatic.com/D_NQ_NP_868029-MLV49436270791_032022-V.webp",
    detail: "Brand Brembo, Units per container 2"
    
});
productList.push({
    name: "Chevrolet Aveo Optra green front brake pads",
    price: "12",
    photo: "https://http2.mlstatic.com/D_NQ_NP_790921-MLV41584765730_042020-O.webp",
    detail: "Brand GM Original, part number: 96475176"
});
productList.push({
    name: "Brake master cylinder Ford F150 Bronco",
    price: "60",
    photo: "https://http2.mlstatic.com/D_NQ_NP_880411-MLV45294657991_032021-V.webp",
    detail: "Brand Dolman, part number: m39634"
});
productList.push({
    name: "Brake Garter Cover Aveo Optra Limited Desing Advance",
    price: "3.30",
    photo: "https://http2.mlstatic.com/D_NQ_NP_999186-MLV32479901933_102019-V.webp",
    detail: "Brand Dolman, part number: m39634"
});
productList.push({
    name: "Front Brake Disc Jeep Cherokee Liberty 3.7l",
    price: "45",
    photo: "https://http2.mlstatic.com/D_NQ_NP_701931-MLV43220017694_082020-V.webp",
    detail: "Brand Dolman, part number: m39634"
});
productList.push({
    name: "Brake Sensor Valve Chery Orinoco X1 Tiggo Original",
    price: "6",
    photo: "https://http2.mlstatic.com/D_NQ_NP_916546-MLV50080142510_052022-V.webp",
    detail: "Brand Dolman, part number: m39634"
});
productList.push({
    name: "Brake master cylinder Ford F150 Bronco",
    price: "60",
    photo: "https://http2.mlstatic.com/D_NQ_NP_880411-MLV45294657991_032021-V.webp",
    detail: "Brand Dolman, part number: m39634"
});
productList.push({
    name: "Brembo Caliper Cover",
    price: "8",
    photo: "https://http2.mlstatic.com/D_NQ_NP_868029-MLV49436270791_032022-V.webp",
    detail: "Brand Brembo, Units per container 2"
    
});
productList.push({
    name: "Chevrolet Aveo Optra green front brake pads",
    price: "12",
    photo: "https://http2.mlstatic.com/D_NQ_NP_790921-MLV41584765730_042020-O.webp",
    detail: "Brand GM Original, part number: 96475176"
});
productList.push({
    name: "Brake master cylinder Ford F150 Bronco",
    price: "60",
    photo: "https://http2.mlstatic.com/D_NQ_NP_880411-MLV45294657991_032021-V.webp",
    detail: "Brand Dolman, part number: m39634"
});
productList.push({
    name: "Brake Garter Cover Aveo Optra Limited Desing Advance",
    price: "3.30",
    photo: "https://http2.mlstatic.com/D_NQ_NP_999186-MLV32479901933_102019-V.webp",
    detail: "Brand Dolman, part number: m39634"
});
productList.push({
    name: "Front Brake Disc Jeep Cherokee Liberty 3.7l",
    price: "45",
    photo: "https://http2.mlstatic.com/D_NQ_NP_701931-MLV43220017694_082020-V.webp",
    detail: "Brand Dolman, part number: m39634"
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

function renderProductInfo(name, photo, price, detail){
    const product = document.createElement("aside");
    product.classList.add("productDetail");
    // product.classList.add("inactive");

    const productDetailClose = document.createElement("div");
    productDetailClose.classList.add("product-detail-close");

    const closeProduct = document.createElement("img");
    closeProduct.setAttribute("src", '../icons/icon_close.png');
    closeProduct.setAttribute("alt", "close");
    closeProduct.classList.add("close");

    productDetailClose.append(closeProduct);

    const productImage = document.createElement("img");
    productImage.setAttribute("src", photo);
    productImage.setAttribute("alt", name);

    const productInformation = document.createElement("div");
    productInformation.classList.add("product-info");

    const productDetailPrice = document.createElement("p");
    productDetailPrice.innerText = "US$" + price;

    const productName = document.createElement("p");
    productName.innerText = name;

    const productDet = document.createElement("p");
    productDet.innerText = detail;

    const btnAddCart = document.createElement("button");
    btnAddCart.classList.add("primary-button");
    btnAddCart.classList.add("add-to-cart-button");

    // const addCartImage = document.createElement("img");
    // addCartImage.setAttribute("src", "../icons/bt_add_to_cart.svg");
    // addCartImage.setAttribute("alt", "add to cart");

    // btnAddCart.appendChild(addCartImage);
    btnAddCart.innerText = "Add to cart";

    productInformation.append(productDetailPrice, productName, productDet, btnAddCart);

    product.append(productDetailClose, productImage, productInformation);
    
    productDescription.appendChild(product);
}

renderProducts(productList);

document.addEventListener("click", escuchar);
function escuchar(event){
    for (product of productList){
        if (product.photo===event.path[0].src){
            productDescription.classList.remove("inactive");
            renderProductInfo(product.name, product.photo, product.price, product.detail);
            navOrder.classList.add("inactive");
            emailMenu.classList.add("inactive");
            mobileMenu.classList.add("inactive");
        }
    }
    
    if(event.path[0].classList=='close' || event.path[0].classList=='product-detail-close'){
        productDescription.classList.add("inactive");
    }
    
}

