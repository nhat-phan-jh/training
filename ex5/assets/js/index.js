const length = document.getElementsByClassName("mySlides").length;
const lengthBottom = document.getElementsByClassName("mySlides_bottom").length;
const carousel = document.getElementsByClassName("carousel");
const border_carousel = document.getElementsByClassName("border_carousel");

const carouselBottom = document.getElementsByClassName("carousel_bottom");
const bordercarousel = document.getElementsByClassName("border_carousel");
console.log(bordercarousel[0].style.width);
carousel[0].style.width = `${length * 220}px`;
carouselBottom[0].style.width = `${(lengthBottom * 220)}px`;
 carouselBottom[0].style.marginLeft = ""; 
function changeSlide() {
 
 
  if (carousel[0].style.marginLeft.length !== 0) {
     let subValue = carousel[0].style.marginLeft.slice(
       0,
       carousel[0].style.marginLeft.length - 2
     );
      
    subValue =parseInt( subValue.slice(1, subValue.length));

    const widthCarousel = parseInt(
      carousel[0].style.width.slice(0, carousel[0].style.width.length - 2)
    );
    const widthBorder = border_carousel[0].clientWidth;


    console.log( widthCarousel, widthBorder,  subValue);

    const tempCompare = widthCarousel - widthBorder - subValue;

    console.log(typeof tempCompare);
    if (tempCompare > 0) {
      carousel[0].style.marginLeft = `-${subValue + 220}px`;
    }else{
       carousel[0].style.marginLeft = "";
    }
    
  } else {
    carousel[0].style.marginLeft = "-220px";
  }

  
}
function changeSlideBottom() {
  // const subValue = carouselBottom[0].style.marginLeft.slice(
  //   0,
  //   carouselBottom[0].style.marginLeft.length - 2
  // );
  // console.log(subValue);
  // carouselBottom[0].style.marginLeft = `${subValue - 220}px`;


   if (carouselBottom[0].style.marginLeft.length !== 0) {
 
     let subValue = carouselBottom[0].style.marginLeft.slice(
       0,
       carouselBottom[0].style.marginLeft.length - 2
     );
  
     subValue = parseInt(subValue.slice(1, subValue.length));
 console.log(carouselBottom[0].style);
     const widthCarousel = parseInt(
       carouselBottom[0].style.width.slice(0, carouselBottom[0].style.width.length - 2)
     );
     const widthBorder = border_carousel[0].clientWidth;

     console.log(widthCarousel, widthBorder, subValue);

     const tempCompare = widthCarousel - widthBorder - subValue;

     console.log(typeof tempCompare);
     if (tempCompare > 0) {
       carouselBottom[0].style.marginLeft = `-${subValue + 220}px`;
     } else {
       carouselBottom[0].style.marginLeft = "";
     }
   } else {

     carouselBottom[0].style.marginLeft = "-220px";
   }
}
