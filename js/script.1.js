(function($) {
  function subFixedMenu() {
    return (function() {
      $(window).scroll(function() {
        if ($(window).scrollTop() >= 77) {
          $('#new-sub-nav').addClass('new-sub-nav--fixed');
        } else {
          $('#new-sub-nav').removeClass('new-sub-nav--fixed');
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
    subFixedMenu();
    dropdownMenu();
  }

  $(document).ready(function() {
    init();
  });
})(jQuery);
