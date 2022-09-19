import $ from 'jquery';
import 'slick-carousel';

$('.carousel').slick({
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  adaptiveHeight: true,
});

$('.section-gallery__slider').slick({
  dots: false,
  infinite: true,
  speed: 1000,
  fade: true,
  slide: 'div',
  cssEase: 'linear',
  autoplay: true,
  arrows: false,
});
