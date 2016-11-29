$(document).ready(function() {
    var page = 1;

    $("body").keypress(function(e) {
        if (e.keyCode == 50) {
            if (this.hash !== "") {
                page++;
                $('html, body').animate({
                    scrollTop: $('#' + page).offset().top
                }, 500, function() {
                    console.log(page);
                });
            }
            event.preventDefault();
        } else if (e.keyCode == 56) {
            if (page > 1) {
                if (this.hash !== "") {
                    page--;
                    $('html, body').animate({
                        scrollTop: $('#' + page).offset().top
                    }, 500, function() {
                        console.log('dbclick' + page);
                    });
                }
                event.preventDefault();
            }
        }
    });
});
