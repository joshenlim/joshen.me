/*eslint-env jquery*/

$(document).ready(function(){
  $("body").addClass('content-fade');
  setTimeout(function(){
    $(".navigations").addClass("remove-trans-delay");
  }, 500);

  if ($(window).width() <= 425) {
    var svgDiag = $('body').find('svg')[0];
    svgDiag.setAttribute('viewBox', '0 30 450 400');
  }

  $(".logo").on("click", function() {
    $("body").removeClass('content-fade');
  })

  $(".icon").on("click", function() {
    $("body").removeClass('content-fade');
  })

});
