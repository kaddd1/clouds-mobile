import $ from 'jquery';

if (window.location.href.includes('http://localhost:4000/pages/Google%20Photo.html')) {
    $(function() {
        $('.google-photo-element').on('click', function() {
            let projectName = $(this).find('.google-photo-element__text').text();
            window.location.href = `google-photo/${projectName}.html`;
        });

        $('.google-photo-header__arrow').on('click', function() {
            history.go(-1);
        });
    });
}