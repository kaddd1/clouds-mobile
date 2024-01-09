import $ from 'jquery';

if (window.location.href.includes('http://localhost:4000/pages/google-photo/main.php.html')) {
    $(document).ready(function() {
        const arrow = $('.google-photo-pages__header__arrow');
        const dropdownToggle = $('.dropdown-toggle');
        const dropdownMenu = $('.dropdown-menu');
    
        arrow.on('click', function() {
            history.go(-1);
        });
    
        dropdownToggle.on('click', function() {
            dropdownMenu.slideToggle(400);
            $(this).find('.arrow').toggleClass('arrow-up');
        });
    });
}