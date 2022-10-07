// Variable declaration
var clicked = false;
var menu = document.querySelector(".nav-items"); 
var close = document.querySelector(".close-icon");
var countValue = document.querySelector(".count-value").innerHTML;
countValue = parseInt(countValue);
countValue = 0;


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
    countValue++;
    countDisplay(); 
}


function reduceCount() {
    --countValue;
    countDisplay();
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


const images = ["product-1", "product-2", "product-3", "product-4"];
size = images.length;

function clear(){
    for (let i = 0; i<size; i++) {
        clearTimeout(timer);
        timer = setTimeout(() => next(), 3000);
        productDisplay.style.backgroundImage = "url('./images/image-" + images[i] + ".jpg')";
    }
}


var thumbnail = document.querySelectorAll(".product-thumbnail");
var numberOfThumbnails = thumbnail.length;   

    for (let i=0; i<numberOfThumbnails; i++) {
        thumbnail[i].addEventListener("click", function() {
            productDisplay.style.backgroundImage = "url('./images/image-" + images[i] + ".jpg')";
        })
}



// setTimeout(function (){
//     activeButton.classList.remove("pressed")
// }, 100);


// addEventListener("keypress", function(event) {
        
//     makeSound(event.key);

//     addsBackground(event.key);
// }
//   var h1 = document.createElement("h1");
//   h1.innerHTML = "Hello World";
//  document.querySelector("count-display").appendChild(h1);
