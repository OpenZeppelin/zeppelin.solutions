(function($) {
  function securityAudits() {
    var $btn = $('.request-audit-btn');
    var validForm = false;

    // Validators Map - Validates given an input type
    var validate = {
      email: (email) => /^.+@.+\..+$/.test(email),
      text: (t) => true,
    };

    function closeModalContainer(e) {
      var container = $('#security-audit-form .modal-sr');
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        setModal(false);
      }
    }

    function checkValues() {
      var values = $('.sr-form').serializeArray();
      validForm = !values.filter((i) => i.value === '');
      if (validForm) {
        var $submitBtn = $('.sr-form').find('.btn[type="submit"]');
        $submitBtn.attr('disabled', value);
      }
    }

    function validateForm() {
      var $form = $('.sr-form');
      $form.addClass('sr-form--validate');
    }

    function blurInput() {
      var $input = this;
      var $formField = $(this).parent();
      $formField.addClass('msr-form-field--touched');
      if (!$input.value) {
        addErrorInline($formField);
      } else if (!validate[$input.type]($input.value)) {
        addErrorInline($formField);
      } else {
        removeErrorInline($formField);
        // checkValues();
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

    function showSuccess() {
      $('.modal-sr .view-2').removeClass('hidden');
      $('.modal-sr').addClass('modal-sr--sm');
    }

    function modalFunc() {
      var $cont = $('#security-request .sr-form');
      var $aY = $('#action-yes');
      var $aN = $('#action-no');

      $aY.click(function() {
        $cont.find('.msr-form-path--yes').removeClass('hidden');
        $cont.find('.msr-form-path--no').addClass('hidden');
        $aN.removeClass('btn--active');
        $(this).addClass('btn--active');
        // clean the other path
      });

      $aN.click(function() {
        $cont.find('.msr-form-path--no').removeClass('hidden');
        $cont.find('.msr-form-path--yes').addClass('hidden');
        $aY.removeClass('btn--active');
        $(this).addClass('btn--active');
        // clean the other path
      });

      // Cheking changes on blur
      $('.sr-form .msr-form-field input').on('blur', blurInput);

      // Catch enter
      $('.sr-form .msr-form-field input').keydown(function(e) {
        var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
        if (key == 13) {
          e.preventDefault();
          var inputs = $(this)
            .closest('form')
            .find(':input:visible');
          inputs.eq(inputs.index(this) + 1).focus();
        }
      });

      // Submiting the form
      $('.sr-form').on('submit', function(e) {
        e.preventDefault();
        validateForm();
        var values = $(this).serializeArray();
        // console.log(values);
        // Send values
        $('.modal-sr .sub-container').remove();
        showSuccess();
      });
    }

    function openModalContainer() {
      // Loading functionality
      modalFunc();
      setModal();
    }

    function setModal(value = true) {
      if (!value) {
        $('#security-audit-form').removeClass('active');
        $('html').removeClass('overlay-visible');
        $('body .overlay').removeClass('overlay--active');
        $('.modal-sr').removeClass('active');
        return;
      }

      $('#security-audit-form').addClass('active');
      $('html').addClass('overlay-visible');
      $('body .overlay').addClass('overlay--active');
      $('.modal-sr').addClass('active');
    }

    return (function() {
      $('.close-action').click(function(e) {
        $('#security-audit-form').removeClass('active');
        $('html').removeClass('overlay-visible');
        $('body .overlay').removeClass('overlay--active');
        $('.modal-sr').removeClass('active');
      });

      $btn.click(function(e) {
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
