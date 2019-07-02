(function($) {
  function securityAudits() {
    var $btn = $('.request-audit-btn');
    var $closeBtn = $('.icon-close');

    function closeModalContainer(e) {
      var container = $('#security-audit-form .container');

      if (!container.is(e.target) && container.has(e.target).length === 0) {
        $('#security-audit-form').removeClass('active');
        $('body').removeClass('overlay');
        $('.modal-sr').removeClass('active');
      }
    }

    function modalFunc() {
      var $cont = $('#security-request');
      var $aY = $('#action-yes');
      var $aN = $('#action-no');

      $aY.click(function() {
        $cont.find('.msr-form-path--yes').removeClass('hidden');
        $cont.find('.msr-form-path--no').addClass('hidden');
        $aN.removeClass('btn--active');
        $(this).addClass('btn--active');
      });

      $aN.click(function() {
        $cont.find('.msr-form-path--no').removeClass('hidden');
        $cont.find('.msr-form-path--yes').addClass('hidden');
        $aY.removeClass('btn--active');
        $(this).addClass('btn--active');
      });
    }

    function openModalContainer() {
      $('#security-audit-form').addClass('active');
      $('body').addClass('overlay');
      $('.modal-sr').addClass('active');
      modalFunc();
    }

    return (function() {
      openModalContainer();
      $closeBtn.click(function(e) {
        $('#security-audit-form').removeClass('active');
        $('body').removeClass('overlay');
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
