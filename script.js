$(document).ready(function () {
var page = 1;
page++;
 $("body").on('click', function(event) {
      if (this.hash !== "") {
        $('html, body').animate({
          scrollTop: $('#'+page).offset().top
      }, 500, function(){
            console.log();
        });
      }
      event.preventDefault();
    });
});