const ListImage = [
  "https://www.w3schools.com/howto/img_nature_wide.jpg",
  "https://www.w3schools.com/howto/img_snow_wide.jpg",
  "https://www.w3schools.com/howto/img_mountains_wide.jpg",
];

const init = () => {
  let slideshow_container = document.getElementsByClassName(
    "slideshow-container"
  );
  slideshow_container = slideshow_container[0];
  console.log(slideshow_container);
  console.log("init");
  for (let i = 0; i < ListImage.length; i++) {
    let div = document.createElement("div");
    div.setAttribute("class", "mySlides fade");
    let divChild = document.createElement("div");
    divChild.setAttribute("class", "numbertext");
    let imageTag = document.createElement("img");
    imageTag.setAttribute("src", ListImage[i]);
    imageTag.setAttribute("style", "width: 100%");

    // divChild.appendChild(imageTag);
    div.appendChild(imageTag);
    div.appendChild(divChild);
    slideshow_container.appendChild(div);

    // li.appendChild(document.createTextNode(result.features[i].place_name));
    // // li.setAttribute("lg", result.features[i].center[0]);
    // li.setAttribute("value", result.features[i].place_name);
    // li.addEventListener("click", () => {
    //   choiseFrom(result.features[i].center, result.features[i].place_name);
    // });

    // ul.appendChild(li);
  }
  let miniShow = document.getElementsByClassName("miniShow");
  miniShow = miniShow[0];
  for (let i = 0; i < ListImage.length; i++) {
    let span = document.createElement("span");
    span.setAttribute("class", "dot");
    span.addEventListener("click", () => {
      currentSlide(i + 1);
    });
    let imageTag = document.createElement("img");
    imageTag.setAttribute("src", ListImage[i]);
    imageTag.setAttribute("style", "width: 100%");

    span.appendChild(imageTag);
    miniShow.appendChild(span);
  }
};

init();
let slideIndex = 1;
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
  let i;
  let slides = document.getElementsByClassName("mySlides");

  let dots = document.getElementsByClassName("dot");
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
