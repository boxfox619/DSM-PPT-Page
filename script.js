$(document).ready(function() {
    var page = 1;
    var carts8 = 0;
    var carts9 = 0;

    var numOfPage = $(".views").length;

    $("body").keypress(function(e) {
        if (e.keyCode == 50) {
            if (page < numOfPage) {
                if(page==8&&carts8<1){
                    $('#building').animate({left: '40%'}, 1000);
                    $('#runner').animate({left: '40%'}, 1000);
                    $('#text-double').animate({left: '60vh'}, 1000);
                    carts8++;
                }else if(page==9&&carts9<5){
                    switch(carts9){
                        case 0:
                        $('#piechart1').animate({left: '20vh',top: '-2vh'}, 1000);
                        $('#piechart1').find('svg rect:eq( 1 )').attr('fill-opacity','0.0');
                        break;
                        case 1:
                        $('#piechart2').animate({left: '90vh',top: '-2vh'}, 1000);
                        $('#piechart2').find('svg rect:eq( 1 )').attr('fill-opacity','0.0');
                        break;
                        case 2:
                        $('#piechart3').animate({left: '-16vh', top: '45vh'}, 1000);
                        $('#piechart3').find('svg rect:eq( 1 )').attr('fill-opacity','0.0');
                        break;
                        case 3:
                        $('#piechart4').animate({left: '41vh', top: '45vh'}, 1000);
                        $('#piechart4').find('svg rect:eq( 1 )').attr('fill-opacity','0.0');
                        break;
                        case 4:
                        $('#piechart5').animate({left: '92vh', top: '45vh'}, 1000);
                        $('#piechart5').find('svg rect:eq( 1 )').attr('fill-opacity','0.0');
                        break;
                    }
                    carts9++;
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
