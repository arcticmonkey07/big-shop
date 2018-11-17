$(document).ready(function () {

  $('#fashion').on('click', function () {
    $('.showcase__item').hide();
    $('.showcase__item[data="01"]').show();
    $('.showcase__item[data="03"]').show();
    $('.showcase__item[data="06"]').show();
  });

  $('#furnitures').on('click', function () {
    $('.showcase__item').hide();
    $('.showcase__item[data="02"]').show();
  });

  $('#watches').on('click', function () {
    $('.showcase__item').hide();
    $('.showcase__item[data="03"]').show();
    $('.showcase__item[data="05"]').show();
    $('.showcase__item[data="06"]').show();
  });

  $('#mobile').on('click', function () {
    $('.showcase__item').hide();
    $('.showcase__item[data="01"]').show();
    $('.showcase__item[data="02"]').show();
  });

  $('#cloth').on('click', function () {
    $('.showcase__item').hide();
    $('.showcase__item[data="03"]').show();
    $('.showcase__item[data="04"]').show();
    $('.showcase__item[data="05"]').show();
    $('.showcase__item[data="01"]').show();
    $('.showcase__item[data="06"]').show();
  });

  $('#toys').on('click', function () {
    $('.showcase__item').hide();
    $('.showcase__item[data="03"]').show();
    $('.showcase__item[data="04"]').show();
    $('.showcase__item[data="01"]').show();
    $('.showcase__item[data="06"]').show();
  });


});