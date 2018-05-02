$(document).ready(function(){
  const api_path = '/api'

  $('#audit-form-next').click(function(e) {
    e.preventDefault();
    if(validateStep1()) {
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

  function validateStep1() {
    // This function deals with validation of the first step
    var valid = true;

    //to do: validation
    return valid; // return the valid status
  }

  $("#audit-form").submit(e => {
    e.preventDefault();
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
    //       $('#contactErrorAlert').removeClass('hidden')
    //       $('#sendForm').button('reset');
    //     }
    //     else if(returnval.status >= 200 && returnval.status < 300) {
    //       $('#audit-form').addClass('hidden')
    //       $('#form-title').addClass('hidden')
    //       $('#contactErrorAlert').addClass('hidden')
    //       $('#success-message').removeClass('hidden')
    //       $('#sendForm').button('reset');
    //     }
    //   },
    // })
  })

  function requireField(id) {
    $(`#${id}`).removeClass('hidden')
    $(`#${id}`).parent().removeClass('hidden')
    $(`#${id}`).prop('required', true)
  }

  function dismissField(id) {
    $(`#${id}`).addClass('hidden')
    $(`#${id}`).parent().addClass('hidden')
    $(`#${id}`).prop('required', false)
  }

  function getURLParam(name) {
    const queryParams = window.location.search.substring(1)
    const params = queryParams.split('&')
    const param = params.find(param => param.split('=')[0] === name)
    return param ? param.split('=')[1] : null
  }
})