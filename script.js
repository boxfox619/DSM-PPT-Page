$(document).ready(function() {
    var page = 1;

    var numOfPage = $(".views").length;

    $("body").keypress(function(e) {
        if (e.keyCode == 50) {
            if (page < numOfPage) {
                if(page==9){
                    $('#piechart1').animate({left: '250px'}, 1000);
                }else{
                    page++;
                    if(page==5){
                        $('#running-man').addClass('stick-moving');
                    }
                    if (this.hash !== "") {
                        $('html, body').animate({
                            scrollTop: $('#' + page).offset().top
                        }, 500, function() {
                        });
                    }
                    if(page==7){
                        setTimeout(function(){  $('.property').toggleClass('build'); }, 2000);

                    }
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
