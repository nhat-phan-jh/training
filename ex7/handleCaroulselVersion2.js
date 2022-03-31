const COUNT_MY_SLIDES = document.getElementsByClassName("mySlides").length;
const WIDTH_SLIDE = 300;
const carousel = document.getElementsByClassName("carousel");
const borderCarousel = document.getElementsByClassName("borderCarousel");
const hiddenCarousel = document.getElementsByClassName("hidenCarousel");
carousel[0].style.width = `${COUNT_MY_SLIDES * WIDTH_SLIDE}px`;
carouselBottom[0].style.width = `${COUNT_MY_SLIDE_BOTTOM * WIDTH_SLIDE}px`;
// set margin left of carouselBottom = "" to start the slide on the left so no data is covered
carouselBottom[0].style.marginLeft = "";
//input of function is 1 or -1 if 1 it will slide left else it will silde right
function changeSlide(value) {
  if (value === 1) {
    const widthCarousel = ConvertPxToNumber(carousel[0].style.width);

    const widthShowContent = borderCarousel[0].clientWidth;
    if (carousel[0].style.marginLeft.length !== 0) {
  
      let marginLeftOfCarosel = ConvertPxToNumber(carousel[0].style.marginLeft);
      const subResult = widthCarousel - widthShowContent - marginLeftOfCarosel;
      // if subResult > 0 it mean carousel can move to left
      if (subResult > 0) {
        carousel[0].style.marginLeft = `-${
          marginLeftOfCarosel + WIDTH_SLIDE
        }px`;
      }
    } else {
      const subResult = widthCarousel - widthBorder;
      // if subResult > 0 it mean carousel can move to left
      if (subResult > 0) {
        carousel[0].style.marginLeft = `-${WIDTH_SLIDE}px`;
      } else {
        carousel[0].style.marginLeft = "";
      }
    }
  } else {
    if (carousel[0].style.marginLeft.length !== 0) {
      const marginLeftOfCarosel = ConvertPxToNumber(
        carousel[0].style.marginLeft
      );
      // sub marginLeft to slide casousel
      carousel[0].style.marginLeft = `-${marginLeftOfCarosel - WIDTH_SLIDE}px`;
      if (carousel[0].style.marginLeft === "0px") {
        carousel[0].style.marginLeft = "";
      }
    } else {
      // set margin = "" to move to init status
      carousel[0].style.marginLeft = "";
    }
  }
}

const ConvertPxToNumber = (value) => {
  if (typeof value === "string") {
    if (value[0] === "-") {
      value = value.slice(1, value.length - 2);
    } else {
      value = value.slice(0, value.length - 2);
    }
    return parseInt(value);
  }
  return 0;
};
