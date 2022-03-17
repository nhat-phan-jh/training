var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function changeSlides(index) {
  showSlides((slideIndex += index));
}

// Thumbnail image controls
function currentSlide(index) {
  showSlides((slideIndex = index));
}

function showSlides(index) {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  var dots = document.getElementsByClassName("dot");
  if (index > slides.length) {
    slideIndex = 1;
  }
  if (index < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
