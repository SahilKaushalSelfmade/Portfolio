// NAVBAR


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




// RESUME DISMISS
$('.resumebtndismiss').popover({
    trigger: 'hover'

});
// RESUME DISMISS


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
