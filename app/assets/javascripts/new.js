$(document).on('turbolinks:load', function() {
  $('#first_name').change(function(){
    document.cookie = 'first_name=' + $("#first_name").val();
  });

  $('#last_name').change(function(){
    document.cookie = 'last_name=' + $("#last_name").val();
  });

  $('#email').change(function(){
    document.cookie = 'email=' + $("#email").val();
  });

  $('#height_feet').change(function(){
    document.cookie = 'height_feet=' + $("#height_feet").val();
  });

  $('#height_inches').change(function(){
    document.cookie = 'height_inches=' + $("#height_inches").val();
  });

  $('#age').change(function(){
    document.cookie = 'age=' + $("#age").val();
  });

  $('#weight').change(function(){
    document.cookie = 'weight=' + $("#weight").val();
  });

  $('#favorite_color_form').change(function(){
    document.cookie = 'favorite_color=' + $("input[name='color']:checked").val();
  });
});
