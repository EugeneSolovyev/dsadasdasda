$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner = $preloader.find('.box');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});