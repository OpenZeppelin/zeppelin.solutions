(function($) {
  function securityAudits() {
    var $btn = $('.request-audit-btn');
    var $closeBtn = $('.icon-close');

    function closeModalContainer(e) {
      var container = $('#security-audit-form .container');

      if (!container.is(e.target) && container.has(e.target).length === 0) {
        $('#security-audit-form').removeClass('active');
        $('body').removeClass('modal-open');
        $('.modal-sr').removeClass('active');
      }
    }

    function openModalContainer() {
      $('#security-audit-form').addClass('active');
      $('body').addClass('modal-open');
      $('.modal-sr').addClass('active');
    }

    return (function() {
      $closeBtn.click(function(e) {
        $('#security-audit-form').removeClass('active');
        $('body').removeClass('modal-open');
        $('.modal-sr').removeClass('active');
      });

      $btn.click(function(e) {
        e.preventDefault();
        openModalContainer();
      });

      // Click Outside
      $(document).mouseup(function(e) {
        closeModalContainer(e);
      });
    })();
  }

  function init() {
    securityAudits();
  }

  $(document).ready(function() {
    init();
  });
})(jQuery);
