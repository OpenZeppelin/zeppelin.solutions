$( document ).ready(function(){
  $(".button-collapse").sideNav();
  $('.modal').modal();

  $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false, // Does not change width of dropdown to that of the activator
      hover: false, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: true, // Displays dropdown below the button
      alignment: 'left', // Displays dropdown with edge aligned to the left of button
      stopPropagation: false // Stops event propagation
    }
  );
  
  $('.sidenav-close').on( "click", function() {
	  $('.button-collapse').sideNav('hide');
	});
  
  
})