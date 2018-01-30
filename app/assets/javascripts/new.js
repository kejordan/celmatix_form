$(document).on('turbolinks:load', function() {
  $('#first_name').change(function(){
    if ($("#first_name").val() !== "") {
      document.cookie = 'first_name=' + $("#first_name").val();
    }
  });

  $('#last_name').change(function(){
    if ($("#last_name").val() !== "") {
      document.cookie = 'last_name=' + $("#last_name").val();
    }
  });

  $('#email').change(function(){
    if ($("#email").val() !== "") {
      document.cookie = 'email=' + $("#email").val();
    }
  });

  $('#height_feet').change(function(){
    if ($("#height_feet").val() !== "") {
      document.cookie = 'height_feet=' + $("#height_feet").val();
    }
  });

  $('#height_inches').change(function(){
    if ($("#height_inches").val() !== "") {
      document.cookie = 'height_inches=' + $("#height_inches").val();
    }
  });

  $('#age_form').change(function(){
    if ($("input[name='age']:checked").val() !== "") {
      document.cookie = 'age=' + $("input[name='age']:checked").val();
    }
  });

  $('#weight').change(function(){
    if ($("#weight").val() !== "") {
      document.cookie = 'weight=' + $("#weight").val();
    }
  });

  $('#favorite_color_form').change(function(){
    if ($("#other").val() !== "") {
      document.cookie = 'favorite_color=' + $("#other").val();
    } else if ($("#favorite_color").val() !== "") {
      document.cookie = 'favorite_color=' + $("input[name='color']:checked").val();
    }
  });


  $("#name_next_button").unbind("click").click(function(){
      if ($("#first_name").val() === "" || $("#last_name").val() === "") {
        event.preventDefault();
        alert("Full name required");
      }
    });

  $("#email_next_button").unbind("click").click(function(){
      if ($("#email").val() === "" || !$("#email").val().includes('@') || !$("#email").val().includes('.')) {
        event.preventDefault();
        alert("Valid email required");
      }
    });

  $("#personal_details_next_button").unbind("click").click(function(){
    if ($("#height_feet").val() === "" || $("#height_inches").val() === "" || $("input[name='age']:checked").val() === "") {
      event.preventDefault();
      alert("All fields but weight required");
    } else if (isNaN($("#height_inches").val()) || isNaN($("#height_feet").val())) {
      event.preventDefault();
      alert("Height must be a number");
    }
  });
});
