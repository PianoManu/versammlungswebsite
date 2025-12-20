console.log(`Loading slide_show.js for file "${document.URL}..."`)
let slideIndex = 0;
let timeoutID = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slides_default");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].style.position = "relative";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }  
    let bot_img = slideIndex-1 > 0 ? slideIndex-2: slides.length-1;

    // top img
    slides[slideIndex-1].style.display = "block";
    slides[slideIndex-1].style.zIndex = 2;
    slides[slideIndex-1].style.position = "relative";

    // bottom img
    slides[bot_img].style.display = "block";
    slides[bot_img].style.top = "0%";
    slides[bot_img].style.position = "absolute";
    slides[bot_img].style.zIndex = 1;
    timeoutID = setTimeout(showSlides, 10000); // Change image every 10 seconds
}

function prevSlide() {
    clearTimeout(timeoutID);
    let slides = document.getElementsByClassName("slides_default");
    if (slideIndex <= 1) {
        slideIndex = slides.length + 1;
    } 
    slideIndex = slideIndex - 2;
    console.log(`Previous Slide ${slideIndex}`);
    showSlides();
}

function nextSlide() {
    clearTimeout(timeoutID);
    console.log(`Next Slide ${slideIndex}`);
    showSlides();
}