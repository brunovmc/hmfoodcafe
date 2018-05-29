// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
  
  
var map;
function initMap() {
  var myLatLng = {lat: -23.5672233, lng: -46.6984008}
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: myLatLng
  });
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });
}



(function($){
  $(function(){ 
    var scroll = $(document).scrollTop();
    var headerHeight = $('.landing-header').outerHeight();
    $(window).scroll(function() {
      var scrolled = $(document).scrollTop();
      if (scrolled > headerHeight){
        $('.landing-header').addClass('off-canvas');
         $('.coffeeMug').removeClass('invisible');
      } else {
        $('.landing-header').removeClass('off-canvas');
         $('.coffeeMug').addClass('invisible');
      }
        if (scrolled > scroll){
         $('.landing-header').removeClass('fixed');
        } else {
        $('.landing-header').addClass('fixed');
         $('.coffeeMug').addClass('invisible');
        }            
      scroll = $(document).scrollTop(); 
     });
   });
})(jQuery);



$('.coffeeMug').on('click', function () {

if ($('.landing-header').hasClass('off-canvas'))
    {
        $('.landing-header').removeClass('off-canvas');
        $('.coffeeMug').addClass('invisible');
    } 
});


