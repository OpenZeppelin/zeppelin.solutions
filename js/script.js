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

  function init() {
    dropdownMenu();
  }

  $(document).ready(function() {
    init();
  });
})(jQuery);
