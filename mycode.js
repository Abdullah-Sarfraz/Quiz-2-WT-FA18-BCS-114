$(function () {
  $("#myForm").submit(handleFormSubmit);
});

function handleFormSubmit(e) {
  console.log("FORM");
  var user_name = $("#name").val();
  var passWord = $("#password").val();
  var conf_passWord = $("#confirm_password").val();
  var decision = true;
  $("#name").removeClass("FORM_ERROR");
  $("#password").removeClass("FORM_ERROR");
  $("#confirm_password").removeClass("FORM_ERROR");
  if (user_name.length < 5) {
    alert("Name must be of 5 digits or more");
    decision = false;
    $("#name").addClass("FORM_ERROR");
  }
  if (passWord.length < 8) {
    alert("Password must be of 8 characters or more");
    decision = false;
    $("#password").addClass("FORM_ERROR");
  }
  if (conf_passWord != passWord || conf_passWord.length < 8) {
    alert("Password doesn't match");
    decision = false;
    $("#confirm_password").addClass("FORM_ERROR");
  }
  if (decision == false) {
    e.preventDefault();
  } else {
    alert("Form is Submitted");
  }
}
