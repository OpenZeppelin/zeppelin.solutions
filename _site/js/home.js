$( document ).ready(function(){
  $(".button-collapse").sideNav({
    edge: 'right',
  });
  $('.modal').modal();

  $('.dropdown-button').dropdown({
    inDuration: 300,
    outDuration: 225,
    constrainWidth: false, // Does not change width of dropdown to that of the activator
    hover: false, // Activate on hover
    gutter: 0, // Spacing from edge
    belowOrigin: true, // Displays dropdown below the button
    alignment: 'right', // Displays dropdown with edge aligned to the left of button
    stopPropagation: false // Stops event propagation
    }
  );

  $('.sidenav-close').on( "click", function() {
	  $('.button-collapse').sideNav('hide');
	});

  $('#all-positions-btn').on( "click", function() {
	  $('.opening-btn').removeClass('active');
    $('#all-positions-btn').addClass('active');
    $('.opening-box').addClass('hidden');
    $('#all-positions-box').removeClass('hidden');
	});

  $('#engineering-btn').on( "click", function() {
	  $('.opening-btn').removeClass('active');
    $('#engineering-btn').addClass('active');
    $('.opening-box').addClass('hidden');
    $('#engineering-box').removeClass('hidden');
	});

  $('#operations-btn').on( "click", function() {
	  $('.opening-btn').removeClass('active');
    $('#operations-btn').addClass('active');
    $('.opening-box').addClass('hidden');
    $('#operations-box').removeClass('hidden');
	});

  $('#marketing-btn').on( "click", function() {
	  $('.opening-btn').removeClass('active');
    $('#marketing-btn').addClass('active');
    $('.opening-box').addClass('hidden');
    $('#marketing-box').removeClass('hidden');
	});

  $('#international-btn').on( "click", function() {
	  $('.opening-btn').removeClass('active');
    $('#international-btn').addClass('active');
    $('.opening-box').addClass('hidden');
    $('#international-box').removeClass('hidden');
	});
})
