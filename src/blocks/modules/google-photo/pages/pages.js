import $ from 'jquery';

if (window.location.href.includes('http://localhost:4000/pages/google-photo/Pages.html')) {
    $(function() {
        const arrow = $('.google-photo-pages__header__arrow');
        const back = $('.google-photo-pages__item:first');
        const items = $('.google-photo-pages__item').not(':first');
    
        arrow.on('click', () => {
            history.go(-1);
        });
    
        items.on('click', (event) => {
            var projectName = $(event.currentTarget).closest('.google-photo-pages__item').find('.google-photo-pages__item__text').text();
            window.location.href = `${projectName}.html`;
        });
    
        back.on('click', () => {
            history.go(-1);
        });
    });
    
}