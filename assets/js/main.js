// NAVBAR
/////////////// fixed menu on scroll for desktop
if ($(window).width() > 0) {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('#mainNav').addClass("fixed-top");
            // add padding top to show content behind navbar
            $('body').css('padding-top', $('.navbar').outerHeight() + 'px');
        } else {
            $('#mainNav').removeClass("fixed-top");
            // remove padding top from body
            $('body').css('padding-top', '0');
        }
    });
} // end if



(function ($) {
    "use strict"; // Start of use strict

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');

    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 56
    });

})(jQuery); // End of use strict




// NAVBAR


// POPOVER FUNCTION

// MAIN POPOVER
$(function () {
    $('[data-toggle="popover"]').popover()
});
// MAIN POPOVER



// NAVBRAND PIC POPOVER
$(function () {
    $("[rel=popover]").popover({
        html: true,
        content: function () {
            return $("#popcard").html();
        },
    }).click(function () {
        setTimeout(function () {
            $('[rel=popover]').popover('hide');
        }, 5000);
    });;
});
// NAVBRAND PIC POPOVER


// POPOVER FUNCTION
