import $ from 'jquery';

if (window.location.href.includes('http://localhost:4000/pages/google-photo/Statistic.html')) {
    $(function() {
        $('.main-section').on('click', '.main-section__block-project', (event) => {
            const projectName = $(event.currentTarget).closest('.main-section__block-project').find('.main-section__project-name').text();
            window.location.href = `pages/${projectName}.html`;
        });

        const arrow = $('.google-photo-statistic__header__arrow');
        arrow.on('click', () => {
            history.go(-1);
        });

        $(document).on('click', '.dropdown-toggle', function() {
            const dropdownMenu = $(this).next('.dropdown-menu');
            dropdownMenu.slideToggle(400);
            $(this).find('.arrow').toggleClass('arrow-up');
        });
    });
}
