(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.modal').modal();

    $("#signup").click(function(){
      var first_name = document.getElementById("first_name").value;
      var last_name = document.getElementById("last_name").value;
      var email = document.getElementById("email").value;

    $.post("http://localhost:3000/users.json",
     {
        first_name: first_name,
        last_name: last_name,
        email: email
    });
});



  }); // end of document ready
})(jQuery); // end of jQuery name space
