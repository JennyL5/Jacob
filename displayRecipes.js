var slideIndex = 0;
showrecipesAutomatic();
showRecipes(slideIndex);

function showRecipesAutomatic() {
    var i;
    var slides = document.getElementsByClassName("recipe_images");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 2000);
}

function showRecipes(n){
    slideIndex = 1;
    var slides = document.getElementsByClassName("recipe_images");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block"; 
    dots[slideIndex-1].className += " active";
}

function nextRecipe(n) {
    showRecipes(slideIndex += n);
}
  
function currentRecipe(n) {
    showRecipes(slideIndex = n);
}