(function($) {
  function fixedMenu() {
    return (function() {
      $(window).scroll(function() {
        if ($(window).scrollTop() >= 5) {
          $('#new-nav').addClass('new-nav--fixed');
        } else {
          $('#new-nav').removeClass('new-nav--fixed');
        }
      });
    })();
  }

  function init() {
    fixedMenu();
  }

  $(document).ready(function() {
    init();
  });
})(jQuery);
