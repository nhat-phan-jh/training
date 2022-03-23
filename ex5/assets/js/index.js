const length = document.getElementsByClassName("mySlides").length;
const lengthBottom = document.getElementsByClassName("mySlides_bottom").length;
const carousel = document.getElementsByClassName("carousel");
const border_carousel = document.getElementsByClassName("border_carousel");

const carouselBottom = document.getElementsByClassName("carousel_bottom");
const bordercarousel = document.getElementsByClassName("border_carousel");
console.log(bordercarousel[0].style.width);
carousel[0].style.width = `${length * 245}px`;
carouselBottom[0].style.width = `${lengthBottom * 245}px`;
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
      const widthBorder = border_carousel[0].clientWidth;

      // console.log(widthCarousel, widthBorder, subValue);

      const tempCompare = widthCarousel - widthBorder - subValue;

      // console.log(typeof tempCompare);
      if (tempCompare > 0) {
        carousel[0].style.marginLeft = `-${subValue + 245}px`;
      }
      //   else {
      //    carousel[0].style.marginLeft = "";
      //  }
    } else {
      const widthCarousel = parseInt(
        carousel[0].style.width.slice(0, carousel[0].style.width.length - 2)
      );
      const widthBorder = border_carousel[0].clientWidth;
      const tempCompare = widthCarousel - widthBorder;

      console.log(typeof tempCompare);
      if (tempCompare > 0) {
        carousel[0].style.marginLeft = "-245px";
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
      carousel[0].style.marginLeft = `-${subValue - 245}px`;
      if (carousel[0].style.marginLeft === "0px") {
        carousel[0].style.marginLeft = "";
      }
    } else {
      carousel[0].style.marginLeft = "";
    }
  }
}
function changeSlideBottom(value) {
  if (value === 1) {
    if (carouselBottom[0].style.marginLeft.length !== 0) {
      let subValue = carouselBottom[0].style.marginLeft.slice(
        0,
        carouselBottom[0].style.marginLeft.length - 2
      );

      subValue = parseInt(subValue.slice(1, subValue.length));

      const widthcarouselBottom = parseInt(
        carouselBottom[0].style.width.slice(0, carouselBottom[0].style.width.length - 2)
      );
      const widthBorder = border_carousel[1].clientWidth;

      // console.log(widthcarouselBottom, widthBorder, subValue);

      const tempCompare = widthcarouselBottom - widthBorder - subValue;

      // console.log(typeof tempCompare);
      if (tempCompare > 0) {
        carouselBottom[0].style.marginLeft = `-${subValue + 245}px`;
      }
      //   else {
      //    carouselBottom[0].style.marginLeft = "";
      //  }
    } else {
      const widthcarouselBottom = parseInt(
        carouselBottom[0].style.width.slice(0, carouselBottom[0].style.width.length - 2)
      );
      const widthBorder = border_carousel[1].clientWidth;
      const tempCompare = widthcarouselBottom - widthBorder;

      console.log(typeof tempCompare);
      if (tempCompare > 0) {
        carouselBottom[0].style.marginLeft = "-245px";
      } else {
        carouselBottom[0].style.marginLeft = "";
      }
    }
  } else {
    if (carouselBottom[0].style.marginLeft.length !== 0) {
      let subValue = carouselBottom[0].style.marginLeft.slice(
        0,
        carouselBottom[0].style.marginLeft.length - 2
      );

      subValue = parseInt(subValue.slice(1, subValue.length));
      carouselBottom[0].style.marginLeft = `-${subValue - 245}px`;
      if (carouselBottom[0].style.marginLeft === "0px") {
        carouselBottom[0].style.marginLeft = "";
      }
    } else {
      carousel[0].style.marginLeft = "";
    }
  }

  // if (carouselBottom[0].style.marginLeft.length !== 0) {
  //   let subValue = carouselBottom[0].style.marginLeft.slice(
  //     0,
  //     carouselBottom[0].style.marginLeft.length - 2
  //   );

  //   subValue = parseInt(subValue.slice(1, subValue.length));
  //   console.log(carouselBottom[0].style);
  //   const widthCarousel = parseInt(
  //     carouselBottom[0].style.width.slice(
  //       0,
  //       carouselBottom[0].style.width.length - 2
  //     )
  //   );
  //   const widthBorder = border_carousel[0].clientWidth;

  //   console.log(widthCarousel, widthBorder, subValue);

  //   const tempCompare = widthCarousel - widthBorder - subValue;

  //   console.log(typeof tempCompare);
  //   if (tempCompare > 0) {
  //     carouselBottom[0].style.marginLeft = `-${subValue + 220}px`;
  //   } else {
  //     carouselBottom[0].style.marginLeft = "";
  //   }
  // } else {
  //   carouselBottom[0].style.marginLeft = "-220px";
  // }
}
