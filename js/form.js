$(document).ready(function(){
  const api_path = '/api'

  $('#audit-form-next').click(function(e) {
    e.preventDefault();
    if(validateIfEmpty(['#name', '#email', '#projectName', '#website', '#projectStatus', '#howDidYouKnowUs', '#auditService'])) {
      $('#step1').addClass('hidden');
      $('#step2').removeClass('hidden');
      if($('#auditService').val() && $('#auditService').val() == 'Token sale') {
        $('#token-step').removeClass('hidden');
      } else {
        $('#audit-step').removeClass('hidden');
      }
    }
  });

  $('#backToStep1').click(function(e) {
    e.preventDefault();
    $('#step2').addClass('hidden');
    $('#token-step').addClass('hidden');
    $('#audit-step').addClass('hidden');
    $('#step1').removeClass('hidden');
  });

  function validateIfEmpty(validations) {
    var valid = true;
    for (var key in validations) {
      if (!$(validations[key]).val() || $(validations[key]).val() == '' || $(validations[key]).val() == null) {
        $(validations[key]).addClass('invalid');
        valid = false;
      }
    }

    if (valid == false) {
      Materialize.toast('Please complete all fields', 4000);
    }
    return valid;
  }

  $("#audit-form").submit(e => {
    e.preventDefault();
    var validation = '';

    if ($('#auditService').val() && $('#auditService').val() == 'Token sale') {
      validation = validateIfEmpty(['#describeProject', '#howLong', '#tokenPartners', '#tokenIssue', '#specialNeeds']);
    } else {
      validation = validateIfEmpty(['#describeProject', '#howLong', '#sourceCodeLink', '#systemDocumentation', '#specialNeeds']);
    }
    if (validation) {
      $('#sendForm').button('loading');
    // $.ajax({
    //   type: "POST",
    //   dataType: "json",
    //   url: api_path + '/audit-request',
    //   contentType: 'application/json',
    //   data: (JSON.stringify({
    //     name: $('#name').val(),
    //     email: $('#email').val(),
    //     website: $('#website').val(),
    //     projectName: $('#projectName').val(),
    //     projectStatus: $('#projectStatus').val(),
    //     auditService: $('#auditService').val(),
    //     auditServiceOther: $('#auditServiceOther').val(),
    //     tokenSale: $('#tokenSale').val(),
    //     tokenSaleDate: $('#tokenSaleDate').val(),
    //     tokenSaleAmount: $('#tokenSaleAmount').val(),
    //     deliveryDate: $('#deliveryDate').val(),
    //     scLink: $('#scLink').val(),
    //     howDidYouKnowUs: $('#howDidYouKnowUs').val(),
    //     howDidYouKnowUsOther: $('#howDidYouKnowUsOther').val(),
    //     moreInfo: $('#moreInfo').val(),
    //     source: getURLParam('source') || 'website',
    //   })),

    //   complete(returnval) {
    //     if(returnval.status > 300) {
    //       $('#audit-form-error').removeClass('hidden')
    //       $('#audit-form-success').addClass('hidden')
    //       $('#sendForm').button('reset');
    //     }
    //     else if(returnval.status >= 200 && returnval.status < 300) {
    //       $('#audit-form').addClass('hidden')
    //       $('#audit-form-error').addClass('hidden')
    //       $('#audit-form-success').removeClass('hidden')
    //       $('#sendForm').button('reset');
    //     }
    //   },
    // })
    }
  })
})