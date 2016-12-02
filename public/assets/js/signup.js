$(document).on('click', function(){

  

  $('#personal').click(function(){

    $('#signup_formB').fadeOut(700);
    $('#signup_formP').fadeIn(700);

});
  $('#business').click(function(){

    $('#signup_formP').fadeOut(700);
    $('#signup_formB').fadeIn(700);

  });
});