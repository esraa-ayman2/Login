var signinEmailInput = document.getElementById("signinEmail");
var signinPassword = document.getElementById("signinPassword");
var incorrect = document.getElementById("incorrect");
var loginBtn = document.getElementById("login-btn");
var passwordIcon = document.getElementById("iconPass");

var personalData = JSON.parse(localStorage.getItem("personalData")) || [];
clear();
function login() {
  var email = signinEmailInput.value.trim();
  var password = signinPassword.value.trim();

  if (email === "" || password === "") {
    incorrect.classList.remove("d-none");
    return;
  }

  var foundUser = personalData.find(function (user) {
    return user.email === email && user.password === password;
  });

  if (foundUser) {
    localStorage.setItem("currentUser", JSON.stringify(foundUser));
    incorrect.classList.add("d-none");
    clear();
    window.location.href = "./html/home.html";
  } else {
    Swal.fire({
      icon: 'error',
      title: '<span style="font-size:20px; color:#e74c3c; font-weight:bold;">Incorrect Credentials</span>',
      html: '<span style="font-size:16px; color:#555;">The email or password you entered is incorrect. Please try again or reset your password.</span>',
      confirmButtonText: 'OK',
      confirmButtonColor: '#e74c3c',
      showClass: {
        popup: `animate__animated animate__fadeInDown animate__faster`,
      },
      hideClass: {
        popup: `animate__animated animate__fadeOutUp animate__faster`,
      },
    });

    incorrect.classList.add("d-none");
  }
}

function clear() {
  signinEmailInput.value = "";
  signinPassword.value = "";
}

//  toggle password visibility
passwordIcon.addEventListener("click", function () {
  if (signinPassword.type === "password") {
    signinPassword.type = "text";
    passwordIcon.classList.remove("fa-eye-slash");
    passwordIcon.classList.add("fa-eye");
  } else {
    signinPassword.type = "password";
    passwordIcon.classList.remove("fa-eye");
    passwordIcon.classList.add("fa-eye-slash");
  }
});
