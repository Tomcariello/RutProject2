$(document).on('click', function(){

  

  $('#personal').click(function(){

    $('#signup_formB').fadeOut(2000);
    $('#signup_formP').fadeIn(2000);

});
  $('#business').click(function(){

    $('#signup_formP').fadeOut(2000);
    $('#signup_formB').fadeIn(2000);

  });
});