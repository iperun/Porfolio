(function($) {

  $WIN = $(window);

  //Menu Navigation
  var menu = function() {

    var menuToggle = $('.header-menu-toggle'),
      menuNav = $('.header-nav'),
      closeButton = menuNav.find('.header-nav-close'),
      closeMenu = $('body');

    // open-close menu by clicking on the menu icon&hamburger
    menuToggle.on('click', function(e) {
      e.preventDefault();
      closeMenu.toggleClass('menu-open');
    });

    // close menu by clicking the close button
    closeButton.on('click', function(e) {
      e.preventDefault();
      menuToggle.trigger('click');
    });

    // close menu by clicking out of menu
    closeMenu.on('click', function(e) {
      if (!$(e.target).is('.header-nav, .header-nav-content, .header-menu-toggle, .header-menu-toggle span, .header-nav-list')) {
        closeMenu.removeClass('menu-open');
      }
    });

  };


  //Initialize
  (function init() {
    menu();
  })();
})(jQuery);
