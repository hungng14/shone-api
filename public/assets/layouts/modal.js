jQuery(document).ready(function () {
    $('[data-toggle="modal"]').on('click', function () {
        const target = $(this).attr('data-target');
        $(target).addClass('in').removeClass('out');
    });
    $('[data-close="close-modal"]').on('click', function () {
        const __modal = $(this).closest('.__modal');
        __modal.removeClass('in').addClass('out');
    });
});