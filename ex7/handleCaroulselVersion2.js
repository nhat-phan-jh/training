const COUNT_MY_SLIDES = document.getElementsByClassName("mySlides").length;
const COUNT_MY_SLIDE_BOTTOM =
  document.getElementsByClassName("mySlides_bottom").length;
const WIDTH_SLIDE = 300;
const carousel = document.getElementsByClassName("carousel");
const borderCarousel = document.getElementsByClassName("borderCarousel");
const carouselBottom = document.getElementsByClassName("carouselBottom");
const hiddenCarousel = document.getElementsByClassName("hidenCarousel");
carousel[0].style.width = `${COUNT_MY_SLIDES * WIDTH_SLIDE}px`;
carouselBottom[0].style.width = `${COUNT_MY_SLIDE_BOTTOM * WIDTH_SLIDE}px`;
// set margin left of carouselBottom = "" to start the slide on the left so no data is covered
carouselBottom[0].style.marginLeft = "";
//input of function is 1 or -1 if 1 it will slide left else it will silde right
function changeSlide(value) {
  if (value === 1) {
    const widthCarousel = parseInt(
      carousel[0].style.width.slice(0, carousel[0].style.width.length - 2)
    );
    const widthShowContent = borderCarousel[0].clientWidth;
    if (carousel[0].style.marginLeft.length !== 0) {
      //remove pixels and characters of margin left to parse int
      let marginLeftOfCarosel = carousel[0].style.marginLeft.slice(
        1,
        carousel[0].style.marginLeft.length - 2
      );
      //remove pixels and characters of margin left to parse int
      marginLeftOfCarosel = parseInt(marginLeftOfCarosel);

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
      //remove pixels and characters of margin left to parse int
      let marginLeftOfCarosel = carousel[0].style.marginLeft.slice(
        1,
        carousel[0].style.marginLeft.length - 2
      );
      marginLeftOfCarosel = parseInt(marginLeftOfCarosel);
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
