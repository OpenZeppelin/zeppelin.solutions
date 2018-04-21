$(document).ready(function(){
  const api_path = '/api'

  $("#audit-form").submit(e => {
    e.preventDefault()
    $('#sendForm').button('loading');
    $.ajax({
      type: "POST",
      dataType: "json",
      url: api_path + '/audit-request',
      contentType: 'application/json',
      data: (JSON.stringify({
        name: $('#name').val(),
        email: $('#email').val(),
        website: $('#website').val(),
        projectName: $('#projectName').val(),
        projectStatus: $('#projectStatus').val(),
        auditService: $('#auditService').val(),
        auditServiceOther: $('#auditServiceOther').val(),
        tokenSale: $('#tokenSale').val(),
        tokenSaleDate: $('#tokenSaleDate').val(),
        tokenSaleAmount: $('#tokenSaleAmount').val(),
        deliveryDate: $('#deliveryDate').val(),
        scLink: $('#scLink').val(),
        howDidYouKnowUs: $('#howDidYouKnowUs').val(),
        howDidYouKnowUsOther: $('#howDidYouKnowUsOther').val(),
        moreInfo: $('#moreInfo').val(),
        source: getURLParam('source') || 'website',
      })),

      complete(returnval) {
        if(returnval.status > 300) {
          $('#contactErrorAlert').removeClass('hidden')
          $('#sendForm').button('reset');
        }
        else if(returnval.status >= 200 && returnval.status < 300) {
          $('#audit-form').addClass('hidden')
          $('#form-title').addClass('hidden')
          $('#contactErrorAlert').addClass('hidden')
          $('#success-message').removeClass('hidden')
          $('#sendForm').button('reset');
        }
      },
    })
  })

  $('#projectStatus, #tokenSale, #auditService, #howDidYouKnowUs').change(e => {
    (e.target.value === '') ?
      $(e.target).addClass('select-placeholder') :
      $(e.target).removeClass('select-placeholder')
  })

  $('#auditService').change(e => {
    if(e.target.value === 'Other') requireField('auditServiceOther')
    else {
      $('#auditServiceOther').val('')
      dismissField('auditServiceOther')
    }
  })

  $('#howDidYouKnowUs').change(e => {
    const value = e.target.value;
    if(value === 'Conference' || value === 'Other' || value === 'Reference') {
      requireField('howDidYouKnowUsOther')
      if(value === 'Conference') $('#howDidYouKnowUsOther').attr('placeholder', 'Which one?')
      if(value === 'Reference') $('#howDidYouKnowUsOther').attr('placeholder', 'Who?')
      if(value === 'Other') $('#howDidYouKnowUsOther').attr('placeholder', 'Tell us more about how did you get to know us...')
    }
    else {
      $('#howDidYouKnowUsOther').val('')
      dismissField('howDidYouKnowUsOther')
    }
  })

  $('#tokenSale').change(e => {
    if(e.target.value.includes('Yes')) {
      requireField('tokenSaleDate')
      requireField('tokenSaleUnit')
      requireField('tokenSaleAmount')
      requireField('tokenSaleCurrency')
    } else {
      dismissField('tokenSaleDate')
      dismissField('tokenSaleUnit')
      dismissField('tokenSaleAmount')
      dismissField('tokenSaleCurrency')
    }
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