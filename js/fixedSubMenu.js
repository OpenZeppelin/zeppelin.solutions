(function($) {
  function subFixedMenu() {
    return (function() {
      $(window).scroll(function(evt) {
        evt.preventDefault();
        if ($(window).scrollTop() >= 69) {
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
    var isMobile = window.matchMedia('only screen and (max-width: 900px)')
      .matches;

    if (!isMobile) {
      subFixedMenu();
    }
  }

  $(document).ready(function() {
    init();

    // document.querySelector('#new-sub-nav').scrollIntoView({
    //   behavior: 'smooth',
    // });
  });
})(jQuery);
