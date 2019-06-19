(function($) {
  function subFixedMenu() {
    return (function() {
      $(window).scroll(function() {
        if ($(window).scrollTop() >= 90) {
          $('#new-sub-nav').addClass('new-sub-nav--fixed');
          $('.page').addClass('fixed-sub-nav');
        } else {
          $('#new-sub-nav').removeClass('new-sub-nav--fixed');
          $('.page').removeClass('fixed-sub-nav');
        }
      });
    })();
  }

  function init() {
    subFixedMenu();
  }

  $(document).ready(function() {
    init();
  });
})(jQuery);
