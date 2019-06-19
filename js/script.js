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

  function dropdownMenu() {
    return (function() {
      var $items = $('.box-menu .item');
      $items.hover(function handler(evt) {
        evt.stopPropagation();
        var $el = $(this).find('.sub-nav');
        $el.toggleClass('open');
      });
    })();
  }

  function init() {
    fixedMenu();
    dropdownMenu();
  }

  $(document).ready(function() {
    init();
  });
})(jQuery);
