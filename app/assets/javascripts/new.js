$(document).on('turbolinks:load', function() {
  $('#name').change(function(){
    document.cookie = 'name=' + $("#name").val();
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

  $('#favorite_color').change(function(){
    document.cookie = 'favorite_color=' + $("#favorite_color").val();
  });
});
