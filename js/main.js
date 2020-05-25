// NAVBAR
$('body').css('padding-top', $('.navbar').outerHeight() + 'px')

// detect scroll top or down
if ($('.smart-scroll').length > 0) { // check if element exists
    var last_scroll_top = 0;
    $(window).on('scroll', function () {
        scroll_top = $(this).scrollTop();
        if (scroll_top < last_scroll_top) {
            $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
        }
        else {
            $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
        }
        last_scroll_top = scroll_top;
    });
};

$('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});

// NAVBAR


// POPOVER FUNCTION

// MAIN POPOVER
$(function () {
    $('[data-toggle="popover"]').popover()
});
// MAIN POPOVER


// DISMISS
$('.resumebtndismiss').popover({
    trigger: 'hover'

});
// DISMISS

// CUSTOM POPOVER
$(function () {
    $("[rel=popover]").popover({
        html: true,
        content: function () {
            return $("#popcard").html();
        },
    });
});
// CUSTOM POPOVER

// POPOVER FUNCTION
