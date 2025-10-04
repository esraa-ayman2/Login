var signupName = document.getElementById("signupName");
var signupEmail = document.getElementById("signupEmail");
var signupPassword = document.getElementById("signupPassword");
var exist = document.getElementById("exist");
var incorrect = document.getElementById("incorrect");
var passwordIcon = document.getElementById("iconPass");


var personalData = JSON.parse(localStorage.getItem("personalData")) || [];
clear();
function signUp() {
  if (
    signupName.value !== "" &&
    signupEmail.value !== "" &&
    signupPassword.value !== ""
  ) {
    incorrect.classList.add("d-none");
    if (personalData != null) {
      for (var i = 0; i < personalData.length; i++) {
        if (personalData[i].email === signupEmail.value) {
          exist.textContent = "⚠️ Email already exists!";
          return;
        }
      }
    }
    if (validName() && validEmail() && validPassword()) {
      var data = {
        name: signupName.value,
        email: signupEmail.value,
        password: signupPassword.value,
      };

      personalData.push(data);
      localStorage.setItem("personalData", JSON.stringify(personalData));

Swal.fire({
  icon: 'success',
  title: '<span style="font-size:20px; color:#27ae60; font-weight:bold;">✅ Success</span>',
  html: '<span style="font-size:16px; color:#555;">Account created successfully!</span>',
  confirmButtonText: 'Great!',
  confirmButtonColor: '#27ae60',
  showClass: {
    popup: `
      animate__animated
      animate__fadeInDown
      animate__faster
    `,
  },
  hideClass: {
    popup: `
      animate__animated
      animate__fadeOutUp
      animate__faster
    `,
  },
});

   clear();
    }
  } else {
    incorrect.classList.remove("d-none");
  }
}

function clear() {
  signupName.value = "";
  signupEmail.value = "";
  signupPassword.value = "";
  var inputs = [signupEmail, signupName, signupPassword];
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].classList.remove("is-valid", "is-invalid");
  }
}

//  toggle password visibility
passwordIcon.addEventListener("click", function () {
  if (signupPassword.type === "password") {
    signupPassword.type = "text";
    passwordIcon.classList.remove("fa-eye-slash");
    passwordIcon.classList.add("fa-eye");
  } else {
    signupPassword.type = "password";
    passwordIcon.classList.remove("fa-eye");
    passwordIcon.classList.add("fa-eye-slash");
  }
});





// Check Vaildation
function validName() {
  var alertMsg = document.getElementById("alertMsg-Name");
  var regex = /^[A-Z][a-z]{2,20}$/;
  if (regex.test(signupName.value)) {
    signupName.classList.remove("is-invalid");
    signupName.classList.add("is-valid");
    alertMsg.classList.add("d-none");
    return true;
  } else {
    signupName.classList.remove("is-valid");
    signupName.classList.add("is-invalid");
    alertMsg.classList.remove("d-none");
    return false;
  }
}
function validEmail() {
  var alertMsg = document.getElementById("alertMsg-Email");
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (regex.test(signupEmail.value)) {
    signupEmail.classList.remove("is-invalid");
    signupEmail.classList.add("is-valid");
    alertMsg.classList.add("d-none");
    return true;
  } else {
    signupEmail.classList.remove("is-valid");
    signupEmail.classList.add("is-invalid");
    alertMsg.classList.remove("d-none");
    return false;
  }
}
function validPassword() {
  var alertMsg = document.getElementById("alertMsg-Pass");
  var regex = /^.{6,}$/;
  if (regex.test(signupPassword.value)) {
    signupPassword.classList.remove("is-invalid");
    signupPassword.classList.add("is-valid");
    alertMsg.classList.add("d-none");
    return true;
  } else {
    signupPassword.classList.remove("is-valid");
    signupPassword.classList.add("is-invalid");
    alertMsg.classList.remove("d-none");
    return false;
  }
}
