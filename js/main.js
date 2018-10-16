$(document).ready(function(){
  $('#menu').slicknav({
    label:'',
    easingOpen:"swing",
    duration: 1000,
  });
  $(document).ready(function(){
          $('.slicknav_menu').prepend('<div class="slicknav-logo"><h3>Pizza Lovers<h3></div>');
      });

});

$(document).ready(function(){
  $('.carousel').slick({
    draggable: true,
      autoplay: true, 
      autoplaySpeed: 2000,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      touchThreshold: 1000,
      fade: true,
  });
});
