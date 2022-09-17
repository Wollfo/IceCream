import $ from "jquery";
import "slick-carousel";

$(".carousel").slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    adaptiveHeight: true,
  });