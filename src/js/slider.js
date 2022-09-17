import $ from "jquery";
import "slick-carousel";

$(".carousel").slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
  });