(function($) {
  $(document).ready(function() {
    $('.page-product .c-what-else .box').hover(
      function() {
        var $prevItem = $(this).prev();
        $prevItem.addClass('box--moved');
      },
      function() {
        var $prevItem = $(this).prev();
        $prevItem.removeClass('box--moved');
      }
    );
  });
})(jQuery);
