let slideStart = 0;
let slideEnd = 2;
const length = document.getElementsByClassName("mySlides").length;
showSlides(slideStart, slideEnd);

// Next/previous controls
function previewSlides(n) {
  if (slideStart > 0) {
    slideEnd--;
    slideStart--;
    showSlides(slideStart, slideEnd);
  }
}
function nextSlides(n) {
  if (slideEnd < length - 1) {
    slideEnd++;
    slideStart++;
    showSlides(slideStart, slideEnd);
  }
}
// Thumbnail image controls

function showSlides(start, end) {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  if (end - start > slides.length) {
    end = slides.length - 1;
  }
  if (end - start < 1) {
    end = start;
  }
  for (i = 0; i < slides.length; i++) {
    if (i < start || i > end) {
      slides[i].style.display = "none";
    } else {
      slides[i].style.display = "block";
    }
  }
  //   for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  //   }
  //   slides[slideIndex - 1].style.display = "block";
}
