var shop_cart_icon = document.getElementById("add-to-cart-counter");
var add_to_cart_btn = document.getElementsByClassName("add-to-cart-btn");
var cart_icon = document.getElementById("shop-cart");
var cart_conteiner = document.getElementById("cart-conteiner");
var counter = 2;
var product_cart = document.getElementsByClassName("porduct-in-cart")[0];
var cont_product = document.getElementById("conteiner-product")
var isMouseLeave = false;

var conteiner



// for (let i = 0; i < add_to_cart_btn.length; i++) {
//     add_to_cart_btn[i].style.color = 'red'; // Set color to red for each element
// }
function add_to_cart_fnc(){
    var new_product_cart = document.createElement("div");
    
    shop_cart_icon.innerText = counter;
    counter = counter+1;
    new_product_cart.innerHTML = product_cart.innerHTML;
    new_product_cart.className = "porduct-in-cart";
    cont_product.appendChild(new_product_cart)
    window.location.href = '../product_page.html';

    
}

function showCart(mose = "none"){
    cart_conteiner.style.display = mose;
}

for (let i = 0; i < add_to_cart_btn.length; i++) {
    add_to_cart_btn[i].addEventListener("click",add_to_cart_fnc);
}
cart_conteiner.addEventListener("mouseenter" ,()=>{
    isMouseLeave="true"
})

cart_icon.addEventListener("mouseenter",() =>{
    showCart("flex");
    if(isMouseLeave==true){
        showCart("flex");
    }
    
})
cart_icon.addEventListener("mouseleave",()=>{
        showCart("none");
    
}
)


