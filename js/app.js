// setup date
const date = (document.getElementById("date").innerHTML = new Date().getFullYear());
// Product details (z2)
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
 showSlides(slideIndex += n);
}

function currentSlide(n) {
 showSlides(slideIndex = n);
}

function showSlides(n) {
 var i;
 var slides = document.getElementsByClassName("mySlides2");
 var dots = document.getElementsByClassName("dot2");
 if (n > slides.length) {slideIndex = 1}
 if (n < 1) {slideIndex = slide.length}
 for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
 }
 for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active2", "");
 }
 slides[slideIndex-1].style.display = "";
 dots[slideIndex-1].className += " active2";
}
// End of product details (z2)