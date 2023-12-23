import $ from 'jquery';

$(function() {
    $('.main-section__block-project').on('click', (event) => {
        var projectName = $(event.currentTarget).closest('.main-section__block-project').find('.main-section__project-name').text();
        window.location.href = `pages/${projectName}.html`;
    });
});
