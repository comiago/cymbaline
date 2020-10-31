/* open menu*/
$(document).ready(function(){
    $(".menuIcon").click(function(e){
        $(".listMenu").toggleClass('is-open');
        $(".menuIcon").toggleClass("change");
        e.preventDefault();
    });
});

/*script srcoll_header*/
$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > 500){
        $("#menu").removeClass('menu--transparent');
    }
    else{
        $("#menu").addClass('menu--transparent');
    }
});


