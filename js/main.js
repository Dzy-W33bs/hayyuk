$('.page-scroll').on('click', function(e){

    //ambil si a
    var Tujuan = $(this).attr('href');
    //tangkap element
    var elementTujuan = $(Tujuan);
    //animasi scroll
    $('html, body').animate({
        scrollTop: elementTujuan.offset().top - 50
    },1500, 'easeInOutExpo');



    e.preventDefault();
});


//parallax 

$(window).scroll(function(){

    var scroll = $(this).scrollTop();

    //jumbotron

    $('.jumbotron img').css({
        'transform': 'translate(0px, '+ scroll / 4.8 +'%)'
    });

    $('.jumbotron h1').css({
        'transform': 'translate(0px, '+ scroll / 1.1 +'%)'
    });

    $('.jumbotron p').css({
        'transform': 'translate(0px, '+ scroll / 1 +'%)'
    });

    if( scroll > $('.about').offset().top - 90 ) {
        
        $('.kepribadian').addClass('kepribadianmuncul');
        $('.kiri').addClass('kirimuncul');
        $('.kanan').addClass('kananmuncul');
    }

    if( scroll > $('.gallery').offset().top - 150 ) {
        
        $('.gallery .istri').addClass('muncul');
    }


    if( scroll > $('.gallery').offset().top - 150 ){
        $('.gallery img').each(function(i) {
            setTimeout(function() {
                $('.gallery img').eq(i).addClass('muncul')
            }, 200 * (i+1));
        })
    }


})