import $ from 'jquery';

if (window.location.href.includes('http://localhost:4000/pages/google-photo/Add-ons.html')) {

    const arrow = $('.google-photo-header__arrow');
    arrow.on('click', () => {
        history.go(-1);
    });
}