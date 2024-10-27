let slideIndex = 1;
showSlide(slideIndex);
let plusSlides = (
    (n) => {
        showSlide(slideIndex += n);
    }
)
let currentSlide = (
    (n) => {
        showSlide(slideIndex = n);
    }
)
function showSlide(n) {
    let i; //counter
    let slides = document.querySelectorAll(".slide");
    let dots = document.querySelectorAll(".dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}




//// auto slide /////  !!! THERE IS SOME ERROR IN IT !!! ///
// let slideIndex = 0;
// showSlide();
// function showSlide() {
//     let i;
//     let slides = document.querySelectorAll(".slide");
//     for (i = 0; i < slides.length; i++) {
//         slides[i].computedStyleMap.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) { slideIndex = 1 }
//     slides[slideIndex - 1].style.display = "block";
//     setTimeout(showSlide, 2000) // 2s
// }