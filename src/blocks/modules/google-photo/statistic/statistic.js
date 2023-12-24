import $ from 'jquery';
if (window.location.href.includes('http://localhost:4000/pages/Statistic.html')) {
    $(function() {
        $('.main-section__block-project').on('click', (event) => {
            var projectName = $(event.currentTarget).closest('.main-section__block-project').find('.main-section__project-name').text();
            window.location.href = `pages/${projectName}.html`;
        });
    });

    var arrow = document.querySelector('.google-photo-statistic-header-arrow');
    arrow.addEventListener('click', function() {
        history.go(-1);
    });

    $(document).ready(function() {
        $('.dropdown-toggle').click(function() {
            var dropdownMenu = $(this).next('.dropdown-menu');
            dropdownMenu.slideToggle(400);
            $(this).find('.arrow').toggleClass('arrow-up');
        });
    });
}   