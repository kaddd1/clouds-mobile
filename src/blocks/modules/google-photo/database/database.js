import $ from 'jquery';

if (window.location.href.includes('http://localhost:4000/pages/google-photo/Database.html')) {

    const arrow = $('.google-photo-database__header__arrow');
    arrow.on('click', () => {
        history.go(-1);
    });

    $(function() {
        const dropDownMenu = $('.dropdown-menu');
        const innerDropDownMenu = $('.inner-dropdown-menu');
    
        dropDownMenu.hide();
        innerDropDownMenu.hide();
    

        $(document).on('click', '.dropdown-toggle', function() {
            const currentDropDownMenu = $(this).parent().find(dropDownMenu);
            const currentArrow = $(this).find('.arrow');
            const currentInnerDropDownMenu = $(this).closest('.google-photo-database-list').find(innerDropDownMenu);
            const currentInnerArrow = $(this).closest('.google-photo-database-list').find('.inner .arrow');

            if (currentDropDownMenu.css('display') !== 'none') {
                currentInnerDropDownMenu.slideUp();
                currentInnerArrow.removeClass('arrow-up');
            }
            
            currentDropDownMenu.finish().slideToggle(400);
            currentArrow.toggleClass('arrow-up');
        });
        
        $(document).on('click', '.inner-dropdown-toggle', function() {
            const currentInnerDropDownMenu = $(this).parent().find('.inner-dropdown-menu');
            const currentArrow = $(this).find('.arrow');
            
            currentInnerDropDownMenu.stop().slideToggle(400);
            currentArrow.toggleClass('arrow-up');   
        });
    });
    
}
