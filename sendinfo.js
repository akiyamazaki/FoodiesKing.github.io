
document.getElementById('contactform').addEventListener('submit', function(event) {
    event.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;

  if (name.value == "" || email.value == "" || phone.value == "") {
    alert("Ensure you input a value in both fields!");
  } else {
    // perform operation with form input
    alert("This form has been successfully submitted!");
    console.log(
      `This form has a name of ${name.value} and email of ${email.value} and phone of ${phone.value} and message of ${message.value}`
    );

  }
});