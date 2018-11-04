var slideIndex = 0;
showrecipesAutomatic();

function showRecipesAutomatic() {
    var i = 0;
    slideIndex = 1;
    var slides = document.getElementsByClassName("recipe_images");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showRecipesAutomatic, 2000);
}