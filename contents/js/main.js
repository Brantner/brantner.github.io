$(function() {
  $('.icon-scroll').click(function () {
    $(window).scrollTo($(this).closest('.container, .container-fluid').next()[0], 300);
  });
});