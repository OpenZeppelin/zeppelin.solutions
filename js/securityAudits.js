(function($) {
  function securityAudits() {
    var $btn = $('.request-audit-btn');
    var $closeBtn = $('.icon-close');

    // Validates given an input type
    var validate = {
      email: (email) => /^.+@.+\..+$/.test(email),
      text: (t) => true,
    };

    function closeModalContainer(e) {
      var container = $('#security-audit-form .container');

      if (!container.is(e.target) && container.has(e.target).length === 0) {
        $('#security-audit-form').removeClass('active');
        $('body').removeClass('overlay');
        $('.modal-sr').removeClass('active');
      }
    }

    function toggleSubmit(value) {
      var $submitBtn = $('.sr-form').find('.btn[type="submit"]');
      $submitBtn.setAttribute('disabled', value);
    }

    function checkValues(values) {
      // var invalidForm = values.filter((i) => i.value === '');
      // if (invalidForm) {
      //   updateState('canSubmit', false);
      //   toggleSubmit(false);
      //   addError(invalidForm);
      // } else {
      //   updateState('canSubmit', true);
      //   toggleSubmit(true);
      // }
    }

    function validateForm() {
      var $form = $('.sr-form');
      $form.addClass('sr-form--validate');
    }

    function blurInput(i, e) {
      var $input = this;
      var $formField = $(this).parent();
      console.log(this.type);
      $formField.addClass('msr-form-field--touched');
      if (!$input.value) {
        addErrorInline($formField);
      } else if (!validate[$input.type]($input.value)) {
        addErrorInline($formField);
      } else {
        removeErrorInline($formField);
      }
    }

    function addErrorInline(el) {
      if (!el.find('.error').length) {
        var $error = document.createElement('span');
        $error.setAttribute('class', 'error');
        $error.innerHTML = '<i class="material-icons error-icon">warning</i>';
        $(el).append($error);
      }
    }

    function removeErrorInline(el) {
      $(el)
        .find('.error')
        .remove();
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

      // Cheking changes on blur
      $('.sr-form')
        .find('.msr-form-field input')
        .on('blur', blurInput);

      $('.sr-form').on('submit', function(e) {
        e.preventDefault();
        validateForm();
        var values = $(this).serializeArray();
        console.log(values);
      });
    }

    function openModalContainer() {
      $('#security-audit-form').addClass('active');
      $('body').addClass('overlay');
      $('.modal-sr').addClass('active');
      modalFunc();
    }

    return (function() {
      $closeBtn.click(function(e) {
        $('#security-audit-form').removeClass('active');
        $('body').removeClass('overlay');
        $('.modal-sr').removeClass('active');
      });

      $btn.click(function(e) {
        e.preventDefault();
        e.stopPropagation();
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
