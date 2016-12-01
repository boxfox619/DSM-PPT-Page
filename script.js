$(document).ready(function() {
    var page = 1;
    var carts8 = 0;
    var carts9 = 0;
    var carts11 = 0;

    var numOfPage = $(".views").length;

    $("body").keypress(function(e) {
        if (e.keyCode == 50) {
            if (page < numOfPage) {
                if(page==5&&carts8<1){
                    $('#building').animate({left: '40%'}, 1000);
                    $('#runner').animate({left: '40%'}, 1000);
                    $('#text-double').animate({left: '60vh'}, 1000);
                    carts8++;
                }else if(page == 8 && carts9 < 5) {
                    switch (carts9) {
                        case 0:
                            $('#piechart1').animate({
                                left: '20vh',
                                top: '-2vh'
                            }, 1000);
                            $('#piechart1').find('svg rect:eq( 1 )').attr('fill-opacity', '0.0');
                            break;
                        case 1:
                            $('#piechart2').animate({
                                left: '90vh',
                                top: '-2vh'
                            }, 1000);
                            $('#piechart2').find('svg rect:eq( 1 )').attr('fill-opacity', '0.0');
                            break;
                        case 2:
                            $('#piechart3').animate({
                                left: '-16vh',
                                top: '42vh'
                            }, 1000);
                            $('#piechart3').find('svg rect:eq( 1 )').attr('fill-opacity', '0.0');
                            break;
                        case 3:
                            $('#piechart4').animate({
                                left: '40vh',
                                top: '42vh'
                            }, 1000);
                            $('#piechart4').find('svg rect:eq( 1 )').attr('fill-opacity', '0.0');
                            break;
                        case 4:
                            $('#piechart5').animate({
                                left: '90vh',
                                top: '42vh'
                            }, 1000);
                            $('#piechart5').find('svg rect:eq( 1 )').attr('fill-opacity', '0.0');
                            break;
                    }
                    carts9++;
                } else if(page==11&&carts11==0){
                    dailyMissionTimer(0.20);
                    carts11++;
                } else {
                    page++;
                    if (page == 4) {
                        $('#running-man').addClass('stick-moving');
                    }
                    if (this.hash !== "") {
                        $('html, body').animate({
                            scrollTop: $('#' + page).offset().top
                        }, 500, function() {console.log(page);});
                    }
                    if (page == 5) {
                        setTimeout(function() {
                            $('.property').toggleClass('build');
                        }, 1000);
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


function dailyMissionTimer(duration) {
    
    var timer = duration * 3600;
    var minutes, seconds;
    
    var interval = setInterval(function(){
        minutes = parseInt(timer / 60 % 60, 10);
        seconds = parseInt(timer % 60, 10);
        
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        
        $('#time-min').text(minutes);
        $('#time-sec').text(seconds);

        if (--timer < 0) {
            timer = 0;
            clearInterval(interval);
        }
    }, 1000);
}