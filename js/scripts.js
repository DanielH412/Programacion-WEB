jQuery('document').ready(function($){

	var menuBtn = $('.menu-icon'),
        menu = $('.navigation ul');

        menuBtn.click(function() {

        	if (menu.hasClass('show')) {

        		menu.removeClass('show');

        		} else{
        			menu.hasClass('show');
        		}
        	

        	menu.addClass('show');
        });
});



