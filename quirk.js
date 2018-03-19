$(document).ready(function() {
  // Add scroll to every link
 $("a").click(function() {
   // Make sure hash value exists
   if (this.hash !== "") {
     // Prevent default anchor click behavior if JS enabled, otherwise fallback to HTML
     event.preventDefault();
     // Store hash for location
     var hash = this.hash;
     //Animate scroll
     $('html, body').animate({
       scrollTop: $(hash).offset().top-$('.nav').height()
     }, 800, function(){
     });
   } // End if
 });

//Function set such that when menu bars are clicked, mobileNav menu is toggled sliding left and right
$('.fa-bars').click(function() {
  $('.mobileNav').animate({
    width: "toggle"
  });
});

 // Sets the offset position of the navigation bar
  var offset = $('.nav').offset();
  var sticky = offset.top;
  // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
  $(window).bind('scroll', function () {
      if ($(window).scrollTop() > sticky) {
          $('.nav').addClass('sticky');
      } else {
          $('.nav').removeClass('sticky');
      }
  });
});
