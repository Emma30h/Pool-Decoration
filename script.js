let menuHamburguesa = document.getElementById("menu-hamburguesa");
let navDesplegable = document.getElementById("header__nav");

menuHamburguesa.addEventListener("click", ()=>{
    navDesplegable.classList.toggle("spread");
});

window.addEventListener("click", (e)=>{
    if(navDesplegable.classList.contains("spread") && e.target != navDesplegable && e.target != menuHamburguesa){
        navDesplegable.classList.toggle("spread");
    };
});

//CAROUSEL
let counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
}, 5000);

//GALERIA
const images = document.querySelectorAll(".img");
const containerLightbox = document.querySelector(".container-lightbox");
const imageContainer = document.querySelector(".img-show");
const copy = document.querySelector(".copy");
const closeModal = document.querySelector(".bx.bx-x");

images.forEach(image=>{
    image.addEventListener("click", ()=>{
        addImage(image.getAttribute("src"), image.getAttribute("alt"));
    });
});

const addImage = (srcImage, altImage)=>{
    containerLightbox.classList.toggle("move");
    imageContainer.classList.toggle("show");
    imageContainer.src = srcImage;
    copy.innerHTML = altImage;
}; 

closeModal.addEventListener("click", ()=>{
    containerLightbox.classList.toggle("move");
    imageContainer.classList.toggle("show");
});