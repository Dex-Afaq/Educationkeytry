$(document).ready(function() {

    //hamburger Toggle
    $('.humbarger').click(function(event) {
        $('.menu-list').slideToggle(500);
        event.preventDefault();

        $('.menu-list li a').click(function(event) {
            if ($(window).width() < 768) {
                $('.menu-list').slideUp(500);
                event.preventDefault();
            }
        });
    });

});


function gotoFacebook() {

    window.open("https://web.facebook.com/ardexter10", '_blank');
}


function gotoInstagram() {

    window.open("https://www.instagram.com/afaq_rrehman/", '_blank');
}


function gotoTwitter() {

    window.open("https://twitter.com/arr_dexter", '_blank');
}