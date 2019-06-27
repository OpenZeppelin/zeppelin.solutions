(function($) {
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

  function mobileMenu() {
    return (function() {
      var $cont = $('.p-main-nav-mobile');
      var $icon = $('.p-main-nav-mobile .h-icon');
      $icon.click(function handler(evt) {
        $cont.toggleClass('open');
        $icon.toggleClass('open');
      });
    })();
  }

  function init() {
    var isMobile = window.matchMedia('only screen and (max-width: 900px)')
      .matches;

    if (isMobile) {
      mobileMenu();
    } else {
      dropdownMenu();
    }
  }

  $(document).ready(function() {
    init();
  });
})(jQuery);
