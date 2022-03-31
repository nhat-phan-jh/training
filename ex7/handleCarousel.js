const length = document.getElementsByClassName("mySlides").length;
const lengthBottom = document.getElementsByClassName("mySlides_bottom").length;
const carousel = document.getElementsByClassName("carousel");
const borderCarousel = document.getElementsByClassName("border_carousel");

const carouselBottom = document.getElementsByClassName("carousel_bottom");
const bordercarousel = document.getElementsByClassName("border_carousel");
const hiddenCarousel = document.getElementsByClassName("hiden_carousel");

carousel[0].style.width = `${length * 300}px`;
carouselBottom[0].style.width = `${lengthBottom * 300}px`;
carouselBottom[0].style.marginLeft = "";
function changeSlide(value) {
  if (value === 1) {
    if (carousel[0].style.marginLeft.length !== 0) {
      let subValue = carousel[0].style.marginLeft.slice(
        0,
        carousel[0].style.marginLeft.length - 2
      );

      subValue = parseInt(subValue.slice(1, subValue.length));

      const widthCarousel = parseInt(
        carousel[0].style.width.slice(0, carousel[0].style.width.length - 2)
      );
      const widthBorder = borderCarousel[0].clientWidth;

      const tempCompare = widthCarousel - widthBorder - subValue;

      if (tempCompare > 0) {
        carousel[0].style.marginLeft = `-${subValue + 300}px`;
      }
    } else {
      const widthCarousel = parseInt(
        carousel[0].style.width.slice(0, carousel[0].style.width.length - 2)
      );
      const widthBorder = borderCarousel[0].clientWidth;
      const tempCompare = widthCarousel - widthBorder;

      console.log(typeof tempCompare);
      if (tempCompare > 0) {
        carousel[0].style.marginLeft = "-300px";
      } else {
        carousel[0].style.marginLeft = "";
      }
    }
  } else {
    if (carousel[0].style.marginLeft.length !== 0) {
      let subValue = carousel[0].style.marginLeft.slice(
        0,
        carousel[0].style.marginLeft.length - 2
      );

      subValue = parseInt(subValue.slice(1, subValue.length));
      carousel[0].style.marginLeft = `-${subValue - 300}px`;
      if (carousel[0].style.marginLeft === "0px") {
        carousel[0].style.marginLeft = "";
      }
    } else {
      carousel[0].style.marginLeft = "";
    }
  }
}
