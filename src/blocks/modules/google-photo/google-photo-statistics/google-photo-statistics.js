import $ from 'jquery';

if (window.location.href.includes('http://localhost:4000/pages/Google%20Photo.html')) {
    var arrow = document.querySelector('.google-photo-header__arrow');
    arrow.addEventListener('click', function() {
        history.go(-1);
    });

    $(function() {
        $('.google-photo-element').on('click', (event) => {
            var projectName = $(event.currentTarget).closest('.google-photo-element').find('.google-photo-element__text').text();
            window.location.href = `${projectName}.html`;
        });
    });
}