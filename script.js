$(document).ready(function() {
    var page = 1;

    var numOfPage = $(".views").length;

    $("body").keypress(function(e) {
        if (e.keyCode == 50) {
            if (page < numOfPage) {
                page++;
                if (this.hash !== "") {
                    $('html, body').animate({
                        scrollTop: $('#' + page).offset().top
                    }, 500, function() {

                    });
                }
                event.preventDefault();
            }
        } else if (e.keyCode == 56) {
            if (page > 1) {
                page--;
                if (this.hash !== "") {
                    $('html, body').animate({
                        scrollTop: $('#' + page).offset().top
                    }, 500, function() {

                    });
                }
                event.preventDefault();
            }
        }
    });
});
