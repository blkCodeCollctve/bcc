console.log("Initializing Page");
$(document).ready(function () {

  //Added Navbar color change
    var scroll_start = 0;
    var startchange = $(".bounce");
    var offset = startchange.offset();

    if (startchange.length) {
        $(document).scroll(function () {
            scroll_start = $(this).scrollTop();
            if (scroll_start > offset.top) {
                $('.navbar').css('background-color', 'rgba(0,0,0,.50)');
            }
            else {
                $('.navbar').css('background-color', 'transparent');
            }
        });
    }

    //Smooth Scrolling SOURCE => http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    });

});
