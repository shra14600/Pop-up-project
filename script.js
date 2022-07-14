$(document).ready(function () {
  var toggle = true;
  $(".clicks").on("click", function () {
    if (toggle) {
      $("#box").addClass("show");
      toggle = false;
    } else {
      $("#box").removeClass("show");
      toggle = true;
    }
  });
  $(".cross").on("click", function () {
    $("#box").removeClass("show");
  });

  $("#usernamevalidation").hide();
  $("#emailvalidation").hide();
  var Error = true;
  var email_error = true;

  $("#username").keyup(function () {
    username_validation();
  });
  function username_validation() {
    var username_val = $("#username").val();
    if (username_val.length == "") {
      $("#usernamevalidation").show();
      $("#usernamevalidation").html("Username cannot be empty");
      $("#usernamevalidation").css("color", "red");
      Error = true;
      return true;
    }
    else if (username_val.length < 3 || username_val.length > 10) {
      $("#usernamevalidation").show();
      $("#usernamevalidation").html("Invalid Username");
      $("#usernamevalidation").css("color", "red");
      Error = true;
      return true;
    } else {
      $("#usernamevalidation").hide();
      Error=false;
    }
  }

  $("#email").keyup(function () {
    email_validation();
  });
  function email_validation() {
    var emailregex = /^([\-\.0-9a-zA-Z]+)@([\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    var email_val = $("#email").val();
    if(email_val.length==""){
        $("#emailvalidation").show();
      $("#emailvalidation").html("Email cannot be empty");
      $("#emailvalidation").css("color", "red");
      email_error = true;
      return true;
    } 
    else if(!emailregex.test(email_val)) {
      $("#emailvalidation").show();
      $("#emailvalidation").html("Invalid Email");
      $("#emailvalidation").css("color", "red");
      email_error = true;
      return true;
    } else {
        $("#emailvalidation").hide();
        email_error=false;
    }
  }

  $(".submit-button").click(function () {
    username_validation();
    email_validation();
    if (Error == true || email_error == true) {
      return false;
    } else {
      $("#box").removeClass("show");
    }
  });
});
