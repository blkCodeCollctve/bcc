console.log("Initializing Page");
//Added Navbar color change
$(document).ready(function () {
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
});
