const length = document.getElementsByClassName("mySlides").length;
const lengthBottom = document.getElementsByClassName("mySlides_bottom").length;
const carousel = document.getElementsByClassName("carousel");
const carouselBottom = document.getElementsByClassName("carousel_bottom");
const bordercarousel = document.getElementsByClassName("border_carousel");
console.log(bordercarousel[0].style.width);
carousel[0].style.width = `${length * 220}px`;

function changeSlide() {
  const subValue = carousel[0].style.marginLeft.slice(
    0,
    carousel[0].style.marginLeft.length - 2
  );

  carousel[0].style.marginLeft = `${subValue - 220}px`;
}
function changeSlideBottom() {
  const subValue = carouselBottom[0].style.marginLeft.slice(
    0,
    carouselBottom[0].style.marginLeft.length - 2
  );
console.log(subValue);
  carouselBottom[0].style.marginLeft = `${subValue - 220}px`;
}
