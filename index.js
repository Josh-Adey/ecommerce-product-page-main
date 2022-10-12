// Variable declaration
var clicked = false;
var menu = document.querySelector(".nav-items"); 
var close = document.querySelector(".close-icon");
var countValue = parseInt(document.querySelector(".count-value").innerHTML);
countValue = 1;


//  Navigation Logic section
function onSwitch() {
    if (!clicked) {
        menu.style.display = "block";
        clicked = true;                                                                             
    }
}

function offSwitch() {
    if (clicked) {
        menu.style.display = "none";
        clicked = false;
    }
}


// Cart data display and logic section
if (countValue <= 0) {
    document.querySelector(".count-display").style.display = "none";
}

function countDisplay() {
    if (countValue > 0){
        document.querySelector(".count-display").style.display = "block";
        document.querySelector(".count-display").innerHTML = countValue;
        document.querySelector(".count-value").innerHTML = countValue;
    }
}

function raiseCount() {
    countValue++
    if (countValue > 0){
        document.querySelector(".count-value").innerHTML = countValue;
    } 
        
}


function reduceCount() {
    --countValue;
    if (countValue > 0){
        document.querySelector(".count-value").innerHTML = countValue;
    } 
}

 var cartIcon = document.getElementById("icon-cart");
 var cartDisplay = document.querySelector(".cart-display");

 function cartToggler() {
    if (!clicked) {

        setTimeout(function () {
            cartDisplay.style.display = "block";
          }, 10);
        clicked = true;
      }
      else {
          setTimeout(function () {
            cartDisplay.style.display = "none";
          }, 10);
          clicked = false;
          
      }
 }
 if (countValue == 0){
    document.querySelector(".cart-info").innerHTML = "Your cart is empty.";
    document.querySelector(".cart-info").style.textAlign = "center";
    

}

 var productPrice = document.querySelector(".product-price").innerHTML;
  productPrice = parseFloat(productPrice);


 
 function addToCart(countValue) {
    seed(countValue);
    countDisplay();
 }

 function seed(x){
    if (countValue >= 1 ) {
        document.querySelector(".product-multiple").innerHTML = countValue; 
        document.querySelector(".product-total").innerHTML = "$" + (countValue * productPrice);
 }
 }

//  function productQuantity() {
//     x = ;
    
//  }

//  addToCart(productQuantity);
// cartIcon.addEventListener("click", function () {
//         cartDisplay.style.display = "none";

//     if (cartIcon.style.display == "none") {
//         cartDisplay.style.display = "block";
//     }
// });


// Image preview and Carousel logic section


 var productDisplay = document.querySelector(".product-image-large");
 var i = 0;

function next() {
    i++;
    const images = ["product-1", "product-2", "product-3", "product-4"];
    size = images.length;

    if (i > size-1) {
        i = 0;
    }
    
    productDisplay.style.backgroundImage = "url('./images/image-" + images[i] + ".jpg')";
}

function previous() {
    i--;
    const images = ["product-1", "product-2", "product-3", "product-4"];
    size = images.length;
    
    if (i < 0) {
        i = size - 1;
    }
    
    productDisplay.style.backgroundImage = "url('./images/image-" + images[i] + ".jpg')";
}

setTimeout(next, 2000);
const images = ["product-1", "product-2", "product-3", "product-4"];
size = images.length;

// function clear(){
//     for (let i = 0; i<size; i++) {
//         clearTimeout(timer);
//         timer = setTimeout(() => next(), 3000);
//         productDisplay.style.backgroundImage = "url('./images/image-" + images[i] + ".jpg')";
//     }
// }


var thumbnail = document.querySelectorAll(".product-thumbnail");
var numberOfThumbnails = thumbnail.length;   

    for (let i=0; i<numberOfThumbnails; i++) {
        thumbnail[i].addEventListener("click", function() {
            productDisplay.style.backgroundImage = "url('./images/image-" + images[i] + ".jpg')";
            thumbnail[i].classList.add('clicked');

            setTimeout(function (){
    
                thumbnail[i].classList.remove('clicked');
            
            }, 200);
        })
}
 


setTimeout(function (){
    // activeButton.classList.remove("pressed")
    for (let i=0; i<numberOfThumbnails; i++) {
        thumbnail[i].addEventListener("click", function() {
            productDisplay.style.backgroundImage = "url('./images/image-" + images[i] + ".jpg')";
        })
}
}, 2000);


// addEventListener("keypress", function(event) {
        
//     makeSound(event.key);

//     addsBackground(event.key);
// }
//   var h1 = document.createElement("h1");
//   h1.innerHTML = "Hello World";
//  document.querySelector("count-display").appendChild(h1);
